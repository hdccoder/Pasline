import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [faqAnchorEl, setFaqAnchorEl] = useState(null);

  const handleServicesMenuOpen = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchorEl(null);
  };

  const handleFaqMenuOpen = (event) => {
    setFaqAnchorEl(event.currentTarget);
  };

  const handleFaqMenuClose = () => {
    setFaqAnchorEl(null);
  };

  const handleServiceClick = (service) => {
    navigate(`/services/${service}`);
    handleServicesMenuClose();
  };

  const handleFaqClick = () => {
    navigate('/faq');
    handleFaqMenuClose();
  };

  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'white', height: '10rem' }}>
      <Toolbar>
        <Button sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            onClick={() => navigate('/')}
            component="img"
            sx={{
              height: '58rem',
              width: '60rem',
              paddingTop: '50px',
              marginLeft: '-300px',
              marginTop: '-40px',
            }}
            alt="pic of a record"
            src="/public/assets/PLOGO5.png"
          />
        </Button>
        <Tooltip title="Home">
          <IconButton
            color="inherit"
            aria-label="Home"
            onClick={() => navigate('/')}
            sx={{ marginRight: 10, marginBottom: -8, marginLeft: -22, color: '#0319bd' }}
          >
            <Typography variant="h4">HOME</Typography>
          </IconButton>
        </Tooltip>
        <Tooltip title="About Us">
          <IconButton
            color="inherit"
            aria-label="About Us"
            onClick={handleFaqMenuOpen}
            sx={{ marginRight: 10, marginBottom: -8, marginLeft: -8, color: '#0319bd' }}
          >
            <Typography variant="h4">ABOUT US</Typography>
          </IconButton>
        </Tooltip>
        <Menu
          id="faq-menu"
          anchorEl={faqAnchorEl}
          open={Boolean(faqAnchorEl)}
          onClose={handleFaqMenuClose}
        >
          <MenuItem onClick={handleFaqClick}>FAQ</MenuItem>
        </Menu>
        <Box>
          <Tooltip title="Our Services">
            <IconButton
              color="inherit"
              aria-label="Our Services"
              onClick={handleServicesMenuOpen}
              sx={{ marginBottom: -8, marginLeft: -8, color: '#0319bd' }}
            >
              <Typography variant="h4">OUR SERVICES</Typography>
            </IconButton>
          </Tooltip>
          <Menu
            id="services-menu"
            anchorEl={servicesAnchorEl}
            open={Boolean(servicesAnchorEl)}
            onClose={handleServicesMenuClose}
          >
            <MenuItem onClick={() => handleServiceClick('care-and-companionship')}>CARE & COMPANIONSHIP</MenuItem>
            <MenuItem onClick={() => handleServiceClick('memory-care')}>MEMORY CARE</MenuItem>
            <MenuItem onClick={() => handleServiceClick('hospital-to-home-care')}>HOSPITAL TO HOME CARE</MenuItem>
            <MenuItem onClick={() => handleServiceClick('disability')}>DISABILITY</MenuItem>
            <MenuItem onClick={() => handleServiceClick('specialized-care')}>SPECIALIZED CARE</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;