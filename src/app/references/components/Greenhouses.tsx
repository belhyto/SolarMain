import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import greenhouse from "../../../../public/assets/bahrgreenhouse.jpg"
import greenhouse1 from "../../../../public/assets/greenhouse2.jpeg"
import greenhouse2 from "../../../../public/assets/greenhouse2.jpg"
import greenhouse3 from "../../../../public/assets/bahrgreenhouse.jpg"
type Props = {}

const Greenhouses = (props: Props) => {
  const images1=[greenhouse.src,greenhouse1.src,greenhouse2.src,greenhouse3.src]
  const detail1='SEDI Solar PV Modules find easy application for greenhouses, especially in warmer climates since such structures are generally made of light weight material like GI pipes with transparent PVC sheets layered over. The lightweight and flexible SEDI PV modules can be easily riveted to the GI pipes without any significant structural load or stress, providing clean and in some cases, off-grid energy to power greenhouse fans, pumps and lights without blocking valuable sunlight. SEDI Solar PV technology helps reduce carbon footprint and even provide off grid living and sustenance by virtue of their ultra-light weight, flexibility, long life and low maintenance technology. SEDI collaborates with leading Eco-Homes developers to provide a easy to install, ready to ship homes especially for luxury eco-resorts in national parks and protected areas around the world. ' 

  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 1px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Greenhouses & Eco-Sustainable Houses</p>
        <CardWithCarousel direction='right' images={images1} details={detail1}/>
    </Stack>
  )
}

export default Greenhouses