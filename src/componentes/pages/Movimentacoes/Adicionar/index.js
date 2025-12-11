import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function AdicionarMovimentacao() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  const [id_usuario, setIdUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [id_tipo_pagamento, setIdTipoPagamento] = useState("");
  const [tipoPagamentos, setTipoPagamentos] = useState([]);
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const [data_movimentacao, setDataMovimentacao] = useState(
    new Date().toISOString().split("T")[0]
  );

  const navigate = useNavigate();

  // useEffect para carregar api e acessar dados de usuarios
  useEffect(() => {
    const fetchUsuarios = async () => {
      // tratamento de excessao
      try {
        const resposta = await fetch(
          "http://localhost:3000/usuarios/getTodosUsers"
        );
        // se nao der certo entra nesse bloco
        if (!resposta.ok) {
          throw new Error("Falha ao buscar usuários");
        }
        const dados = await resposta.json();
        // setErro(dados.erro + ": " + dados.detalhe);
        // colocar users dentro de uma array
        setUsuarios(dados);
      } catch (erro) {
        console.log("Erro ao buscar usuários", erro);
        setErro("Erro ao buscar usuários" + erro);
      }
    };

    fetchUsuarios();
  }, []);

  useEffect(() => {
    const fetchPagamentos = async () => {
      // tratamento de excessao
      try {
        const resposta = await fetch(
          "http://localhost:3000/tipoPagamento/getTipoPagamento"
        );
        // se nao der certo entra nesse bloco
        if (!resposta.ok) {
          throw new Error("Falha ao buscar pagamentos");
        }
        const dados = await resposta.json();
        // setErro(dados.erro + ": " + dados.detalhe);
        // colocar users dentro de uma array
        setTipoPagamentos(dados);
      } catch (erro) {
        console.log("Erro ao buscar tipo de pagamentos", erro);
        setErro("Erro ao buscar tipo de pagamentos" + erro);
      }
    };

    fetchPagamentos();
  }, []);

  const execSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErro("");
    try {
      const resposta = await fetch(
        "http://localhost:3000/movimentacoes/adicionar",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            descricao,
            valor,
            tipo,
            data_movimentacao,
            id_usuario,
            id_tipo_pagamento,
          }),
        }
      );
      console.log(resposta.toISOString);
      const dados = await resposta.json();
      setErro(dados.erro + ": " + dados.detalhe);

      if (resposta.ok) {
        console.log("Dados api", dados);
        navigate("/dashboard");
      } else {
        setErro(dados.message ||  "Erro ao fazer o cadastro.");
      }
    } catch (erro) {
      console.log("Falha ao conectar a API", erro);
      setErro("Erro ao conectar a API" + erro);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <Link
          className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          style={{ color: "white", display: "flex" }}
          to="/dashboard"
        >
          <i
            class="bi bi-arrow-left-circle-fill"
            style={{ color: "white", marginBottom: "40px", fontSize: "20px", position: "absolute"}}
          >
            Voltar
          </i>
        </Link>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div
              className="car shadow-sm"
              style={{
                borderColor: "white",
                border: "1px solid white",
                // backgroundColor: "#FFE5AD",
                backgroundColor: "rgba(255, 255, 255, 0.52)",
                boxShadow:"5px 4px 8px rgba(255, 255, 255, 0.58)"
              }}
            >
              <div className="card-body p-4" style={{ backgroundColor:" rgba(255, 255, 255, 0.19)", boxShadow:"2px 0px 8px rgba(255, 255, 255, 0.58)"}}>
                <h2
                  className="card-title text-center mb-4"
                  style={{
                    color: "rgb(91, 2, 169)",
                    fontFamily: "comicsans",
                    // textShadow: "1px 3px 0 white",
                  }}
                >
                  {" "}
                  Adicionar nova movimentação
                </h2>
                <form onSubmit={execSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="descricao" style={{ color: "rgb(120, 15, 212)", fontSize: "18px"}}>
                      Descrição
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="descricao"
                      onChange={(e) => setDescricao(e.target.value)}
                      placeholder="Ex.: Recebimento do salário"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="valor" style={{color: "rgb(120, 15, 212)", fontSize: "18px"}}>
                      Valor
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id="valor"
                      onChange={(e) => setValor(e.target.value)}
                      placeholder="Ex.: 1500,00"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="tipo" style={{color: "rgb(120, 15, 212)",  fontSize: "18px"}}>
                      Tipo Movimentação
                    </label>
                    <select
                      className="form-select"
                      id="tipo"
                      onChange={(e) => setTipo(e.target.value)}
                      required
                    >
                      <option value="select">Selecione o tipo</option>
                      <option value="entrada">entrada</option>
                      <option value="saida">saída</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dataMovimentacao" className="form-label" style={{ color: "rgb(120, 15, 212)",  fontSize: "18px"}}>
                      Data da Movimentação
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="dataMovimentacao"
                      value={data_movimentacao}
                      onChange={(e) => setDataMovimentacao(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="id_usuario" style={{color: "rgb(120, 15, 212)",  fontSize: "18px"}}>
                      Usuário
                    </label>
                    <select
                      className="form-select"
                      id="id_usuario"
                      onChange={(e) => setIdUsuario(e.target.value)}
                      value={id_usuario}
                      required
                    >
                      <option value="select">Selecione o usuário</option>
                      {usuarios.map((usuario) => (
                        <option value={usuario.id} key={usuario.id}>
                          {usuario.nome}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="id_tipo_pagamento" className="form-label" style={{ color: "rgb(120, 15, 212)", fontSize: "18px"}}>
                      Tipo de Pagamento
                    </label>{" "}
                    {/* Corrigido */}
                    <select
                      className="form-select"
                      id="id_tipo_pagamento" // Corrigido
                      value={id_tipo_pagamento}
                      onChange={(e) => setIdTipoPagamento(e.target.value)}
                      required
                    >
                      <option value="">Selecione o tipo de pagamento</option>
                      {/* Verifica se tipoPagamentos é um array antes de mapear */}
                      {Array.isArray(tipoPagamentos) &&
                        tipoPagamentos.map((tipo) => (
                          <option
                            key={tipo.id_tipo_pagamento}
                            value={tipo.id_tipo_pagamento}
                          >
                            {tipo.nome_tipo_pagamento}
                          </option>
                        ))}
                    </select>
                  </div>

                  {erro && (
                    <div className="alert alert-danger" role="alert">
                      {erro}
                    </div>
                  )}

                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      to="/dashboard" style={{backgroundColor:"rgb(77, 172, 210)", color:"white" }}>
                      {loading ? "Cadastrando..." : "Salvar"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
