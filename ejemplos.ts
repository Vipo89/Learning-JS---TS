//Funcion simple en la que sumamos dos numeros que le pasamos como parametros
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(5, 7));

//Funcion que multiplica dos numeros y devuelve el resultado
function multiply(a: number, b: number): number {
  return a * b;
}

let result: number = multiply(3, 4);
console.log(`El resultado es ${result}`);

//Funcion que devuelve un saludo personalizado
function devolverUnSaludo(name: string): string {
  let saludo: string = "Hola " + name + ", ¿cómo estás?";
  return saludo;
}

console.log(devolverUnSaludo("Juan"));

//=================================================================================

//Funciones como parametros, dependiendo de la operacion que queramos hacer
//le pasamos una funcion u otra

function operarNumeros(operation: (x: number, y: number) => number) {
  return (a: number, b: number) => operation(a, b);
}

function sumarNumeros(a: number, b: number): number {
  return a + b;
}

function multiplicarNumeros(a: number, b: number): number {
  return a * b;
}

console.log(operarNumeros(sumarNumeros)(4, 5)); // 9
console.log(operarNumeros(multiplicarNumeros)(4, 5)); // 20


const numeros: number[] = [1, 2, 3, 4, 5];

numeros.forEach((num) => {
  let resultado = num * 2;
  console.log(resultado);
});


let frutas: string[] = ["manzana", "pera", "uva"];

let empty = new Array(0);

console.log(frutas[1]); // pera

frutas.push("melocotón");
console.log(frutas)

frutas.pop();
console.log(frutas)

frutas.unshift("sandía");
console.log(frutas)

frutas.shift();
console.log(frutas)

let n1: number = Math.floor(Math.random()* frutas.length);
console.log(n1+" Es la posicion aleatoria");
console.log(frutas[n1]+" Es la fruta aleatoria");


frutas.forEach((fruta,i) => {
    console.log(`La fruta en la posicion ${i} es ${fruta}`);
})
