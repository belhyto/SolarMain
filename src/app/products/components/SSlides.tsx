import { Card, Typography } from '@mui/material';
import React from 'react';

type Props = {
  img: string;
  label: string; // Add a label prop
};

const SSlides = ({ img, label }: Props) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxHeight: { md: "340px", sm: "auto" },
        background: "#97ADFD",
        padding: "16px 16px",
      }}
    >
      <img style={{ width: "100%", height: "250px", objectFit: 'contain'}} src={img} alt="Image" />
      
      {/* Add a label below the image */}
      <Typography variant="subtitle1" color="textPrimary" align="center" mt={1}>
        {label}
      </Typography>
    </Card>
  );
};

export default SSlides;
