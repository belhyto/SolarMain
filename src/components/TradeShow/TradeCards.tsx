import { Stack } from '@mui/material'
import Image from 'next/image'
import React from 'react'

type Props = {
    img:string
}

const TradeCards = ({img}: Props) => {
  return (
    <Stack sx={{width:300,height:'auto'}}>
        <img 
        style={{width:"100%",height:"400px"}}
        src={img}
        alt='img'
        />
    </Stack>
  )
}

export default TradeCards