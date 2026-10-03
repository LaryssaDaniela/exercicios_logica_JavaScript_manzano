//Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.
dividendo = parseInt(prompt("Digite o valor do dividendo:"));
divisor = parseInt(prompt("Digite o valor do divisor:"));

quociente = 0;
acumulador = dividendo;

if (divisor > 0 && dividendo >= divisor) {
    do {
        acumulador = acumulador - divisor;
        quociente = quociente + 1;
    } while (acumulador >= divisor);
}

console.log("O resultado inteiro da divisão (" + dividendo + " / " + divisor + ") é:", quociente);