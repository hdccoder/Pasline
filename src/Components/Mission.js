import React, { useState, useEffect } from 'react';
import { Container, Box, Typography,} from '@mui/material';



const Mission = () => {


 return(
<Container>
<Box
        component="img"
        sx={{
          marginTop: -10,
          width: '100%', // Resize image to 100% of the container width
          height: '750px', // Maintain aspect ratio
          zIndex: 2,
        }}
        alt="Women Giving Exceptional Care"
        src="/public/assets/Mission.png"
      />
</Container>
 )



};
export default Mission;