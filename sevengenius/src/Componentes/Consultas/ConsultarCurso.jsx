import React, { useState } from "react";
import Cursos from "./Cursos";

const ConsultarCurso = () => {
  const [lis, setLis] = useState();
 

  const lisCurso = async () => {
    const result = await fetch("http://localhost:1221/api/curso/", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
    let res = await result.json();
    console.log(res);
    setLis(res);
  };

  const deletarCurso = async (idCurso) => {
    const IDCurso = idCurso;
    const result = await fetch("http://localhost:1221/api/curso/deleteCurso", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ IDCurso }),
    });
    console.log(result);
    lisCurso();
    return result.json();
  };

  const alterarCurso = async (IDCurso, nome , Sigla ) => {
    // const IDCurso = idCurso;
    // const Nome = Nome
    const sigla = Sigla.toUpperCase();
    // console.log(IDCurso, nome, sigla)
    const result = await fetch('http://localhost:1221/api/curso/alterarCurso',{
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome , sigla , IDCurso }),
      });
  
    lisCurso()  
  };

  return (
    <div class="main-panel"  className="arealistagem"
    style={{backgroundColor: 'white'}}>
      <div style={{width:'80%'}}>
        <h2 class="card-title">Cursos</h2>
        <div>
          <h5>Listagem de cursos</h5>
        </div>
        {lis && (
          <Cursos
            listar={lis}
            alterarCurso={alterarCurso}
            deletarCurso={deletarCurso}
          />
        )}
      </div>
      <button
        onClick={() => {
          lisCurso();
        }}
        class="btn btn-primary me-2"
      >
        Listar
      </button>
    </div>
  );
};

export default ConsultarCurso;
