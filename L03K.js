//Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.
areaTotal = 0;
resposta = "SIM";

while (resposta !== "NAO" && resposta !== "NÃO" && resposta !== "nao" && resposta !== "não") {
    nomeComodo = prompt("Digite o nome do cômodo:");
    largura = parseFloat(prompt("Digite a largura do cômodo (m):"));
    comprimento = parseFloat(prompt("Digite o comprimento do cômodo (m):"));
    
    areaComodo = largura * comprimento;
    areaTotal = areaTotal + areaComodo;
    
    console.log("Área do(a) " + nomeComodo + ": " + areaComodo + " m²");
    
    resposta = prompt("Deseja continuar calculando novos cômodos? (SIM/NAO)");
}

console.log("Área total acumulada da residência:", areaTotal + " m²");