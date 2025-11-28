import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//
import { createGlobalStyle } from "styled-components";

// import CoinBackground from "../src/img/moedaPorco.png";



const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
     font-family: Josefin Slab, serif;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
