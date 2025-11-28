import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componentes/pages/Login";

// import Dashboard from "./componentes/pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./componentes/pages/Home/home";
import Header from "./componentes/pages/Header";
import TabelaProduto from "./componentes/pages/Produto/tabela_produto";
import TabelaProdutoProprietario from "./componentes/pages/Produto/tabelaProprietario";

import GlobalStyle from "./globalStyles/globalStyles";

import AdicionarProduto from "./componentes/pages/Produto/adicionar_produto";
import AlterarProduto from "./componentes/pages/Produto/alterarProduto";
import TelaProduto from "./componentes/pages/Produto/tela_produto";
import ProdutoProprietario from "./componentes/pages/Produto/tela_proprietario_produto";
import Categoria from "./componentes/pages/Categorias/categoria";


import AddInteresse from "./componentes/pages/Produto/addInteresse"

import Duvidas from "./componentes/pages/Duvidas";

import DemonstrarInteresseProduto from "./componentes/pages/Produto/formInteresse";


function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Header/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />

          {/* Área restrita */}
          <Route path="/login" element={<Login />} />

          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/tabelaProduto/:id_produto" element={<TabelaProduto />} />
          <Route path="/tabelaProprietario/:id_produto" element={<TabelaProdutoProprietario />} />
          <Route path="/adicionaInteresse/:id_produto" element={<AddInteresse />} />

          <Route path="/adicionarproduto" element={<AdicionarProduto />} />
          <Route path="/alterarproduto/:id_produto" element={<AlterarProduto />} />


          <Route path="/produtoproprietario" element={<ProdutoProprietario />} />
          <Route path="/produto/:id_produto" element={<TelaProduto />} />
          <Route path="/categoria/:id_categoria" element={<Categoria/>} />

           <Route path="/duvidas" element={<Duvidas />} />

           <Route path="/forminteresse/:id_produto" element={<DemonstrarInteresseProduto />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
