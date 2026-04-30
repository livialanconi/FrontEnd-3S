//Utilizado para filtrar elemento dentro de um array, retornando apenas o encontrado, veja:
const numeros = [10, 20, 30, 90, 50];

const numeroEncontrado = numeros.filter((n) => {
    return n == 10;
});

const nomes = [
    "Lívia",
    "Eloysa",
    "Amy Lee", 
    "Henrique", 
    "Luis",
    "Pedro Enzo",
    "Gabriel",
    "Walyson",
    "Hugo",
    "Lorenzo",
    "Mayara",
    "Bruno",
    "Lucas",
    "Edu"
];

// pessoasLegais = nomes.filter((nome) => {
//     return nome.length <= 3;
// });
// console.log(pessoasLegais);

pessoasLetraN = nomes.filter((nome) => {
    const primeiraLetra = nome.substring(0,1);
    return primeiraLetra == "N" || primeiraLetra == "L";
});

console.log(pessoasLetraN);