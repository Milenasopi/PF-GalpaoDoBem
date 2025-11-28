import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";

import Back from "../../../icons/backIcon.svg";

import Header from "../Header/index";

import ZapzapFixoCelular from "../IconeWhatsappCelular/index"

const Fundo = styled.div`
  background-color: #fef5c8;
  width: "100%";
  height: "100%";
  flex
`;

const Titulo = styled.h1`
  color: black;
  font-family: Josefin Slab, serif;
  margin-left: 80px;
`;

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 100%;
  
`;
const Card = styled.div`
  flex: 1 1 300px; 
  max-width: 400px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0px;
  height: 210px;
  width: 270px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); 
  position: relative; 

         @media (max-width: 640px) {
   height:100px;
  width: 160px;
   
  }
`;

const ConteudoCard = styled.div`
  align-items: center;
  cursor: pointer; 
  transition: transform 0.2s ease;

 

`;

const Descriçao = styled.p`
  color: black;
`;

const Voltar = styled.h2`
  font-size: 20px;
  margin-top:10px;
  font-weight: bold;
  text-decoration: none; 
  color: #fff;
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
const Icons = styled.img`
  width: 20px;
  margin-left:5px;
  margin-right:5px;
`;
 const ProdutoNome = styled.h6`
  margin-top: 6px; 
  text-align: center; 
  align-items: center;
  font-weight: bold; 
  max-width: 90%;
  word-wrap: break-word; 
  overflow-wrap: break-word;
    display: flex; 
  flex-direction: column; 
  `;

  const ProdutoPreco = styled.h6`
    margin-top: 6px; 
  text-align: center; 
  align-items: center;
  font-weight: bold; 
  max-width: 90%;
  word-wrap: break-word; 
  overflow-wrap: break-word;
    display: flex; 
  flex-direction: column; 
  color: #e47e5cff;
  font-weight: bold;
  `;

  const Imagem = styled.img`
height: 210px;
  width: 270px;
    position: absolute; 
     top: 0;
     left: 0;
     object-fit: cover;
     border: 2px solid #fFf;

       @media (max-width: 640px) {
   height:100px;
  width: 160px;
   
  }
  `;



export default function Categoria() {

    
    const { id_categoria } = useParams(); 
    const navigate = useNavigate();

    const [produtos, setProdutos] = useState([]); 
    const [categoriaNome, setCategoriaNome] = useState('Carregando...');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {

        const buscarNomeDaCategoria = async () => {
        try {
            const response = await fetch(
                `https://pbegalpaodobem.vercel.app/categorias/getCategoriaPorId/${id_categoria}` 
            );

            if (!response.ok) {
                setCategoriaNome("Categoria Não Encontrada"); 
                return;
            }

            const data = await response.json();
            
            setCategoriaNome(data.nome_categoria); 
            
        } catch (err) {
            setCategoriaNome("Erro ao carregar nome");
            console.error("Erro ao buscar nome da categoria:", err);
        }
    };

        const buscarProdutosDaCategoria = async () => {
            try {
                const response = await fetch(
                    `https://pbegalpaodobem.vercel.app/produtos/getProdutoPorCategoria/${id_categoria}`
                );
                
                if (!response.ok) {
                    throw new Error("Falha na comunicação com o servidor.");
                }

                const data = await response.json();
                setProdutos(data); 
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id_categoria) {
            buscarNomeDaCategoria(); 
            buscarProdutosDaCategoria();
        } else {
            setLoading(false);
            setError("ID da categoria não encontrado na URL.");
        }
    }, [id_categoria]); 

    if (loading) {
        return <p>Carregando produtos...</p>;
    }

    if (error) {
        return <p>Erro ao carregar produtos: {error}</p>;
    }

    
  return (

    <Fundo>
    
 <ZapzapFixoCelular/>
    <Header/>
      <Link to="/" style={{textDecoration: "none"}}>
      <BotãoVoltar >
          <Icons src={Back} /><Voltar style={{textDecoration: "none"}}>Voltar</Voltar>
      </BotãoVoltar>
      </Link>

      <Container style={{ marginTop: "20px" }}>
        <Titulo>{categoriaNome}</Titulo>
        <ContainerCard>
            {produtos.map((produto) => (
                <ConteudoCard key={produto.id_produto}>
                   <Link key={produto.id_produto} to={`/produto/${produto.id_produto}`} style={{ textDecoration: 'none', color: 'inherit' }} >
                    <Card>
                        <Imagem
                            
                            src={produto.imagem_produto} 
                            alt={produto.nome_produto}
                        />
                    </Card>
                    </Link>
                    <ProdutoNome>
                        {produto.nome_produto}
                    </ProdutoNome>
                   <ProdutoPreco>
                        R${produto.preco_produto}
                    </ProdutoPreco>
                </ConteudoCard>
            ))}
                </ContainerCard>
      </Container>
    </Fundo>
  );
}