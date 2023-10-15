
import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import vehic1 from "../../../../public/assets/power1.png"
import vehic2  from "../../../../public/assets/power2.png"
import vehic3 from "../../../../public/assets/power3.png"
type Props = {}

const VehiclePower = (props: Props) => {
  const images1=[vehic1.src,vehic2.src,vehic3.src]
  const detail1='SEDI PV Modules are ideal for vehicles such as cars and buses since they are light weight, slim and flexible and can be flush mounted on the roof. Such an installation offers very low wind resistance or drag while the vehicle is in motion. Further as SEDI Solar Modules are completely waterproof, they are perfectly suited for installation on even boats and off shore Oil rigs for reliable long life operation.'

  return (
    <Stack
    
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 1px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Vehicle Power </p>
        <CardWithCarousel direction='right' images={images1} details={detail1}/>
    </Stack>
  )
}

export default VehiclePower