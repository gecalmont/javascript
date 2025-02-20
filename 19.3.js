function gerarFibonacci(n) {
    let fib = [0, 1]; 
    for (let i = 2; i <= n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]); 
    }
    return fib;
}

const entrada = 10; 
const resultado = gerarFibonacci(entrada);

console.log("Entrada:", entrada);
console.log("Saída:", resultado);
