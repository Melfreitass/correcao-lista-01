const idade = [17, 21, 16, 25, 19];
let maioresDeIdade = 0;
let menoresDeIdade = 0;

   //Laço de repetição para varrer todos os elementos do meu array de idades
for (let i = 0; i < idade.length; i++) {   
    //Condição para contadores de maior de idade     
    if (idade[i] >= 18) {                       
        maioresDeIdade ++;                     
    } 
}

menoresDeIdade = idade.length - maioresDeIdade

console.log(`${maioresDeIdade} pessoas são maiores de idaede`);
console.log(`${menoresDeIdade} pessoas são menores de idaede`);
