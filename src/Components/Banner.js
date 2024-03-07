import React from 'react';
import { Container, Box, Button, Typography } from '@mui/material';

const Banner = () => {
  const handleButtonClick = () => {
    console.log('About Us button clicked!');
    // Add any additional logic you want to perform on button click
  };

  return (
    <Container maxWidth="xl" sx={{ mt: "-1rem", mb: 4, marginLeft: -35, paddingLeft: 0, position: 'relative' }}>
      <Box
        component="img"
        sx={{
          width: '146%', // Resize image to 100% of the container width
          height: '400px', // Maintain aspect ratio
          zIndex: 2,
        }}
        alt="COME SPIN WITH US"
        src="/public/assets/HPBanner.jpg"
      />
      <Button
        onClick={handleButtonClick}
        sx={{
          position: 'absolute',
          top: '200px', // Adjust the distance from the top
          right: '-330px', // Adjust the distance from the right
          backgroundColor: 'transparent',
          color: '#fff',
        }}
      >
       <Typography variant="h4">About Us</Typography>
      </Button>
    </Container>
  );
};

export default Banner;