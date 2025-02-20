function verificarPrimo(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

const entrada = 5; 
const resultado = verificarPrimo(entrada);

console.log("Entrada:", entrada);
console.log("Saída:", resultado ? "Primo" : "Não primo");