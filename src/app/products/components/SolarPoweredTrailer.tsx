import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import sedi1 from "../../../../public/assets/seditrailer.jpg"
import sedi2  from "../../../../public/assets/sedisolar2.png"
import sedi3  from "../../../../public/assets/sediaolar3.png"
type Props = {}

const SolarPoweredTrailer = (props: Props) => {
    const images1 = [sedi1.src,sedi2.src,sedi3.src]
    const detail1 = 'The SEDI Solar trailers are built to customer specifications. The SEDI Box Trailer has adequate space and rigidity to support a 4-meter telescopic mast for CCTV surveillance or radio transmission applications. Alternatively, or additionally customer can request to mount 4 x LED lights for site works and emergency lights at remote locations. An optional Diesel Gen-set connected Hybrid SEDI Trailer is also available.'
    const images2 = ['']
    const detail3 = ''
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 16px"}
  >   
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>SEDI Solar Trailers</p>
        <p>SEDI ultra-light and ultra-slim PV modules are ideal to be installed on purpose-built box trailers, or carriages which will house the battery, inverter, and even standby generator as per customer specifications. </p>
       <p> The SEDI solar modules are mounted on purpose-designed metal rustproof cantilever frame assembly that can be manually folded out or slid out of the cabin to create a fan like structure around the trailer during sunlight hours. The same structure is then neatly folded back or slid back into the cabin after sunset, or during transportation.  </p>
        <CardWithCarousel direction='right' images={images1} details={detail1}  />  
        <p style={{ textAlign: 'left' }}>The SEDI Rural Solar Trailer use locally available rural carriages available in-country and with German engineering and SEDI solar technology create a rapidly deployable, light weight solar energy source for farmers, and rural contractors anywhere in the world. </p>
      <p style={{ textAlign: 'left' }}>Power generation: 3kW up to 15kW (user defined) </p>  
      <p>Outputs: 12/24/48VDC/220/240VAC (user defined)</p>
      <p>Optional Hybrid Design: Diesel Gen-Set with Standby Switchover</p>
      <p>Box Trailer Hitch Specifications: Hot-dip galvanised v-shaped coupling with Master lock coupler.</p>
    
    </Stack>
  )
}

export default SolarPoweredTrailer