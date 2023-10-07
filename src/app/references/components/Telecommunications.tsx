import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import tele1 from "../../../../public/assets/tele1.png"
import tele2 from "../../../../public/assets/tele2.png"
import tele3 from "../../../../public/assets/tele3.png"
import tele4 from "../../../../public/assets/tele4.png"
import tele5 from "../../../../public/assets/tele5.png"

type Props = {}

const Telecommunications = (props: Props) => {
  const images1 = [tele1.src, tele2.src, tele3.src, tele4.src, tele5.src]
  const detail1 = 'SEDI Jackets and Towers are used extensively in remote locations or locations where main grid power is expensive or impossible to install. Only SEDI technology and design can provide the high reliability, low maintenance guarantees that Telecom operators demand, since their equipment needs to be operational 24/7/365. SEDI Jackets and towers by virtue of their vertical alignment require very little cleaning and occupy negligible real estate.'

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
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}} >Telecommunications</p>
        <CardWithCarousel direction='left' images={images1} details={detail1} />
      </Stack>
    </div>
  )
}

export default Telecommunications;
