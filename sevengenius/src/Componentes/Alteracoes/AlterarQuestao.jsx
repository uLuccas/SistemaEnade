import React from "react";

const AlterarQuestao = () => {
  return (
    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Cadastro de Questões</h4>
                <form class="forms-sample">
                  <div class="form-group">
                    <div class="form-group row">
                      <div class="col-sm-4">
                        <label for="exampleInputName1">N° *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName1"
                          placeholder="Numero da questão"
                          name="numero"
                        />
                      </div>
                      <div class="col-sm-4">
                        <label for="exampleInputName1">Ano *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputName1"
                          placeholder="Ano  da prova"
                          name="ano"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-sm-4">
                      <label
                        for="exampleInputMobile"
                        class="col-sm-3 col-form-label"
                      >
                        Cursos *
                      </label>

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

                      <p> Selecione mais de um cursos segurando CTRL</p>
                    </div>
                    <div class="col-sm-4">
                      <label
                        for="exampleInputMobile"
                        class="col-sm-3 col-form-label"
                      >
                        Disciplinas *
                      </label>

                      <select
                        class="js-example-basic-multiple w-100"
                        multiple="multiple"
                        name="disciplinas"
                      >
                        <option value="AL">Opções de cursos</option>
                        <option value="WY">Wyoming</option>
                        <option value="AM">America</option>
                        <option value="CA">Canada</option>
                        <option value="RU">Russia</option>
                      </select>

                      <p> Selecione mais de uma disciplina segurando CTRL</p>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="exampleFormControlTextarea1">Enunciado</label>
                    <textarea
                      class="form-control"
                      id="txt_enunciado"
                      rows="20"
                      name="enunciado"
                    >
                      {" "}
                    </textarea>
                  </div>

                  <div class="form-group row">
                    <div class="col-sm-4">
                      <div class="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="customCheck1"
                        />
                        <label class="custom-control-label" for="customCheck1">
                          Selecione se for optativa
                        </label>
                      </div>
                      <label for="exampleInputName1">A:</label>
                      <textarea
                        class="form-control"
                        id="alternativa_a"
                        rows="6"
                        name="alternativa_a"
                        disabled
                      ></textarea>

                      <label for="exampleInputName1">B:</label>
                      <textarea
                        class="form-control"
                        id="alternativa_b"
                        rows="6"
                        name="alternativa_b"
                        disabled
                      ></textarea>

                      <label for="exampleInputName1">C:</label>
                      <textarea
                        class="form-control"
                        id="alternativa_c"
                        rows="6"
                        name="alternativa_c"
                        disabled
                      ></textarea>

                      <label for="exampleInputName1">D:</label>
                      <textarea
                        class="form-control"
                        id="alternativa_d"
                        rows="6"
                        name="alternativa_d"
                        disabled
                      ></textarea>

                      <label for="exampleInputName1">E:</label>
                      <textarea
                        class="form-control"
                        id="alternativa_e"
                        rows="6"
                        name="alternativa_e"
                        disabled
                      >
                        {" "}
                      </textarea>
                    </div>
                    <div class="col-sm-4">
                      <label
                        for="exampleInputMobile"
                        class="col-sm-3 col-form-label"
                      >
                        Dificuldade *
                      </label>

                      <select
                        class="js-example-basic-multiple w-100"
                        name="dificuldade"
                      >
                        <option value="AL">Opções de dificuldades</option>
                        <option value="WY">Facil</option>
                        <option value="AM">Medio</option>
                        <option value="CA">Dificil</option>
                        <option value="RU">Russia</option>
                      </select>
                      <p> Selecione mais de uma disciplina segurando CTRL</p>
                      <label
                        for="exampleInputMobile"
                        class="col-sm-3 col-form-label"
                      >
                        Alternativa correta
                      </label>

                      <select
                        class="js-example-basic-multiple w-100"
                        name="alternativa_correta"
                        disabled
                      >
                        <option value="WY">A</option>
                        <option value="AM">B</option>
                        <option value="CA">C</option>
                        <option value="RU">D</option>
                        <option value="RU">E</option>
                      </select>
                    </div>
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

export default AlterarQuestao;
