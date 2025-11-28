import styled from "styled-components";
import "@fontsource/josefin-slab";
import Back from "../../../icons/backIcon.svg";
import Delete from "../../../icons/deleteIcon.svg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import { id } from "date-fns/locale";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fef5c8;
`;

const BotaoDelete = styled.button`
  width: 40px;
  height: 40px;
  border: none;

  background-color: #ff5024;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;
const IconsButton = styled.img`
  width: 20px;
  margin-bottom: 3px;
  @media (max-width: 600px) {
    width: 11px;
    height: 11px;
  }
`;

const ContainerAzul = styled.div`
  width: 97%;
  height: 700px;
  background-color: #8ccdd6;
  margin: 20px;
  align-items: center;
  text-align: center;
`;

const Background = styled.div`
  background-color: #fef5c8;
  min-height: 100vh;
`;

const Tabela = styled.div`
  margin: 20px;
`;

const P = styled.p`
  font-family: Josefin Slab, serif;
  color: #2c6b74;
  margin-left: 1300px;
  margin-top: 20px;
  font-weight: bold;
`;

const H1 = styled.h1`
  font-family: Josefin Slab, serif;
  color: #2c6b74;
  margin-top: 20px;
  font-weight: bold;
`;

const H6 = styled.h6`
  font-family: Josefin Slab, serif;
  color: #2c6b74;
  margin-bottom: 5vh;
  font-weight: bold;
`;

const Voltar = styled.h2`
  font-size: 19px;
  margin-top: 10px;
  font-weight: bold;
  color: white;
`;

const BotãoVoltar = styled.div`
  width: 150px;
  height: 40px;
  background-color: #409fadff;
  text-align: center;
  display: flex;
  border-radius: 50px;
  margin-top: 10px;
  margin-left: 10px;
`;
const Icons = styled.img`
  width: 20px;
  margin-left: 5px;
  margin-right: 25px;
`;

const Td = styled.td``;

export default function TabelaProdutoProprietario() {
  const [produto, setProduto] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [prioridade, setprioridade] = useState([]);
  const { id_produto } = useParams();
  const { codigo } = useParams();
  const [error, setError] = useState("");
  const [nome, setNome] = useState([]);
  const [telefone, setTelefone] = useState([]);
  const [email, setEmail] = useState([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);
  const [dados, setDados] = useState("");
  const [produtos, setProdutos] = useState([]);

  const navigate = useNavigate();

  // Primeiro useEffect: Buscar o ID do usuário

  useEffect(() => {
    const buscarProdutoEprioridade = async () => {
      try {
        const responseProduto = await fetch(
          // `http://localhost:3000/produtos/getProdutoPorId/${id_produto}`
          `https://pbegalpaodobem.vercel.app/produtos/getProdutoPorId/${id_produto}`
        );
        if (!responseProduto.ok) {
          throw new Error("Produto não encontrado.");
        }
        const dataProduto = await responseProduto.json();
        setProduto(dataProduto);

        const responseprioridade = await fetch(
          `https://pbegalpaodobem.vercel.app/prioridade/getPrioridadePorID/${id_produto}`
        );

        if (!responseprioridade.ok) {
          const errorData = await responseprioridade.json();
          throw new Error(
            errorData.message ||
              `Erro ao buscar prioridade (Status: ${responseprioridade.status})`
          );
        } else {
          const dataprioridade = await responseprioridade.json();
          setprioridade(dataprioridade);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    buscarProdutoEprioridade();
  }, [id_produto]);

  if (loading) {
    return <div>Carregando produto e prioridade...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!produto) {
    return <div>Produto não encontrado ou dados não carregados.</div>;
  }

  const deletarInteresse = async (codigo) => {
    // if (
    //   !window.confirm(
    //     `Tem certeza que deseja excluir esse usuário? Esta ação é irreversível.`
    //   )
    // ) {
    //   return;
    // }

    try {
      const response = await fetch(
        `https://pbegalpaodobem.vercel.app/prioridade/deletarInteresse/${prioridade[0].codigo}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.Mensagem || "Falha ao deletar usuário.");
      }

      // FORÇA RELOAD
      navigate(`/tabelaProprietario/${id_produto}`);
      window.location.reload();
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
    }
  };

  if (loading) {
    return (
      <Container style={{ padding: "20px" }}>Carregando usuarios...</Container>
    );
  }

  if (error) {
    return (
      <Container style={{ padding: "20px" }}>
        Erro ao carregar usuarios: {error}
      </Container>
    );
  }

  return (
    <Background>
      <ContainerAzul>
        <br />

        <Link to={`/produtoproprietario`} style={{ textDecoration: "none" }}>
          <BotãoVoltar>
            <Icons src={Back} />
            <Voltar>Voltar</Voltar>
          </BotãoVoltar>
        </Link>

        <br />

        <H1>Tabela de prioridade para: {produto.nome_produto || "Produto"}</H1>
        <H6>
          O intuito dessa tabela é organizar a prioridade na aquisição do item
          seguindo a ordem de que o interesse foi demonstrado. <br /> Assim, a
          primeira posição pode negociar e adquirir o item no endereço a seguir:
          <br />
        </H6>
<div style={{backgroundColor:"#2C6B74"}}>
        <h5 style={{ color: "#def6faff", fontWeight: "bold" }}>
          Vire a tela se necessário
        </h5></div>

        <Tabela>
          <table
            className="table table-hover"
            style={{ border: "solid 2px #2C6B74" }}
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                    width: "10%",
                  }}
                >
                  POSIÇÃO
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                  }}
                >
                  DATA
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                  }}
                >
                  HORÁRIO
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                  }}
                >
                  NOME
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                  }}
                >
                  EMAIL
                </th>
                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                  }}
                >
                  NÚMERO DE CONTATO
                </th>

                <th
                  scope="col"
                  style={{
                    backgroundColor: "#2C6B74",
                    color: "#fff",
                    border: "solid 1.5px #fff",
                  }}
                ></th>
              </tr>
            </thead>
            <tbody>
              {prioridade.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    style={{
                      backgroundColor: "#55aab7",
                      color: "#fff",
                      padding: "15px",
                    }}
                  >
                    Nenhum interessado registrado.
                  </td>
                </tr>
              ) : (
                prioridade.map((interessado, index) => (
                  <tr key={interessado.posicao}>
                    <th
                      scope="row"
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                        padding: "10px",
                      }}
                    >
                      {interessado.posicao}
                    </th>

                    <td
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                        padding: "10px",
                      }}
                    >
                      {interessado.data
                        ? new Date(interessado.data).toLocaleDateString("pt-BR")
                        : "N/A"}
                    </td>

                    <td
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                        padding: "10px",
                      }}
                    >
                      {interessado.horario
                        ? new Date(
                            `2000/01/01 ${interessado.horario}`
                          ).toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "N/A"}
                    </td>

                    <td
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                        padding: "10px",
                      }}
                    >
                      {interessado.nome || `Interessado ${interessado.posicao}`}
                    </td>

                    <td
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                        padding: "10px",
                      }}
                    >
                      {interessado.email || ` ${interessado.email}`}
                    </td>

                    <td
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                        padding: "10px",
                      }}
                    >
                      {interessado.telefone || ` ${interessado.telefone}`}
                    </td>

                    <Td
                      style={{
                        backgroundColor: "#2C6B74",
                        color: "#fff",
                        border: "solid 1.5px #fff",
                      }}
                    >
                      <BotaoDelete
                        onClick={() => deletarInteresse(prioridade.codigo)}
                      >
                        <IconsButton src={Delete} />
                      </BotaoDelete>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>{" "}
          </table>
        </Tabela>
      </ContainerAzul>
    </Background>
  );
}
