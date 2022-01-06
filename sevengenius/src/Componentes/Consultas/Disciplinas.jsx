import React from "react";
import Disciplina from "./Disciplina";

const Disciplinas = (props) => {
  const { listarDisc, deletarDisciplina, alterarDisciplina } = props;

  return (
    <>
    {   listarDisc &&
            listarDisc.map((item) => (
            <Disciplina
                key={item.iDDisciplinas}
                item={item}
                alterarDisciplina={alterarDisciplina}
                deletarDisciplina={deletarDisciplina}
            />
            ))
    }
    </>
  );
};

export default Disciplinas;
