//Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.
somatorio = 0;
totalLidos = 0;

do {
    valor = parseFloat(prompt("Digite um número positivo (ou negativo para encerrar):"));
    
    if (valor >= 0) {
        somatorio = somatorio + valor;
        totalLidos = totalLidos + 1;
    }
} while (valor >= 0);

if (totalLidos > 0) {
    media = somatorio / totalLidos;
    console.log("Total do somatório:", somatorio);
    console.log("Total de valores lidos:", totalLidos);
    console.log("Média aritmética:", media);
} else {
    console.log("Nenhum número positivo foi informado.");
}