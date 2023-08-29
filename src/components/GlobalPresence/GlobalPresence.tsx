import { Stack } from "@mui/material";
import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

type Props = {};
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
const GlobalPresence = (props: Props) => {
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);

  return (
    <div style={{ background: "#5F709E", padding: "30px" }}>
      <Stack padding={"36px 16px"}>
        <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
          OUR GLOBAL PRESENCE
        </p>
      </Stack>
      <ComposableMap projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl} fill="#fbdd9d">
          {({ geographies }) =>
            geographies.map((geo, index) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Marker coordinates={[-118.006, 37.7128]}>
          <circle
            r={8}
            fill={hoveredMarker === 1 ? "#F00" : "#F53"}
            onMouseEnter={() => setHoveredMarker(1)}
            onMouseLeave={() => setHoveredMarker(null)}
          />
        </Marker>
        <Marker coordinates={[-118.006, 37.7128]}>
          <circle r={8} fill="#F53" />
        </Marker>
        <Marker coordinates={[-4.006, 39.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[4.006, 45.7128]}>
          <circle r={4} fill="#F53" />
        </Marker>
        <Marker coordinates={[3.006, 49.7128]}>
          <circle r={4} fill="#F53" />
        </Marker>
        <Marker coordinates={[44.006, 19.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[56.006, 17.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[55.006, 26.7128]}>
          <circle r={7} fill="#F53" />
        </Marker>
        <Marker coordinates={[73.006, 19.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[79.006, 14.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[102.006, 3.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[120.006, 13.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[123.006, 13.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
        <Marker coordinates={[120.006, -26.7128]}>
          <circle r={6} fill="#F53" />
        </Marker>
      </ComposableMap>
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
