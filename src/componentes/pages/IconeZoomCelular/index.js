import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";
import "@fontsource/josefin-slab";
import Zoom from "../../../icons/zoomIcon.svg";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const IconsZoom = styled.img`
  @media (max-width: 640px) {
    width: 40px;
    margin-top: 2px;
    margin-left:5px;
    margin-right:-5px;
  }
`;

const DivZoomFixo = styled.div`
  display: none;

  @media (max-width: 640px) {
    z-index: 1000;
    position: fixed;
    display: flex;
    bottom: 200px;
    left: 25px;
    background-color: #2c6a749c;
    width: 85%;
    height: 60px;
    justify-content: center;
  }
`;

export default function ZoomFixoCelular() {
  return (
    <>
      {/* <PosicaoZoom style={{ position: "fixed" }}>
          <QuadZoom style={{ backgroundColor: "#2C6B74" }}>
            <img
              src={AvisoZoom}
              style={{ width: "50px", marginLeft: "0px", marginTop: "300px" }}
            />
          </QuadZoom>
        </PosicaoZoom> */}

      <DivZoomFixo>
        <IconsZoom src={Zoom} />
        <p style={{marginTop:"5px", color:"#fff", textAlign:"center"}}>Deslize os dedos para diminuir o  zoom e ver toda a tabela</p>
      </DivZoomFixo>
    </>
  );
}
