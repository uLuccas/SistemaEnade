import React, { useState } from "react";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import cursoImg from "../../assets/curso.svg";
import disciplinaImg from "../../assets/disciplina.svg";
import questaoImg from "../../assets/questao.svg";
import consultImg from "../../assets/consult.svg";
import logoImg from "../../assets/consulta.svg";

import "./BarraLateral.css";

const BarraLateral = () => {
  const { setPages } = useContext(PagesContext);
  const [dropcurso, setDropcurso] = useState(false);
  const [dropdisciplina, setDropdisciplina] = useState(false);
  const [dropquestao, setDropquestao] = useState(false);
  return (
    // <div className="tudoBarra">
    //   <p>
    //     <b> Funcionalidades</b>
    //   </p>
    //   <div className="funcionalidades">
    //     <li>
    //     <div className="DropdownCursos" onClick={()=> setDropcurso(!dropcurso)}>
    //       <a>Cursos</a>
    //     </div>
    //     <div className="SubmenuCursos" style={{display: dropcurso ? "block" : "none"}}>
    //       <li>
    //         <a>Cadastrar Curso</a>
    //       </li>
    //       <li>
    //         <a>Deletar Curso</a>
    //       </li>
    //       <li>
    //         <a>Atualizar Curso</a>
    //       </li>
    //     </div>
    //     </li>
    
    //     <div>
    //       <p>Disciplinas</p>
    //     </div>
    //     <div>
    //       <p>Questões</p>
    //     </div>
    //     <div>
    //       <p>Consultas</p>
    //     </div>
    //   </div>
    //   <br />
    //   <p>
    //     <b>Configuraçoes</b>
    //   </p>
    //   <div>
    //     <p>Coordenador</p>
    //   </div>
    // </div>

    <nav class="sidebar sidebar-offcanvas" className="estilizacao" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <li class="nav-item dropdown d-none d-lg-block user-dropdown">
           
              <img
                class="img-xs rounded-circle"
                src={logoImg}
                alt="Profile image"
                onClick={() =>{setPages('home')}}
              />{" "}
         
            <div
              class="dropdown-menu dropdown-menu-right navbar-dropdown"
              aria-labelledby="UserDropdown"
            >
              <div class="dropdown-header text-center">
                <img
                  class="img-md rounded-circle"
                  src={logoImg}
                  alt="Profile image"
                />
                <p class="mb-1 mt-3 font-weight-semibold">Allen Moreno</p>
                <p class="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
              </div>
              <a class="dropdown-item">
                <i class="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>{" "}
                Meu perfil{" "}
              </a>
              <a class="dropdown-item">
                <i class="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
                Sair
              </a>
            </div>
          </li>
        </li>
        <li class="nav-item nav-category">
          <h3>Funcionalidades</h3>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            onClick={() => setDropcurso(!dropcurso)}
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <i class="menu-icon mdi mdi-card-text-outline"></i>
            <span class="menu-title">
              {" "}
              <img src={cursoImg} alt="curso" /> Cursos
            </span>
            <i class="menu-arrow"></i>
          </a>
          <div
            class="collapse"
            id="form-elements"
            style={{ display: dropcurso ? "block" : "none" }}
          >
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" onClick={() => setPages("cadastrarCurso")}>
                  <span>Cadastrar</span>
                </a>
              </li>
            </ul>
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" onClick={() => setPages("listarCurso")}>
                  <span>Listar</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="charts"
            onClick={() => setDropdisciplina(!dropdisciplina)}
          >
            <i class="menu-icon mdi mdi-chart-line"></i>
            <span class="menu-title">
              <img src={disciplinaImg} alt="curso" />
              Disciplinas
            </span>
            <i class="menu-arrow"></i>
          </a>
          <div
            class="collapse"
            id="charts"
            style={{ display: dropdisciplina ? "block" : "none" }}
          >
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" onClick={() => setPages("cadastrarDisciplina")}>
                  <span>Cadastrar</span>
                </a>
              </li>
            </ul>
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" onClick={() => setPages("listarDisciplina")}>
                  <span>Listar</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="tables"
            onClick={() => setDropquestao(!dropquestao)}
          >
            <i class="menu-icon mdi mdi-table"></i>
            <span class="menu-title">
              <img src={questaoImg} alt="curso" />
              Questões
            </span>
            <i class="menu-arrow"></i>
          </a>
          <div
            class="collapse"
            id="tables"
            style={{ display: dropquestao ? "block" : "none" }}
          >
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" onClick={() => setPages("cadastrarQuestao")}>
                  <span>Cadastrar</span>
                </a>
              </li>
            </ul>
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                <a class="nav-link" onClick={() => setPages("listarQuestao")}>
                  <span>Listar</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
       
        <li class="nav-item nav-category">
          <h3>Configurações</h3>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i class="menu-icon mdi mdi-human-greeting"></i>
            <span class="menu-title">Coordenador</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="tables">
          
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default BarraLateral;
