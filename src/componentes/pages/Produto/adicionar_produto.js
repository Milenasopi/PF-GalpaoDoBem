import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import uploadImagemSupabase from "../../../services/uploadImagemSupabase";

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

// --- FUNÇÃO AUXILIAR DE CONVERSÃO DE ARQUIVO PARA BASE64 ---
//Converte um objeto File (Imagem/PDF) em uma string Base64 Data URL
const converterParaBase64 = (arquivo) => {
  return new Promise((resolver, rejeitar) => {
    const leitor = new FileReader();
    leitor.readAsDataURL(arquivo);
    leitor.onload = () => resolver(leitor.result);
    leitor.onerror = (erro) => rejeitar(erro);
  });
};

export default function AdicionarProduto() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [id_produto, setIdProduto] = useState([]);
  const [nome_produto, setNomeProduto] = useState([]);
  const [preco_produto, setPrecoProduto] = useState([]);
  const [descricao_produto, setDescricaoProduto] = useState([]);
  const [imagem_produto, setImagemProduto] = useState(null);
  const [id_categoria, setIdCategoria] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const buscarCategorias = async () => {
      try {
        const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${API_BASE_URL}/categorias/getCategorias`);
        if (!response.ok) {
          throw new Error("Falha ao carregar categorias.");
        }
        const data = await response.json();
        setCategorias(data);
        // Define a primeira categoria como padrão
        if (data.length > 0) {
          setIdCategoria(data[0].id_categoria);
        }
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    buscarCategorias();
  }, []);

  async function executaSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setErro("");

    try {
      // alert("Antes do upload", imagem_produto);
      // 1 - Upload direto para o Supabase
      const urlImagem = await uploadImagemSupabase(imagem_produto);
      // alert("pós upload", urlImagem);
      if (!urlImagem) {
        setErro("Erro ao enviar imagem");
        return;
      }

      // alert("pós upload");
      const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
      // 2 - Enviar apenas o link para o backend
      const resposta = await fetch(
        `${API_BASE_URL}/produtos/adicionarProduto`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nome_produto,
            preco_produto,
            descricao_produto,
            imagem_produto: urlImagem, // <-- SOMENTE O LINK
            id_categoria,
          }),
        }
      );
      // alert("Pos rota");
      const dados = await resposta.json();
      // alert("Dados", dados);
      if (resposta.ok) {
        navigate("/produtoproprietario");
      } else {
        setErro(dados.message || "Erro ao cadastrar produto.");
      }
    } catch (e) {
      console.log("Falha ao conectar à API", e);
      setErro("Não foi possível conectar ao servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <form onSubmit={executaSubmit}>
        <br />
        <div
          class="mb-3"
          style={{
            margin: "auto",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Select
            value={id_categoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            required
          >
            <Option value="" disabled>
              Selecione uma categoria
            </Option>
            {categorias.map((categoria) => (
              <Option
                key={categoria.id_categoria}
                value={categoria.id_categoria}
              >
                {categoria.nome_categoria}
              </Option>
            ))}
          </Select>
        </div>

        <div class="d-flex" style={{ justifyContent: "center" }}>
          <div class="mb-3" style={{ width: "60%" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Nome do produto
            </label>
            <input
              type="text"
              class="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
              }}
              value={nome_produto}
              onChange={(e) => setNomeProduto(e.target.value)}
              required
            />
          </div>

          <div class="mb-3" style={{ width: "15%", marginLeft: "5%" }}>
            <label for="exampleFormControlInput1" class="form-label">
              Valor
            </label>
            <input
              type="text"
              class="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
              }}
              value={preco_produto}
              onChange={(e) => setPrecoProduto(e.target.value)}
              required
            />
          </div>
        </div>

        <div class="mb-3" style={{ width: "80%", margin: "auto" }}>
          <label for="exampleFormControlInput1" class="form-label">
            Descrição
          </label>
          <input
            type="text"
            class="form-control"
            style={{
              backgroundColor: "#fef5c8",
              fontFamily: "Josefin Slab, serif",
            }}
            value={descricao_produto}
            onChange={(e) => setDescricaoProduto(e.target.value)}
            required
          />
        </div>

        <div class="mb-3" style={{ width: "80%", margin: "auto" }}>
          <label for="exampleFormControlInput1" class="form-label">
            Imagem
          </label>
          <input
            type="file"
            accept="image/*"
            class="form-control"
            style={{
              backgroundColor: "#fef5c8",
              fontFamily: "Josefin Slab, serif",
            }}
            // value={imagem_produto}
            onChange={(e) => setImagemProduto(e.target.files[0])}
            required
            placeholder="coloque a URL"
          />
        </div>

        {/* <div class="mb-3" style={{ width: "80%", margin: "auto" }}>
        <label for="exampleFormControlTextarea1" class="form-label">
          Detalhes do produto
        </label>
        <textarea
          class="form-control"
          rows="3"
          style={{ backgroundColor: "#fef5c8" }}
        ></textarea>
      </div> */}

        <div class="d-flex" style={{ justifyContent: "center" }}>
          <Link to="/produtoproprietario" style={{ textDecoration: "none" }}>
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
            {" "}
            {loading ? "Cadastrando..." : "Salvar"}
          </button>
        </div>
      </form>
    </Container>
  );
}
