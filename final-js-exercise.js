let productos = [
  {
    nombre: "Ratón",
    precio: 4,
    stock: 20,
  },
  {
    nombre: "Teclado",
    precio: 8,
    stock: 40,
  },
  {
    nombre: "Cascos",
    precio: 90,
    stock: 10,
  },
];

productos.forEach((producto) => {
  console.log(
    `Producto: ${producto.nombre} | Precio: ${producto.precio} | Stock: ${producto.stock}`
  );
});

function agregarProducto(nombre, precio, stock) {
  productos.push({ nombre, precio, stock });
}

agregarProducto("Peine", 2, 10);
console.log(productos);

function actualizarStock(nombre, stock) {
  counter = 0;
  productos.forEach((producto) => {
    if (producto.nombre === nombre && stock != null) {
      producto.stock = stock;
      counter += 1;
    }
  });
  if (counter === 0) {
    console.log("Ese producto no se encuentra en el catálogo");
  }
}

actualizarStock("Peine", 5);
console.log(productos);

function calcularValorTotal() {
  let total = 0;
  productos.forEach((producto) => {
    total += producto.precio * producto.stock;
  });
  console.log(`El valor total de todos los productos es de ${total}`);
}

calcularValorTotal();

function buscarProducto(nombre) {
  return productos.find((producto) => producto.nombre === nombre);
}

const result = buscarProducto("Peine");

console.log(result);

const { nombre, stock } = result;

console.log(nombre, stock);

function eliminarProducto(nombre) {
  productos.forEach((producto, idx) => {
    if (producto.nombre === nombre) {
      productos.splice(idx, idx);
    }
  });
}
eliminarProducto("Peine");
console.log(productos);
