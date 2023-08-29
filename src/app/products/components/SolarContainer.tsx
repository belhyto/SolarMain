import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import Container1 from "../../../../public/assets/Container1.png"
import Container2  from "../../../../public/assets/Container2.png"
import Container3  from "../../../../public/assets/Container4.png"
type Props = {}

const SolarContainer = (props: Props) => {
    const images1=[Container1.src,Container2.src,Container3.src]
    const detail1='Fully self-contained Solar generated power with its own inverters and battery packs to provide off-grid power. The solar containers can fit in a regular 20ft or 40ft shipping container. Easy to transport and mobilize. Ideal for disaster relief, military, remote sites, critical infrastructure, farming, telecommunications, and water irrigation projects. A typical Container Solution can provide between 30KWh to 130KWh of power off-grid 24/7, sufficient to power a small village in Africa or Asia. It can be deployed and packed up within a couple of hours.'
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200} 
    padding={"36px 16px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Solar Containers </p>
        <CardWithCarousel direction='left' images={images1} details={detail1}/>
    </Stack>
  )
}

export default SolarContainer