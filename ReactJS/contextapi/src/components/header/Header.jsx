import { useContext } from "react"
import { Link } from "react-router-dom"
import { UsuarioContext } from "../../context/UsuarioContext"

const Header = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const logout = () => {
        localStorage.removeItem("usuario")
        setUsuario(null)
    }

    return (
        <header>
            <nav>
                <Link to={"/"}>Home</Link> {" "}
                <Link to={"/perfil"}>Perfil</Link> {" "}
                <Link to={"/produto"}>Produto</Link> {" "}
                <Link to={"/cadastroproduto"}>Cadastrar Produto</Link> {" "}
                <Link to={"/listarproduto"}>Listar Produtos</Link>

            </nav>
            <h2>
                Bem-Vindo, {usuario ? usuario : "Visitante"}
                <button
                    onClick={
                        () =>
                            logout()
                    }
                >Sair
                </button>

            </h2>
        </header>

    )
}

export default Header