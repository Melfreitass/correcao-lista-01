const notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let totalNotas = 0;
let media = 0;
let notasAcimaMedia = 0;
let maiorNota = notas[0];
let menorNota = notas[0];

//Varredura do array de notas com Laço de repetição
for (let i = 0; i < notas.length; i ++) {           
    totalNotas += notas[i];                                       
}

 media = totalNotas / notas.length;

//Varredura do array de notas com Laço de repetição
for (let i = 0; i < notas.length; i ++) {          
    if (notas[i] > media) {                         
        notasAcimaMedia ++;                         
    }

    //Verificação de maior nota
    if (notas[i] > maiorNota) {                     
        maiorNota = notas[i];
    }

    //Verificação de menor nota
    if (notas[i] < menorNota) {                     
        menorNota = notas[i];
    }
}

console.log(`A média das notas é igual a ${media}`);
console.log(`${notasAcimaMedia} alunos tiraram acima da média`);
console.log(`A maior nota é: ${maiorNota}`);
console.log(`A menor nota é: ${menorNota}`);