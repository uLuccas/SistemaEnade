import React from "react"
import Questao from "./Questao"
import './Questoes.css'

const Questoes = (props) => {
    const { data , deleteQuestao, alaterarQuestao} = props;

    return (
        <div>
            {
                data &&
                data.map((item) => (
                    <Questao
                        item={item}
                        deleteQuestao={deleteQuestao}
                        alaterarQuestao={alaterarQuestao}
                    />
                ))
            }

        </div>
    )
}

export default Questoes;