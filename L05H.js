//Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
base = parseInt(prompt("Digite a base:"));
expoente = parseInt(prompt("Digite o expoente:"));

resultado = 1;

for (contador = 0; contador < expoente; contador = contador + 1) {
    resultado = resultado * base;
}

console.log(base + " elevado a " + expoente + " = " + resultado);