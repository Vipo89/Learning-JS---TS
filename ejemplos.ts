function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));
console.log(sum(5, 7));

function multiply(a: number, b: number): number {

  return a * b;
}

let result: number = multiply(3, 4);
console.log(`El resultado es ${result}`);




function devolverUnSaludo(name:string):string{

let saludo:string = "Hola " + name + ", ¿cómo estás?";
return saludo;
} 

console.log(devolverUnSaludo("Juan"));