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

//retornar todas as camisetas do perfil feminino: "F"

// const camisetasFemininas = estoque.filter((camiseta) => {
//     return camiseta.perfil == "F";
// });

// console.log(camisetasFemininas);

const produtosPromocao = estoque.filter((p) =>{
    return p.promocao == true;
    });

    let = qtdPromocao = 0;

    produtosPromocao.forEach((p) => {
        qtdPromocao += p.quantidade;
    });
    
console.log(`Quantidade de produtos em promoção: ${qtdPromocao}`);
console.log(produtosPromocao);