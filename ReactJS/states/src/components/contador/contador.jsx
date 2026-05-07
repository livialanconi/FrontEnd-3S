import { useState } from "react"
import "./contador.css"

 const Contador = ()=> {

    const [valor, setValor] = useState(0)
    return (
        <>
        <p>Contagem: {valor}</p>
        <button onClick={()=>{return setValor(valor + 1)}}>++</button>
        </>
    )
}

export default Contador