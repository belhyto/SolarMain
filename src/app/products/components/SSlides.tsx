import { Card } from '@mui/material';
import React from 'react'

type Props = {
    img:string;
}

const SSlides = ({img}: Props) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxHeight: { md: "340px", sm: "auto" },
        background: "#97ADFD",
        padding: "16px 16px",
      }}
    >
      <img style={{ width: "100%", height: "300px", objectFit: 'contain'}} src={img}  alt="Image" />
    </Card>
  )
}

export default SSlides