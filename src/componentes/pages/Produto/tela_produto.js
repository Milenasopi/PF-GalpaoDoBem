import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header/index";
import { BrowserRouter, Link } from "react-router-dom";
import Back from "../../../icons/backIcon.svg";

import MaquiLavar from "../../../img/tenis.png";
import { useParams } from "react-router-dom"; 

import ZapzapFixoCelular from "../IconeWhatsappCelular/index"

const Container = styled.div`
  background-color: #fef5c8;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const Container2 = styled.div`
  display: flex;
  gap: 100px;
  margin-top: -8%;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 40px;
    align-items: center;
    text-align: center;
  }
`;

const BotãoVoltar = styled.div`
  width: 105px;
  height: 40px;
  background-color: #e47e5cff;
  text-align:center;
  display:flex;
  border-radius:50px;
  margin-top:10px;
  margin-left:10px;
`;

const Voltar = styled.h2`
  font-size: 20px;
  margin-top:10px;
  font-weight: bold;
  text-decoration: none; 
  color: #fff;
`;

const Icons = styled.img`
  width: 20px;
  margin-left:5px;
  margin-right:5px;
`;

const Imagem = styled.img`
  border-radius: 7px;
  width: 450px;
  object-fit: cover;

  @media (max-width: 640px) {
    width: 90%;
    max-width: 350px;
  }
`;

const Textos = styled.div`
  flex-direction: column;

  @media (max-width:640px) {
    align-items: center;
  }
`;

const TituloProduto = styled.p`
  color: #2c6b74;
  font-size: 55px;

  @media (max-width: 640px) {
    font-size: 36px;
  }
`;

const SubtituloProduto = styled.p`
  font-size: 20px;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const PrecoProduto = styled.p`
  color: #f23e02;
  font-size: 35px;

  @media (max-width: 640px) {
    font-size: 26px;
  }
`;

const BotaoInteresse = styled.button`
  background-color: #ffe55e;
  color: #1a1816ff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  margin-bottom: 40px;

  &:hover {
    background-color: rgba(237, 198, 71, 1);
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 350px;
  }
`;

const BotaoTabela = styled.button`
  background-color: #8CCDD6;
  color: #1a1816ff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
  margin-bottom: 40px;
  margin-left: 10px;

  &:hover {
    background-color: #7bb8c0ff;
  }

  @media (max-width: 640px) {
    width: 100%;
    max-width: 350px;
    margin-left: 0;
  }
`;

const DetalhesProduto = styled.p`
  font-size: 20px;
  max-width: 800px;

  @media (max-width: 640px) {
    font-size: 16px;
    max-width: 90%;
    text-align: justify;
  }
`;

export default function TelaProduto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id_produto } = useParams();

  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const response = await fetch(
          `https://pbegalpaodobem.vercel.app/produtos/getProdutoPorId/${id_produto}`
        );
        if (!response.ok) {
          throw new Error("Produto não encontrado.");
        }

        const data = await response.json();
        setProduto(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    buscarProduto();
  }, [id_produto]);

  if (loading) {
    return <div>Carregando produto...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
   
 <ZapzapFixoCelular/>
    <Header/>
     <Link to="/" style={{textDecoration: "none"}}>
      <BotãoVoltar >
          <Icons src={Back} /><Voltar style={{textDecoration: "none"}}>Voltar</Voltar>
      </BotãoVoltar>
      </Link>
      <Container>
        <Container2>
          <Imagem src={produto.imagem_produto}></Imagem>
          <Textos>
            <TituloProduto>{produto.nome_produto}</TituloProduto>

            {/* <SubtituloProduto>Máquina de lavar e secadora 12kg.</SubtituloProduto> */}

            <PrecoProduto>R${produto.preco_produto}</PrecoProduto>

            <Link to={`/forminteresse/${produto.id_produto}`} style={{textDecoration: "none"}}>
            <BotaoInteresse>Demonstrar Interesse</BotaoInteresse>
            </Link>

             <Link
              to={`/tabelaProduto/${produto.id_produto}`}
              style={{ textDecoration: "none" }}>
             <BotaoTabela>Ver tabela</BotaoTabela>
             </Link>

            <DetalhesProduto>
              <p>
                <b>{produto.descricao_produto}</b>
              </p>
            </DetalhesProduto>
          </Textos>
        </Container2>



      </Container>

    </>
  );
}
