import React, { useState } from "react";
import "./Consulta.css";

const Curso = (props) => {
  const { item, deletarCurso, alterarCurso } = props;
  const [alteraBtn, setAlteraBtn] = useState();
  const [nomeAtualizado, setNomeAtualizado] = useState(item.Nome);
  const [siglaAtualizada, setSiglaAtualizada] = useState(item.sigla);

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <div className="texts">
          <p style={{ marginTop: 15 , color: 'black'}}> Nome: </p>
          <textarea
            disabled={!alteraBtn}
            onChange={(e) => setNomeAtualizado(e.target.value)}
          >
            {item.Nome}
          </textarea>
          <br />
          <p style={{ marginTop: 15 , color: 'black'}}> Sigla:</p>
          <textarea
            disabled={!alteraBtn}
            maxLength="3"
            onChange={(e) => setSiglaAtualizada(e.target.value)}
          >
            {item.sigla}
          </textarea>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {alteraBtn ? (
            <>
              <button
                class="btn btn-primary me-2"
                onClick={() => {
                  alterarCurso(item.IDCurso, nomeAtualizado, siglaAtualizada);
                  setAlteraBtn(false);
                }}
              >
                {" "}
                Ok
              </button>{" "}
              <button class="btn btn-light" onClick={() => setAlteraBtn(false)}>
                {" "}
                Cancelar
              </button>
              <br />
            </>
          ) : (
            ""
          )}
          <button
            style={{ display: alteraBtn ? "none" : "block" }}
            class="btn btn-primary me-2"
            onClick={() => setAlteraBtn(true)}
          >
            {" "}
            Alterar
          </button>

          <button
            style={{ display: alteraBtn ? "none" : "block" }}
            class="btn btn-light"
            onClick={() => deletarCurso(item.IDCurso)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curso;
