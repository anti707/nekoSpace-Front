import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavesService from '../../services/ProductoService.jsx';

const ProductList = () => {
    
    const [Producto, setProducto] = useState([]);
    
    useEffect(() => {
        fetchProducto();
    }, []);

    const fetchProducto = () => {
        ProductoService.getAllProducto().then(response => {
            setProducto(response.data);
        }).catch(error => {
            console.log('Error al encontrar producto', error);
        });
    };
    return (
        <div>
            <h2>Productos lista</h2>
            <div className="bg-blue-500 text-white p-10 text-center font-bold text-2xl">
                Productos
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {Producto.map(Producto => (
                        <tr key={Producto.id}>
                            <td>{Producto.nombre}</td>    
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
    };
export default ProductList;