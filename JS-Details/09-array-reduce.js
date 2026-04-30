const estoque = [
    {
        descricao : "Camisa Polo",
        cor : "Verde",
        preco : 49.99,
        perfil: "M",
        quantidade: 10,
        promocao : true
    },
    {
        descricao : "Camisa Polo",
        cor : "Amararela",
        preco : 49.99,
        perfil: "F",
        quantidade: 15,
        promocao : true
    },
    {
        descricao : "Camisa Polo",
        cor : "Azul",
        preco : 49.99,
        perfil: "M",
        quantidade: 5,
        promocao : false
    },
    {
        descricao : "Camisa Polo",
        cor : "Roxa",
        preco : 49.99,
        perfil: "F",
        quantidade: 19,
        promocao : false
    },
];

//reduz o array a um unico elemento. No caso um somatorio, por exemplo:
let = totalPreco = 0;
let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco;
    return total + produto.quantidade;
}, 0);

console.clear();
console.log(`Voce tem um total de ${totalEstoque} produtos no estoque`);
console.log(`O valor total do seu estoque é R${totalPreco.toFixed(2)}`);

