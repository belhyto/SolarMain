import CardWithCarousel from '@/components/CardWithCarousel/CardWithCarousel'
import { Stack } from '@mui/material'
import React from 'react'
import Container1 from "../../../../public/assets/Container1.png"
import Container2  from "../../../../public/assets/Container2.png"
import Container3  from "../../../../public/assets/Container4.png"
type Props = {}

const SolarContainer = (props: Props) => {
    const images1=[Container3.src,Container1.src,Container2.src]
    const detail1='Based on customer specifications, the SEDI Solar Containers can be designed and built on the 20’, 40’ and 40HT’ container versions and can provide 30kW, 60kW, 90kW, 130kW. The system is designed as a fully integrated Plug & Play solution with the inverter, battery backup and battery management system all installed within the container. The ESS is generally comprised of Lithium Cells, but customers may opt for cheaper though heavier and less efficient Lead Gel cells as well.'
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    maxWidth={1200} 
    padding={"36px 25px"}
  >
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Solar Containers </p>
        <p  style={{textAlign: "justify"}}>SEDI Solar Containers are the worlds first and only fully mobile, rapidly deployable clean energy storage solutions (CLESS)that can be deployed on the field within 2 hrs and packed and loaded for transportation in less than half that time.</p>
        <p  style={{textAlign: "justify"}}>The SEDI Solar containers uses the  unique SEDI light weight, ruggedized PV modules which are installed on a bespoke  metal reinforced framework which is designed to be fully deployed manually by 2 personnel. </p>
        <CardWithCarousel direction='left' images={images1} details={detail1}/>
        <p>SEDI Solar Containers can provide multiple power outputs of 12/24/48VDC, 230VAC and 110VAC based on customer requirements. </p>
    <p>The SEDI Solar containers are certified to be seaworthy by leading marine survey companies so that the container can ship conveniently worldwide. Easy to transport and mobilize, it can be moved on a large flatbed trailer or on a cargo ship.</p>
    <p>The SEDI Solar container is truly a fully off-grid 24/7, 365 day reliable energy source, ideal for disaster relief, military operations in remote areas, powering emergency critical infrastructure, farming, telecommunications, and water irrigation projects.</p>
    <p>NGOs such as UN, US Aid and other aid agencies can utilize the services of a SEDI Container Solution to generate sufficient power to support a small village in Africa or Asia. It can be deployed and packed up within a couple of hours.</p>
   <p>Power generation: 30kW up to 130kW</p>
   <p>Outputs: 12/24/48VDC/220/240VAC/110VAC</p>
   <p>Optional Hybrid Design: Diesel GenSet within Standby Switchover</p>
    </Stack>
  )
}

export default SolarContainer