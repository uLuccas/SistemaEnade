import React from "react";

const AlterarDisciplina = () => {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Cadastro de Disciplinas</h4>
                <p class="card-description">Todos os dados são obrigatorios.</p>
                <form class="forms-sample">
                  <div class="form-group row">
                    <label
                      for="exampleInputUsername2"
                      class="col-sm-3 col-form-label"
                    >
                      Nome
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputUsername2"
                        placeholder="nome da disciplina"
                        name="nome"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputEmail2"
                      class="col-sm-3 col-form-label"
                    >
                      Sigla
                    </label>
                    <div class="col-sm-9">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail2"
                        placeholder="sigla da disciplina"
                        name="siglas"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label
                      for="exampleInputMobile"
                      class="col-sm-3 col-form-label"
                    >
                      Cursos
                    </label>
                    <div class="col-sm-9">
                      <select
                        class="js-example-basic-multiple w-100"
                        multiple="multiple"
                        name="cursos"
                      >
                        <option value="AL">Opções de cursos</option>
                        <option value="WY">Wyoming</option>
                        <option value="AM">America</option>
                        <option value="CA">Canada</option>
                        <option value="RU">Russia</option>
                      </select>
                    </div>
                    <p> Selecione mais de um cursos segurando CTRL</p>
                  </div>
                  <button type="submit" class="btn btn-primary me-2">
                    Alterar
                  </button>
                  <button class="btn btn-light">Limpar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlterarDisciplina;
