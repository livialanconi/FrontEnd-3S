import { useContext, useState } from "react"
import { UsuarioContext } from "./UsuarioContext"

//disponibiliza o state do usuario de forma global para todos os componentes filhos (children)
export const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState("Lívia")

    return (
        <UsuarioContext.Provider
            value={{
                usuario,
                setUsuario
            }}
        >
            {children}
        </UsuarioContext.Provider>
    )
}