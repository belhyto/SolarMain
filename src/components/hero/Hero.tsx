/* eslint-disable @next/next/no-img-element */
"use client";
import { Box, Button, List, ListItem, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import "./hero.css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Box className="hero-container">
  <div className="overlay"></div>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        sx={{ width: { lg: "1400px", md: "900px" } }}
        className='hero'
      >
        <Stack
          justifyContent="center"
          spacing={3}
          sx={{ width: "100%", alignItems: 'center' }}
          className='banner-text'
        >
          <p className='meet-sedi' style={{  fontSize: '60px', textAlign: 'center',fontFamily: 'Conthrax Sb' }}>DURABLE</p>
          <p className='meet-sedi' style={{ fontSize: '60px', textAlign: 'center',fontFamily: 'Conthrax Sb' }}>RELIABLE</p>
          <p className='meet-sedi' style={{ fontSize: '60px', textAlign: 'center',fontFamily: 'Conthrax Sb' }}>POWERFUL</p>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              sx={{
                width: 160,
                fontSize: "18px",
                fontWeight: 700,
                "&.MuiButton-root": {
                  background: 'linear-gradient(197deg, #297FFF 0%, #97ADFD 100%)',
                  color: "#fff",
                  borderRadius: '20px',
                  '&:hover': {
                    color: '#2B2B2B' // Change to desired hover color
                  },
                  '&:focus': {  
                    color: '#7f95e5' // Change to desired focus color
                  }
                }
              }}
              className="custom-button"
            >
              <Link className='btn btn-blue btn-read' href="/technology">READ MORE</Link>
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Hero;
