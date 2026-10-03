/*Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana.*/

cotacaoDolar = parseFloat(prompt("Digite a cotação do dólar:"));
quantidadeReais = parseFloat(prompt("Digite a quantidade de reais:"));
valorDolares = quantidadeReais / cotacaoDolar;
console.log("Valor em dólares:", valorDolares);