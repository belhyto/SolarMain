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
    const detail1 = 'City planners, Homeland security, law enforcement and other stakeholders can secure critical spots in their city, country and borders with CCTV or sensors employing the reliable, rugged, low maintenance SEDI Solar Jackets or SEDI Solar Towers'
    const image1 = '/assets/SrilankaPoleJacket.png'
    const title2 = 'Light weight rooftops and facades	'
    const detail2 = 'SEDI Solar light weight flexible PV modules can provide energy generation on any architectural shape, flat or curved. or even on vertical facades.  It can also be installed on the lightweight roofs like carports and huts, without need for reinforcement, by virtue of its ulta-light weight (less than 2 ½ Kg/sqmtr), flexible, non-glass structure. '
    const image2 = '/assets/trainstation.jpg'
    const title3 = 'Sedi solar for Greenhouses'
    const detail3 = 'SEDI PV modules are an ideal source for Greenhouse power since they can be installed on the lightweight framework of the Greenhouse without the need for any additional reinforcement. Offering an efficiency of nearly 20%, SEDI PV modules provide adequate power for Greenhouses with suitable coverage allowing essential sunlight through for good plant growth'
    const image3 = '/assets/bahrgreenhouse.jpg'
    const title4 = 'Eco Sustainable Homes'
    const detail4 = 'SEDI Solar ultra- lightweight, thin and flexible PV Modules, provide easy installation and reliable power for Eco-Sustainable homes like holiday homes, portacabins and natural reserve cabins. Combining reliable Lithium battery based energy storage systems with SEDI Solar PV Modules offers a reliable and convenient long term energy source with low maintenance and peace of mind'
    const image4 = '/assets/solarcanopy.jpeg'
    const title5 = 'E-vehicles'
    const detail5 = 'The thin, ultralight flexible SEDI Solar modules can be riveted or glued flush on roofs of vehicles, such as Golf carts, Large 18 Wheeler trucks, Boats or even Trains to provide supplementary power, and helps to reduce the carbon footprint greatly without compromising performance or reliability of the vehicle. It also saves a huge amount of fuel per year.'
    const image5 = '/assets/golfcart.png'
  return (
    <Stack direction={'column'} paddingTop={0} sx={{ background: 'linear-gradient(155deg, #ffff, #5F709E)', padding: '1px' }}>
      
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