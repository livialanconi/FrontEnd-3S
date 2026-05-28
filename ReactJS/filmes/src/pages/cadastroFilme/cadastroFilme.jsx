import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services"
import Lista from "../../components/lista/Lista"
//bibliotrcas de alertas
import Swal from "sweetalert2"
import { Alerta } from "../../components/alerta/alerta"


const CadastroFilme = () => {

    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [idGenero, setIdGenero] = useState(0)
    const [editar, setEditar] = useState(false);
    const [listaGeneros, setListaGeneros] = useState([]);

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

        const formData = new FormData();

        formData.append('nome', valor);
        formData.append('idGenero', idGenero);


        try {
            const retornoAPI = await api.post("/Filme", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log(retornoAPI)

            if (retornoAPI.status == 201) {

                Alerta({
                    title: "Cadastro De Filme",
                    text: `Filme (${valor}) cadastrado com sucesso`,
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
                    text: `Erro na chamada da API (catch) ${error}`,
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

        setIdEditar(item.idFilme)
        setValor(item.nome)
        setEditar(true)
    }
    const editarFilme = async (e) => {
        e.preventDefault()
        // alert(`Agora sim, bora editar: ${valor} | Id: ${idEditar}`)
        const objEditar = {
            nome: valor
        }
        try {
            const retornoAPI = await api.put(`/Filme/${idEditar}`, objEditar)
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
            const retornoAPI = await api.delete(`/Filme/${item.idFilme}`)
            if (retornoAPI.status == 204 || retornoAPI.status == 200) {

                limparFormulario();
                getFilmes()
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
            const dados = await retornoAPI.data
            const filmesOrdenados = dados.sort((a, b) =>
                a.titulo.localeCompare(b.nome)
            )
            setListaFilmes(filmesOrdenados)
        } catch (error) {
            alert("Erro ao buscar filmes: " + error)
        }

    }

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")
            const dados = retornoAPI.data
            setListaGeneros(dados)

        } catch (error) {
            Swal.fire({
                title: "Cadastro de Gênero",
                text: "Erro ao retornar os dados",
                icon: "error",
                confirmButtonText: "Ok",
            })
            // alert("Erro ao retornar os dados")
        }
    }
    return (
        <>
            <Header />

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
                    setIdGenero={setIdGenero}

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
            <Footer />
        </>

    )

}
export default CadastroFilme