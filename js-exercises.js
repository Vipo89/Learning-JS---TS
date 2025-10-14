//1

let curso = "JS Básico";

function mostrar() {
  let tema = "Funciones";
  console.log(curso);
  console.log(tema);
}
mostrar();

//2
console.log(
  "===================================================================================="
);

function saludar(name) {
  return "Hola " + name;
}

let saludo = saludar("Vicky");
console.log(saludo);

//3
console.log(
  "===================================================================================="
);

const miLogger = function (saludo) {
  return saludo;
};
console.log(miLogger("probando"));

//4
console.log(
  "===================================================================================="
);
const esParn = (n) => n % 2 == 0;

console.log(esParn(3));

//5
console.log(
  "===================================================================================="
);

let fruits = ["aguacate", "uva", "albaricoque"];

console.log(fruits[0]);

fruitlong = fruits.length - 1;

console.log(fruits[fruitlong]);

//6
console.log(
  "===================================================================================="
);

let cola = [];
cola.push("Ana", "Pepe");
cola.unshift("Luisa");
let attp = cola.shift();

console.log(attp);
console.log(cola);

//7
console.log(
  "===================================================================================="
);

const items = ["altura", "base", "cuadrado", "bisectriz"];

items.forEach((elem, i) => {
  console.log(elem);
  console.log(i);
});

const ITEM = items.indexOf("base");

console.log(ITEM);

//8

console.log(
  "===================================================================================="
);

let letras = ["a", "b", "c", "d"];

let fletra = letras.slice(0, 1);

let lletra = letras.slice(letras.length - 3);

console.log(fletra);

console.log(lletra);

//9
console.log(
  "===================================================================================="
);

let n1 = [1,2]
let n2 = [3,4]

let n3con =n1.concat(n2);

console.log(n1);
console.log(n2);
console.log(n3con);

//10
console.log(
  "===================================================================================="
);

const N10 = [2,5,8,12]

let n10some = N10.some(num => num >10)
let n10every = N10.every(num => num >0)
let n10include = N10.includes(num => num ===0)

console.log(n10some)
console.log(n10every);
console.log(n10include);

//11
console.log(
  "===================================================================================="
);

const COD = [9,8,7]

let codreverse = [...COD].reverse();
let codejoin = [...COD].join("-");

console.log(COD);
console.log(codejoin);
console.log(codreverse);

//12
console.log(
  "===================================================================================="
);

const BASE =[1,2,3]
