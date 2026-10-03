/*Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do
percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).*/

SM = parseFloat(prompt("Digite o salário mensal (SM):"));
PR = parseFloat(prompt("Digite o percentual de reajuste (PR):"));
NS = SM + (SM * (PR / 100));
console.log("Novo salário (NS):", NS);