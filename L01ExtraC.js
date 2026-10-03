/*Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a
apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para
cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de
votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e
votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos
válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de
eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de
eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de
eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de
eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último
o percentual correspondente de votos em branco em relação à quantidade de eleitores.*/

votosCandidatoA = parseInt(prompt("Digite os votos válidos do candidato A:"));
votosCandidatoB = parseInt(prompt("Digite os votos válidos do candidato B:"));
votosCandidatoC = parseInt(prompt("Digite os votos válidos do candidato C:"));
votosNulos = parseInt(prompt("Digite a quantidade de votos nulos:"));
votosBrancos = parseInt(prompt("Digite a quantidade de votos em branco:"));

totalValidos = votosCandidatoA + votosCandidatoB + votosCandidatoC;
totalEleitores = totalValidos + votosNulos + votosBrancos;

percentualValidos = (totalValidos / totalEleitores) * 100;
percentualCandidatoA = (votosCandidatoA / totalEleitores) * 100;
percentualCandidatoB = (votosCandidatoB / totalEleitores) * 100;
percentualCandidatoC = (votosCandidatoC / totalEleitores) * 100;
percentualNulos = (votosNulos / totalEleitores) * 100;
percentualBrancos = (votosBrancos / totalEleitores) * 100;

console.log("Total de eleitores:", totalEleitores);
console.log("Percentual de votos válidos:", percentualValidos + "%");
console.log("Percentual do Candidato A:", percentualCandidatoA + "%");
console.log("Percentual do Candidato B:", percentualCandidatoB + "%");
console.log("Percentual do Candidato C:", percentualCandidatoC + "%");
console.log("Percentual de votos nulos:", percentualNulos + "%");
console.log("Percentual de votos em branco:", percentualBrancos + "%");