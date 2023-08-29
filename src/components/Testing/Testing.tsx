import { Stack } from '@mui/material'
import React from 'react'
import TestCard from './TestCard'
import flextest from "../../../public/assets/flex-test.jpg"
import curvetest2 from "../../../public/assets/curve-test2.png"
import curvetest3 from "../../../public/assets/curve-test3.png"
import curvetest4 from "../../../public/assets/wind-test4.png"

type Props = {}

const Testing = (props: Props) => {
    const image1 = [flextest.src]
    const detail1 = 'Image of SEDI Panels undergoing Flexibility Test'
    const image2 = [curvetest2.src,curvetest3.src]
    const detail2 = 'Images of SEDI Panels undergoing curve Radius test and measurements thereafter to check for micro-fissures or cracks.'
    const image3 = [curvetest4.src]
    const detail3 = 'Image of SEDI Panels undergoing Wind tunnel tests'
    return (
        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
             <div style={{ background: '#DCE0EA', padding: "100px" }}>
            <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
                Testing
            </p>
            <p className='text-center'>SEDI Solar PV Modules are tested rigorously to meet international standards and especially German standards of safety and performance. SEDI Modules are certified for IEC 61215/61730/61701/62804-1/62716, EN-13501-5
                In addition, SEDI Modules undergo rigorous physical testing to ensure its flexibility and ruggedness is sustainable even in the most adverse conditions throughout its guarantee period.</p>
            <Stack direction={{md:'row',sm:'column',xs:'column'}}>
                <TestCard image={image1} detail={detail1}/>
                <TestCard image={image2} detail={detail2}/>
                <TestCard image={image3} detail={detail3}/>
            </Stack>
            </div>
        </Stack>
    )
}

export default Testing