import { AppBar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ auth, logout }) => {
    // const token = window.localStorage.getItem('token')

    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white', height: "10rem" }}>
         <Toolbar>
         <Button sx={{ display: 'flex', flexDirection: 'column' }}>  
            <Box
            onClick={() => { navigate("/") }}
            component="img"
            sx={{
            height: "58rem",
            width: "60rem",
            paddingTop: "50px",
            marginLeft: "-240px", 
            marginTop: "-40px",
            }}
            alt="pic of a record"
            src="/public/assets/PLOGO5.png"

         />
        </Button>
        <Tooltip title={"Home"}>
                <IconButton
                    color="inherit"
                    aria-label={"Home"}
                    onClick={() => navigate("/")}
                    sx={{ marginRight: 10, marginBottom: -8, marginLeft: 45, color: '#0319bd' }}
                >
                    <Typography variant="h4">HOME</Typography>
                </IconButton>
            </Tooltip>

            <Tooltip title={"About Us"}>
                <IconButton
                    color="inherit"
                    aria-label={"About Us"}
                    onClick={() => navigate("/about")}
                    sx={{ marginRight: 10, marginBottom: -8, marginLeft: -8, color: '#0319bd' }}
                >
                    <Typography variant="h4">ABOUT US</Typography>
                </IconButton>
            </Tooltip>

            <Tooltip title={"Our Services"}>
                <IconButton
                    color="inherit"
                    aria-label={"Our Services"}
                    onClick={() => navigate("/services")}
                    sx={{  marginBottom: -8, marginLeft: -8, color: '#0319bd' }}
                >
                    <Typography variant="h4">OUR SERVICES</Typography>
                </IconButton>
            </Tooltip>
            </Toolbar>
            
        </AppBar>
    )
}

export default Header;
