import "./produtospage.css"
import fotoProduto from "../../assets/hero.png"
import { useEffect, useState } from "react"

import api from "../../Services/services"



export const ProdutosPage = () => {
    const[listaProdutos, setListaProdutos] = useState([])
    
    //states
    const [id,setId] = useState(0)
    const [preco,setPreco] = useState(0)
    const [descricao,setDescricao] = useState("")
    const [imagem,setImagem] = useState("")
    const [titulo,setTitulo] = useState("")
    const [editar, setEditar] = useState(false)

    //function

    //carregar
    useEffect(() => {
        const getDados = async() => {    
            try{
                const retorno = await api.get(`/produtos/${id}`)
                // const retornoAPI = await fetch ("http://localhost:3000/produtos")
                const dados = await retornoAPI.data;
                setListaProdutos(dados)
            } catch (erro) {
                console.log(erro)
            }
        }
        getDados()
    }, [])

    const cadastrarProduto = async (e) => {
        e.preventDefault()


        if(titulo.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || preco == 0)
        {
            alert("Preencha todos os campos corretamente")
            return false
        }

        const objProduto = {

            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem

            
        }
        console.log(objProduto)
        const retornoAPI = await fetch ("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objProduto),
            header: {
                "Content-Type" : "application/json; charset=UFT-8"
            }
        })
        const objetoRetornado = await retornoAPI.json()
        console.log(objetoRetornado)
        setListaProdutos([...listaProdutos, objetoRetornado])

        limparFormulario()

    }

    function limparFormulario() {
        setTitulo("")
        setDescricao("")
        setPreco(0)
        setId(0)
        setImagem("hero.png")
    }

    //Deletar
    const deletar = async (id) => {
        try{
            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`)

            //Gera a lista de produtos que não foram apagados
            const novaLista = listaProdutos.filter((prod) => {
                return prod.id != id
            })

            if(retornoAPI.status == 200 && retornoAPI.statusText == "OK"){
                alert("Produto apagado com sucesso!")
            } else {
                alert("Erro ao cadastar o produto")
            }
            setListaProdutos(novaLista)
            getDados()
        } catch (erro){}
    }

    const editarProduto = async (e) => {
    e.preventDefault()

    if (
        titulo.trim().length == 0 ||
        descricao.trim().length == 0 ||
        isNaN(preco) ||
        preco == 0
    ) {
        alert("Preencha todos os campos corretamente")
        return
    }

    const objEditarProduto = {
        titulo,
        descricao,
        preco,
        imagem
    }

    try {
        const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {
            method: "PUT",
            body: JSON.stringify(objEditarProduto),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })

        const objetoEditarRetornado = await retornoAPI.json()

        if (retornoAPI.status == 200) {

            const novaLista = listaProdutos.map((prod) => {
                if (prod.id == id) {
                    return objetoEditarRetornado
                }
                return prod
            })

            setListaProdutos(novaLista)

            limparFormulario()
            setEditar(false)

            alert("Produto editado com sucesso!")
        } else {
            alert("Erro ao editar produto")
        }

    } catch (error) {
        alert("Servidor fora do ar!")
    }
}

    return (
        <div className="produtos-page">
        <h1>Produtos</h1>

       
            <form action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
            <fieldset className="cadastro-caixa">
            <div className="linha">
                <label htmlFor="titulo"></label>
                <input className= "input-produto" type="text" placeholder="titulo" id="titulo" value={titulo} onChange={(e) => {
                    setTitulo(e.target.value)
                }}/>
            </div>
            <div className="linha">
                <label htmlFor="preco"></label>
                <input className= "input-produto" type="text" placeholder="preco" id="preco" value={isNaN(preco) ? 0 : preco} onChange={(e) => {
                    setPreco(e.target.value)
                }}/>
            </div>            
            <div className="linha">
                <label htmlFor="descricao"></label>
                <input className= "input-produto" type="text" placeholder="descricao" id="descricao" value={descricao} onChange={(e) => {
                    setDescricao(e.target.value)
                }}/>
            </div> 
            <div className="linha">
                <label htmlFor="img"></label>
                <input className= "input-produto" type="text" placeholder="img" id="img" onChange={(e) => {
                    setImagem(e.target.value)
                }}/>
            </div> 
            
            <br />
            {/* So aparece na tela se o editar for true */}
            {editar && (
                <button onClick={() => {
                setEditar(false) 
                limparFormulario()
            }} className="btn-cadastrar">Cancelar</button>
            )}

            
            <button className="btn-cadastrar">Salvar</button>
            </fieldset>
        </form>
       
        <br />
        <section className="lista-produtos">
            {listaProdutos.map((p) => {
                return(
                    <article key={p.id} className="card-produto">
                        <img className="foto-produto" src={p.imagem} alt="" />
                        <h2>{p.titulo}</h2>
                        <p>{p.preco}</p>
                        <p>{p.descricao}</p>
                        <a className="apagar-editar-button" href="" onClick={(e) => {
                            e.preventDefault()
                            deletar(p.id)
                        }}>Apagar</a>
                        
                        <a className="apagar-editar-button" href="" onClick={(e) => {
                            e.preventDefault()
                            
                            setEditar(true);
                            setId(p.id);
                            setTitulo(p.titulo);
                            setPreco(p.preco);
                            setDescricao(p.descricao);
                            setImagem(p.imagem);
                            
                        }}>Editar</a>
                    </article>
                )
            })}
        </section>
        </div>
    )
}