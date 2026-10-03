//Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
expoente = 0;
resultado = 1;

while (expoente <= 15) {
    console.log("3 elevado a " + expoente + " = " + resultado);
    resultado = resultado * 3;
    expoente = expoente + 1;
}