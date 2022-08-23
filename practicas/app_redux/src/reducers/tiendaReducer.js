const estadoInicial = {
  productos: [
    { id: 1, nombre: "Producto 1" },
    { id: 2, nombre: "Producto 2" },
    { id: 3, nombre: "Producto 3" },
    { id: 4, nombre: "Producto 4" },
  ],
  carrito: []
}

const reducer = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case 'AGREGAR_PRODUCTO_AL_CARRITO':
      const { idProductoAAgregar, nombre } = accion;

      if (estado.carrito.length === 0) {
        // Si el carrito no tiene elementos, se agrega uno
        return {
          ...estado,
          carrito: [
            {
              id: idProductoAAgregar,
              nombre,
              cantidad: 1
            }
          ]
        }
      } else {
        // De otra manera, hay que revisar que el carrito no tenga ya el producto que queremos agregar
        // Si ya tiene el producto, hay que actualizar su valor
        // Sino tiene el producto, entonces lo agregamos

        // Para editar el estado, hay que clonarlo.
        const nuevoCarrito = [...estado.carrito];

        // Comprobamos si el carrito ya tiene el id del producto a agregar.
        const yaEstaEnCarrito = nuevoCarrito.filter(producto => producto.id === idProductoAAgregar).length > 0;


        // Si ya está en el carrito, hay que actualizar
        if (yaEstaEnCarrito) {
          // Para editarlo debemos conocer su posición en el arreglo,
          // Una vez obtenido su indice, lo editamos.
          nuevoCarrito.forEach((productoDeCarrito, index) => {
            if (productoDeCarrito.id === idProductoAAgregar) {
              const cantidad = nuevoCarrito[index].cantidad;
              nuevoCarrito[index] = {
                id: idProductoAAgregar,
                nombre: nombre,
                cantidad: cantidad + 1
              }
            }
          });

        } else {
          // De otra forma agregamos el producto al carrito
          nuevoCarrito.push({
            id: idProductoAAgregar,
            nombre: nombre,
            cantidad: 1
          });
        }

        return {
          ...estado,
          carrito: nuevoCarrito
        };
      }

    default:
      return estado;
  }
};

export default reducer;
