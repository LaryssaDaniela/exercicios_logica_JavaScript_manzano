//Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
soma = 0;
numero = 1;

while (numero <= 100) {
    soma = soma + numero;
    numero = numero + 1;
}

console.log("Soma dos números de 1 a 100:", soma);