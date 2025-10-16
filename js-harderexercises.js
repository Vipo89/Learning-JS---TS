//1
console.log(
  "===================================================================="
);

const MATRIZ = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(MATRIZ[2][1]);
//2
console.log(
  "===================================================================="
);

let matriztotal = 0;

for (let i = 0; i < MATRIZ.length; i++) {
  for (let j = 0; j < MATRIZ[i].length; j++) {
    console.log(MATRIZ[i][j]);
    matriztotal += MATRIZ[i][j];
  }
}
console.log(matriztotal);

//3
console.log(
  "===================================================================="
);

const TRIDI = [[[1, 2]], [[3, 4]], [[5, 6]]];

const text = TRIDI.map((sub) => sub[0].join(" ")).join("\n");

console.log(text);

//4
console.log(
  "===================================================================="
);

function RecursiveRest(n) {
  if (n < 0) {
    return;
  }
  console.log(n);
  RecursiveRest(n - 1);
}
RecursiveRest(5);

//5
console.log("555555555555555555555555==============================");
/*
let stacknumber = 0;
function RecursiveAdd(n) {
    stacknumber = 0;
  if (n < 0) {
    return;
  }
  console.log(n);
  stacknumber += n;
  RecursiveAdd(n - 1);
}
RecursiveAdd(5);
console.log(stacknumber);
*/

function RecursiveAdd(n) {
  if (n <= 0) return 0;
  return n + RecursiveAdd(n - 1);
}
const suma = RecursiveAdd(5);
console.log(RecursiveAdd(5));

//6
console.log(
  "66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666"
);
//Empiezo con 1 plusnumber porque cualquier número multiplicado por 0 es 0
/*let plusnumber = 1;
function RecursivePlus(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  plusnumber *= n;
  RecursivePlus(n - 1);
}
RecursivePlus(5);
console.log(plusnumber);
*/

function factorial(n) {
  if (n <=1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

//7
console.log(
  "===================================================================="
);
const persona = {
  nombre: "Víctor",
  edad: 23,
  ciudad: "Malaga",
  greet: function () {
    console.log(`Hola ${this.nombre} como estás`);
  },
};
console.log(persona);
persona["profesion"] = "Programador";
console.log(persona);
persona.edad = persona.edad + 1;
console.log(persona);
persona.greet();



//8
console.log(
  "===================================================================="
);
const humans = [
  { nombre: "Víctor", edad: 23, ciudad: "Malaga" },
  { nombre: "Pedro", edad: 32, ciudad: "Almeria" },
  { nombre: "Juan", edad: 42, ciudad: "Granada" },
];

humans.forEach((name) => {
  console.log(name.nombre);
});

//9
console.log(
  "===================================================================="
);

const COLORS = ["naranja", "amarillo", "azul"];

const [colora, colorb, colorc] = COLORS;

console.log(colora);
console.log(colorb);
console.log(colorc);

//10
console.log(
  "===================================================================="
);
const numeros = [10, 20, 30];

const [primero, , tercero] = numeros;

console.log(primero);

console.log(tercero);

//11
console.log(
  "===================================================================="
);

//const {nombre,edad} = persona;

console.log(nombre);
console.log(edad);

//12
console.log(
  "===================================================================="
);
const { nombre: nombrePersona, edad: edadPersona } = persona;

console.log(nombrePersona);
console.log(edadPersona);

//Pruebas

//========  Desestructuración de array con resto Desestructuración de objetos anidados
//Dado un array [1, 2, 3, 4, 5], usa desestructuración para asignar el primer número a primero y el resto a un array resto.

const arrnumb = [1, 2, 3, 4, 5];

const [firstn, ...resto] = arrnumb;

console.log(firstn, resto);

//========  Desestructuración de objetos anidados

const persona12 = {
  nombre: "Ana",
  edad: 30,
  direccion: { ciudad: "Madrid", pais: "España" },
};

const {
  nombre,
  direccion: { ciudad },
} = persona12;

console.log(nombre, direccion.ciudad);
