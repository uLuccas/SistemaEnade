import React, { useEffect, useState } from "react";
import "./Consulta.css";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import Questoes from "./Questoes";

const ConsultarQuestao = () => {
  const { setPages, setContQuestoes } = useContext(PagesContext);
  const [buscar, setBuscar] = useState();
  const [anoQ, setAnoQ] = useState("");
  const [tipoQuestao, setTipoQuestao] = useState("'optativa','dissertavita'");
  const [cursoQ, setCursoQ] = useState("");
  const [disciplinaQ, setDisciplinaQ] = useState("");
  const [dificuldadeQ, setDificuldadeQ] = useState("");

  const filtroPersonalisado = async () => {
    if (anoQ || cursoQ || disciplinaQ || dificuldadeQ) {
      // query personalizada
      let obj = {
        dificuldade: dificuldadeQ,
        edicao: anoQ,
        curso: cursoQ,
        disciplina: disciplinaQ,
      };

      const geraString = (coluna, valor) => {
        let x = `AND ${coluna} IN (${valor})`;
        return x;
      };

      function aspasNaSigla(siglas) {
        let array = siglas.split(" ");
        array = array.map((sigla) => {
          return `"${sigla}"`;
        });
        return array.join();
      }

      let perso = Object.keys(obj)
        .map((key) => (obj[key] ? geraString(key, aspasNaSigla(obj[key])) : ""))
        .join(" ");

      const filter = await fetch(
        "http://localhost:1221/api/questoes/personalizado",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tipoQuestao, perso }),
        }
      );
      let res = await filter.json();
      if(res.length == 0){
        alert("Nenhum resultado encontrado");
      }
      console.log(perso)
      setBuscar(res);
    } else {
      const fazBusca = await fetch("http://localhost:1221/api/questoes/", {
        method: "get",
        headers: { "Content-type": "application/json" },
      });
      let boa = await fazBusca.json();
      console.log(boa);
      setContQuestoes(boa.length);
      setBuscar(boa);
    }
  };

  const limpaCampo = () => {
    setAnoQ("");
    setCursoQ("");
    setDisciplinaQ("");
    setDificuldadeQ("");
  };

  async function deleteQuestao(IDQuestoes) {
    const resultadao = await fetch(
      "http://localhost:1221/api/questoes/deleteQuestion",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ IDQuestoes }),
      }
    );
    console.log(resultadao);
    filtroPersonalisado();
  }

  async function alaterarQuestao(
    id,
    num,
    cursinho,
    disci,
    enunci,
    tipo,
    alternativa,
    alternaCorreta,
    disserta,
    dificul,
    ano
  ) {
    let IDQuestoes = id;
    let numero = num;
    let curso = cursinho;
    let disciplina = disci;
    let enunciado = enunci;
    let tipo_questao = tipo;
    let alternativas = alternativa;
    let alternativaCorreta = alternaCorreta;
    let dissertativas = disserta;
    let dificuldade = dificul;
    let edicao = ano;

    const result = await fetch(
      "http://localhost:1221/api/questoes/alterarQuestao",
      {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          IDQuestoes,
          numero,
          curso,
          disciplina,
          enunciado,
          tipo_questao,
          alternativas,
          alternativaCorreta,
          dissertativas,
          dificuldade,
          edicao,
        }),
      }
    );
    console.log(result);
    filtroPersonalisado();
  }

  return (
    <div>
      <form action="">
        <div className="areabusca">
          <div>
            <h2>Filtros</h2>
          </div>
          <div className="camposListar">
            <div>
              {" "}
              Ano:{" "}
              <input
                type="text"
                placeholder="2021"
                style={{ width: 50 }}
                onChange={(e) => {
                  setAnoQ(e.target.value);
                }}
              />{" "}
            </div>
            <div>
              Tipo de Questão :{"  "}
              <select
                onChange={(e) => {
                  setTipoQuestao(e.target.value);
                }}
              >
                <option value="'optativa','dissertavita'"> </option>
                <option value="'optativa'">Optativa</option>
                <option value="'dissertativa'">Dissertativa</option>
              </select>
            </div>
          </div>
          <div className="camposListar">
            <div>
              {" "}
              Curso:{" "}
              <input
                type="text"
                placeholder="Sigla Curso.."
                onChange={(e) => {
                  setCursoQ(e.target.value);
                }}
              />
            </div>
            <div>
              {" "}
              Disciplina:{" "}
              <input
                type="text"
                placeholder="Sigla Disciplina.."
                onChange={(e) => {
                  setDisciplinaQ(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="camposListar">
            <div>
              {" "}
              Dificuldade:{" "}
              <select
                placeholder="Fácil"
                style={{ width: 132 }}
                onChange={(e) => {
                  setDificuldadeQ(e.target.value);
                }}
              >
                <option value="'Facil','Medio','Dificil'"></option>
                <option value="Facil">Facil</option>
                <option value="Medio">Medio</option>
                <option value="Dificil">Dificil</option>
              </select>
            </div>
          </div>
          <p style={{ color: "GrayText" }}>
            *Não selecionar nenhum filtro será feita a busca de todas as
            questões*
          </p>
          <div className="divbtn">
            <button
              class="btn btn-primary me-2"
              onClick={(e) => {
                filtroPersonalisado(e.preventDefault());
              }}
            >
              Pesquisar
            </button>
            <button
              class="btn btn-light"
              type="reset"
              onClick={(e) => {
                limpaCampo();
                setBuscar(false);
              }}
            >
              Limpar
            </button>
          </div>
        </div>
      </form>
      {buscar ? (
        <Questoes
          data={buscar}
          deleteQuestao={deleteQuestao}
          alaterarQuestao={alaterarQuestao}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ConsultarQuestao;
