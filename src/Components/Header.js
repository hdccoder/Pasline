import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Popover,
  MenuItem,
} from '@mui/material';
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
    <AppBar position="absolute" sx={{ backgroundColor: 'white', height: '10rem', }}>
      <Toolbar>
        <Button onClick={() => navigate('/')} color="inherit">
          <img
            src="/public/assets/PLOGO5.png"
            alt="pic of a record"
            style={{
              height: '58rem',
              width: '60rem',
              paddingTop: '50px',
              marginLeft: '-300px',
              marginTop: '-40px',
            }}
          />
        </Button>
        <Button
          onClick={() => navigate('/')}
          color="inherit"
          variant="text"
          sx={{ color: '#0319bd', marginLeft: '-10.7rem', marginBottom: '-80', }}
        >
          <Typography variant="h4">HOME</Typography>
        </Button>
        <Typography
          variant="h4"
          sx={{ color: '#0319bd', marginLeft: '2rem', marginBottom: '-80',}}
          onMouseEnter={handleFaqMenuOpen}
          onMouseLeave={handleFaqMenuClose}
        >
          ABOUT US
          <Popover
            open={Boolean(faqAnchorEl)}
            anchorEl={faqAnchorEl}
            onClose={handleFaqMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={handleFaqClick}>FAQ</MenuItem>
          </Popover>
        </Typography>
        <Typography
          variant="h4"
          sx={{ color: '#0319bd', marginLeft: '2rem', marginBottom: '-80', }}
          onMouseEnter={handleServicesMenuOpen}
          onMouseLeave={handleServicesMenuClose}
        >
          OUR SERVICES
          <Popover
            open={Boolean(servicesAnchorEl)}
            anchorEl={servicesAnchorEl}
            onClose={handleServicesMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleServiceClick('care-and-companionship')}>CARE & COMPANIONSHIP</MenuItem>
            <MenuItem onClick={() => handleServiceClick('memory-care')}>MEMORY CARE</MenuItem>
            <MenuItem onClick={() => handleServiceClick('hospital-to-home-care')}>HOSPITAL TO HOME CARE</MenuItem>
            <MenuItem onClick={() => handleServiceClick('disability')}>DISABILITY</MenuItem>
            <MenuItem onClick={() => handleServiceClick('specialized-care')}>SPECIALIZED CARE</MenuItem>
          </Popover>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
