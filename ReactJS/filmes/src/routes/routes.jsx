import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/"/> 

                <Route
                path="/filmes" element={
                    <PrivateRoute>
                        <CadastroFilme/>
                    </PrivateRoute>
                }
                />

                <Route
                 path="/generos"
                element={
                    <PrivateRoute>
                        <CadastroGenero/>
                    </PrivateRoute>
                }
                />

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas