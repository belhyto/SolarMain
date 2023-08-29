import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import surv1 from "../../../../public/assets/surv1.png"
import surv2  from "../../../../public/assets/surv2.jpg"
import surv3  from "../../../../public/assets/surv3.jpg"
import surv4  from "../../../../public/assets/surv4.jpg"
type Props = {}

const Surveillance = (props: Props) => {
  const images1=[surv1.src,surv2.src,surv3.src,surv4.src]
  const detail1='SEDI Solar Jackets are unsurpassed in their reliability, ruggedness, vandal resistance and very low maintenance when it comes to installing critical surveillance equipment such as CCTV and sensors especially for surveillance and homeland security. Operators worldwide are switching to SEDI Solar Jackets after facing huge maintenance and vandalism problems with conventional solar systems.'

  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200}
    padding={"36px 16px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Surveillance </p>
        <CardWithCarousel direction='right' images={images1} details={detail1}/>
    </Stack>
  )
}

export default Surveillance