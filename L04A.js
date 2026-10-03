//Apresentar os quadrados dos números inteiros de 15 a 200.
numero = 15;

do {
    quadrado = numero ** 2;
    console.log(numero + " elevado ao quadrado = " + quadrado);
    numero = numero + 1;
} while (numero <= 200);