"use client"

import { Stack } from '@mui/material'
import React from 'react'
import RooftopSolar from './components/RooftopSolar'
import Greenhouses from './components/Greenhouses'
import Telecommunications from './components/Telecommunications'
import Surveillance from './components/Surveillance'
import OilNGas from './components/OilNGas'
import VehiclePower from './components/VehiclePower'
import Carports from './components/Carports'
import DeployableSolarEnergy from './components/DeployableSolarEnergy'

type Props = {}

const References = (props: Props) => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
     paddingTop={"100px"}
      style={{ background: '#FFFEEA'}}
      
    >
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>References</p>
      <p className="text-base text-center p-4 font-semibold" style={{padding:'1px 1px'}}>By virtue of their ultralight weight, super slim design and flexibility, SEDI PV modules have been used on some very innovative products and projects such as the SEDI Solar Jacket, SEDI Solar Containers and Trailers, Rooftop projects, greenhouses, curved canopies, carports and many other references which demand rugged, reliable, light weight flexible, long life Solar PV modules.s</p>
      <RooftopSolar />
      <Greenhouses />
      <Telecommunications />
      <Surveillance />
      <OilNGas />
      <VehiclePower />
      <Carports />
      <DeployableSolarEnergy />
    </Stack>
  )
}

export default References