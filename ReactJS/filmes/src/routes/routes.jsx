import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/cadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Login</Link> {" "}
                <Link to="/cadastro-filme">Cadastro Filme</Link> {" "}
                <Link to="/cadastro-genero">Cadastro Genero</Link> {" "}
            </nav>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/cadastro-filme" />
                <Route element={<CadastroGenero />} path="/cadastro-genero" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas