//Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.
nota1 = parseFloat(prompt("Digite a primeira nota:"));
nota2 = parseFloat(prompt("Digite a segunda nota:"));
nota3 = parseFloat(prompt("Digite a terceira nota:"));
nota4 = parseFloat(prompt("Digite a quarta nota:"));

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 5) {
    console.log("Aluno aprovado com média:", media);
} else {
    console.log("Aluno não foi aprovado. Média:", media);
}