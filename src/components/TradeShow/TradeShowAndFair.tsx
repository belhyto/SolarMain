import { Stack } from "@mui/material";
import React from "react";
import TradeCards from "./TradeCards";
import img1 from "../../../public/assets/trade1.jpeg" 
import img2 from "../../../public/assets/trade2.jpg" 
import img3 from "../../../public/assets/trade3.jpg" 

type Props = {};

const TradeShowAndFair = (props: Props) => {
    const image1 = '/assets/trade1.jpeg'
    const image2 = '/assets/trade2.jpg'
    const image3 = '/assets/trade3.jpg'
  return (
    <Stack
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      padding={"36px 16px"}
      sx={{ background: "#5F709E", minHeight: "100vh" }} // Solid background color
    >
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>TRADE SHOW AND FAIR</p>
      <Stack
        sx={{
          background: "rgba(153, 204, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
         
        }}
        direction={{ md: 'row', sm: 'column', xs: 'column' }}
        justifyContent={{ md: 'space-evenly', sm: 'center', xs: 'center' }}
        alignItems={'center'}
        padding={{ md: "32px", sm: "24px 12px", xs: "24px 12px" }}
        width={"100%"}
        spacing={5}
      >
        <TradeCards img={img1.src} />
        <TradeCards img={img2.src} />
        <TradeCards img={img3.src} />
      </Stack>
    </Stack>
  );
};

export default TradeShowAndFair;
