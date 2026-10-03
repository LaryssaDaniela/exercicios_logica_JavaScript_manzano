//Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado.
nome = prompt("Digite o seu nome:");
sexo = prompt("Digite o sexo (M para Masculino ou F para Feminino):");

if (sexo === "M" || sexo === "m" || sexo === "Masculino" || sexo === "masculino") {
    console.log("Ilmo Sr.", nome);
} else if (sexo === "F" || sexo === "f" || sexo === "Feminino" || sexo === "feminino") {
    console.log("Ilma Sra.", nome);
} else {
    console.log("Opção de sexo inválida.");
}
