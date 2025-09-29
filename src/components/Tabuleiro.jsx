import Quadrado from "./Quadrado";
import { useState } from "react";

function Tabuleiro () {
    // Para saber quais quadrados estão sendo marcados
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    // Array com 9 posições diferentes e todos estaram nulos
    const [xProximo, setXProximo] = useState(true); // Para que quando renderizar o valor não seja perdido. A variável mantenha a memória (useState)

    function handleClick(i){
        // Para que o mesmo quadrado não possa ser clicado duas vezes
        if (quadrados[i]) {
            return;
        }

        // Criando cópias das constantes
        const nextQuadrado = quadrados.slice();

        if (xProximo) {
            // Quadrado da posição X receberá "X"
            nextQuadrado[i] = "X"
        }
        else {
            nextQuadrado[i] = "O"
        }

        setQuadrados(nextQuadrado);
        setXProximo(!xProximo);
    }

    const venceu = Vencedor(quadrados);
    let status;

    if (venceu) {
        status = "Vencedor é: " + venceu;
    }
    else {
        status = "O próximo jogador é: " + (xProximo ? "X": "O");
    }

    return(
        <>
            <h1>{status}</h1>
            <div className="linha">
                <Quadrado value={quadrados[0]} onQuadrado={()=> handleClick(0)} />
                <Quadrado value={quadrados[1]} onQuadrado={()=> handleClick(1)} />
                <Quadrado value={quadrados[3]} onQuadrado={()=> handleClick(3)} />
            </div>

            <div className="linha">
                <Quadrado value={quadrados[4]} onQuadrado={()=> handleClick(4)} />
                <Quadrado value={quadrados[5]} onQuadrado={()=> handleClick(5)} />
                <Quadrado value={quadrados[6]} onQuadrado={()=> handleClick(6)} />
            </div>

            <div className="linha">
                <Quadrado value={quadrados[7]} onQuadrado={()=> handleClick(7)} />
                <Quadrado value={quadrados[8]} onQuadrado={()=> handleClick(8)} />
                <Quadrado value={quadrados[9]} onQuadrado={()=>handleClick(9)} />
            </div>
        </>
    )
}

function Vencedor (quadrados) {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < linhas.length; i++) {
        const [a, b, c] = linhas[i];
 
        if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
            return quadrados[a];
        }
    }

    return null;
}

export default Tabuleiro;