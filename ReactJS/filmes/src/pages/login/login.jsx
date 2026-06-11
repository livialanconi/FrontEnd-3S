import Logo from "../../assets/img/logo.svg";
import "./Login.css";
import Botao from "../../components/botao/Botao.jsx";

import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../components/context/UsuarioContext.jsx";
import { Alerta } from "../../components/alerta/Alerta.jsx";
import api from "../../services/services.js";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { setUsuario } = useContext(UsuarioContext);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();

        if (email.trim().length == 0 || senha.trim().length == 0) {
            Alerta({
                title: "Login",
                text: "Preencha todos os campos",
                icon: "warning",
                confirmButtonText: "OK"
            })
            return false
        }

        const dadosLogin = {
            email: email,
            senha: senha
        }

        try {
            const retornoAPI = await api.post("/Login", dadosLogin)
            console.log(retornoAPI.data);
            const token = await retornoAPI.data.token;
            const usuarioDecoded = jwtDecode(token);
            localStorage.setItem("usuario", JSON.stringify(usuarioDecoded));
            setEmail("");
            setSenha("");

            navigate("/generos");

        } catch (error) {
            Alerta({
                title: "Login",
                text: "Usuario nao encontrado " + error,
                icon: "error",
                confirmButtonText: "OK"
            })
        }
    };

    const verificarLogin = () => {
        const logado = JSON.parse(localStorage.getItem("usuario"));
        if (logado != undefined || logado != null) {
            setUsuario(logado)
            navigate("/generos");
        }
    }

    useEffect(() => {
        verificarLogin();

        }, [])

    return (
        <main className="main_login">
            <div className="banner"></div>

            <section className="section_login">
                <img src={Logo} alt="Logo do Filmoteca" />

                <form className="form_login" onSubmit={login}>
                    <h1>Login</h1>

                    <div className="campos_login">

                        <div className="campo_input">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="campo_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                name="senha"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                    </div>

                    <Botao nomeDoBotao="Entrar" />
                </form>
            </section>
        </main>
    );
};

export default Login;