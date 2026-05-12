import "./cadfruta.css";
import { useState } from "react";

//states, funções e variáveis

function CadFruta() {
    const [fruta, setFruta] = useState("")
    const [quantidade, setQuantidade] = useState(0);
    const [arrFRutas, setArrFrutas] = useState([
        { id: 1, nome: "Mamão", quantidade: 10 },
        { id: 2, nome: "Abacaxi", quantidade: 20 }
    ])

    function Cadastrar(e) {
        e.preventDefault();
        setArrFrutas([...arrFRutas,
        { id: Date.now(), nome: fruta, quantidade: quantidade }
        ]);

        limparFormulario();

        return false;
    }

    function limparFormulario() {
        setFruta("");
        setQuantidade(0);
    }

    return (
        <section className="cadastro">
            <h1>Cadastro</h1>
            <form action="" method="post" onSubmit={Cadastrar}>
                <fieldset className="linha">
                    <label htmlFor="fruta" className="cadastro_rotulo"> Digite o nome da fruta:</label>
                    <input
                        type="text"
                        id="fruta"
                        className="cadastro_entrada"
                        placeholder="Digite o nome da fruta"
                        onChange={(e) =>
                            setFruta(e.target.value)}
                    />

                    <label htmlFor="quantidade" className="cadastro_rotulo">
                        Digite a quantidade:
                    </label>

                    <input
                        type="number"
                        id="quantidade"
                        className="cadastro_entrada"
                        placeholder="Digite a quantidade"
                        onChange={(e) => { setQuantidade(parseInt(e.target.value)) }}
                    />

                    <button type="submit" className="cadastro__btn-cadastrar">Cadastrar</button>
                    <br />
                    <label htmlFor="">{fruta}</label>
                </fieldset>
            </form>

            <ul className="listagem">
                {arrFRutas.map((f) => {
                    return <li key={f.id}>Fruta:{f.nome} | Quantidade: {f.quantidade}
                    </li>
                })}
            </ul>

        </section>

    )
}
export default CadFruta;