const { use } = require("react");

//////////////////////////////////////////////////////
console.log("(1)=======================================================(1)");
const group = ["Víctor", "Isaac", "Moises", "Ale", "Sergio"];

group.forEach((elem, idx) => {
  console.log(`El elemento ${elem} está en el índice ${idx}`);
});

/////////////////////////////////////////////////////
console.log("(2)=======================================================(2)");

const arraynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arraynumber.forEach((element, idx) => {
  if (element % 2 === 0) {
    console.log(`El número ${element} es par`);
  } else {
    console.log(`El número ${element} es impar`);
  }
});

/////////////////////////////////////////////////////
console.log("(3)=======================================================(3)");

const persona = {
  nombre: "Víctor",
  edad: "23",
  ciudad: "Málaga",
  profesion: "Programador",
};

console.log(persona);
persona.nombre = "Paquito";
console.log(persona);

persona.saludar = function () {
  console.log(`Que tal, mi nombre es ${this.nombre}`);
};
persona.caminar = function () {
  console.log(`Estoy andando`);
};

persona.saludar();
persona.caminar();

/////////////////////////////////////////////////////
console.log("(4)=======================================================(4)");

function MostrarArray(arrayData) {
  for (let i = 0; i < arrayData.length; i++) {
    console.log(arrayData[i], i);
  }
}

let frutas = ["Pera", "Manzana", "Pera", "Limón"];

MostrarArray(frutas);

/////////////////////////////////////////////////////
console.log("(5)=======================================================(5)");

const inventario = [
  { nombre: "Pala", precio: 4, stock: 100 },
  { nombre: "Hacha", precio: 7, stock: 50 },
  { nombre: "Fregona", precio: 2, stock: 20 },
];

function ProductCount() {
  let n = 0;
  let total = 0;
  for (let i = 0; i < inventario.length; i++) {
    inventario[i].precio;
    n = inventario[i].precio * inventario[i].stock;
    total += n;
    console.log(`El total del ${inventario[i].nombre} es ${n}`);
  }
  console.log(`El total de todos los productos es ${total}`);
}
ProductCount();

/////////////////////////////////////////////////////
console.log("(6)=======================================================(6)");

inventario[0].stock += 10;
console.log(inventario[0].stock);

let newObject = { nombre: "Espada", precio: 100, stock: 1 };
inventario.push(newObject);

console.log(inventario);

ProductCount();

/////////////////////////////////////////////////////
console.log("(7)=======================================================(7)");

function BuscarProducto(nombre) {
  for (let i = 0; i < inventario.length; i++) {
    if (inventario[i].nombre === nombre) {
      return inventario[i];
    }
  }
}

let buscarproducto = BuscarProducto("Espada");

console.log(buscarproducto);

/////////////////////////////////////////////////////
console.log("(8)=======================================================(8)");

let convertText = inventario
  .map((t) => `Producto:${t.nombre}-Precio${t.precio}-Stock${t.stock}`)
  .join("");

let convertText1 = inventario
  .map((t) => `Producto:${t.nombre}-Precio${t.precio}-Stock${t.stock}`)
  .join(",");

console.log(convertText);
console.log(convertText1);

/////////////////////////////////////////////////////
console.log("(9)=======================================================(9)");

const ESTUDIANTES = [
  { nombre: "Juan", edad: 20, notas: [2, 4, 6, 8] },
  { nombre: "Pedro", edad: 24, notas: [2, 8, 3] },
  { nombre: "Filigrana", edad: 26, notas: [10, 9, 8] },
  { nombre: "Petunia", edad: 28, notas: [7, 4, 1] },
  { nombre: "Pepe", edad: 30, notas: [1, 3, 4] },
  { nombre: "Antonio", edad: 40, notas: [7, 9, 2] },
];

function MediaFunction() {
  for (let i = 0; i < ESTUDIANTES.length; i++) {
    let median = 0;
    for (let j = 0; j < ESTUDIANTES[i].notas.length; j++) {
      median += ESTUDIANTES[i].notas[j];
    }
    ESTUDIANTES[i].media = median / ESTUDIANTES[i].notas.length;
    console.log(
      `La media de nota de ${ESTUDIANTES[i].nombre} es ${ESTUDIANTES[i].media}`
    );
  }
}
MediaFunction();

console.log(ESTUDIANTES);

/////////////////////////////////////////////////////
console.log("(10)=======================================================(10)");
/*
let nombres10 = [];
let medias10 =[];

ESTUDIANTES.forEach((el,idx) => {
    const {nombre,media} = el 
    
    nombres10.push(nombre)
    medias10.push(media)
});
*/
ESTUDIANTES.forEach((estudiante) => {
  const { nombre, media } = estudiante;
  console.log(`${nombre} tiene de media un ${media}`);
});

let copiaEstudiantes = [...ESTUDIANTES];
copiaEstudiantes.sort((a, b) => b.media - a.media); // Orden de mayor a menor
console.log("\nCopia de estudiantes ordenada por media:\n", copiaEstudiantes);

//////////////////////

/*
const nombres = ESTUDIANTES.map(el => el.nombre)
const medias = ESTUDIANTES.map(el => el.media)


console.log(nombres);
console.log(medias);
console.log(medias.sort());
*/

/////////////////////////////////////////////////////
console.log("(11)=======================================================(11)");

let notas2 = [
  [1, 2, 3],
  [4, 5, 6],
];

function recursion12(notas) {
  let sumatotal = 0;
  notas.forEach((nota) => {
    if (Array.isArray(nota)) {
      sumatotal += recursion12(nota);
    } else {
      sumatotal += nota;
    }
  });
  return sumatotal;
}
console.log(recursion12(notas2));

/////////////////////////////////////////////////////
console.log("(12)=======================================================(12)");

let users = [
  {
    usuario: "juan",
    edad: 25,
    email: "juan@mail.com",
  },
  {
    usuario: "pedro",
    edad: 30,
    email: "pedro@mail.com",
  },
  {
    usuario: "dani",
    edad: 18,
    email: "dani@mail.com",
  },
  {
    usuario: "ale",
    edad: 16,
    email: "ale@mail.com",
  },
];

function mayusFirstLetter(str){
   if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}


users.forEach((element) => {
const usuarionuevo = mayusFirstLetter(element.usuario)
  const {edad, email } = element;
  console.log(`Usuario: ${usuarionuevo} | Edad: ${edad} | Email: ${email}`);
});

function BuscarUsuario(usuariobuscado){
  users.forEach(user => {
    if (user.usuario === usuariobuscado) {
      const { edad, email, usuario } = user;
      const nombreFormateado = mayusFirstLetter(usuario);
      console.log(`Usuario: ${nombreFormateado} | Edad: ${edad} | Email: ${email}`);
    }
  });
}


BuscarUsuario("juan");

