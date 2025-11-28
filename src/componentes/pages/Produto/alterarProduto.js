import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const converterParaBase64 = (arquivo) => {
  if (!arquivo) return Promise.resolve(null);

  return new Promise((resolver, rejeitar) => {
    const leitor = new FileReader();
    leitor.readAsDataURL(arquivo);
    leitor.onload = () => resolver(leitor.result);
    leitor.onerror = (erro) => rejeitar(erro);
  });
};

const atualizarProdutoApi = async (id_produto, dadosProduto) => {
  try {
    const resposta = await fetch(
      `http://pbegalpaodobem.vercel.app/produtos/atualizaProduto/${id_produto}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosProduto),
      }
    );

    if (!resposta.ok) {
      const erroData = await resposta.json();
      throw new Error(erroData.Mensagem || "Falha na atualização do produto.");
    }

    return await resposta.json();
  } catch (erro) {
    console.error("Erro ao atualizar dados na API", erro);
    throw erro;
  }
};

const fetchProdutoPorId = async (id) => {
  try {
    const response = await fetch(
      `http://pbegalpaodobem.vercel.app/produtos/getProdutoPorId/${id}`
    );

    if (!response.ok) {
      throw new Error("Produto não encontrado.");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produto por ID", error);
    throw error;
  }
};

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
  text-align: center;
  display: flex;
  border-radius: 50px;
  margin-left: 10px;
  text-decoration: none;
`;

export default function AlterarProduto() {
  let params = useParams();
  let id_produto = params.id_produto;
  const navigate = useNavigate();

  const [formDados, setFormDados] = useState({
    nome_produto: "",
    preco_produto: "",
    descricao_produto: "",
    imagem_produto: "",
    id_categoria: "",
  });

  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const [imagemFile, setImagemFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    const buscarCategorias = async () => {
      try {
        const response = await fetch(
          "http://pbegalpaodobem.vercel.app/categorias/getCategorias"
        );
        const data = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };
    buscarCategorias();
  }, []);

  useEffect(() => {
    if (!id_produto) {
      setErro("ID do produto não encontrado na URL.");
      setLoading(false);
      return;
    }

    const carregarProduto = async () => {
      try {
        const data = await fetchProdutoPorId(id_produto);

        setFormDados({
          nome_produto: data.nome_produto || "",
          preco_produto: data.preco_produto
            ? data.preco_produto.toString()
            : "",
          descricao_produto: data.descricao_produto || "",
          imagem_produto: data.imagem_produto || "",
          id_categoria: data.id_categoria ? Number(data.id_categoria) : "",
        });
      } catch (err) {
        setErro(`Erro ao carregar produto: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    carregarProduto();
  }, [id_produto]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImagemFile(file);

      const newPreviewUrl = URL.createObjectURL(file);
      if (previewUrl && !previewUrl.startsWith("http")) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl(newPreviewUrl);
    } else {
      setImagemFile(null);
      setPreviewUrl(formDados.imagem_produto);
    }
  };

  const handleSalvarEdicao = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setErro(null);

    let imagemParaAPI = formDados.imagem_produto;

    try {
      // Conversão de Base64
      if (imagemFile) {
        imagemParaAPI = await converterParaBase64(imagemFile);
      }

      const dadosParaAPI = {
        ...formDados,
        preco_produto: parseFloat(formDados.preco_produto) || 0,
        imagem_produto: imagemParaAPI, // Envia o Base64 (novo) OU a URL (antiga)
      };

      await atualizarProdutoApi(id_produto, dadosParaAPI);

      navigate("/produtoproprietario");
    } catch (error) {
      setErro(`Falha ao salvar edição: ${error.message}.`);
      console.error("Erro completo:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <Container style={{ paddingTop: "50px", textAlign: "center" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Carregando...</span>
        </div>
        <p>Carregando dados do produto...</p>
      </Container>
    );
  }

  if (erro) {
    return (
      <Container style={{ paddingTop: "50px", textAlign: "center" }}>
        <div className="alert alert-danger" role="alert">
          {erro}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <form onSubmit={handleSalvarEdicao}>
        <br />

        <div
          className="mb-3"
          style={{
            margin: "auto",
            alignContent: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Select
            name="id_categoria"
            value={formDados.id_categoria}
            onChange={handleInputChange}
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

        <div className="d-flex" style={{ justifyContent: "center" }}>
          <div className="mb-3" style={{ width: "60%" }}>
            <label className="form-label">Nome do produto</label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
              }}
              name="nome_produto"
              value={formDados.nome_produto}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-3" style={{ width: "15%", marginLeft: "5%" }}>
            <label className="form-label">Valor</label>
            <input
              type="text"
              className="form-control"
              style={{
                backgroundColor: "#fef5c8",
                fontFamily: "Josefin Slab, serif",
              }}
              name="preco_produto"
              value={formDados.preco_produto}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-3" style={{ width: "80%", margin: "auto" }}>
          <label className="form-label">Descrição</label>
          <input
            type="text"
            className="form-control"
            style={{
              backgroundColor: "#fef5c8",
              fontFamily: "Josefin Slab, serif",
            }}
            name="descricao_produto"
            value={formDados.descricao_produto}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* CORREÇÃO: Input de arquivo chama handleImageChange */}
        <div className="mb-3" style={{ width: "80%", margin: "auto" }}>
          <label className="form-label">Imagem</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            style={{
              backgroundColor: "#fef5c8",
              fontFamily: "Josefin Slab, serif",
            }}
            name="imagem_produto"
            onChange={handleImageChange}
            placeholder="Selecione um novo arquivo para alterar"
          />
        </div>

        <div className="d-flex" style={{ justifyContent: "center" }}>
          <Link to="/produtoproprietario" style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="btn btn-lg"
              style={{ backgroundColor: "#e57753", marginRight: "5px" }}
            >
              Voltar
            </button>
          </Link>

          <button
            type="submit"
            className="btn btn-lg"
            disabled={isUpdating}
            style={{ backgroundColor: "#b3d66c" }}
          >
            {isUpdating ? "Salvando..." : "Salvar Alterações"}
          </button>
        </div>
      </form>
    </Container>
  );
}
