//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
soma = 0;

for (numero = 1; numero <= 100; numero = numero + 1) {
    soma = soma + numero;
}

console.log("Soma dos números de 1 a 100:", soma);