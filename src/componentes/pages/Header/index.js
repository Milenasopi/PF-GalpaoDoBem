import "bootstrap/dist/css/bootstrap.min.css";
// css de componente
import Galpao from "../../../img/Galpão.png";

import styled from "styled-components";
import "@fontsource/josefin-slab";
//icones
import Whatsapp from "../../../icons/whatsappIcon.svg";
import Duvida from "../../../icons/questionIcon.svg";
import Lupa from "../../../icons/lupaIcon.svg";
import User from "../../../icons/userIcon.svg";

//Header verde escuro
import "bootstrap/dist/css/bootstrap.css";

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const IconsHeater = styled.img`
  width: 30px;
`;

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
  margin-left: 2%;
  margin-right: 1%;

  @media (max-width: 640px) {
    width: 10px;
    height: 10px;
    margin-left: 3%;
    margin-right: 2%;
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

  @media (max-width: 1462px) {
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

  @media (max-width: 1462px) {
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
  @media (max-width: 1462px) {
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

export default function Header() {
  const [query, setQuery] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  const navigate = useNavigate();

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
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(
          `${API_BASE_URL}/produtos/buscar/?q=${query}`
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
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      try {
        const response = await fetch(
          `${API_BASE_URL}/produtos/buscar/?q=${query}`
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

  return (
    <>
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
                  {sugestoes.length > 0 && (
                    <SugestoesDropdown>
                      {sugestoes.map((sugestao) => (
                        <SugestaoItem
                          key={sugestao.id_produto}
                          onClick={() =>
                            handleSugestaoClick(sugestao.id_produto)
                          }
                        >
                          <SugestaoIcon src={Lupa} />
                          {sugestao.nome_produto}
                        </SugestaoItem>
                      ))}
                    </SugestoesDropdown>
                  )}
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
  );
}
