import { Stack } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CSlides from './CSlides';
import "./cardslider.css";

type Props = {
    images: string[];
    details: string;
    direction: string;
}

const CardWithCarousel = ({ images, details, direction }: Props) => {
    if (direction === 'left') {
        return (
            <Stack maxWidth={1200} sx={{ width: "100%" }} direction={{ md: 'row', sm: `${(direction === 'left') ? 'column' : 'column-reverse'}`, xs: `${(direction === 'left') ? 'column' : 'column-reverse'}` }} justifyContent={'center'} alignItems={'center'} padding={'20px 12px'} gap={6}>
                <Carousel className='card-with-carousel' showArrows={true} autoPlay={false} infiniteLoop={true}>
                    {images.map((item, id) => {
                        return (
                            <CSlides key={id} img={item} />
                        )
                    })}
                </Carousel>
                <div style={{ borderRadius: '50px' }}>
                    <p style={{textAlign: "justify"}}>{details}</p>
                </div>
            </Stack>
        )
    } else {
        return (
            <Stack maxWidth={1200} sx={{ width: "100%" }} direction={{ md: 'row', sm: `${(direction === 'left') ? 'column' : 'column-reverse'}`, xs: `${(direction === 'left') ? 'column' : 'column-reverse'}` }} justifyContent={'center'} alignItems={'center'} padding={'20px 12px'} gap={6}>
                <div style={{ borderRadius: '100px' }}>
                    <p style={{textAlign: "justify"}}>{details}</p>
                </div>
                <Carousel className='card-with-carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
                    {images.map((item, id) => {
                        return (
                            <CSlides key={id} img={item} />
                        )
                    })}
                </Carousel>
            </Stack>
        )
    }
}

export default CardWithCarousel;
