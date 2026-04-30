const numeros = [
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];
console.log(`Array original: ${numeros}`)

console.log(`Array Modificado:`);
console.log();

let textoResultado = "";
const novosNumeros = numeros.map((n) =>  {
    return n * 2;
});

novosNumeros.forEach((n) => {
    textoResultado += `${n} | `;
});


// str.substring(0,str.length -1);
textoResultado = textoResultado.substring(0, textoResultado.length -3)
console.log(textoResultado);