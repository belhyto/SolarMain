import { Grid, Card, CardMedia, Typography, Box, Stack, Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

import award from "../../../public/assets/sediaward1.png";

type Props = {};

const ChallengeAward = (props: Props) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Stack direction={'column'} paddingTop={0}>
      <Card
        sx={{
         
          backgroundImage: 'radial-gradient(58.59% 101.47% at 103.01% -1.99%, #6878A3 0%, rgba(255, 255, 255, 0.00) 100%)', // Set the radial gradient as background image
          padding: '50px 1px',
        }}
      >
        <Stack direction={{ lg: 'row', md: 'row', sm: 'column' }}>
          <Box
            sx={{
              width: { xs: '100%', sm: '70%' }, // Adjust width for different screen sizes
              margin: '0 auto',
              display: "flex", 
              justifyContent: "center",
              alignItems: "center",
              // Add the scaling effect to the container
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)', // Scale the container on hover
              },
            }}
          >
            <Image
              width={400}
              height={250}
              src={award.src}
              alt="Award"
              style={{
                
                borderRadius: '4px',
              }}
            />
          </Box>
          <Stack direction={'column'} sx={{ width: "100%", paddingTop: { md: 16, sm: 2, xs: 2 } }}>
            <Box sx={{ padding: '30px', textAlign: 'center', marginTop: '20px' }}>
              {/* Adjust the fontSize and color for the title */}
              <p className="meet-sedi" style={{fontFamily: 'Conthrax Sb'}}>2022 GreenTech Challenge Award</p>
            </Box>
            {showDetails && (
              <>
              
                <p className='text-xl' style={{textAlign: "justify",   wordBreak: 'break-word'}}>
The GreenTech Challenge European 2022 trophy for the most innovate, green and environmentally useful technology was awarded to SEDI Solar Distributor in Greece, AA Systems for developing an innovative completely Off-Grid Early Warning System for Forest Fires using the reliability of the SEDI Jacket and Thermal sensing cameras combined with our partners in-house developed rugged alarm panel, sensor systems and transmitters. The complete system is labled as “Ananias” in Greek
                </p>  
                <p className='text-xl'style={{textAlign: "justify"}}>
                Forest fires cause immeasurable losses each year around the world economically, environmentally and last, but by no means the least, the deaths of humans, livestock and wildlife.
                </p>
                <p className='text-xl'style={{textAlign: "justify"}}>The early warning system for Forest Fires works completely off grid, continuously sensing the ambient temperature levels viewed through the thermal cameras and raises alarm points as temperatures rise from Green (safe) to Amber (warning) to Red (danger) levels, sending data, alarm and video back to control room through 4G or radios enabling early response before a fire starts or gets out of hand. </p>
                <p className='text-xl'style={{textAlign: "justify"}}>
                The SEDI Solar Jacket reliably provides 24/7/365 power to all the active components of the “Ananias” Forest-fire Early Warning System, with very little maintenance demands.
                </p>
               
              </>
            )}

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={handleButtonClick}
                sx={{
                  width: 160,
                  fontSize: "18px",
                  textAlign: 'center',  
                  fontWeight: 700,
                  boxShadow:"80px",
                  color: "#fff", // Change the color of the button text
                  "&.MuiButton-root": {
                    background: 'linear-gradient(197deg, #297FFF 0%, #97ADFD 100%)', // Set the background gradient
                    borderRadius: '20px',
                    '&:hover': {
                      color: '#2B2B2B' // Change to desired hover color
                    },
                    '&:focus': {
                      color: '#fffff' // Change to desired focus color
                    }
                  }
                }}
              >
                {showDetails ? 'Hide Details' : 'Show Details'}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
}

export default ChallengeAward;
