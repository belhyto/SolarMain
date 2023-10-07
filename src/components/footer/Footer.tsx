"use client";
import { Box } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import Link from "next/link";

type Props = {};

const FooterContainer = styled("footer")`
  background-color: rgb(54, 79, 124);
  backdropFilter: "blur(5px)";
  padding: 20px;
  color: white;
`;

const Column = styled("div")`
  flex: 1;
  margin-right: 20px;
`;
const Footer = (props: Props) => {
  return (
    <Box
      height={200}
      sx={{  width: "100%" }}
      marginTop={0}
    >
      <FooterContainer>
        <div style={{ display: "flex" }}>
          <Column>
            <h4 style={{fontFamily: 'Conthrax Sb', textAlign: 'center'}}>Corporate Office</h4>
            <p style={{textAlign: 'center', fontFamily: 'Conthrax Sb'}}>17 Im Wiesental, 75031 Eppingen</p>
            <p style={{textAlign: 'center', fontFamily: 'Conthrax Sb'}}>Germany</p>
          </Column>
          <Column>
            <h4 style={{fontFamily: 'Conthrax Sb', textAlign: 'center'}}>Website</h4>
            <p  style={{textAlign: 'center', fontFamily: 'Conthrax Sb'}}>  <Link href={"/"} >www.sedi-solar.com</Link></p>
           
          </Column>
          <Column>
            <h4 style={{fontFamily: 'Conthrax Sb', textAlign: 'center'}} >Email</h4>
            <p style={{textAlign: 'center', fontFamily: 'Conthrax Sb'}}>
            info@sedi-solar.com
            </p>
         
          </Column>
        </div>
        <p style={{ marginTop: "100px", textAlign: "center" ,fontFamily: 'Conthrax Sb',}}>
          Copyright © 2023 | SEDI Solar 
        </p>
      </FooterContainer>
    </Box>
  );
};

export default Footer;
