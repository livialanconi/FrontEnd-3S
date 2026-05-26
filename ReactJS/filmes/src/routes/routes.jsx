import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Login from "../pages/login/login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/cadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/filmes" />
                <Route element={<CadastroGenero />} path="/generos" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas