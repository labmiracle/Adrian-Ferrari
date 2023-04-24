const carrito = {
  productos: [
    {
      nombre: "papel higienico",
      unidades: 4,
      precio: 5,
    },
    {
      nombre: "chocolate",
      unidades: 2,
      precio: 1.5,
    },
  ],
  get precioTotal() {
    const total = this.productos.reduce((acc, producto) => acc + producto.precio * producto.unidades, 0);
    return total;
  },
};

console.assert(carrito.precioTotal === 23);
