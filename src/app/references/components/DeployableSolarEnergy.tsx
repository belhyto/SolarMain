
import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import solar1 from "../../../../public/assets/solar1.jpg"
import solar2  from "../../../../public/assets/solar2.png"
import solar3 from "../../../../public/assets/solar3.png"
type Props = {}

const DeployableSolarEnergy = (props: Props) => {
  const images1=[solar1.src,solar2.src,solar3.src]
  const detail1='Due to SEDI Solar PV unique properties of ultra-light weight, ultra-thin, flexible, ruggedness and ability to collect energy even from reflected and diffused sunlight, SEDI has developed some unique, rapidly deployable clean, reliable and safe energy solutions to be adopted in both rural and urban situations, including military applications, construction sites, telecommunication sites, disaster relief and temporary power for any purpose. SEDI has developed a range of unique solutions such as the SEDI Solar Trailer, the SEDI Rural Solar Wagon and the SEDI Solar Energy Container'

  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 16px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Rapidly deployable solar energy </p>
        <CardWithCarousel direction='right' images={images1} details={detail1}/>
    </Stack>
  )
}

export default DeployableSolarEnergy