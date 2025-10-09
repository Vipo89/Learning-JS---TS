const PI_NUMBER = 3.14;
const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const contenedor = document.getElementById("contenedor");

let wegreet;

let persona = {
  nombre: "Alejandro",
  edad: 45,
  hobbies: "Paddel, Baloncesto",

  // etc...
};
/*
for (let index = 0; index < numeros.length; index++) {
    const elemento = document.createElement("div");
    
    elemento.textContent = numeros[index];
    
    elemento.className = "numero";
    elemento.style.margin = "0 " + 40 * index + "px";
    elemento.style.padding = "5px";
    elemento.style.border = (1 * index) / 2 + "px solid green";
    elemento.style.borderRadius = "15px";
    contenedor.appendChild(elemento);
    }
    
    document.addEventListener("keydown", (event) => {
        if (event.key === "W" || event.key === "w") {
            miFuncion();
            }
            });

            */

let boxn = 0;
document.addEventListener("keydown", (event) => {
  if (event.key === "W" || event.key === "w") {
    CreateBox();
  }
});

let myname = "Víctor Jesús Parras Rumbado";
let myage = 23;
let mycity = "Málaga";

let mystats = {
  nombre: "Victor",
  edad: 23,
  myCity: "Málaga",
  // etc...
};
function Ej1() {
  console.log(mystats);
}

function CreateBox() {
  const elemento = document.createElement("div");
  
  if (boxn % 15 == 0) {
    contenedor.style.gridTemplateColumns = "repeat(" + 15 + ",1fr)";
  }
  contenedor.style.display = "grid";
  contenedor.style.gap = "10px";

  elemento.textContent = boxn++;
  elemento.style.textAlign = "center";
  elemento.className = "numero";
  elemento.style.padding = "5px";
  elemento.style.border = "5px solid salmon";
  elemento.style.borderRadius = "15px";

  contenedor.appendChild(elemento);
}
// Función que quieres ejecutar
function miFuncion() {
  console.log("¡Has pulsado W!");
}
function Saludar() {
  console.log("Hola que tal");
}

function Despedida() {
  console.log("¡Hasta luego!");
}

function SaludoDespedida() {
  if (wegreet) {
    Saludar();
  } else {
    return null;
  }
}
