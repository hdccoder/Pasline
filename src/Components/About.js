import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Typography, Slide } from '@mui/material';

const SlideInText = ({ text, delay, color }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, delay);
  
      return () => clearTimeout(timeoutId);
    }, [delay]);
  
    return (
      <Slide direction="left" in={isVisible} timeout={500}>
        <Typography sx={{ color, mt: 3.3 }}>
          {text}
        </Typography>
      </Slide>
    );
  };



const About =  () => {
    
   
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
              height: '500px', // Maintain aspect ratio
              zIndex: 2,
            }}
            alt="Women Giving Exceptional Care"
            src="/public/assets/AboutPic.jpeg"
          />
          {/* <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '40px', right: '-470px' }}>
            <Typography variant="h4" color='#fff'>
              Welcome to
            </Typography>
            <Typography variant="h4" color='#fff'>
              Pasline Home Health Care Agency
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: ' 318px', right: '-458px' }}>
            <SlideInText color='#ffff' text="Compassionate care in the comfort of your home." delay={0} />
            <SlideInText color='#ffff' text="Highest quality care with utmost respect for privacy and dignity." delay={500} />
            <SlideInText color='#ffff' text="Exceptional care that helps individuals achieve their goals." delay={1000} />
          </Box>
          <Button
            onClick={handleButtonClick}
            sx={{
              position: 'absolute',
              top: '160px', // Adjust the distance from the top
              right: '-300px', // Adjust the distance from the right
              backgroundColor: '#fff',
              color: '#cd112a',
            }}
          >
            <Typography variant="h6">About Us</Typography>
          </Button>
          <Button
            onClick={handleButtonClick}
            sx={{
              position: 'absolute',
              top: '235px', // Adjust the distance from the top
              right: '-340px', // Adjust the distance from the right
              backgroundColor: '#fff',
              color: '#cd112a',
            }}
          >
            <Typography variant="h6">904-000-0000</Typography>
          </Button> */}
        </Container>
      );
    };

export default About;