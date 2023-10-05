// src/components/ComingSoon.js
import React from 'react';
import { Container, Typography ,Grid} from '@mui/material';
import soon from "../assets/soon.png"

const ComingSoon = () => {
  const containerStyle = {
    color:"white",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

 

  return (
   
    <Grid container spacing={2}>
    <Grid item xs={12} sm={3}></Grid>
    <Grid item xs={12} sm={9}>
    <Container style={containerStyle} >
      <img
        src={soon}
        alt="Coming Soon Logo"
        style={{ width: '50%', marginBottom: '20px' }} 
      />
      <Typography variant="h3" gutterBottom>
        Coming Soon
      </Typography> 
    </Container>
    </Grid>
    </Grid>
  );
};

export default ComingSoon;
