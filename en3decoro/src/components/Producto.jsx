import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { productos } from '../js/productos'
import { Header } from './Header'

export const Producto = ({ typeProduct = 'jardineros' }) => {

    const [listProduct, setListProduct] = useState([])
    const nameProduct = typeProduct[0].toUpperCase() + typeProduct.slice(1).toLocaleLowerCase()

    useEffect(() => {
        const productFilter = productos.filter(product => product.tipo === typeProduct.toLowerCase());
        setListProduct(productFilter)
    }, [typeProduct])

    return (
        <>
            <Header pageName={'Productos / ' + nameProduct} />
            <section className='section-izquierda'>
                <h2 className="section-title-right bg-right animar-izquierda">{nameProduct}</h2>
                <div className="container-productos">
                    {
                        listProduct.map(producto => {
                            return (
                                <NavLink to={'/' + producto.tipo + '/' + producto.id} className="card" key={producto.id}>
                                    <div className="card-img">
                                        <img src="/img/collage-articulos.webp" alt={producto.nombre} />
                                    </div>
                                    <div className="card-body">
                                        <h4>{producto.nombre}</h4>
                                        <p>{producto.colores}</p>
                                    </div>
                                    <div className="card-footer">
                                        <p>
                                            Precio: <span>${producto.precio}</span>
                                        </p>
                                        <div>
                                            <a href={"https://wa.me/573132654198?text=Hola!%20Me%20interesa%20el%20" + producto.nombre} target='_blank'>¡Pedir!</a>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                    <div className="container-caract">
                        <div>
                            <h2>Caracteristicas generales
                            </h2>
                            <ul>
                                <li>Altura desde la base 8.6 cm.</li>
                                <li>Diámetro máximo de la cabeza 6.8 cm.</li>
                                <li>Diámetro del agujero 6 cm.</li>
                                <li>Profundidad mínima 57.7 mm</li>
                                <li>Ancho mínimo base 3.2 cm.</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}