import { Card } from "@mui/material";
import React from "react";

type Props = {
  img: string;
};

const CSlides = ({img}: Props) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxHeight: { md: "340px", sm: "auto" },
        background: "rgba(151, 173, 253,0.2)",
        padding: "16px 16px",
      }}
    >
      <img style={{ width: "100%", height: "300px" ,objectFit: 'contain'}} src={img}  alt="Image" />
    </Card>
  );
};

export default CSlides;
