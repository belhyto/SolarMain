import { Stack, Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slides from './Slides';
import "./slider.css"
import img1 from "../../../public/assets/SrilankaPoleJacket.png"
import img2 from "../../../public/assets/trainstation.jpg"
import img3 from "../../../public/assets/bahrgreenhouse.jpg"
import img4 from "../../../public/assets/solarcanopy.jpeg"
import img5 from "../../../public/assets/golfcart.png"


type Props = {}

const ApplicationWithSediSolar = (props: Props) => {
    const title1 = 'Border security or surveillance'
    const detail1 = 'City planners, Homeland security, law enforcement and other stakeholders can secure critical spots in their city, country and borders with no worry for power, maintenance using our patented and unique SEDI Single Solar Jacket, SEDI Double Solar Jacket or SEDI Towers'
    const image1 = '/assets/SrilankaPoleJacket.png'
    const title2 = 'Light weight rooftops'
    const detail2 = 'Sedi light weight flexible solar PV modules provides ideal energy generation on even the most curved architectural surfaces without need for any reinfcement thanks to its ultralight weight of less than 2.5kg per sq mtr.'
    const image2 = '/assets/trainstation.jpg'
    const title3 = 'Sedi solar for Greenhouses'
    const detail3 = 'Sedi PV modules are ideal for Greenhouse power since they can be installed on the lightweight framework of the Greenhouse without needing any additional reinfcemnet. Thanks to high efficiency of nearly 20% Sedi modules can provide adequate power for Greenhouse with only one third roof coverage allowing essential sunlight through for good plant growth'
    const image3 = '/assets/bahrgreenhouse.jpg'
    const title4 = 'Eco Sustainable Homes'
    const detail4 = 'For providing grid tied or completely off grid power, using SEDI Solar ultra- lightweight, thin and flexible PV Modules, installation is easy and maintenance is minimal with long term guarantees and peace of mind'
    const image4 = '/assets/solarcanopy.jpeg'
    const title5 = 'E-vehicles'
    const detail5 = 'Installing thin flexible ultralight SEDI Solar modules flush on roofs of vehicles - be they Golf carts, Large Semis, Boats or even Trains helps reduce carbon footprint greatly without compromising performance or reliability of the vehicle. It also saves a huge amount of fuel per year.'
    const image5 = '/assets/golfcart.png'
  return (
    <Stack direction={'column'} paddingTop={0} sx={{ background: 'linear-gradient(155deg, #ffff, #5F709E)', padding: '16px' }}>
      
      <p className='text-4xl text-center p-4 font-bold' style={{fontFamily: 'Conthrax Sb'}}>
      Application With Sedi Solar
      </p>
          <Stack direction={{ lg: 'row', md: 'row', sm: 'column' }} justifyContent={'center'} alignItems={'center'} maxWidth={{lg:'1200',md:'600',sm:'400'}}>
          <Carousel showArrows={true} autoPlay={false} infiniteLoop={true}>
            <Slides title={title1} detail={detail1} img={img1.src}/>
            <Slides title={title2} detail={detail2} img={img2.src}/>
            <Slides title={title3} detail={detail3} img={img3.src}/>
            <Slides title={title4} detail={detail4} img={img4.src}/>
            <Slides title={title5} detail={detail5} img={img5.src}/>
          </Carousel>
          </Stack>

    </Stack>
  )
}

export default ApplicationWithSediSolar