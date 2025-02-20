function encontrarMaiorNumero(array) {
    return Math.max(...array);
}

const entrada = [10, 25, 38, 7, 92, 56];
const resultado = encontrarMaiorNumero(entrada);

console.log("Entrada:", entrada);
console.log("Maior valor:", resultado);