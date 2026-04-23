function calcular() {
    const nome = document.getElementById("nome").value;
    const peso = parseFloat( document.getElementById("peso").value);
    const altura = parseFloat( document.getElementById("altura").value);
    
    console.log(altura);
    console.log(peso);

    //verificar se tem campo sem preencher
    if (nome.trim().length == 0 || altura.trim().length == 0 || peso.trim().length == 0) {
        alert("Preencha todos os campos!");
        return false;
    }

    console.log("Liberado para cadastrar");
    
}