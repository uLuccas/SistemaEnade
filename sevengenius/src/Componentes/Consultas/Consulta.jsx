import React from "react";

const Consulta = () => {
    return(
        <div class="main-panel">        
        <div class="content-wrapper">
          <div class="row">
             <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Filtros</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                      <div class="form-group row">
              
                        <div class="col-sm-4">
                            <label for="exampleInputName1">Ano*</label>
                            <input type="text" class="form-control" id="exampleInputName1" placeholder="Ano  da prova" name="ano" />
                        </div>
                        
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-4">
                        <label for="exampleInputMobile" class="col-sm-3 col-form-label">Cursos *</label>
                        
                          <select class="js-example-basic-multiple w-100" multiple="multiple" name="cursos">
                            <option value="AL">Opções de cursos</option>
                            <option value="WY">Wyoming</option>
                            <option value="AM">America</option>
                            <option value="CA">Canada</option>
                            <option value="RU">Russia</option>
                          </select>
                        
                        <p>  Selecione mais de um cursos segurando CTRL</p>
                      </div>
                      <div class="col-sm-4">
                        <label for="exampleInputMobile" class="col-sm-3 col-form-label">Disciplinas *</label>
                        
                          <select class="js-example-basic-multiple w-100" multiple="multiple" name="disciplinas">
                            <option value="AL">Opções de cursos</option>
                            <option value="WY">Wyoming</option>
                            <option value="AM">America</option>
                            <option value="CA">Canada</option>
                            <option value="RU">Russia</option>
                          </select>
                        
                        <p>  Selecione mais de uma disciplina segurando CTRL</p>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary me-2">Pesquisar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
    )
}

export default Consulta;
