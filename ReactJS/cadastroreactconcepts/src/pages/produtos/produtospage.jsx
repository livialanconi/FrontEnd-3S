import { useEffect, useState } from "react";
import "./produtospage.css"; //node_modules
import fotoProduto from "/images/hero.png"// o barra já é a pasta public
export const ProdutosPage = () => {
    const [listaProdutos, setListaProdutos] = useState([]);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState(0);
    const [imagem, setImagem] = useState("hero.png");

    useEffect(() => {
        const getDados = async () => {
            try {
                const retornoAPI = await fetch("http://localhost:3000/produtos");
                const dados = await retornoAPI.json();
                // console.log(dados);
                setListaProdutos(dados);
            } catch (error) {
                console.log(error);
            }
        }

        getDados()
    }, []);

    const cadastrar = async (e) => {
        e.preventDefault() // Não deixa o formulario ser postado
        if (titulo.trim().length == 0 || descricao.trim().length == 0 || preco <= 0) {
            alert("Preencha todos os campos");
            return false;
        }
        const objProduto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        }
        // console.log(objProduto);
        const retornoAPI = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            body: JSON.stringify(objProduto),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        const produtoCadastrado = await retornoAPI.json();
        console.log(produtoCadastrado);
        setListaProdutos([...listaProdutos, produtoCadastrado])

    }

    const deletar = (id) => {
    try {
        const retornoAPI = fetch(`http://localhost:3000/produtos/${id}`, {
            method: "delete",
        });

        const novaLista = listaProdutos.filter((prod) => {
            return p.id != id
        })

        if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
            alert("Produto deletado com sucesso")
            setListaProdutos(novaLista);
        } else {
            alert("Erro ao cadastrar o produto");
        }
    } catch (error) {
        
    }
};

    return (
        <>
            <h1>Página de Produtos</h1>

            <form action="" onSubmit={cadastrar}>
                <div className="linha">
                    <label htmlFor="titulo">Título</label>
                    <input type="text" placeholder="titulo" id="titulo" onChange={(e) => {
                        setTitulo(e.target.value)
                    }} />
                </div>
                <div className="linha">
                    <label htmlFor="descricao">Descrição</label>
                    <input type="text" placeholder="descricao" id="descricao" onChange={(e) => {
                        setDescricao(e.target.value)
                    }} />
                </div>
                <div className="linha">
                    <label htmlFor="preco">Preço</label>
                    <input type="text" placeholder="preco" id="preco" onChange={(e) => {
                        setPreco(parseFloat(e.target.value))
                    }} />
                </div>
                <br />
                <button>Cadastrar</button>
            </form>
            <br />
            <br />
            <section className="lista-produtos">
                {listaProdutos.map((p) => {
                    return (
                        <article key={p.id} className="card-produto">
                            <img className="foto-produto" src={fotoProduto} alt="" />
                            <h2>{p.titulo}</h2>
                            <p>{p.preco}</p>
                            <p>{p.descricao}</p>

                            <a href="" onClick={(e) => {
                                e.preventDefault()
                                deletar(p.id)
                            }}>Apagar</a>
                        </article>
                    )
                })}

            </section>
        </>
    );
};
