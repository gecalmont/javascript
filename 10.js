let precoOriginal = 1000;
let descontoPorcentagem = 20;
let valorDesconto = (precoOriginal * descontoPorcentagem) / 100;
let precoFinal = precoOriginal - valorDesconto;
console.log("Preço original: R$", precoOriginal);
console.log("Desconto de", descontoPorcentagem + "%:", "R$", valorDesconto);
console.log("Preço final após desconto: R$", precoFinal);
