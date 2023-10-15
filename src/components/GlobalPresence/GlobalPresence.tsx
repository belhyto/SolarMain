import { Stack } from "@mui/material";
import React, { useState } from "react";
import mapVideo from "../../../public/assets/animated_map.mp4"  
type Props = {};

const GlobalPresence = (props: Props) => {
//  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  return (
    <div style={{ background: "#5F709E", padding: "30px" }}>
      <Stack padding={"36px 1px"}>
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
          OUR GLOBAL PRESENCE
        </p>
      </Stack>
      
      <video autoPlay loop muted style={{ width: '100%', maxHeight: '100%', height: 'auto' }}>
  <source src={mapVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <Stack>
      
        <p className="text-xl text-center p-4 font-normal">
          <span className="font-bold">Find our solutions installed in:</span>{" "}
          Australia, Austria, GCC, Germany, Greece, Hongkong, India, Indonesia,
          Malaysia, Spain, USA
        </p>
      </Stack>
    </div>
  );
};

export default GlobalPresence;
