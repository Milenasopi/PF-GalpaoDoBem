// import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";

import HomeImg from "../../../img/thumbnailHome.png";

import styled from "styled-components";
import "@fontsource/josefin-slab";

import Carousel from "react-bootstrap/Carousel";
import Header2 from "../Header";

//icones
import Whatsapp from "../../../icons/whatsappIcon.svg";
import Instagram from "../../../icons/instagramIcon.svg";
import Lupa from "../../../icons/lupaIcon.svg";
import Facebook from "../../../icons/facebookIcon.svg";

// imagens
import Moveis from "../../../../src/img/Cadeira2.jpg";
import Alimentos from "../../../../src/img/Alimentos.png";
import Pelucias from "../../../../src/img/Pelucia.jpg";
import Roupas from "../../../../src/img/Roupas.png";
import Sapatos from "../../../../src/img/tenis.png";
import ItensDiversificados from "../../../../src/img/Itens.png";

// Header
import Galpao from "../../../img/Galpão.png";
import Duvida from "../../../icons/questionIcon.svg";

// Integração
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ZapzapFixoCelular from "../IconeWhatsappCelular/index";

// -------------------- Styled Components --------------------

const Image = styled.img`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  opacity: 0.6;
  box-shadow: 4px 4px 9px #828181ba;
`;

const IconsFooter = styled.img`
  width: 25px;
`;

const TelaAmarela = styled.div`
  background-color: #fef5c8;
  align-items: center;
`;

const TelaLaranja = styled.div`
  background-color: #e47e5cff;
  margin-top: 50px;
`;

const Titulos = styled.h1`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  font-family: Josefin Slab, serif;
`;

const Textinho = styled.p`
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-family: Josefin Slab, serif;
  text-align: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 0 1rem;
  margintop: 60px;
`;

const Container = styled.div`
  background-color: #fef5c8;
`;

const SejaBemVindo = styled.h1`
  color: #2c6b74;
  position: absolute;
  right: 8%;
  top: 33%;
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: bold;
`;

const Coracao = styled.div`
  background-color: #fef5c8;
  position: absolute;
  right: 5%;
  top: 45%;
  border-radius: 10px;
  width: clamp(150px, 60vw, 500px);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    right: 1%;
  }
`;

const TextoCoracao = styled.div`
  font-size: clamp(10px, 2vw, 1.4rem);
  text-align: center;
`;

const Novidades = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 20px;
`;

const NovidadesTitulo = styled.h1`
  color: #711c6e;
  font-weight: bold;
  font-family: Josefin Slab, serif;
  font-size: clamp(1.5rem, 3vw, 2.3rem);
`;

const NovidadesSubtitulo = styled.h5`
  color: #711c6e;
  font-size: clamp(1rem, 2vw, 1.2rem);
`;

const CentralizaCarrossel = styled.div`
  align-items: center;
  width: 50%;

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(21%) sepia(87%) saturate(7061%) hue-rotate(279deg)
      brightness(92%) contrast(90%);
    width: 40px;
    height: 40px;
    background-size: contain;
  }

  @media (max-width: 900px) {
    width: 70%;
  }
`;

const GalpConfig = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  text-align: center;
`;

const Instagram2 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;

  @media (max-width: 640px) {
    margin-left: 12%;
  }
`;
const FacebookIcon = styled.div`
  @media (max-width: 640px) {
    margin-left: 12%;
  }
`;

const IconsHeater = styled.img`
  width: 30px;
`;

const ImagemCarrosselProduto = styled.img`
  width: 100%;
  max-width: 600px;
  height: clamp(500px, 40vh, 400px);
  object-fit: cover;
  margin: 0 auto;
  border-radius: 8px;

  @media (max-width: 640px) {
    height: clamp(300px, 30vh, 300px);
  }
`;
const ImagemCarrosselCategorias = styled.img`
  width: 100%;
  max-width: 800px;
  height: clamp(500px, 40vh, 400px);
  object-fit: cover;
  margin: 0 auto;
  border-radius: 8px;

  @media (max-width: 640px) {
    height: clamp(300px, 30vh, 300px);
  }
`;

// -------------------- Componente --------------------

export default function Home() {
  const [produtosRecentes, setProdutosRecentes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const buscarProdutoRecente = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/produtos/getProdutosRecentes`
        );
        if (!response.ok) {
          throw new Error("Produto não encontrado.");
        }

        const data = await response.json();

        setProdutosRecentes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    buscarProdutoRecente();
  }, []);

  if (loading) {
    return <div>Carregando produto...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <>
      <ZapzapFixoCelular />
      <Header2 />

      <Container style={{ fontFamily: "Josefin Slab, serif" }}>
        <div className="Seja_bem_vindo" style={{ position: "relative" }}>
          <Image src={HomeImg} />
          <SejaBemVindo>Seja bem-vindo</SejaBemVindo>
          <Coracao>
            <TextoCoracao>
              Onde cada doação ganha um novo propósito.
              <br />
              Você ajuda, alguém agradece! ♡
            </TextoCoracao>
          </Coracao>
        </div>

        {/* ---------- Novidades ---------- */}
        <TelaAmarela>
          <Novidades>
            <NovidadesTitulo>Novidades</NovidadesTitulo>
            <NovidadesSubtitulo>
              FIQUE POR DENTRO DAS BOAS NOVAS DA SEMANA!
            </NovidadesSubtitulo>
          </Novidades>

          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <CentralizaCarrossel>
              <Carousel fade>
                {produtosRecentes.map((produto) => (
                  <Carousel.Item interval={2000} key={produto.id_produto}>
                    <Link to={`/produto/${produto.id_produto}`}>
                      <ImagemCarrosselProduto
                        className="d-block"
                        src={produto.imagem_produto}
                        alt="Móveis"
                      />
                    </Link>
                    <Carousel.Caption>
                      <p
                        style={{
                          fontSize: "1rem",
                          backgroundColor: "#ffffffbd",
                          color: "black",
                          borderRadius: "10px",
                        }}
                      >
                        {produto.nome_produto}
                      </p>
                      <h3
                        style={{
                          color: "#711C6E",
                          backgroundColor: "white",
                          fontWeight: "bold",
                          display: "inline-block",
                          padding: "0 0.5rem",
                          borderRadius: "8px",
                        }}
                      >
                        R${produto.preco_produto}
                      </h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            </CentralizaCarrossel>
          </div>
        </TelaAmarela>

        {/* ---------- Sobre nós ---------- */}
        <TelaLaranja>
          <br />
          <br />
          <br />
          <Titulos style={{ color: "#ffffffff" }}>Sobre nós</Titulos>
          <br />
          <Textinho style={{ color: "#ffffffff" }}>
            Agora o galpão chegou ao mundo dos sites para uma maior organização
            e divulgação do projeto! Mas afinal, o que é o Galpão do Bem?
            <br /> <br />
            É um projeto social da cidade de Mirandópolis, no interior do estado
            de São Paulo, que visa ajudar principalmente as famílias vulneráveis
            com doações ou produtos vendidos a preços acessíveis, como roupas e
            móveis. Promovemos autonomia dessas famílias, inclusive com projetos
            culturais e cursos de alfabetização para adultos.
            <br /> <br />
            Caso você tenha vontade de doar e apoiar nosso projeto, não hesite
            em entrar em contato conosco!
            <br />
            <br />
            <br />
          </Textinho>
          <br />
        </TelaLaranja>

        {/* ---------- Categorias ---------- */}
        <TelaAmarela>
          <br />
          <Titulos style={{ color: "#711C6E" }}>Categorias</Titulos>
          <br />
        </TelaAmarela>

        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <CentralizaCarrossel>
            <Carousel fade>
              <Carousel.Item interval={5000}>
                <Link to={`/categoria/1`}>
                  <ImagemCarrosselCategorias
                    className="d-block"
                    src={Moveis}
                    alt="Móveis"
                  />
                </Link>

                <Carousel.Caption>
                  <h3>Móveis</h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "#ffffffbd",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Funcionalidade e economia para transformar seus espaços.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <Link to={`/categoria/2`}>
                  <ImagemCarrosselCategorias
                    className="d-block"
                    src={Alimentos}
                    alt="Alimentos"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>Alimentos</h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "#ffffffbd",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Doações deliciosas e nutritivas para sua rotina alimentícia.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <Link to={`/categoria/3`}>
                  <ImagemCarrosselCategorias
                    className="d-block"
                    src={Pelucias}
                    alt="Infantil"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>Infantil</h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "#ffffffbd",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Diversão e conforto para acompanhar o crescimento dos
                    pequenos.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <Link to={`/categoria/4`}>
                  <ImagemCarrosselCategorias
                    className="d-block"
                    src={Roupas}
                    alt="Roupas"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>Roupas</h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "#ffffffbd",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Moda acessível e versátil para todas as idades.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <Link to={`/categoria/5`}>
                  <ImagemCarrosselCategorias
                    className="d-block"
                    src={Sapatos}
                    alt="Sapatos"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>Sapatos</h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "#ffffffbd",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Passos cheios de estilo sem gastar muito.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item interval={5000}>
                <Link to={`/categoria/6`}>
                  <ImagemCarrosselCategorias
                    className="d-block"
                    src={ItensDiversificados}
                    alt="Itens Diversificados"
                  />
                </Link>
                <Carousel.Caption>
                  <h3>Itens Diversificados</h3>
                  <p
                    style={{
                      fontSize: "1rem",
                      backgroundColor: "#ffffffbd",
                      color: "black",
                      borderRadius: "10px",
                    }}
                  >
                    Tudo o que você precisa em um só lugar.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </CentralizaCarrossel>
        </div>

        {/* ---------- Footer ---------- */}
        <footer
          className="text-white text-center text-lg-start mt-5"
          style={{
            width: "100%",
            backgroundColor: "#2c6b74",
            fontFamily: "Josefin Slab, serif",
          }}
        >
          <div className="container-fluid p-4">
            <div className="container">
              <div className="row mt-2 justify-content-end">
                <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-2">Navegação</h5>
                  <p className="mb-4">Clique para acessar o que deseja:</p>

                  {/* Instagram */}
                  <Link
                    to={`https://www.instagram.com/galpaodobem?igsh=a3Y1ZGNycjRid2F1`}
                    style={{ textDecoration: "none" }}
                  >
                    <Instagram2
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "10px",
                        marginBottom: "10px",
                        color: "white",
                      }}
                    >
                      <a
                        className="btn btn-floating btn-light"
                        style={{
                          borderRadius: "100%",
                          width: "40px",
                          height: "40px",
                          padding: "0",
                        }}
                      >
                        <IconsFooter
                          src={Instagram}
                          style={{ marginTop: "7px" }}
                        />
                      </a>
                      <p style={{ margin: 0 }}>@galpaodobem.mirandopolis</p>
                    </Instagram2>
                  </Link>

                  {/* Facebook */}
                  <Link
                    to={`https://www.facebook.com/profile.php?id=100064873982977`}
                    style={{ textDecoration: "none" }}
                  >
                    <FacebookIcon
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: "10px",
                        color: "white",
                      }}
                    >
                      <a
                        className="btn btn-floating btn-light"
                        style={{
                          borderRadius: "100%",
                          width: "40px",
                          height: "40px",
                          padding: "0",
                        }}
                      >
                        <IconsFooter
                          src={Facebook}
                          style={{ marginTop: "6px" }}
                        />
                      </a>
                      <p style={{ margin: 0 }}>galpaodobem.mirandopolis</p>
                    </FacebookIcon>
                  </Link>
                </div>

                {/* Canais */}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4 pb-1">
                    Canais de Atendimento
                  </h5>
                  <ul className="fa-ul" style={{ marginLeft: "-5%" }}>
                    <li className="mb-3">
                      Rua Rafael Pereira, 628, Centro - Mirandópolis
                    </li>

                    <li className="mb-3">galpaodobem@hotmail.com</li>
                    <li className="mb-3">+55 (18) 99177-8800</li>
                  </ul>
                </div>

                {/* Horários */}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-4">
                    Horários de funcionamento
                  </h5>
                  <table
                    className="text-center text-white"
                    style={{
                      backgroundColor: "#1a4f56ff",
                      width: "100%",
                      maxWidth: "320px",
                      borderRadius: "15px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td>Seg - Qua:</td>
                        <td>8h - 17h30</td>
                      </tr>
                      <tr>
                        <td>Sexta - Sáb:</td>
                        <td>8h - 17h30</td>
                      </tr>
                      <tr>
                        <td>Domingo:</td>
                        <td>9h - 10h</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Rodapé  */}
          <div
            style={{
              width: "100%",
              backgroundColor: "#1a4f56ff",
            }}
          >
            <GalpConfig>
              <div className="text-center p-3">© 2025 SENAI</div>
              <div className="text-center p-3">Com amor: Milena, Maria Isabel, Giovana, Isabela e Clara🤍</div>
            </GalpConfig>
          </div>
        </footer>
      </Container>
    </>
  );
}
