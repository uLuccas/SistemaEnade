import "./App.css";
import { Header } from "./Componentes/Header/Header";
import { useContext } from "react";
import { PagesContext } from "./context/PagesContext";
import Home from "./Componentes/Home/Home";
import BarraLateral from "./Componentes/BarraLateral/BarraLateral";
import CadastroCursos from "./Componentes/Cadastros/CadastroCursos";
import CadastroDisciplinas from "./Componentes/Cadastros/CadastroDisciplinas";
import CadastroQuestoes from "./Componentes/Cadastros/CadastroQuestoes";
import CadastroUser from "./Componentes/Cadastros/CadastroUser";
import AlterarDisciplina from "./Componentes/Alteracoes/AlterarDisciplina";
import AlterarCurso from "./Componentes/Alteracoes/AlterarCurso";
import AlterarQuestao from "./Componentes/Alteracoes/AlterarQuestao";
import Consulta from "./Componentes/Consultas/Consulta";
import ConsultarDisciplina from "./Componentes/Consultas/ConsultarDisciplina";
import ConsultarCurso from "./Componentes/Consultas/ConsultarCurso";
import FiltrosQuestoes from "./Componentes/Consultas/FiltrosQuestoes";
import Login from "./Componentes/Login/Login";

function App() {
  const { pages } = useContext(PagesContext);

  console.log(pages)
  return (
    <div className="App">

      {
        pages !== "login" && pages !=='cadastrarUser' && <Header />  
      }
      <div style={{ display: "flex" , minHeight: 800}}>
      {
        pages !== "login" && pages !== "cadastrarUser" && <BarraLateral  />
      }
  
        
        <div className="Componente">
          {pages === "home" && <Home />}
          {pages === "login" && <Login />}
          {pages === "cadastrarCurso" && <CadastroCursos />}
          {pages === "cadastrarDisciplina" && <CadastroDisciplinas />}
          {pages === "cadastrarQuestao" && <CadastroQuestoes />}
          {pages === "cadastrarUser" && <CadastroUser />}
          {pages === "alterarCurso" && <AlterarCurso />}
          {pages === "alterarDisciplina" && <AlterarDisciplina />}
          {pages === "alterarQuestao" && <AlterarQuestao />}
          {pages === "consulta" && <Consulta />}
          {pages === "listarCurso" && <ConsultarCurso />}
          {pages === "listarDisciplina" && <ConsultarDisciplina />}
          {pages === "listarQuestao" && <FiltrosQuestoes />}
        </div>
      </div>
    </div>
  );
}

export default App;
