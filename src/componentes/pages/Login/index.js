// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import Galpao from "../../../img/Galpão.png";
// import "@fontsource/josefin-slab";
// import Back from "../../../icons/backIcon.svg";

// // acesso sem banco de dados
// const EMAIL_PROPRIETARIO = process.env.REACT_APP_EMAIL;
// const SENHA_PROPRIETARIO = process.env.REACT_APP_SENHA;

// const Container = styled.div`
//   min-height: 100vh;
//   align-items: center;
//   background-color: #8ccdd6;
//   padding: 20px;

// `;

// const Caixa = styled.div`
//   display: flex;
//   background: #2c6b74;
//   border-radius: 25px;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.23);
//   width: 100%;
//   max-width: 1000px;
//   margin-top:6%;

//   @media (max-width: 640px) {
//     flex-direction: column;
//     margin-top:15%;
//   }
// `;

// const Moldura = styled.div`
//   padding: 40px;
//   width: 100%;
//   max-width: 400px;

//   @media (max-width: 768px) {
//     padding: 20px;
//     max-width: 100%;
//     order: 2;
//   }
// `;

// const Imagem = styled.div`
//   width: 70%;
//   border-radius: 25px;
//   background-size: cover;
//   background-position: center;
//   background-image: url(${(props) => props.image});

//   @media (max-width: 768px) {
//     width: 100%;
//     height: 250px;
//     border-top-right-radius: 25px;
//     border-bottom-left-radius: 0;
//     border-bottom-right-radius: 0;
//     order: 1;
//   }
// `;

// const Botoes = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 8px;
//   margin-top: 40px;
// `;

// const Voltar = styled.h2`
//   font-size: 20px;
//   margin-top:10px;
//   font-weight: bold;
//   text-decoration: none; 
//   color: #fff;
// `;

// const BotãoVoltar = styled.div`
//   width: 105px;
//   height: 40px;
//   background-color: #e47e5cff;
//   text-align:center;
//   display:flex;
//   border-radius:50px;
//   margin-top:10px;
//   margin-left:10px;
// `;
// const Icons = styled.img`
//   width: 20px;
//   margin-left:5px;
//   margin-right:5px;
// `;

// export default function LoginDaAtiv() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [erro, setErro] = useState("");
//   const [carregando, setCarregando] = useState(false);
//   const navegar = useNavigate();

//   const executarSubmit = (evento) => {
//     evento.preventDefault();
//     setCarregando(true);
//     setErro("");

//     const credenciaisCorretas = email === EMAIL_PROPRIETARIO && senha === SENHA_PROPRIETARIO;

//     setTimeout(() => {
//         if (credenciaisCorretas) {
//             navegar("/produtoproprietario");
//         } else {
//             setErro("E-mail ou senha incorretos. Por favor, tente novamente.");
//         }
//         setCarregando(false);
//     }, 1000); 
//   };

//   return (
    
//     <Container>
//     <Link to="/" style={{textDecoration: "none"}}>
//             <BotãoVoltar >
//                 <Icons src={Back} /><Voltar style={{textDecoration: "none"}}>Voltar</Voltar>
//             </BotãoVoltar>
//       </Link>

    

//       <div style={{display:"flex", justifyContent:"center"}}>
//       <Caixa>
//         <Moldura>
//           <h2
//             className="text-center mb-4"
//             style={{ color: "white", fontFamily: "Josefin Slab, serif" }}
//           >
//             Proprietário?
//           </h2>
//           <p style={{color:"white", textAlign:"center", marginTop:"-6%"}}>Acesse por aqui</p>
//           <form onSubmit={executarSubmit}>
//             <div className="mb-3">
//               <label
//                 htmlFor="email"
//                 className="form-label"
//                 style={{ color: "white", fontFamily: "Josefin Slab, serif" }}
//               >
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Insira seu E-mail"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={{ fontFamily: "Josefin Slab, serif" }}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label
//                 htmlFor="senha"
//                 className="form-label"
//                 style={{ color: "white", fontFamily: "Josefin Slab, serif" }}
//               >
//                 Senha
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="senha"
//                 placeholder="Insira sua senha"
//                 value={senha}
//                 onChange={(e) => setSenha(e.target.value)}
//                 style={{ fontFamily: "Josefin Slab, serif" }}
//                 required
//               />
//             </div>

//             <Botoes>
//               <button
//                 style={{
//                   width: "110px",
//                   height: "35px",
//                   color: "white",
//                   border: "2px solid #599aa3",
//                   backgroundColor: " #599aa3",
//                   borderRadius: "8px",
//                   fontSize: "20px",
//                   fontFamily: "Josefin Slab, serif",
//                 }}
//                 type="submit"
//                 disabled={carregando}
//               >
//                 {carregando ? "Entrando..." : "Entrar"}
//               </button>

//             </Botoes>
//           </form>
//         </Moldura>

//         <Imagem image={Galpao} />
        
//       </Caixa>
//       {erro && (
//         <div className="alert alert-danger fixed-bottom" role="alert">
//           {erro}
//         </div>
//       )}{" "}</div>
//     </Container>
//   );
// }

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Galpao from "../../../img/Galpão.png";
import "@fontsource/josefin-slab";
import Back from "../../../icons/backIcon.svg";

// acesso sem banco de dados
const EMAIL_PROPRIETARIO = process.env.REACT_APP_EMAIL;
const SENHA_PROPRIETARIO = process.env.REACT_APP_SENHA;

const Container = styled.div`
  min-height: 100vh;
  align-items: center;
  background-color: #8ccdd6;
  padding: 20px;
`;

const Caixa = styled.div`
  display: flex;
  background: #2c6b74;
  border-radius: 25px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.23);
  width: 100%;
  max-width: 1000px;
  margin-top: 6%;

  @media (max-width: 640px) {
    flex-direction: column;
    margin-top: 15%;
  }
`;

const Moldura = styled.div`
  padding: 40px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
    order: 2;
  }
`;

const Imagem = styled.div`
  width: 70%;
  border-radius: 25px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    order: 1;
  }
`;

const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
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
  margin-top: 10px;
  margin-left: 10px;
`;

const Icons = styled.img`
  width: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

export default function LoginDaAtiv() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navegar = useNavigate();

  // 🔥 impede valores automáticos do navegador
  useEffect(() => {
    setEmail("");
    setSenha("");
  }, []);

  const executarSubmit = (evento) => {
    evento.preventDefault();
    setCarregando(true);
    setErro("");

    const credenciaisCorretas =
      email === EMAIL_PROPRIETARIO && senha === SENHA_PROPRIETARIO;

    setTimeout(() => {
      if (credenciaisCorretas) {
        navegar("/produtoproprietario");
      } else {
        setErro("E-mail ou senha incorretos. Por favor, tente novamente.");
      }
      setCarregando(false);
    }, 800);
  };

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <BotãoVoltar>
          <Icons src={Back} />
          <Voltar>Voltar</Voltar>
        </BotãoVoltar>
      </Link>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Caixa>
          <Moldura>
            <h2
              className="text-center mb-4"
              style={{ color: "white", fontFamily: "Josefin Slab, serif" }}
            >
              Proprietário?
            </h2>
            <p style={{ color: "white", textAlign: "center", marginTop: "-6%" }}>
              Acesse por aqui
            </p>

            <form onSubmit={executarSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                  style={{ color: "white", fontFamily: "Josefin Slab, serif" }}
                >
                  E-mail
                </label>
                <input
                  type="email"
                  autoComplete="off"
                  className="form-control"
                  id="email"
                  placeholder="Insira seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontFamily: "Josefin Slab, serif" }}
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="senha"
                  className="form-label"
                  style={{ color: "white", fontFamily: "Josefin Slab, serif" }}
                >
                  Senha
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="senha"
                  placeholder="Insira sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  style={{ fontFamily: "Josefin Slab, serif" }}
                  required
                />
              </div>

              <Botoes>
                <button
                  style={{
                    width: "110px",
                    height: "35px",
                    color: "white",
                    border: "2px solid #599aa3",
                    backgroundColor: " #599aa3",
                    borderRadius: "8px",
                    fontSize: "20px",
                    fontFamily: "Josefin Slab, serif",
                  }}
                  type="submit"
                  disabled={carregando}
                >
                  {carregando ? "Entrando..." : "Entrar"}
                </button>
              </Botoes>
            </form>
          </Moldura>

          <Imagem image={Galpao} />
        </Caixa>

        {erro && (
          <div className="alert alert-danger fixed-bottom" role="alert">
            {erro}
          </div>
        )}
      </div>
    </Container>
  );
}
