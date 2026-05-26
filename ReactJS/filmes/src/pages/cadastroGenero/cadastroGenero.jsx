import "./cadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import { useEffect, useState } from "react"
import api from "../../services/services"
import Lista from "../../components/lista/Lista"
import Swal from "sweetalert2" //biblioteca para alertas
import { Alerta } from "../../components/alerta/alerta"

const CadastroGenero = () => {

    const [valor, setValor] = useState("")
    const [idEditar, setIdEditar] = useState(0)
    const [editar, setEditar] = useState(false)


    const [listaGeneros, setListaGeneros] = useState([
        { idGenero: 1, nome: "Romance" },
        { idGenero: 1, nome: "Comédia" }
    ])

    const cadastrarGenero = async (e) => {
        e.preventDefault()

        if (valor.trim().length == 0) {
            Alerta({
                title: "Cadastro de Gênero",
                text: "Gênero deve ser preenchido antes de cadastrar!",
                icon: "warning",
                confirmButtonText: "Ok",
            });
            
            return false;
        }

        const objCadastro = {
            nome: valor
        }
        try {
            const retornoAPI = await api.post("/Genero", objCadastro)

            if (retornoAPI.status == 201) {
                Alerta({
                title: "Cadastro de Gênero",
                text: `Gênero ${objCadastro.nome} cadastrado com sucesso!`,
                icon: "success",
                confirmButtonText: "Ok",
            });
                // alert(`Gênero ${objCadastro.nome} cadastrado com sucesso!`)
                limparFormulario()
                getGeneros()

            } else {
                Alerta({
                title: "Cadastro de Gênero",
                text: "Houve algum problema ao cadastrar!",
                icon: "error",
                confirmButtonText: "Ok",
            });
            }

        } catch (error) {
            Alerta({
                title: "Cadastro de Gênero",
                text: "Erro ao chamar a API",
                icon: "error",
                confirmButtonText: "Ok",
            });
            // alert("Erro na chamada da API")
            console.log(error)
        }

    }

    const limparFormulario = () => {
        setValor("")
        setEditar(false)
        setIdEditar(0)
    }

    //mostrar os dados no formulario
    const preEditar = (item) => {
        //jogar os dados no formulario
        setValor(item.nome)
        setIdEditar(item.idGenero)
        setEditar(true)
        console.log(item)
    }

    const editarGenero = async (e) => {
        e.preventDefault()
        // alert(`Agora sim: Gênero: ${valor} | Id: ${idEditar}`);
        //validar o formulário
        const objEditar = {
            nome: valor
        }
        //chamar a api e salvar os dados
        try {
            const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar)
            if (retornoAPI.status == 204) {
                Alerta({
                title: "Cadastro de Gênero",
                text: "Gênero editado com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            });
                // alert("Gênero editado com sucesso!")
                limparFormulario()
                getGeneros()
            } else {
                Alerta({
                title: "Cadastro de Gênero",
                text: "Algum problema aconteceu ao editar",
                icon: "error",
                confirmButtonText: "Ok",
            });
                // alert("Algum problema aconteceu ao editar")
            }
        } catch (error) {
            Alerta({
                title: "Cadastro de Gênero",
                text: "Erro ao chamar a API",
                icon: "error",
                confirmButtonText: "Ok",
            });
            
            console.log(error)
        }
    }

    const excluirGenero = async (item) => {
        const result = await Alerta({
            title: "Cadastro de Gênero",
            text: `Deseja realmente excluir o gênero ${item.nome}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Confirmar exclusão",
            cancelButtonText: "Cancelar",
            

            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
        })

        if (!result.isConfirmed) {
            return false;
        }

        // if (!confirm(`Deseja realmente excluir o gênero ${item.nome}?`)) {
        //     return false;
        // }

        try {
            const retornoAPI = await api.delete(`/Genero/${item.idGenero}`)
            console.log(retornoAPI)
            Swal.fire({
                title: "Cadastro de Gênero",
                text: "Gênero excluído com sucesso!",
                icon: "success",
                confirmButtonText: "Ok",
            })
            getGeneros()

        } catch (error) {

        }
    }

    useEffect(() => {
        getGeneros()
    }, [])

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
                    tituloCadastro="Cadastro de Gêneros"
                    visibilidade="none"
                    placeholder="gênero"
                    valor={valor}
                    cancelarEdicao={limparFormulario}
                    setValor={setValor}
                    funcCadastro={editar ? editarGenero : cadastrarGenero}
                    btnEditar={editar}
                />

                <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    // Identifica o tipo de lista:
                    tipoLista="genero"
                    funcExcluir={excluirGenero}
                    funcEditar={preEditar}
                />

                <p>Gênero que vamos cadastrar <strong>{valor}</strong></p>
            </main>
            <Footer />
        </>
    )
}
export default CadastroGenero