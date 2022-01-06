import React, { useState } from "react";

const AlterarCurso = () => {
  const [nomeCursoAlt, setNomeCursoAlt] = useState();
  const [siglaCursoAlt, setSiglaCursoAlt] = useState();

  const altCurso = async () => {
    const nome = nomeCursoAlt;
    const sigla = siglaCursoAlt;
    const result = await fetch("http://localhost:1221/api/curso/alterarCurso", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, sigla }),
    });
    return result.json();
  };

    return(
        <div class="main-panel">        
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Cadastro de Cursos</h4>
                  <p class="card-description">
                    Todos os dados são obrigatorios. 
                  </p>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputUsername1">Nome</label>
                      <input type="text" class="form-control" id="exampleInputUsername1" placeholder="nome do curso" name="nome" onChange={setNomeCursoAlt}/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Sigla</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="sigla do curso" name="sigla" onChange={setSiglaCursoAlt} />
                    </div>
                    <button type="submit" class="btn btn-primary me-2" onClick={() => {altCurso()}}>Alterar</button>
                    <button class="btn btn-light">Limpar</button>
                  </form>
                </div>
              </div>
            </div>           
          </div>
        </div>
      </div>
    )
}

export default AlterarCurso;