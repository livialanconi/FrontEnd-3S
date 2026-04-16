async function cadastrarContato(objetoContato) {
    
    console.log(objetoContato);

    //chmamar a api com o fetch
    const resposta = await fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato), //converte o objeto JavaScript em JSON
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }

    });

    return await resposta;
}

async function buscarEndereco(cep) {

//quando o cep nao vier preenchido
if (cep.trim().length < 8) {
    
alert("O cep deve ter 8 numeros");
return false;
}
    //buscar o cep no viacep
    try {
        aguardadoCampos();
    
    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await retorno.json();
    console.log(dados); //objeto dados
    console.log(dados.logradouro); //nome da rua
    console.log(dados.bairro); //bairro
    console.log(dados.localidade); //cidade
    console.log(dados.estado); //estado

    campoDoFormulario = dados.logradouro;
    document.getElementById("rua").value = dados.logradouro;
    campoDoFormulario = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    campoDoFormulario = dados.logradouro;
    document.getElementById("cidade").value = dados.localidade;
    campoDoFormulario = dados.logradouro;
    document.getElementById("estado").value = dados.estado;

    } catch (error) {
        console.log(error);
    }

}

function aguardadoCampos(){
    document.getElementById("rua").value = "aguarde...";
    document.getElementById("bairro").value = "aguarde...";
    document.getElementById("cidade").value = "aguarde...";
    document.getElementById("estado").value = "aguarde...";
}

function validarFormulario() {

    let nome = document.getElementById('nome').value;

    let quantidadeErros = 0;

     if(nome.trim().length == 0){
        formError("nome");
        quantidadeErros++;
        // alert("O campo nome é obrigatório!");
    }
    else{
        reiniciaBorda("nome");
    }

     let sobrenome = document.getElementById('Sobrenome').value;

    if(sobrenome.trim().length == 0){
        formError("Sobrenome");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("Sobrenome");
    }

    let email = document.getElementById('Email').value;

    if(email.trim().length == 0){
    formError("Email");
    quantidadeErros++;
    alert("O campo sobrenome é obrigatório!");
    }
    else{
    reiniciaBorda("Email");
    }

    let pais = document.getElementById('pais').value;

    if(pais.trim().length == 0){
    formError("pais");
    quantidadeErros++;
    alert("O campo sobrenome é obrigatório!");
    }
    else{
    reiniciaBorda("pais");}

    let ddd = document.getElementById('ddd').value;

    if(ddd.trim().length == 0){
    formError("ddd");
    quantidadeErros++;
    alert("O campo sobrenome é obrigatório!");}
    else{
  reiniciaBorda("ddd");
     }

    let telefone = document.getElementById('numero').value;

    if(telefone.trim().length == 0){
    formError("numero");
  quantidadeErros++;
    alert("O campo sobrenome é obrigatório!");
    }
    else{
 reiniciaBorda("numero");
    }

let cep = document.getElementById('cep').value;

    if(cep.trim().length == 0){
    formError("cep");
   quantidadeErros++;
     alert("O campo sobrenome é obrigatório!");
     }
    else{
    reiniciaBorda("cep");
    }

    let rua = document.getElementById('rua').value;

    if(rua.trim().length == 0){
    formError("rua");
    quantidadeErros++;
    alert("O campo sobrenome é obrigatório!");
    }
    else{
    reiniciaBorda("rua");
    }

    let numero = document.getElementById('numero2').value;
    
    if(numero.trim().length == 0){
    formError("numero2");
    quantidadeErros++;
    alert("O campo sobrenome é obrigatório!");
    }
    else{
    reiniciaBorda("numero2");
    }

    let apto = document.getElementById('apto').value;

    if(apto.trim().length == 0){
        formError("apto");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("apto");
    }

    let bairro = document.getElementById('bairro').value;
    
    if(bairro.trim().length == 0){
        formError("bairro");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("bairro");
    }

    let cidade = document.getElementById('cidade').value;
    
    if(cidade.trim().length == 0){
        formError("cidade");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("cidade");
    }

    let estado = document.getElementById('estado').value;
    
    if(estado.trim().length == 0){
        formError("estado");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("estado");
    }
    let anotações = document.getElementById('Anotações').value;
    
    if(anotações.trim().length == 0){
        formError("Anotações");
        quantidadeErros++;
        // alert("O campo sobrenome é obrigatório!");
    }
    else{
        reiniciaBorda("Anotações");
    }

    if (quantidadeErros > 0) {
        alert("Existem " + quantidadeErros + " campo(s) não preenchido(s).");
    } else {

        let objetoContato = {
            nome: nome,
            sobrenome: sobrenome,
            email: email,
            telefone: `${pais} (${ddd}) ${telefone}`,
            cep: cep,
            rua: rua,
            numero: numero,
            apto: apto,
            bairro: bairro,
            cidade: cidade,
            estado: estado,
            anotações: anotações
        }

    
        let cadastrado = cadastrarContato(objetoContato);
        return false;

        reiniciaTodasAsBordas();
    }
}

function formError(idCampo){
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo){
    document.getElementById(idCampo).style.border = "transparent";
}