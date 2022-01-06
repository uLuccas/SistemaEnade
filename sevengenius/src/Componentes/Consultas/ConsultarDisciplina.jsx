import React, { useState } from "react";
import Disciplinas from "./Disciplinas";
import { useContext } from "react";
import {PagesContext} from "../../context/PagesContext";

const ConsultarDisciplina = () => {
  const [listarD, setListarDisciplinas] = useState();
  const {setDisciplinas} = useContext(PagesContext);

  const listaDisciplina = async () => {
    const resultado = await fetch("http://localhost:1221/api/disciplina/", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });

    let list = await resultado.json();
    setListarDisciplinas(list);
    setDisciplinas(list.length)
    // console.log(list.length);
  };
  const deletarDisciplina = async (iDDisciplinas) => {
    const result = await fetch(
      "http://localhost:1221/api/disciplina/deleteDisciplina",
      {
        method: "delete",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ iDDisciplinas }),
      }
    );

    console.log(result);
    listaDisciplina();
  };

  const alterarDisciplina = async (
    iDDisciplinas,
    nome,
    sigla,
    siglaCursos
  ) => {
    const result = await fetch(
      "http://localhost:1221/api/disciplina/alterarDisciplina",
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          sigla,
          siglaCursos,
          iDDisciplinas,
        }),
      }
    );
    console.log(result);
    listaDisciplina();
  };

  console.log(listarD);
  return (
    <div
      class="main-panel"
      className="arealistagem"
      style={{ backgroundColor: "white" }}
    >
      <div style={{ width: "80%" }}>
        <h2 class="card-title">Disciplinas</h2>
        <div>
          <h5>Listagem de disciplinas</h5>
        </div>
        {listarD && (
          <Disciplinas
            listarDisc={listarD}
            alterarDisciplina={alterarDisciplina}
            deletarDisciplina={deletarDisciplina}
          />
        )}
      </div>
      <button
        onClick={() => {
          listaDisciplina();
        }}
        class="btn btn-primary me-2"
      >
        Listar
      </button>
    </div>
  );
};

export default ConsultarDisciplina;
