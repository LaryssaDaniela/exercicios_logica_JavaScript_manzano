//Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.
for (numero = 1; numero <= 10; numero = numero + 1) {
    if (numero % 2 !== 0) {
        fatorial = 1;
        
        for (contador = numero; contador > 1; contador = contador - 1) {
            fatorial = fatorial * contador;
        }
        
        console.log("Fatorial de " + numero + " = " + fatorial);
    }
}