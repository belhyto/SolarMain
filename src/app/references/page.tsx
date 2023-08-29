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
      <p className="text-base text-center p-4 font-semibold">Sedi PV modules by virtue of their ultralight weight, super slim design and flexibility have been used on some very innovative products and projects such as the SEDI Solar Jacket, roofs of vehicles, greenhouses, curved roof canopies and carports.</p>
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