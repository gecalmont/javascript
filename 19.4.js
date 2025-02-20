function contarCaracteres(str) {
    const contador = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        contador[char] = (contador[char] || 0) + 1; 
    }
    return contador;
}

const entrada = "legal"; 
const resultado = contarCaracteres(entrada);

console.log("Entrada:", entrada);
console.log("Saída:", resultado);
