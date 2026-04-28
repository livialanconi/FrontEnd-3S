async function calcular() {
    const nome = document.getElementById("nome").value.trim();
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    // verificar se tem campos vazios
    if (
        nome.trim().length == 0 ||
        isNaN(altura) ||
        isNaN(peso)
    ) {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    console.log("Campos preenchidos corretamente.");
    //Calcular o IMC 
    const imc = calcularIMC(peso, altura);

    //Gerar a mensagem de acordo com o resultado
    const situacao = gerarSituacao(imc);

    //Gerar um objeto JS com os dados
    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        situacao: situacao
    };

    //Cadastrar na API
    const dadosGravados = await cadastrarNaAPI(objIMC);
    console.log(dadosGravados);

    if ("error" in dadosGravados) {
        alert(dadosGravados.error);
    } else {
        //Mostrar no HTML (inserir a linha na tabela)
        carregarCadastros();
    }
}//fim da função calcular

async function cadastrarNaAPI(objCadastro) {
    //fazer um post na API

    try {
        const retorno = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objCadastro),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        const dadosGravados = await retorno.json();
        return dadosGravados;

    } catch (error) {
        console.log(error);
        return {
            error: "Erro ao cadastrar na API"
        };
    }
} // fim da funcao

async function carregarCadastros() {
    try {
        const retorno = await fetch("http://localhost:3000/imc"); // faz uma busca GET

        const dadosCadastrados = await retorno.json(); // convertendo a resposta para json

        dadosCadastrados.sort((a, b) => a.nome.localeCompare(b.nome)); // ordena os dados por nome

        document.getElementById("cadastro").innerHTML = ""; // limpa a tabela antes de carregar 

        // percorre os dados para cada item 
        dadosCadastrados.forEach(item => { // para cada item do array, chama a função mostrarNaTela
            mostrarNaTela(item); // mostra o item na tela
        });

    } catch (error) {
        console.log(error);
        alert("Erro ao carregar os dados");
    }
}

function mostrarNaTela(objCadastro) {
    document.getElementById("cadastro").innerHTML += `
    <tr>
        <td>${objCadastro.nome}</td>
        <td>${objCadastro.altura.toFixed(2)}</td>
        <td>${objCadastro.peso.toFixed(2)}</td>
        <td>${objCadastro.imc.toFixed(2)}</td>
        <td>${objCadastro.situacao}</td>
    </tr>`;
}

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function gerarSituacao(imc) {
    if (imc < 16) {
        return "Magreza grave";
    } else if (imc < 17) {
        return "Magreza moderada";
    } else if (imc < 18.5) {
        return "Magreza leve";
    } else if (imc < 25) {
        return "Saudável";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else if (imc < 35) {
        return "Obesidade Grau I";
    } else if (imc < 40) {
        return "Obesidade Grau II (severa)";
    } else {
        return "Obesidade Grau III (mórbida)";
    }
}