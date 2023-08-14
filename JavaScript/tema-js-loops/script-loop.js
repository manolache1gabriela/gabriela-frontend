// exercitiu 1

const numbers = [2, 15, 24, 37, 82, 149, 1523];
let suma = 0;
for (let i = 0; i < numbers.length; i++) {
    suma += numbers[i];
    medie = suma / numbers.length;
}

console.log(parseFloat(medie).toFixed(3));


// exercitiu 2

const array = [5, "mirror", true, "2", 72, "86", true, 180, "55", "car", false, 209, "pants", 2, "10"];
let suma = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
        suma += array[i];
    }
}

console.log(suma);

// exercitiu bonus

const arrayFib = [0, 1];
let suma = 0;
for (let i = 0; i < 18; i++) {
    suma += arrayFib[i];
    arrayFib.push(arrayFib[i] + arrayFib[i + 1]);
}
console.log(arrayFib)
