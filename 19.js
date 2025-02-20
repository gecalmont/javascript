function inverterString(str) {
    return str.split('').reverse().join('');
}

const entrada = "JavaScript";
const resultado = inverterString(entrada);

console.log("Entrada:", entrada);
console.log("Saída:", resultado);