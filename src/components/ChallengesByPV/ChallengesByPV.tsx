import { Stack } from '@mui/material'
import React from 'react'
import Phone from './CircleComponent'
import bentmodule from "../../../public/assets/bentmodule.jpg"

type Props = {}

const ChallengesByPV = (props: Props) => {
  return (
    <Stack direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
    style={{
    
      background: 'linear-gradient(90deg, #5F709E, #ffff)', 
    }}>
         
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb', paddingTop:'20px'}}>
      Why SEDI PV Modules?
      </p>
      <p className="text-base text-center p-4 font-semibold"  style={{textAlign: "center" }}>SEDI PV modules weigh as low as 2.5 Kg/m2 compared to conventional glass top modules which can weigh up to 30 Kg per module. Conventional modules additionally require heavy metal supports to mount them on.</p>
      <img src={bentmodule.src} alt="img" style={{height:"500px",width:"auto" , borderRadius:"40px"}} />
      <Phone />
      </Stack>
  )
}
export default ChallengesByPV