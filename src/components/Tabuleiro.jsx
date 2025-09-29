import Quadrado from "./Quadrado";
import { useState } from "react";

function Tabuleiro () {
    // Para saber quais quadrados estão sendo marcados
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    // Array com 9 posições diferentes e todos estaram nulos
    const [xProximo, setXProximo] = useState(true); // Para que quando renderizar o valor não seja perdido. A variável mantenha a memória (useState)

    function handleClick(i){
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

    return(
        <>
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

export default Tabuleiro;