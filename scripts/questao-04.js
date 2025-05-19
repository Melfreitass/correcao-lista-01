let temperaturaCelsius = [0, 10, 20, 30, 40];
let temperaturaFarenheit = [];
let contadorTemperaturaF = 0;

// Fórmula: F = C * 9/5 + 32

//Varredura do array com Laço de repetição
for (let i = 0; i < temperaturaCelsius.length; i++) {                                   
    temperaturaFarenheit[contadorTemperaturaF] = temperaturaCelsius[i] * 9 / 5 + 32;    
    contadorTemperaturaF ++;                                                            
}

console.table(temperaturaCelsius)
console.table(temperaturaFarenheit)
