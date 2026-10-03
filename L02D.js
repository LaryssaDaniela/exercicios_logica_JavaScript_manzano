//Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.
nota1 = parseFloat(prompt("Digite a primeira nota:"));
nota2 = parseFloat(prompt("Digite a segunda nota:"));
nota3 = parseFloat(prompt("Digite a terceira nota:"));
nota4 = parseFloat(prompt("Digite a quarta nota:"));

media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 7) {
    console.log("Aluno aprovado com média:", media);
} else {
    notaExame = parseFloat(prompt("Digite a nota do exame:"));
    novaMedia = (media + notaExame) / 2;
    if (novaMedia >= 5) {
        console.log("Aluno aprovado em exame com média:", novaMedia);
    } else {
        console.log("Aluno não foi aprovado. Nova média:", novaMedia);
    }
}