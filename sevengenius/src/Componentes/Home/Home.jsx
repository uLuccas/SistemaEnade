import React from "react";
import '../Home/Home.css'
import { useContext } from "react";
import {PagesContext} from "../../context/PagesContext";

const Home = () => {
  const { setPages ,contQuestoes, contDisciplinas} = useContext(PagesContext);
// console.log(contQuestoes)
  return (
    <div class="row">
      <div class="col-12 grid-margin stretch-card" className='card'>
        <div>
          <h3>
            Cadastre Uma nova Questão
          </h3>
          <button class="btn btn-primary me-2" onClick={() =>{setPages("cadastrarQuestao")}}>
            Clique aqui!
          </button>
        </div>
        <div className="bgfoto">
          {/* foto aqui  */}
        </div>
      </div>
      <div class="card-body" className="cardAnotacoes">
        <h4 >
          Anotações
        </h4>
        <h5 class="card-subtitle card-subtitle-dash">
          alguma coisa
        </h5>
        <button
          class="btn btn-primary btn-lg text-white mb-0 me-0"
          type="button"
        >
          Nova Anotação
        </button>

        <div id="performance-line-legend"></div>

        <div class="chartjs-wrapper mt-5">

        </div>
      </div>

      <div class="card-body" className="cardPrevisao">

        <div class="col-lg-12">
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="card-title card-title-dash">
              Previsões Anuais
            </h4>
            <div class="add-items d-flex mb-0">
              <input
                type="text"
                class="form-control todo-list-input"
                placeholder="Qual a proxima previsão?"
              />
              <button class="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p">
                <i class="mdi mdi-plus">buscar</i>
              </button>
            </div>
          </div>
          <div class="list-wrapper">
            <ul class="todo-list todo-list-rounded">
              <li class="d-block">
                Medicina <label>ultima edição em 2018 </label>

              </li>
              <li class="d-block">

                ADS ultima edição em 2018

              </li>
              <li>

                Ciencias contabeis ultima edição em 2018

              </li>
              <li class="border-bottom-0">

                Arquitetura ultima edição em 2018

              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="card-body" className="totalDisciplinas">

        <div class="d-flex justify-content-between align-items-center mb-2 mb-sm-0">

          <div>
            <h3>
              Total de Disciplinas:
            </h3>
            <h4 class="mb-0 fw-bold">{contDisciplinas}</h4>
          </div>
        </div>

      </div>
      <div class="card bg-primary card-rounded" className="edicoes" >
        <div class="card-body pb-0">
          <h4 class="card-title card-title-dash text-white mb-4">
            Quantidade de Questões
          </h4>

          <div class="col-sm-4">
            <p class="status-summary-ight-white mb-1">
              total de questoes:
            </p>
            <h2 class="text-info">{contQuestoes}</h2>
          </div>
        </div>
      </div>

      <div class="card-body" className="ultimasConsultas">
        <div class="d-sm-flex justify-content-between align-items-start">
          <div>
            <h4 class="card-title card-title-dash">
              ultimas consultas
            </h4>
            <p class="card-subtitle card-subtitle-dash">
              Ultimas 1 consultas
            </p>
          </div>
          <div>
            <button
              class="btn btn-primary btn-lg text-white mb-0 me-0"
              type="button"
            >
              Nova Consulta
            </button>
          </div>
        </div>
        <table class="table select-table" className="table">
          <thead>
            <tr>
              <th>
                <div class="form-check form-check-flat mt-0">
                  <label class="form-check-label">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      aria-checked="false"
                    />
                  </label>
                </div>
              </th>
              <th>Ano</th>
              <th>Curso</th>
              <th>Disciplina</th>
              <th>Data consulta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="form-check form-check-flat mt-0">
                  <label class="form-check-label">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      aria-checked="false"
                    />
                  </label>
                </div>
              </td>
              <td>
                <div class="d-flex ">
                  <div>
                    <h6>2018</h6>
                  </div>
                </div>
              </td>
              <td>
                <h6>ADS</h6>
                <p>
                  Analise e Desenvolvimento de sistemas
                </p>
              </td>
              <td>
                <h6>logica de programação </h6>+ 2
              </td>
              <td>
                <div class="badge badge-opacity-warning">
                  05/12/2021
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>


  );
};

export default Home;
