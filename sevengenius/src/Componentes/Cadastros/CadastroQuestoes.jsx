import React, { useState } from "react";

import "./CadastroQuestao.css";

const CadastroQuestoes = () => {
  const [numeroQuestao, setNumeroQuestao] = useState("");
  const [anoQuestao, setAnoQuestao] = useState("");
  const [enunciadoQuestao, setEnunciadoQuestao] = useState("");
  const [cursoQuestao, setCursoQuestao] = useState("");
  const [disciplinaQuestao, setDisciplinaQuestao] = useState("");
  const [alternativaQuestao, setAlternativaQuestao] = useState("");
  const [dissertaQuestao, setDissertaQuestao] = useState('')
  const [alterCorreta, setAlterCorreta] = useState("");
  const [dificuldadeQuestao, setDificuldadeQuestao] = useState("");
  const [tipoQuestao, setTipoQuestao] = useState("");
  const [imagem, setImagem] = useState();
  const [msg, setMsg] = useState();

  const cadQuestao = async (e) => {
    const numero = numeroQuestao;
    const curso = cursoQuestao.toUpperCase()
    const disciplina = disciplinaQuestao.toUpperCase();
    const enunciado = enunciadoQuestao;
    const tipo_questao = tipoQuestao;
    const alternativas = alternativaQuestao;
    const alternativaCorreta = alterCorreta;
    const dissertativas = dissertaQuestao;
    const dificuldade = dificuldadeQuestao;
    const edicao = anoQuestao;

    if (
      numero == "" ||
      curso == "" ||
      disciplina == "" ||
      enunciado == "" ||
      tipo_questao == "" ||
      dificuldade == "" ||
      edicao == ""
    ) {
      setMsg(" Ha campos a serem preenchidos!");
      return;
    }
    const result = await fetch(
      "http://localhost:1221/api/questoes/newQuestion",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
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
    setMsg("Questao cadastrada com sucesso!");
    const questaoBody = await result.json();

    const { insertId } = questaoBody;

      const body = new FormData();
      if(imagem){

        body.append("file", imagem[0]);
        
        await fetch("http://localhost:1221/upload", {
          method: "post",
          headers: {
            Accept: "*/*",
            "X-Questao-ID": insertId,
          },
          body,
        });
      }
  };

  const pegaImg = (data) => {
    if (data) {
      setImagem(data);
    }
  };
  

  return (
    <div>
      <form action="">
        <div className="areaQuestao">
          <div className="head">
            <h2>Cadastrar Questões</h2>
          </div>
          <div className="isertQuestao">
            <div className="organiza">
              <div className="numeroEdicao">
                Numero:{" "}
                <input
                  type="text"
                  placeholder="Nº Questao"
                  className="inputSigla"
                  onChange={(e) => {
                    setNumeroQuestao(e.target.value);
                  }}
                />
                Ano:{" "}
                <input
                  type="text"
                  placeholder="Ano..."
                  className="inputSigla"
                  onChange={(e) => {
                    setAnoQuestao(e.target.value);
                  }}
                />
              </div>
              <div className="numeroEdicao">
                Sigla do Curso:{" "}
                <input
                  type="text"
                  placeholder="Sigla da disciplina"
                  className="inputSigla"
                  onChange={(e) => {
                    setCursoQuestao(e.target.value);
                  }}
                />
                Sigla da Disciplina:{" "}
                <input
                  type="text"
                  placeholder="Sigla da disciplina"
                  className="inputSigla"
                  onChange={(e) => {
                    setDisciplinaQuestao(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <form action="">
            <div
              className="img"
              onClick={() => {
                const fto = document.querySelector(".uploadImg");
                if (fto) {
                  fto.click();
                }
              }}
            >
              <input
                type="file"
                name="file"
                className="uploadImg"
                onChange={async (e) => {
                  pegaImg(e.target.files);
                  // if (e.target.files.length) {
                  //   const body = new FormData();
                  //   body.append("file", e.target.files[0]);
                  //   fetch("http://localhost:1221/upload", {
                  //     method: "post",
                  //     body: body,
                  //   });
                  // }
                }}
              />
            </div>
          </form>
          <div className="enunciado">
            Enunciado: <br />
            <textarea
              placeholder="Digite aqui o enunciado..."
              className="textEnunciado"
              onChange={(e) => {
                setEnunciadoQuestao(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="optativa">
            se for optativa:
            <select
              className=""
              onChange={(e) => {
                setTipoQuestao(e.target.value);
              }}
              style={{ marginLeft: 10 }}
            >
              <option ></option>
              <option value="optativa">optativa</option>
              <option value="dissertativa">dissertativa</option>
            </select>
          </div>

          {tipoQuestao == "optativa" ? (
            <div className="resposta">
              <textarea
                placeholder="Alternativas:"
                style={{ width: 390, height: 150 }}
                onChange={(e) => {
                  setAlternativaQuestao(e.target.value);
                }}
              ></textarea>
            </div>
          ) : (
            <div className="resposta">
              <textarea
                placeholder="Dissertação:..."
                style={{ width: 490, height: 150 }}
                onChange={(e) => {
                  setDissertaQuestao(e.target.value);
                }}
              ></textarea>
            </div>
          )}
          <div>
            {tipoQuestao == "optativa" ? (
              <>
                <p>Alternativa Correta:</p>
                <select
                  onChange={(e) => {
                    setAlterCorreta(e.target.value);
                  }}
                >
                  <option value=""></option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                </select>
                <br />
                <br />
                Dificuldade da questão: <br />
                <select
                  className=""
                  onChange={(e) => {
                    setDificuldadeQuestao(e.target.value);
                  }}
                >
                  <option></option>
                  <option value="Fácil">Fácil</option>
                  <option value="Médio">Médio</option>
                  <option value="Difícil">Difícil</option>
                </select>
              </>
            ) : (
              <>
                <br />
                Dificuldade da questão: <br />
                <select
                  className=""
                  onChange={(e) => {
                    setDificuldadeQuestao(e.target.value);
                  }}
                >
                  <option></option>
                  <option value="Fácil">Fácil</option>
                  <option value="Médio">Médio</option>
                  <option value="Difícil">Difícil</option>
                </select>
              </>
            )}
          </div>
          <div style={{ width: "100%" }}>
            {msg && (
              <p style={{ color: 'black'}}>
                <b>{msg}</b>
              </p>
            )}
          </div>
          <br />
          <div className="divbtn">
            <button
              type="submit"
              class="btn btn-primary me-2"
              onClick={(e) => {
                e.preventDefault();
                cadQuestao();
              }}
            >
              Cadastrar
            </button>
            <button
              class="btn btn-light"
              type="reset"
              onClick={() => setMsg("")}
            >
              Limpar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CadastroQuestoes;
