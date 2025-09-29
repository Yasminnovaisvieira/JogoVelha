import Quadrado from "./Quadrado";
import { useState } from "react";

import "../styles/style.css";

function Tabuleiro() {
    // Para saber quais quadrados estão sendo marcados
    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    // Array com 9 posições diferentes e todos estaram nulos
    const [xProximo, setXProximo] = useState(true); // Para que quando renderizar o valor não seja perdido. A variável mantenha a memória (useState)

    function handleClick(i) {
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
            // Quadrado da posição X receberá "O"
            nextQuadrado[i] = "O"
        }

        setQuadrados(nextQuadrado);
        setXProximo(!xProximo);
    }

    const venceu = Vencedor(quadrados);
    let status;

    if (venceu) {
        status = "Vencedor é: " + venceu;
    } else if (!quadrados.includes(null)) {
        status = "Deu velha!";
    } else {
        status = "O próximo jogador é: " + (xProximo ? "X" : "O");
    }

    return (
        <>
            <h1 id="titulo">Jogo da Velha</h1>
            <h2 id="subtitulo">{status}</h2>

            <div id="tabuleiro">
                <div className="linha">
                    <Quadrado value={quadrados[0]} onQuadrado={() => handleClick(0)} venceu={venceu} />
                    <Quadrado value={quadrados[1]} onQuadrado={() => handleClick(1)} venceu={venceu} />
                    <Quadrado value={quadrados[2]} onQuadrado={() => handleClick(2)} venceu={venceu} />
                </div>

                <div className="linha">
                    <Quadrado value={quadrados[3]} onQuadrado={() => handleClick(3)} venceu={venceu} />
                    <Quadrado value={quadrados[4]} onQuadrado={() => handleClick(4)} venceu={venceu} />
                    <Quadrado value={quadrados[5]} onQuadrado={() => handleClick(5)} venceu={venceu} />
                </div>

                <div className="linha">
                    <Quadrado value={quadrados[6]} onQuadrado={() => handleClick(6)} venceu={venceu} />
                    <Quadrado value={quadrados[7]} onQuadrado={() => handleClick(7)} venceu={venceu} />
                    <Quadrado value={quadrados[8]} onQuadrado={() => handleClick(8)} venceu={venceu} />
                </div>
            </div>
        </>
    )
}

function Vencedor(quadrados) {
    const linhas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
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