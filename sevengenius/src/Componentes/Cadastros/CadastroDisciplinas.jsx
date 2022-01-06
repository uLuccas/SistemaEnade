import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import "./CadastroDisciplina.css";

const CadastroDisciplinas = () => {
  const { setPages } = useContext(PagesContext);
  const [nomeDisciplina, setNomeDisciplina] = useState("");
  const [siglaDisciplina, setSiglaDisciplina] = useState("");
  const [cursos, setCursos] = useState("");
  const [notification, setNotifition] = useState("");
  const [opcoesCurso, setOpcoesCurso] = useState([]);

  const cadastroDisciplina = async () => {
    const nome = nomeDisciplina;
    const sigla = siglaDisciplina.toUpperCase();
    const siglaCursos = cursos.value;

    if (nome === "" || sigla === "") {
      setNotifition("Todos os campos devem ser preenchidos!");
      return;
    }
    const result = await fetch(
      "http://localhost:1221/api/disciplina/newDisciplina",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, sigla, siglaCursos }),
      }
    );
    setNotifition("Disciplina inserida com sucesso!");
    setPages("cadastrarDisciplina");
    console.log(siglaCursos);
    return result.json();
  };

  async function pegaCursos() {
    const res = await fetch("http://localhost:1221/api/curso", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    let result = await res.json()
    setOpcoesCurso(result);
  }

  useEffect(() => {
    pegaCursos();
  }, []);

  // console.log(cursos);
  return (
    <div>
      <form action="">
      <div className="areaCurso">
        <div className="head">
          <h2>Cadastrar Disciplinas</h2>
        </div>
        <div className="insert">
          <div className="arrumaCampo">
            <div>
              Nome:{" "}
              <input
                type="text"
                placeholder="Nome da disciplina"
                onChange={(e) => {
                  setNomeDisciplina(e.target.value);
                }}
                />
            </div>
            <div>
              Sigla:{" "}
              <input
                type="text"
                placeholder="Sigla da disciplina"
                maxlength="3"
                onChange={(e) => {
                  setSiglaDisciplina(e.target.value);
                }}
                />
            </div>
            <br />
          </div>
          <div>
            <p style={{color: 'black'}}>Opções de Curso:</p>
            {opcoesCurso ? (
              <select
              multiple="multiple"
              onChange={(e) => {
                let value = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                  );
                  setCursos({
                    value: value.toString(),
                  });
                }}
                style={{ width: 200}}>
                {opcoesCurso.length > 1 &&
                  opcoesCurso.map((item, index) => {
                    return (
                      <option key={index} value={item.sigla} >
                        {item.Nome}
                      </option>
                    );
                  })}
              </select>
            ) : (
              "Sem Dados.."
              )}
          </div>
        </div>
        {notification && <b style={{ color: "Red" }}>{notification}</b>}
        <div className="divbtn">
          <button
            type="submit"
            class="btn btn-primary me-2"
            onClick={(e) => {
              cadastroDisciplina(e.preventDefault());
            }}
            >
            Cadastrar
          </button>
          <button class="btn btn-light" type="reset">Limpar</button>
        </div>
      </div>
            </form>
    </div>
  );
};

export default CadastroDisciplinas;
