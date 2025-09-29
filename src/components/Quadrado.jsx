// Estados dos botões
// import { useState } from "react";

function Quadrado ({value, onQuadrado}) {
    // Função para verificar se o usuário clicou
    // function handleClick(){
    //     setValue("X")      
    // }

    return (
        <button className="quadrado" onClick={onQuadrado}>
            {value}
        </button>
    )  
}

export default Quadrado;