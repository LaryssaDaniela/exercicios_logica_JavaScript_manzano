/*Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius */

temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
temperaturaFahrenheit = (9 * temperaturaCelsius + 160) / 5

alert("Temperatura em Fahrenheit: " + temperaturaFahrenheit);