import { ProdutoContext } from "./ProdutoContext"
import { useState } from "react"

export const ProdutoProvider = ( { children } ) => {
    const [listaProdutos, setListaProdutos] = useState([
        "Xiaomi"
    ])

    return (
        <ProdutoContext.Provider
            value={{
                listaProdutos,
                setListaProdutos
            }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}

export default ProdutoProvider