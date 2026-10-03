/*Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula:
Volume *Raio * Altura*/

raioLata = parseFloat(prompt("Digite o raio da lata:"));
alturaLata = parseFloat(prompt("Digite a altura da lata:"));
volumeLata = Math.PI * (raioLata ** 2) * alturaLata
alert("Volume da lata de óleo: " + volumeLata);