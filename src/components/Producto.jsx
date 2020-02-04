import React from "react";

const Producto = ({ productos, producto, carrito, agregarProducto }) => {
  const { nombre, precio, id } = producto;
  //Agrega producto al carrito
  const seleccionarProducto = id => {
    const producto = productos.filter(producto => {
      return producto.id === id
    })[0]
    agregarProducto([...carrito, producto])
  }
  //Elimina producto del carrito
  const eliminarProducto =id =>{
    const productos = carrito.filter(producto => producto.id !== id)
    agregarProducto(productos)
    console.log(productos)
  }

  return (
    <div>
      <h6>
        {nombre}
        <p>${precio}</p>
      </h6>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>Eliminar</button>
      )}
    </div>
  );
};

export default Producto;
