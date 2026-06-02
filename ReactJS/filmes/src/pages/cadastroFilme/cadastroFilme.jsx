import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../Services/services"
import Lista from "../../components/lista/Lista"
//bibliotrcas de alertas
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/Alerta"





const CadastroFilme = () => {

    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false);
    const [genero, setGenero] = useState("")
    const [imagem, setImagem] = useState()

    const [listaGeneros, setListaGeneros] = useState([
        { idGenro: 1, nome: "Ação" },
        { idGenro: 2, nome: "Comédia" },
        { idGenro: 3, nome: "Terror" },
    ])

    const [listaFilmes, setListaFilmes] = useState([])

    const cadastrarFilme = async (e) => {

        e.preventDefault();
        if (valor.trim().length == 0) {
            Alerta({
                title: "Cadastro De Filme",
                text: "Filme deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok",
            });


            // alert("Filme deve ser preenchido antes de cadastrar")
            return false
        }

        console.log("Genero selecionado: " + genero)
        console.log("Genero selecionado: " + valor)

        const formData = new FormData()
        formData.append("Nome", valor)
        formData.append("idGenero", genero)
        formData.append("Imagem", imagem)

        try {
            const retornoAPI = await api.post("/Filme", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
            )
            if (retornoAPI.status == 201) {

                Alerta({
                    title: "Cadastro De Filme",
                    text: `Filme(${formData.get("Nome")}) cadastrado com sucesso`,
                    icon: "success",
                    confirmButtonText: "OK"
                });

                limparFormulario();
                getFilmes();
            } else {
                Alerta({
                    title: "Cadastro De Filme",
                    text: `Erro na chamada da API`,
                    icon: "error",
                    confirmButtonText: "OK"
                })
                // alert("Houve algum problema ao cadastrar!")
            }
        } catch (error) {
            Alerta(
                {
                    title: "Cadastro De Filme",
                    text: `Erro na chamada da API`,
                    icon: "error",
                    confirmButtonText: "OK"
                })

        }

    }

    const limparFormulario = () => {
        setValor("");
        setEditar(false)
        setIdEditar(0)
    }

    const preEditar = (item) => {
        const formData = new FormData()
        formData.append("Nome", valor)
        formData.append("idGenero", genero)
        formData.append("Imagem", null)

        setIdEditar(item.idFilme)
        setValor(item.nome)
        setEditar(true)
        console.log(item)
    }
    const editarFilme = async (e) => {
        e.preventDefault()
        // alert(`Agora sim, bora editar: ${valor} | Id: ${idEditar}`)
        const objEditar = {
            nome: valor
        }

        try {
            const formData = new FormData()

            formData.append("Nome", valor)
            formData.append("idGenero", genero)
            formData.append("Imagem", imagem)
            const retornoAPI = await api.put(`/Filme/${idEditar}`, formData)

            console.log(retornoAPI)
            if (retornoAPI.status == 204) {

                Alerta({
                    title: "Cadastro De Filme",
                    text: `Filme (${objEditar.nome}) Filme Alterado com sucesso`,
                    icon: "success",
                    confirmButtonText: "OK"
                })
                limparFormulario();
                getFilmes()
            } else {
                Alerta(
                    {
                        title: "Cadastro De Filme",
                        text: `Algum Problema aconteceu ao editar`,
                        icon: "error",
                        confirmButtonText: "OK"


                    })

            }
        } catch (error) {
            Alerta(
                {
                    title: "Cadastro De Filme",
                    text: `Erro ao chamar a API`,
                    icon: "error",
                    confirmButtonText: "OK"
                })
        }
    }

    const excluirFilme = async (item) => {
        let confirmaExclusao = false

        const result = await Alerta({
            title: "Cadastro de Filme",
            text: `Deseja realmente apagar o filme ${item.titulo}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar Exclusão",
            cancelButtonText: "Cancelar",
        })

        if (!result.isConfirmed) {
            return false
        }

        //    if (!confirm(`Deseja realmente apagar o filme(${item.nome})`)) {
        //     return false
        //    }    
        try {
            const formData = new FormData()

            formData.append("Nome", valor)
            formData.append("idGenero", genero)
            formData.append("Imagem", null)
            
            const retornoAPI = await api.delete(`/Filme/${item.idFilme}`, formData)
            if (retornoAPI.status == 204 || retornoAPI.status == 200) {

                limparFormulario();
                getFilmes()
                console.log(retornoAPI)
            }
        } catch (error) { }
    }

    useEffect(() => {
        getFilmes();
        getGeneros();
    }, [])


    const getFilmes = async () => {

        try {
            const retornoAPI = await api.get("/Filme")
            const dados = retornoAPI.data
            console.log(dados)
            setListaFilmes(dados)

            //  const filmesOrdenados = dados.sort((a, b) =>
            //     a.titulo.localeCompare(b.titulo)
            // )
            // setListaFilmes(filmesOrdenados)
            // console.log(filmesOrdenados)
        } catch (error) {
            alert("Erro ao buscar filmes: " + error)
        }

    }

    const getGeneros = async () => {

        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            const generosOrdenados = dados.sort((a, b) =>
                a.nome.localeCompare(b.nome)
            )
            setListaGeneros(generosOrdenados)
        } catch (error) {
            alert("Erro ao buscar gêneros: " + error)
        }

    }

    return (

        <><Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    // visibilidade="none"
                    placeholder="filme"
                    valor={valor}
                    //função que muda o state
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    btnEditar={editar}
                    listaGeneros={listaGeneros}
                    setGenero={setGenero}
                    setImagem={setImagem}

                />

                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade="none"

                    //Chama o método para validar:
                    lista={listaFilmes}
                    //Identifica o type de lista:
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}

                />
            </main>
            <Footer /></>

    )

}
export default CadastroFilme