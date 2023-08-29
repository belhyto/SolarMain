
import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import shelter1 from "../../../../public/assets/shelter1.jpeg"
import shelter2  from "../../../../public/assets/shelter2.jpg"
import shelter3 from "../../../../public/assets/shelter3.png"
type Props = {}

const Carports = (props: Props) => {
  const images1=[shelter1.src,shelter2.src,shelter3.src]
  const detail1='The flexible rugged, ultralight weight SEDI PV modules allows architects, engineers and designers build lighter, more aesthetic and much more economical metal frames and structures to mount these solar panels on, to provide not only shelter but also valuable clean energy. SEDI Modules are installed on bus shelters, carports and even display boards providing backlit display for night time information.'

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
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Carports, Shelters & Displays </p>
        <CardWithCarousel direction='left' images={images1} details={detail1}/>
    </Stack>
    </div>
  )
}

export default Carports