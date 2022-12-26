import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../js/productos'
import { Header } from './Header'

export const ProductoDesc = () => {

    const [producto, setProducto] = useState({})
    const idProducto = useParams().id

    useEffect(() => {
        const product = productos.filter((p) => p.id === idProducto)
        setProducto(product[0])
    }, [])

    return (
        <>
            <Header pageName={producto.nombre} />
            <section className='section-derecha'>
                <h2
                    className="section-title-left bg-left animar-bajando">{producto.nombre}</h2>
                <div className="container-imgs">
                    <div className="img">
                        <img src='../img/jardinero2.jpeg' alt='...' />
                    </div>
                    <div className="img">
                        <img src='../img/jardinero2.jpeg' alt='...' />
                    </div>
                    <div className="img">
                        <img src='../img/jardinero2.jpeg' alt='...' />
                    </div>
                    <div className="img">
                        <img src='../img/jardinero2.jpeg' alt='...' />
                    </div>
                </div>
                <div className='container-info'>
                    <h2>Descripción</h2>
                    <p>{producto.descripcion}</p>
                    <p>
                        Colores: {producto.colores}
                    </p>
                    <div className="info-footer">
                        <p>
                            Precio: <span>${producto.precio}</span>
                        </p>
                        <div>
                            <a href={"https://wa.me/573132654198?text=Hola!%20Me%20interesa%20el%20" + producto.nombre} target='_blank'>¡Pedir ya!</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

