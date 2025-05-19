const numeros = [12, 5, 8, 21, 16, 7, 30, 45, 13, 27];
let numerosPares = 0;
let numerosImpares = 0;
let numerosMaiores20 = 0;

// Varredura do array
for (let i = 0; i < numeros.length; i++){ 
    // Condicional para números pares            
    if (numeros[i] % 2 == 0) {                       
        numerosPares++;                              
    } else {                                          
        numerosImpares ++;                             
    }

    //Condicional para maiores que 20
    if (numeros[i] > 20) {
        numerosMaiores20++;
    }
}

console.log(`${numerosPares} números são pares`);
console.log(`${numerosImpares} números são ímpares`);
console.log(`${numerosMaiores20} números são maiores que 20`);