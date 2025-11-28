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

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #8ccdd6;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const QuadDivAmarela = styled.div`
  height: 200px;
  width: 700px;
  background-color: #ffe55e;

  border: 3px solid #2c6b74;
  border-radius: 40px;
  align-items: center;
  box-shadow: 10px 7px 2px #2c6a748c;
  text-align: center;

  @media (max-width: 640px) {
     height: 150px;
 width: 350px;

  }
`;

const Desejaconfirmar = styled.p`
  font-size: 26px;
  color: #000000ff;
  text-align: center;

  margin-top:7%;

  @media (max-width: 640px) {
    font-size: 20px;
    
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
  const [idUsuario, setIdUsuario] = useState(null);
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

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const usuarioString = localStorage.getItem("usuario");
        if (!usuarioString) {
          console.log("Usuario não encontrado no localStorage");
          return;
        }

        const emailDoUsuario = JSON.parse(usuarioString);

        const resposta = await fetch(
          `http://pbegalpaodobem.vercel.app/usuarios/getUsuarioPorEmail/${emailDoUsuario}`
        );

        if (!resposta.ok) {
          const erroDados = await resposta.json().catch(() => ({}));
          setError(
            erroDados.message ||
              `Erro ao buscar Usuário: Status ${resposta.status}`
          );
          return; 
        }
        const dados = await resposta.json();

        setIdUsuario(dados.id);

      } catch (erro) {
        console.error("Falha na conexão ou erro inesperado:", erro);
        setError(
          "Não foi possível conectar ao servidor ou houve um erro inesperado."
        );
        throw erro;
      }
    };
    buscarUsuario();
  }, []);

  const executaSubmit = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch(
        "http://pbegalpaodobem.vercel.app/prioridade/adicionarInteresse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            id_produto: id_produto,
            id: idUsuario,
          }),
        }
      );

      const dados = await resposta.json(); 

      if (resposta.ok) {
        navigate(`/tabelaProduto/${produto.id_produto}`);
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
      <form onSubmit={executaSubmit}>
      <QuadDivAmarela>
        
        <div>
          <Desejaconfirmar>Deseja confirmar interesse? </Desejaconfirmar>

          <Link to={`/forminteresse/${produto.id_produto}`} >
            <button
              type="button"
              className="btn btn-lg"
              style={{ backgroundColor: "#e57753", marginRight: "5px", color:"#fff" }}
            >
              Voltar
            </button>
          </Link>

          <button
            type="submit"
            className="btn btn-lg"
            style={{ backgroundColor: "#b3d66c", color:"#fff" }}
          >
            {loading ? "Confirmar" : "Confirmar"}
          </button>
        </div>
      </QuadDivAmarela>
      </form>
     
    </Container>
  );
}
