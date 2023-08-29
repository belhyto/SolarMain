import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import sedi1 from "../../../../public/assets/seditrailer.jpg"
import sedi2  from "../../../../public/assets/sedisolar2.png"
import sedi3  from "../../../../public/assets/sediaolar3.png"
type Props = {}

const SolarPoweredTrailer = (props: Props) => {
    const images1 = [sedi1.src,sedi2.src,sedi3.src]
    const detail1 = 'Our ultra-light and ultra-slim PV modules are ideal to be installed on purpose-built trailers which will house the battery, inverter, and even standby generator in a solid theft-resistant box. The PV modules can be either mounted on the surface flush and folded out further if needed or can slide out from lockable entry flaps on the sides. A trailer has adequate space and rigidity to support a 4-meter telescopic mast for CCTV surveillance or radio transmission applications. Moreover, you can mount 4 x LED lights for site works and emergency lights at remote locations.Power generation: 3kW up to 15kW ,Outputs: 12/24/48VDC/220/240VAC ,Optional Hybrid Design: Diesel GenSet  with Standby Switchover'
    const images2 = ['']
    const detail2 = ''
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 16px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Solar Powered trailers</p>
        <CardWithCarousel direction='right' images={images1} details={detail1}/>
    </Stack>
  )
}

export default SolarPoweredTrailer