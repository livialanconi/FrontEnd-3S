import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Produto = () => {
    const {usuario} = useContext(UsuarioContext)

    return (
        <>
            <h2>Página de Produtos</h2>
            <p>Bem vindo, {usuario}</p>
        </>
    )
}

export default Produto