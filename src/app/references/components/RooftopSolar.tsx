import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import roof1 from "../../../../public/assets/rooftop1.png"
import roof2 from "../../../../public/assets/rooftop2.png"
import roof3 from "../../../../public/assets/rooftop3.png"
import roof4 from "../../../../public/assets/rooftop4.jpg"
import roof5 from "../../../../public/assets/rooftop5.jpg"

type Props = {}

const RooftopSolar = (props: Props) => {
  const images1=[roof1.src,roof2.src,roof3.src,roof4.src,roof5.src]
  const detail1='SEDI Solar PV Modules are installed on a wide range of rooftops where conventional solar panels are either too heavy, cannot conform to the curves and shapes, do not get the correct angle of installation, are subject to stress of high wind speeds or damage easily due to hailstorms or sand storms. In some places SEDI PV modules are installed simply because they provide a much more aesthetic cladding over a roof and in most cases invisible from the ground.'

  return (
    <div
      style={{
        background: "linear-gradient(141deg, #FFFEEA 0%, #D9D9D9 100%)",
        width: "100%", // Ensure the container takes up full width
        padding: "36px 16px",
      }}
    >
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      maxWidth={1200}
    >
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Rooftop Solar</p>
      <CardWithCarousel direction='left' images={images1} details={detail1} />
    </Stack>
    </div>
  )
  
}

export default RooftopSolar;
