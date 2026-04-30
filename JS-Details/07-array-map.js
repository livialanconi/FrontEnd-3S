const hobbies = [
    "Correr",
    "Nadar",
    "Cozinhar",
    "Viajar",
    "Conversar",
    "Dormir"
];

//utilizado para interar arrays e retornar um novo array, compondo um 
//novo resultado para cada indice do array antigo, veja:

hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});