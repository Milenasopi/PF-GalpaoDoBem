import "bootstrap/dist/css/bootstrap.min.css";


import styled from "styled-components";
import "@fontsource/josefin-slab";
import Whatsapp from "../../../icons/whatsappCelularIcon.svg";
import Duvidas from "../../../icons/questionBrancoIcon.svg"
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const IconsZapzap = styled.img`
  @media (max-width: 1366px) {
    width: 30px;
    margin-top:5px;
  }
`;

const DivWhatsappFixo = styled.div`
display:none;

  @media (max-width: 1366px) {
z-index: 100;
position:fixed;
display:flex;
bottom:15px ; 
right:15px ;
background-color:white;
width:40px;
height:40px;
justify-content:center;
border-radius:100%;
  }
`;
const DivDuvidasFixo = styled.div`
display:none;

  @media (max-width: 1366px) {
z-index: 100;
position:fixed;
display:flex;
bottom:60px ; 
right:15px ;
background-color:#711c6e;
width:40px;
height:40px;
justify-content:center;
border-radius:100%;
  }
`;

export default function ZapzapFixoCelular() {
  return (
    <>
        <DivDuvidasFixo>

          <Link
            style={{ textDecorationLine: "none" }}
            to={`/duvidas`}
          >
            <IconsZapzap src={Duvidas} />
          </Link>
        </DivDuvidasFixo>

        <DivWhatsappFixo>

          <Link
            style={{ textDecorationLine: "none" }}
            to={`https://wa.me/5518991778800?text=Entre%20em%20contato%20com%20Claudio%20para%20tirar%20suas%20d%C3%BAvidas!`}
          >
            <IconsZapzap src={Whatsapp} />
          </Link>
        </DivWhatsappFixo>
    </>
  );
}

