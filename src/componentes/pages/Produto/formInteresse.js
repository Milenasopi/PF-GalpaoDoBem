import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";

const Container2 = styled.div`
  justify-content: center;
  display: flex;
  background-color: #8ccdd6;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8ccdd6;
`;
const Campos = styled.div``;
const Input = styled.input`
  background-color: #fef5c8;
  border: 0;
  border-radius: 5px;
  height: 60px;
  width: 560px;

  @media (max-width: 600px) {
    height: 20px;
  }
`;
const Categorias = styled.div`
  display: flex;
  justify-content: center;
`;

const Botoes = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Botao = styled.button`
  width: 290px;
  height: 60px;
  border: none;
  border-radius: 5px;

  // Celular
  @media (max-width: 600px) {
    width: 90px;
    height: 30px;
  }

  // Tablets pequenos
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 110px;
    height: 40px;
  }
`;
const Centralizar = styled.div``;

const Select = styled.select`
  background-color: #fef5c8;
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 260px;
  margin-top: 150px;
`;

const Option = styled.option`
  background-color: #fef5c8;
  border: none;
`;
const Voltar2 = styled.h2`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;

  @media (max-width: 640px) {
    font-size: 16px;
    margin-top: 8px;
  }
`;

const BotaoVoltar = styled.div`
  width: 150px;
  height: 40px;
  background-color: #e47e5cff;
  text-align: center;
  display: flex;
  border-radius: 50px;
  margin-top: 10px;
  margin-left: 10px;

  @media (max-width: 640px) {
    width: 140px;
    height: 30px;
    background-color: #e47e5cff;
    text-align: center;
    display: flex;
    border-radius: 50px;
    margin-top: 10px;
    margin-left: 10px;
  }
`;

const Icons = styled.img`
  width: 20px;
  margin-left: 7px;
  margin-right: 4px;
`;

const Voltar = styled.h2`
  font-size: 20px;
  margin-top: 10px;
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
  margin-left:10px;
 
  
  }
`;

const QuadAviso = styled.div`
  height: 24px;

  background-color: #ffe55e;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 640px) {
    height: 35px;
  }
`;

const Aviso = styled.p`
  font-size: 18px;
  color: #000000ff;

  @media (max-width: 640px) {
    font-size: 13px;
    width: 300px;
  }
`;

export default function DemonstrarInteresseProduto() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const { id_produto } = useParams();

  const [produto, setProduto] = useState([]);
  const [error, setError] = useState("");

  const [nome, setNome] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [email, setEmail] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const response = await fetch(
          `http://pbegalpaodobem.vercel.app/produtos/getProdutoPorId/${id_produto}`
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

  const executaSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErro("");

    try {
      const resposta = await fetch("http://pbegalpaodobem.vercel.app/usuarios/registrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ nome, telefone, email }),
      });

      console.log(resposta.toString);
      const dados = await resposta.json();      
       

      if (resposta.ok) {
        localStorage.setItem('usuario', JSON.stringify(email));
        navigate(`/adicionaInteresse/${produto.id_produto}`);
      } else {
        setErro(
          dados.message ||
            "Erro ao fazer o cadastro de interesse. Tente novamente"
        );
      }
    } catch (e) {
      console.log("Falha ao conectar a API", erro);
      setErro("Não foi possível conectar ao servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <br />
      <br />
      <br />
      <QuadAviso>
        <Aviso>
          Caso não tenha um e-mail, escreva "Não tenho", responda nome e
          telefone para assim clicar em "Salvar"
        </Aviso>
      </QuadAviso>

      <form onSubmit={executaSubmit}>
        <br />

        <div
          class="d-flex"
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "10vh",
          }}
        >
          <div class="mb-3" style={{ width: "60%", margin: "center" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Nome completo
            </label>
            <input
              type="text"
              class="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
                border: "1px solid #0000005c",
              }}
              value={nome}
              id="nome"
              name="nome"
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div class="mb-3" style={{ width: "60%", margin: "auto" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Número de contato
            </label>
            <input
              type="text"
              class="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
              }}
              id="telefone"
              name="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>

          <div class="mb-3" style={{ width: "60%", margin: "auto" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="text"
              class="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
              }}
              value={email}
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div class="d-flex" style={{ justifyContent: "center" }}>
          <Link
            to={`/produto/${produto.id_produto}`}
            style={{ textDecoration: "none" }}
          >
            <button
              type="button"
              class="btn btn-lg"
              style={{ backgroundColor: "#e57753", marginRight: "5px" }}
            >
              Voltar
            </button>
          </Link>

          
            <button
              type="submit"
              class="btn btn-lg"
              style={{ backgroundColor: "#b3d66c" }}
            >
              {loading ? "Cadastrando..." : "Salvar"}
            </button>
          
        </div>
      </form>
    </Container>
  );
}
