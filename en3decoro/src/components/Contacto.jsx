import React from 'react'
import { Header } from './Header'

export const Contacto = ({header}) => {
    return (
        <>
            <Header pageName={header} />
            <div className="container-cards animar-bajando">
                <div className="card-contacto">
                    <div className="card-img">
                        <img src="/img/icons8-gmail-logo-144.webp" alt="Icono de Gmail" />
                    </div>
                    <div className="card-header">
                        <h2>Email</h2>
                    </div>
                    <div className="card-body">
                        <p>en3decoro@gmail.com</p>
                        <button className="btn-vermas"><a href="mailto:en3decoro@gmail.com">Contactar</a></button>
                    </div>
                </div>
                <div className="card-contacto">
                    <div className="card-img">
                        <img src="/img/icono-telefono.webp" alt="Icono de telefono" />
                    </div>
                    <div className="card-header">
                        <h2>Telefono</h2>
                    </div>
                    <div className="card-body">
                        <p>+57 3132654198</p>
                        <button className="btn-vermas"><a
                            href="https://wa.me/573132654198?text=Hola!%20Vengo%20de%20la%20pagina%20web%20de%20En3decoro%20y%20me%20interesa%20uno%20de%20tus%20productos">Contactar</a></button>
                    </div>
                </div>
                <div className="card-contacto">
                    <div className="card-img">
                        <img src="/img/instagram-color-icon.webp" alt="Icono de Instagram" />
                    </div>
                    <div className="card-header">
                        <h2>Instagram</h2>
                    </div>
                    <div className="card-body">
                        <p>@en3decoro</p>
                        <button className="btn-vermas"><a href="https://www.instagram.com/en3decoro">Contactar</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}
