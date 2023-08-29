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
  height:"150px",
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
const SediSolarJacket = (props: Props) => {
  const images = [powerjacket1.src,powerjacket2.src]
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 16px"}
  >
    <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>The SEDI solar jacket</p>
    <p className="text-base text-center p-4 font-bold">The most innovative Off Grid Solar Solution on the market today.</p>
    <p className="text-sm text-center p-4 font-bold">Completely integrated Monocrystalline Si-cell based, long life solar energy solution for critical equipment on the field, requiring a very reliable and very low maintenance energy source 24/7.</p>

    <Stack padding={'36px 12px'} direction={{md:'row',sm:'column',xs:'column'}} gap={6}>
    <Carousel className='solar-jacket' showArrows={true} autoPlay={true} infiniteLoop={true}>
        {images.map((item,id)=>{
            return (
                <SSlides key={id}  img={item}/>
            )
        })}

      </Carousel>
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={3}>
            <Paper sx={paperCss} >
                <p>Worldwide Patented Micro-lens surface nanotechnology Solar PV Modules to support vertical installation on most street poles.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p>Toughened, treated Solar modules resistant to scratch or damage. Flexible nature prevents damage during transport and installation.</p>
            </Paper>
            <Paper sx={paperCss} >
                <p>Battery, Solar controller, Data switch all installed within the Solar Jacket frame, providing shelter from the weather as well as protection from vandalism </p>
            </Paper>
            <Paper sx={paperCss} >
                <p>Vertical Panel design not only greatly reduces dust collection, but also reduces wind resistance, and shear force on the structure and support pole</p>
            </Paper>
            <Paper sx={paperCss} >
                <p>Design allows access to Sunlight from East and West, as well as diffused sunlight providing more power generation than conventional panels of the same size. </p>
            </Paper>
            <Paper sx={paperCss} >
                <p>45 Year Linear Performance Warranty on Solar Panels, Easy Installation, low cost of ownership. </p>
            </Paper>
           
        </Stack>
    </Stack>
    </Stack>
  )
}

export default SediSolarJacket