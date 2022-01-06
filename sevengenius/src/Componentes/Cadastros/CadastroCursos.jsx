import React, { useState } from "react";
import { PagesContext } from "../../context/PagesContext";
import { useContext } from "react";

import "./Cadastro.css";

const CadastroCursos = () => {
  const [nomeCurso, setNomeCurso] = useState("");
  const [siglaCurso, setSiglaCurso] = useState("");
  const [notificacao, setNotificacao] = useState("");
  const { setPages } = useContext(PagesContext);

  const cadCurso = async (e) => {
    const nome = nomeCurso;
    const sigla = siglaCurso.toUpperCase();


    if (nome === "" || sigla === "") {
      setNotificacao("Os campos devem ser preenchidos!");
      return;
    }
    const result = await fetch("http://localhost:1221/api/curso/newCurso", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, sigla }),
    });
    console.log(result);
    setNotificacao("Curso inserido com sucesso!");
  };

  const resetCampos = () => {
    setNomeCurso("");
    setSiglaCurso("");
  };

  return (
    <div>
      <div className="areaCurso">
        <div className="head">
          <h2>Cadastrar Curso</h2>
        </div>
        <form action="">
          <div className="insertCurso">
            <div>
              Nome:{" "}
              <input
                type="text"
                placeholder="Insira o nome do Curso"
                onChange={(e) => setNomeCurso(e.target.value)}
                required
              />
            </div>
            <div>
              Sigla:{" "}
              <input
                type="text"
                maxlength="3"
                placeholder="Insira a sigla do Curso"
                onChange={(e) => setSiglaCurso(e.target.value)}
                required
              />
            </div>
            <br />
          </div>
          <div>{notificacao && <b>{notificacao}</b>}</div>
          <div className="divbtn">
            <button
              type="submit"
              class="btn btn-primary me-2"
              onClick={(e) => cadCurso(e.preventDefault())}
            >
              Cadastrar
            </button>
            <button
              class="btn btn-light"
              type="reset"
              onClick={() => {
                resetCampos();
              }}
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroCursos;
