import { Paper, Stack } from '@mui/material'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SSlides from './SSlides';
import "./slider.css"
import powerjacket1 from "../../../../public/assets/powerjacket.png"
import powerjacket2  from "../../../../public/assets/powerjacket3.png"

type Props = {}
const paperCss = {
  minWidth:"200px",
  maxWidth:"280px",
  height:"250px",
  flexBasis: 'calc(90% / 3)',
  color: "#000",
  borderRadius: "4px",
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-around',
  padding: "16px",
  fontSize: "12px",
  textAlign:"center",
  transition: 'transform 0.3s ease',
  '&:hover': {
  cursor: 'pointer',
  transform: 'scale(1.1)',
  '@media (max-width: 800px)': {
      flexBasis: 'calc(100% / 1)',
  }
}, 
} 

const labels = ["SEDI Solar Jacket ", "SEDI Solar Jacket: Rear view (Without back Cover)", /* Add more labels as needed */];
const SediSolarJacket = (props: Props) => {
  const images = [powerjacket1.src,powerjacket2.src]
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 1px"}
  > 
    <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>SEDI Solar Jacket</p>
    <p className="text-base text-center p-4 font-semibold" style={{textAlign: "justify"}}>The most innovative off-grid solar solution on the market today.</p>
    <p className="text-base text-center p-4 font-semibold" style={{textAlign: "justify"}}>Complete and integrated Solar power source mounted on any pole. This product is ideal for powering small but critical components in the field such as CCTV cameras, transmitters, sensors, 4G and WAN devices, measuring devices etc. SEDI Solar Jackets provide reliable uninterrupted power 24x7, 365 days with little or no field maintenance required.</p>

    <Stack padding={'36px 12px'} direction={{md:'row',sm:'column',xs:'column'}} gap={6}>
    <Carousel className="solar-jacket" showArrows={true} autoPlay={true} infiniteLoop={true}>
  {images.map((item, id) => {
    const label = labels[id]; // Get the corresponding label for this image
    return (
      <SSlides key={id} img={item} label={label} />
    );
  })}
</Carousel>
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={3}>
            <Paper sx={paperCss} >
                <p>Unique Micro-lens surface technology Solar PV Modules to support vertical installation on almost any pole. By nature of its vertical streamline design, the product is virtually maintenance free and offers very good aerodynamics to reduce wind resistance.</p>
            </Paper> 
            <Paper sx={paperCss} >
                <p>Toughened, treated Solar modules are resistant to scratch or damage. Flexible nature prevents damage during transport and installation. The Solar Jacket is stackable on the same pole for additional power requirements.</p>
            </Paper> 
            <Paper sx={paperCss} >
                <p>Battery, Solar controller, and Data switch are all installed within the Solar Jacket frame, high up on the pole, providing not only shelter from the weather, but also protection from vandalism. Enough space to add additional components such as data storage devices, WAN/4G routers etc.</p>
            </Paper> 
            <Paper sx={paperCss} >
                <p>SEDI Solar Jacket is designed to allow nearly 12 hours of direct sunlight as well as diffused sunlight providing more power generation than conventional panels of the same size. A single SEDI Jacket produces 1.44kW power per day. SEDI Jackets use very long life LiFePO4 Batteries to provide 24x7, 365 day reliable and uninterrupted power source for critical in-field devices.</p>
            </Paper> 
            <Paper sx={paperCss} >
                <p>SEDI Solar Jackets can be operated from -20˚ C to +60 ˚ C. The Jackets are designed with unique features to handle the harshest climates including dessert, snow, hail and wind. The SEDI solar Jacket offers a 10 year product warranty covering controller, hardware and software*.  </p>
            </Paper> 
            <Paper sx={paperCss} >
                <p>SEDI proprietary User Software is loaded within the Solar controller and through the embedded web-box operators can remote connect to one or more SEDI Solar jackets for monitoring, data gathering and remote control. SEDI Software offers open APIs to integrate with third party products like data switches and sensors. </p>
            </Paper>
           
        </Stack>
    </Stack>
    </Stack>
  )
}

export default SediSolarJacket
