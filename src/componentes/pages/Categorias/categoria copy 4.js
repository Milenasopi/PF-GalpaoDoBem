import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Header2 from "../Header";
import Back from "../../../icons/backIcon.svg";

// import react from "react";

const Fundo = styled.body`
  background-color: #fef5c8;
  width: "100%";
  height: "100%";
  flex
`;

const Titulo = styled.h1`
  color: black;
  font-family: Georgia, "Times New Roman", Times, serif;
  margin-left: 80px;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 100%;
  margin-top: ;
`;
const Card = styled.div`
  flex: 1 1 300px; /* Cresce, encolhe, base de 300px */
  max-width: 400px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 16px;
  height: 210px;
  width: 270px;
  background-color: rgba(255, 255, 255, 1);
`;

const ConteudoCard = styled.div`
  align-items: center;

  transition: transform 0.2s ease;
`;

const Descriçao = styled.p`
  color: black;
  //   margin-top: 20px;
  //   justify-content: center;
  //   align-items: center;
`;

const Voltar = styled.h2`
  font-size: 20px;
  margin-top:10px;
  font-weight: bold;
 
`;

const BotãoVoltar = styled.div`
  width: 150px;
  height: 40px;
  background-color: #e47e5cff;
text-align:center;
  display:flex;
  border-radius:50px;
  margin-top:10px;
  margin-left:10px;
`;
const Icons = styled.img`
  width: 20px;
  margin-left:5px;
  margin-right:25px;
`;

function Categoria() {
  return (
    <Fundo>
      <Header2 />
      <BotãoVoltar>
         <Icons src={Back}  /><Voltar>Voltar</Voltar>
      </BotãoVoltar>

      <Container style={{ marginTop: "20px" }}>
        <Titulo>Nome da Categoria</Titulo>
        <ContainerCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
          <ConteudoCard>
            <Card></Card>
            <p style={{ marginTop: "6px", textAlign: "center" }}>
              Nome da Categoria
            </p>
          </ConteudoCard>
        </ContainerCard>
      </Container>
    </Fundo>
  );
}

export default Categoria;
