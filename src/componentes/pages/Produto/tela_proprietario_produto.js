import react from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import Header from "../Header";

// icones
import Editar from "../../../icons/editIcon.svg";
import Delete from "../../../icons/deleteIcon.svg";

// img
import carrinho from "../../../img/Pelucia.jpg";

import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

//HEADER
import "bootstrap/dist/css/bootstrap.min.css";
// css de componente
import Galpao from "../../../img/Galpão.png";


import "@fontsource/josefin-slab";
//icones
import Whatsapp from "../../../icons/whatsappIcon.svg";
import Duvida from "../../../icons/questionIcon.svg";
import Lupa from "../../../icons/lupaIcon.svg";
import User from "../../../icons/userIcon.svg";

import ZapzapFixoCelular from "../IconeWhatsappCelular/index";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fef5c8;
`;

const Quad = styled.div`
  background-color: #ffe55e;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 130px;
  padding: 0 20px;
`;
const ContainerQuads = styled.div`
  vertical-align: middle;
  margin-left: 9%;
  margin-bottom: 10px;
`;

const Botao = styled.button`
  width: 290px;
  height: 47px;
  border: none;
  border-radius: 37px;
  background-color: #e57753;
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 15px;
  margin-top: 20px;

  @media (max-width: 640px) {
    font-size: 13px;
    width: 240px;
    height: 40px;
  }
`;

const Imagem = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px;

  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
   
  }
`;

const Descricao = styled.p`
  margin-top: 4%;
  margin-left: 3%;
  font-size: 20px;

  @media (max-width: 640px) {
 
    font-size: 14px;
    margin-left: 4%;
    margin-top: 8%;
  }
`;

const Icons = styled.img`
  width: 40px;

  @media (max-width: 640px) {
    width: 20px;
  }
`;

const Aviso = styled.p`
  font-size: 18px;
  color: #000000ff;

  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

const QuadinEdit = styled.div`
  border-radius: 0;

  @media (max-width: 640px) {
  }
`;
const QuadinDelete = styled.div`
  border-radius: 0;

  @media (max-width: 640px) {
  }
`;

const QuadAviso = styled.div`
  height: 24px;
  margin-bottom: 2%;
  background-color: #8ccdd6;
  text-align: center;

  @media (max-width: 640px) {
    height: 25px;
    margin-bottom: 4%;
  }
  @media (max-width: 370px) {
    height: 42px;
    margin-bottom: 4%;
  }
`;

const Quadins = styled.div`
  display: flex;
  margin-left: 40%;
  justify-content: space-between;

  width: 90%;
  height: 130px;

  @media (max-width: 640px) {
    margin-top: 5%;
  }
`;

const BotõesDiv = styled.div`
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Ponta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

//HEADER
const IconsFooter = styled.img`
  width: 20px;
`;

const SugestoesDropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 46.3%;

  transform: translateX(-50%);
  width: 88.8%;
  max-height: 150px;
  overflow-y: auto;
  background-color: #ffffffd0;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 63%;
    left: 37.7%;
  }
`;

const SugestaoItem = styled.div`
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const SugestaoIcon = styled.img`
  width: 15px;
  height: 15px;
  opacity: 0.6;
  margin-left:2%;
  margin-right:1%;

     @media (max-width: 640px) {
   width: 10px;
    height: 10px;
 margin-left:3%;
  margin-right:2%;
    }
`;

const IconsDuvida = styled.img`
  width: 30px;
  margin-left: 72%;
  margin-right: 15px;

  @media (max-width: 640px) {
    width: 20px;
    margin-left: 140px;
    margin-right: 4px;
  }
`;

const IconsZapzap = styled.img`
  width: 30px;
  margin-left: 1%;
  margin-right: 0.5%;
  margin-bottom: 0.3%;

  @media (max-width: 640px) {
    width: 20px;
  }
`;
const Header1 = styled.div`
  background-color: #b3d68c;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 45px;
  font-size: 25px;
  align-content: center;

  @media (max-width: 640px) {
    height: 40px;
    display: none;
  }
`;
const Container1 = styled.div`
  background-color: #2c6b74;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 85px;
  font-size: 25px;
  align-content: center;
  margin-top: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    background-color: #2c6b74;
    top: 0;
    height: 60px;
    align-items: center;
    margin-top: 0;
    width: 100%;
  }
`;
const Container2 = styled.div`
  justify-content: center;
  display: flex;

  @media (max-width: 640px) {
  }
`;

const Img = styled.img`
  height: 60px;
  width: 90px;
  margin-left: 20px;
  border-radius: 10px;
  @media (max-width: 640px) {
    height: 40px;
    width: 70px;
    margin-left: 5px;
  }
`;
const Input = styled.div`
  width: 600px;
  margin-right: 5px;

  @media (max-width: 640px) {
    width: 130px;
    left: 0;
  }
`;


const TextHeader = styled.text`
  font-size: 26px;
  color: black;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;
const IconsUser = styled.img`
  width: 40px;
  margin-right: 40px;
  @media (max-width: 640px) {
    width: 25px;
    margin-right: 10px;
  }
`;

export default function ProdutoProprietario() {
  const [produtos, setProdutos] = useState([]);
  const { id_produto } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //header
  const [query, setQuery] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  

  //HEADER
  const handleQueryChange = (e) => {
      setQuery(e.target.value);
    };
  
    useEffect(() => {
      const buscarSugestoes = async () => {
        if (query.trim() === "") {
          setSugestoes([]);
          return;
        }
        try {
          const response = await fetch(
            `http://localhost:3000/produtos/buscar/?q=${query}`
          );
          if (!response.ok) {
            throw new Error("Erro ao buscar sugestões.");
          }
          const data = await response.json();
          setSugestoes(data);
        } catch (error) {
          console.error("Erro na busca de sugestões:", error);
          setSugestoes([]);
        }
      };
  
      const timeoutId = setTimeout(() => {
        buscarSugestoes();
      }, 300);
  
      return () => clearTimeout(timeoutId);
    }, [query]);
  
    const handleSearch = async (event) => {
      event.preventDefault();
  
      if (query.trim()) {
        try {
          const response = await fetch(
            `http://localhost:3000/produtos/buscar/?q=${query}`
          );
          if (!response.ok) {
            throw new Error("Produto não encontrado.");
          }
  
          const data = await response.json();
          if (data && data.length > 0) {
            const idProduto = data[0].id_produto;
            navigate(`/produto/${idProduto}`);
          } else {
            alert("Nenhum produto encontrado com este nome.");
          }
        } catch (error) {
          console.error("Erro na busca:", error);
          alert(error.message);
        }
      }
    };
  
    const handleSugestaoClick = (idProduto) => {
      navigate(`/produto/${idProduto}`);
      setSugestoes([]);
    };

  

  const buscarProdutosDoProprietario = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/produtos/getProdutos`
      );

      if (!response.ok) {
        throw new Error("Falha ao carregar produtos.");
      }

      const data = await response.json();
      setProdutos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarProdutosDoProprietario();
  }, []);

  const produtosFiltrados = produtos.filter((produto) => {
    if (query.trim() === "") {
      return true;
    }

    return produto.nome_produto
      .toLowerCase()
      .includes(query.toLowerCase());
  });

  const deletarProduto = async (id) => {
    // if (
    //   !window.confirm(
    //     `Tem certeza que deseja excluir esse produto? Esta ação é irreversível.`
    //   )
    // ) {
    //   return;
    // }

    try {
      const response = await fetch(
        `http://localhost:3000/produtos/excluirProduto/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.Mensagem || "Falha ao deletar produto.");
      }

      setProdutos(produtos.filter((p) => p.id_produto !== id));
    } catch (err) {
      console.error("Erro ao deletar produto:", err);
    }
  };

  if (loading) {
    return (
      <Container style={{ padding: "20px" }}>Carregando produtos...</Container>
    );
  }

  if (error) {
    return (
      <Container style={{ padding: "20px" }}>
        Erro ao carregar produtos: {error}
      </Container>
    );
  }


  
  return (
    <Container>
    <>
     <ZapzapFixoCelular />
      <Header1>
        <div>
          <Link
            style={{ textDecorationLine: "none" }}
            to={`https://wa.me/5518991778800?text=Entre%20em%20contato%20com%20Claudio%20para%20tirar%20suas%20d%C3%BAvidas!`}
          >
            <IconsZapzap src={Whatsapp} />
            <TextHeader>Fale pelo Whatsapp</TextHeader>
          </Link>

          <Link
            to={`/duvidas`}
            style={{ textDecoration: "none", color: "#000000ff" }}
          >
            <IconsDuvida src={Duvida} />
            <TextHeader>Dúvidas</TextHeader>
          </Link>
        </div>
      </Header1>

      <Container1>
        <Link to="/">
          <Img src={Galpao} />
        </Link>
        <Container2>
          <nav className="navbar">
            <div className="container-fluid">
              <form className="d-flex" role="search" onSubmit={handleSearch}>
                <div style={{}}>
                  <Input>
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Buscar"
                      aria-label="Buscar"
                      value={query}
                      onChange={handleQueryChange}
                    />
                  </Input>

                </div>
                <button
                  className="btn"
                  type="submit"
                  style={{ backgroundColor: "white", color: "#2C6B74" }}
                >
                  <IconsFooter src={Lupa} />
                </button>
              </form>
            </div>
          </nav>
        </Container2>
        <Link to="/login">
          <IconsUser src={User} />
        </Link>

  

      </Container1>
    </>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <Link to="/adicionarproduto" style={{ textDecoration: "none" }}>
          <Botao>Adicionar produto</Botao>
        </Link>
        <QuadAviso>
          <Aviso>
            Clique no nome do produto para ver a tabela de prioridade
          </Aviso>
        </QuadAviso>
      </div>

      {/* aquiiiiii */}

      <div className="d-flex flex-column gap-3">
        {produtosFiltrados.length === 0 ? (
          <Aviso style={{ marginLeft: "20px" }}>
            {query.trim() === "" 
              ? "Nenhum produto cadastrado." 
              : `Nenhum produto encontrado para "${query}".`}
          </Aviso>
        ) : (
          produtosFiltrados.map((produto) => (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Quad
                key={produto.id_produto}
                className="align-items-center px-3"
              >
                <div
                  className="d-flex align-items-center"
                  key={produto.id_produto}
                >
                  <Imagem src={produto.imagem_produto } />
                </div>

                <Link
                  to={`/tabelaProprietario/${produto.id_produto}`} 
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {/* <Descricao className="mb-0"> */}
                  <Descricao style={{ }}>
                    {produto.nome_produto}
                  </Descricao>
                </Link>

                <BotõesDiv
                  // className="d-flex gap-2 mt-2 mt-md-0 justify-end"
                  style={{ marginLeft: "auto", display: "flex", gap: "10px" }}
                >
                  <Link to={`/alterarproduto/${produto.id_produto}`}>
                    <QuadinEdit
                      className="btn"
                      style={{ backgroundColor: "#2c6b74" }}
                    >
                      <Icons src={Editar} />
                    </QuadinEdit>
                  </Link>

                  <QuadinDelete
                    className="btn"
                    style={{ backgroundColor: "#ff5024" }}
                    onClick={() => deletarProduto(produto.id_produto)}
                  >
                    <Icons src={Delete} />
                  </QuadinDelete>
                </BotõesDiv>
              </Quad>
            </div>
          ))
        )}
      </div>
    </Container>
  );
}
