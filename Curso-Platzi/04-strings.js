// tipo de dato: string

let string1 = 'Hola, Mundo'
let string2 = "JavaScript"

// Este tipo de string permite concatenar con los backticks, comillas simples
let string3 = `${string1} feliz :)`

// Concatenar strings
let string4 = string1 +  ' ' + string2

console.log(string3)
console.log(string4)

// Contar letras
let frase = 'JavaScript es Extremadamente Genial'
console.log(frase.length)

// Pasar a minusculas
console.log(frase.toLowerCase())

// Para a mayusculas
console.log(frase.toUpperCase())

// tomar solo una palabra, es el index 0 hasta donde termina + 1. La palabra JavaScript tiene 9 caracteres pero se le suma 1
console.log(frase.substring(0, 10))