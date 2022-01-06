import React, { useState } from "react";
import "./Questoes.css";

const Questao = (props) => {
  const { item, deleteQuestao, alaterarQuestao } = props;
  const [upImagem, setUpImagem] = useState(
    `http://localhost:1221/uploads/users/${item.imageFile}`
  );
  const [alteraInfo, setAlteraInfo] = useState();
  const [numQues, setNumQues] = useState(item.numero);
  const [anoQues, setAnoQues] = useState(item.edicao);
  const [siCurso, setSiCurso] = useState(item.curso);
  const [siDisciplina, setSiDisciplina] = useState(item.disciplina);
  const [enunciadoQues, setEnunciadoQues] = useState(item.enunciado);
  const [tipoQues, setTipoQues] = useState(item.tipo_questao);
  const [alternativasQues, setAlternativasQues] = useState(item.alternativas);
  const [alternativaCorretaQ, setAlternativaCorretaQ] = useState(
    item.alternativaCorreta
  );
  const [dificuldadeQues, setDificuldadeQues] = useState(item.dificuldade);
  const [dissertativa, setDissertativa] = useState(item.dissertativas);
  // console.log(IDQuestoes)

  return (
    <div>
      <div className="areaQuestao">
        <div className="head">
          <h2>Questão Nº {item.numero}</h2>
        </div>
        <div className="isertQuestoes">
          <div className="organizaQuestao">
            <div className="numeroEdicao">
              Numero:
              <textarea
                placeholder="Nº Questao"
                className="textPadrao"
                disabled={alteraInfo ? false : true}
                onChange={(e) => setNumQues(e.target.value)}
              >
                {item.numero}
              </textarea>
              Ano:
              <textarea
                placeholder="Ano"
                className="textPadrao"
                disabled={alteraInfo ? false : true}
                onChange={(e) => setAnoQues(e.target.value)}
              >
                {item.edicao}
              </textarea>
            </div>
            <div className="numeroEdicao">
              Sigla do Curso:
              <textarea
                type="text"
                placeholder=" Curso"
                className="textPadrao"
                disabled={alteraInfo ? false : true}
                onChange={(e) => setSiCurso(e.target.value)}
              >
                {item.curso}
              </textarea>
              Sigla da Disciplina:
              <textarea
                type="text"
                placeholder="Disciplina"
                className="textPadrao"
                disabled={alteraInfo ? false : true}
                onChange={(e) => setSiDisciplina(e.target.value)}
              >
                {item.disciplina}
              </textarea>
            </div>
          </div>
        </div>
        <div className="divdafoto">
          <img src={upImagem} style={{ width: "auto", height: "auto" }} />
        </div>
        <div className="enunciado">
          Enunciado: <br />
          <textarea
            placeholder="Digite aqui o enunciado..."
            className="textEnunciado"
            disabled={alteraInfo ? false : true}
            onChange={(e) => setEnunciadoQues(e.target.value)}
          >
            {item.enunciado}
          </textarea>
        </div>
        <div className="optativa">
          <select onChange={(e) => setTipoQues(e.target.value)}>
            {alteraInfo ? (
              <>
                <option value="optativa">Optativa</option>
                <option value="dissertativa">Dissertativa</option>
              </>
            ) : (
              <option>{item.tipo_questao}</option>
            )}
          </select>
        </div>
        <div className="resposta">
          {alternativasQues === "" ? (
            <textarea
              placeholder="Dissertacao:..."
              style={{ width: 390, height: 150 }}
              disabled={alteraInfo ? false : true}
              onChange={(e) => setDissertativa(e.target.value)}
            >
              {item.dissertativas}
            </textarea>
          ) : (
            <textarea
              placeholder="Alternativas:"
              style={{ width: 390, height: 150 }}
              disabled={alteraInfo ? false : true}
              onChange={(e) => setAlternativasQues(e.target.value)}
            >
              {item.alternativas}
            </textarea>
          )}
        </div>
        <div>
          <p style={{color: 'black'}}>Alternativa Correta:</p>
          <select onChange={(e) => setAlternativaCorretaQ(e.target.value)}>
            {alteraInfo ? (
              <>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
              </>
            ) : (
              <option value="">{item.alternativaCorreta}</option>
            )}
          </select>

          <p style={{marginTop:10, color: 'black'}}>Nivel de Dificuldade:</p>
          <select onChange={(e) => setDificuldadeQues(e.target.value)}>
            {alteraInfo ? (
              <>
                <option value="facil">Fácil</option>
                <option value="medio">Médio</option>
                <option value="dificil">Difícil</option>
              </>
            ) : (
              <option value="">{item.dificuldade}</option>
            )}
          </select>
        </div>
        <br />
        <div className="divbtn">
          {alteraInfo ? (
            <>
              <button
                class="btn btn-primary me-2"
                onClick={() => {
                  alaterarQuestao(
                    item.IDQuestoes,
                    numQues,
                    siCurso,
                    siDisciplina,
                    enunciadoQues,
                    tipoQues,
                    alternativasQues,
                    alternativaCorretaQ,
                    dissertativa,
                    dificuldadeQues,
                    anoQues
                  );
                  setAlteraInfo(false);
                }}
              >
                Enviar
              </button>
              <button
                class="btn btn-light"
                onClick={() => setAlteraInfo(false)}
              >
                Cancelar
              </button>
            </>
          ) : (
            ""
          )}

          <button
            type="submit"
            class="btn btn-primary me-2"
            style={{ display: alteraInfo ? "none" : "block" }}
            onClick={() => setAlteraInfo(true)}
          >
            Alterar
          </button>
          <button
            class="btn btn-light"
            style={{ display: alteraInfo ? "none" : "block" }}
            onClick={() => deleteQuestao(item.IDQuestoes)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questao;
