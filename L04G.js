//Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.
numero = 1;

do {
    if (numero % 2 !== 0) {
        fatorial = 1;
        contadorFatorial = numero;
        
        while (contadorFatorial > 1) {
            fatorial = fatorial * contadorFatorial;
            contadorFatorial = contadorFatorial - 1;
        }
        
        console.log("Fatorial de " + numero + " = " + fatorial);
    }
    numero = numero + 1;
} while (numero <= 10);