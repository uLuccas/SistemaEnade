import React from "react"
import Curso from "./Curso"

const Cursos = (props) => {

    const { listar , deletarCurso ,alterarCurso } = props

    return (
        <>
            {
                listar &&
                listar.map((item) => (
                  <Curso key={item.IDCurso} 
                  item={item} 
                  alterarCurso={alterarCurso}
                  deletarCurso={deletarCurso} 
                //   setNomeCurso={setNomeCurso}
                //   setSiglaCurso={setSiglaCurso}
                  />

                ))
            }
        </>
    )
}

export default Cursos;