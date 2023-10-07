
import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import oil1 from "../../../../public/assets/oil1.jpg"
import oil2  from "../../../../public/assets/oil2.png"

type Props = {}

const OilNGas = (props: Props) => {
  const images1=[oil1.src,oil2.src]
  const detail1='Remote oil field sensors and transmission units are crucial to smooth operation in the O&G industry. SEDI Solar Jackets provides uninterrupted energy with a high level of reliability and comfort to the operators who can count on thousands of hours of maintenance free operation and of course, just as valuable savings in money.'

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
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Oil & Gas Industry </p>
        <CardWithCarousel direction='left' images={images1} details={detail1}/>
    </Stack>
    </div>
  )
}

export default OilNGas