import { Box, Card, CardContent, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  detail: string;
  img: string;
};

const HoverCard = ({ title, detail, img }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnterF = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveF = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleMouseEnterF}
      onMouseLeave={handleMouseLeaveF}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          width: 290, // Set a constant width for the card
          height: 350, // Set a constant height for the card
          transition: 'transform 0.5s',
          transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0)',
        
          padding: '16px 16px',
          borderRadius: '50px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <div className={`card-background ${isHovered ? 'active' : ''}`}></div>

          {isHovered ? (
            <Box
              sx={{
                transition: 'transform 0.2s',
                transform: 'rotateY(180deg)',
              }}
            >
              <Typography
                variant="h5"
                textAlign="center"
                gutterBottom
                sx={{textAlign: "justify", fontFamily: 'sans-serif', fontWeight: 'bold' }}
              >
                {title}
              </Typography>
              <p style={{ textAlign: "justify", fontSize: '12px' }}>{detail}</p>
            </Box>
          ) : (
            <>
              <img height={100} width={100} src={img} alt="Icon" />
              <Typography
                variant="h5"
                sx={{ paddingTop: '12px', fontFamily: 'sans-serif', fontWeight: 'bold' }}
                gutterBottom
              >
                {title}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default HoverCard;
