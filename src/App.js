import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {

//State para listado de productos
const [productos,  guardarProductos] = useState([
    {
        id: 1,
        nombre: 'Camisa ReactJS',
        precio: 50
    },{
        id: 2,
        nombre: 'Camisa VueJS',
        precio: 40
    }, {
        id: 3,
        nombre: 'Camisa NodeJS',
        precio: 30
    }, {
        id: 4,
        nombre: 'Camisa Angular',
        precio: 20
    }
])

//State para carrito de compras
const [carrito, agregarProducto] = useState([])


//Obtener fecha
const fecha = new Date().getFullYear();

return ( <Fragment>
        <Header titulo='Tienda Virtual' />
        <h1>{productos.map(producto =>{
            return <Producto 
                        key={producto.id}
                        productos={productos}
                        producto={producto}
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                    />
            })}</h1>
        <Carrito carrito={carrito} agregarProducto={agregarProducto}/>
        <Footer fecha = {fecha}/>
        </Fragment>);
}

export default App;