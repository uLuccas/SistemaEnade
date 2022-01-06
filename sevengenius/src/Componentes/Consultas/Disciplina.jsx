import React, { useState } from "react";

const Disciplina = (props) => {
  const { item, deletarDisciplina, alterarDisciplina } = props;
  const [alteraBtn, setAlteraBtn] = useState();
  const [nomeDiscAtualizado, setNomeDiscAtualizado] = useState(item.nome);
  const [siglaDiscAtualizada, setSiglaDiscAtualizada] = useState(item.sigla);
  const [siglaCursoAtualizada,setSiglaCursoDiscAtualizada] = useState(item.siglaCursos)

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <div className="texts">
          <p style={{ marginTop: 15, color: 'black' }}> Nome: </p>
          <textarea
            disabled={!alteraBtn}
            onChange={(e) => setNomeDiscAtualizado(e.target.value)}
          >
            {item.nome}
          </textarea>
          <br />
          <p style={{ marginTop: 15 , color: 'black'}}> Sigla:</p>
          <textarea
            disabled={!alteraBtn}
            maxLength="3"
            onChange={(e) => setSiglaDiscAtualizada(e.target.value)}
          >
            {item.sigla}
          </textarea>
          <p style={{ marginTop: 15 , color: 'black'}}> Sigla de Cursos:</p>
          <textarea
            disabled={!alteraBtn}
            
            onChange={(e) => setSiglaCursoDiscAtualizada(e.target.value)}
          >
            {item.siglaCursos}
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
                  alterarDisciplina(
                    item.iDDisciplinas,
                    nomeDiscAtualizado,
                    siglaDiscAtualizada,
                    siglaCursoAtualizada
                  );
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
            onClick={() => deletarDisciplina(item.iDDisciplinas)}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Disciplina;
