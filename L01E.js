/*Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO)*/

VALOR = parseFloat(prompt("Digite o valor da prestação:"));
TAXA = parseFloat(prompt("Digite a taxa de juros:"));
TEMPO = parseFloat(prompt("Digite o tempo de atraso:"));
PRESTACAO = VALOR + (VALOR * TAXA / 100) * TEMPO
alert("Valor da prestação em atraso: " + PRESTACAO);