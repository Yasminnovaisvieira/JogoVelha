import "../styles/style.css";

function Quadrado ({value, onQuadrado, venceu}) {

    return (
        <button className="quadrado" onClick={onQuadrado} disabled={(value !== null) || (!!venceu)} >
            {value}
        </button>
    )  
}

export default Quadrado;