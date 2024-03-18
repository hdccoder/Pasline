import React from 'react';
import { styled } from '@mui/system'; // Import styled from @mui/system
import { Paper } from '@mui/material';

const VideoContainer = styled('div')({
  width: '100%', // Set width to 100% of its container
  height: 'auto', // Allow the height to adjust based on content
  overflow: 'hidden',
  aspectRatio: '16 / 9', // Maintain a 16:9 aspect ratio
  marginTop: '-370',
});

const Video = styled('video')({
  width: '100%',
  height: '100%', // Make video fill its container
  objectFit: 'cover', // Ensure the video covers the container
});

const Media = () => {
  return (
    <Paper elevation={3}>
      <VideoContainer>
        <Video controls>
          <source src="public/media/AdobeStock_666891958_Video_HD_Preview.mov" type="video/quicktime" />
        </Video>
      </VideoContainer>
    </Paper>
  );
};

export default Media;