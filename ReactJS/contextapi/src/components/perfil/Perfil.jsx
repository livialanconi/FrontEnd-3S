import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useState } from "react"

const Perfil = () => {
    //contexts - destructuring
    const { usuario, setUsuario } = useContext(UsuarioContext)
    //states e variáveis
    const [novoUsuario, setNovoUsuario] = useState()

    //ciclo de vida e funções

    //jsx
    return (
        <div>
            <h2>Página de Perfil {usuario}</h2>
            <input type="text" placeholder="digite o novo usuário" onChange={(e) => {setNovoUsuario(e.target.value)}} />
            <button onClick={() => {
                setUsuario(novoUsuario)
            }}
            >Trocar Usuário</button>
            <p>Novo Usuário: <strong>{novoUsuario}</strong></p>
        </div>
    )
}

export default Perfil