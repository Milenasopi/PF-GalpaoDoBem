import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Duvida from "../../../icons/questionIcon.svg";
import Header from "../Header";

import ZapzapFixoCelular from "../IconeWhatsappCelular/index"
// import react from "react";

const Body = styled.div` 
    background-color: #fef5c8;
    min-height: 100vh;
`; 

const Fundo = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
`; 

const Titulo = styled.h1`
  color: black;
  font-size: 50px;
  margin-top: 1%;
  margin-left: 10px;


    @media (max-width: 640px) {
    font-size: 30px;
    margin-top: 3%;
    margin-left: 5px;
  }
`;

const Card = styled.div`
  border-radius: 30px;
  margin-top: 4%;
  width: 90%;
  max-width: 800px;
  background-color: #b3d68c;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 640px) {
    width: 95%;
    margin-top: 10%;
    padding: 15px;
  }
`;



const DescricaoNormal = styled.p`
  font-size: 20px; 
  line-height: 1.5;
  padding: 0 20px 10px;

  @media (max-width: 640px) {
    font-size: 15px;
    width: auto;
    margin-left: 0;
    padding: 0 10px 10px;
  }
`;
const DescricaoNegrito = styled.p`
  font-weight: bold;
  font-size: 20px;
  padding: 20px 20px 5px;

  @media (max-width: 640px) {
    font-size: 16px;
    margin-left: 0;
    padding: 15px 10px 5px;
  }
`;

const Icon = styled.img`
  width: 40px;
  margin-right: 0.5%;
  margin-left: 1%;

    @media (max-width: 640px) {
      width: 30px;
      margin-right: 1%;
      margin-left: 2%;
  
  }
`;

export default function Duvidas() {
  return (
    
      <Body>
      <ZapzapFixoCelular/>
        <Header />
        <Fundo>
          <Card>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Icon src={Duvida} />
              <Titulo>Dúvidas</Titulo>
            </div>

            <DescricaoNegrito>Como o site funciona?</DescricaoNegrito>
            <DescricaoNormal>
              O site do Galpão do Bem funciona como uma loja online, mas com um
              diferencial: aqui os produtos podem ser adquiridos de forma gratuita
              ou com um valor reduzido, através de uma tabela de interesse. Isso
              permite organizar as propostas e facilitar o acesso a quem mais
              precisa. <br />
              <br />
              Ao escolher um produto e clica-lo, aparecerá uma tela com as
              informações detalhadas e um botão para demonstrar interesse, caso
              queira adquiri-lo.
              <br />
              <br />A Tabela de Prioridade mostra todos os usuários que
              demonstraram interesse em um produto. Os primeiros da lista aparecem
              em destaque, ajudando o proprietário a definir quem priorizar. Se
              alguém desistir, automaticamente sairá da lista.
            </DescricaoNormal>
            <DescricaoNegrito>Para tirar dúvidas?</DescricaoNegrito>
            <DescricaoNormal>
              Para mais dúvidas clique no icone do whatsapp do lado esquerdo da
              tela principal e será redirecionado para um contado que irá te
              ajudar.
            </DescricaoNormal>
          </Card>
        </Fundo>
      </Body>
  );
}