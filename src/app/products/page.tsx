"use client";

import { Stack } from "@mui/material";
import React from "react";
import SediSolarJacket from "./components/SediSolarJacket";
import SolarPoweredTrailer from "./components/SolarPoweredTrailer";
import SolarContainer from "./components/SolarContainer";

type Props = {};
const Products = (props: Props) => {
  return (
    <Stack
    direction={"column"}
    alignItems={"center"}
    justifyContent={"center"}
   paddingTop={"100px"}
    style={{ background: 'linear-gradient(90deg, #ffff, #D9D9D9)'}}
      
    >
      <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>Our Products</p>
      <p className="text-base text-center p-4 font-semibold" style={{textAlign: "justify"}}>Our SEDI Solar products are revolutionary in design and offer a wide range of possibilities that hitherto was not available to the consumer. SEDI combines intrinsic design and fabrication knowledge along with our unique lightweight, flexible and durable Solar panel to provide custom-designed energy solutions for rapid deployment, for light weight structures, for isolated locations requiring zero or low maintenance  and a myriad of other applications in the most demanding situations.</p>
      <SediSolarJacket />
      <SolarPoweredTrailer />
      <SolarContainer />
    </Stack>
  );
};

export default Products;
