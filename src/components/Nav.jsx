import React from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {

    useEffect(() => {
        // eventos
        document.addEventListener('click', (lugar) => {
            if (window.innerWidth < 991) {
                if (lugar.target.matches('.navbar-icon') || lugar.target.matches('.line1-icon') || lugar.target.matches('.line2-icon') || lugar.target.matches('.line3-icon')) {
                    animacionMenu()
                    menu()
                    cerrarSubmenu()
                } else if (lugar.target.matches('.nav-list-productos-title') || lugar.target.matches('.nav-list-productos-title svg')) {
                    submenu()
                } else {
                    cerrarAnimacionMenu()
                    cerrarMenu()
                    cerrarSubmenu()
                }
            }
        })

        // funciones
        function animacionMenu() {
            document.querySelector('.line1-icon').classList.toggle('line1-icon-animation')
            document.querySelector('.line2-icon').classList.toggle('line2-icon-animation')
            document.querySelector('.line3-icon').classList.toggle('line3-icon-animation')
        }

        function cerrarAnimacionMenu() {
            document.querySelector('.line1-icon').classList.remove('line1-icon-animation')
            document.querySelector('.line2-icon').classList.remove('line2-icon-animation')
            document.querySelector('.line3-icon').classList.remove('line3-icon-animation')
        }

        function menu() {
            document.querySelector('.navbar').classList.toggle('navbar-show')
            document.querySelector('.navbar-nav').classList.toggle('navbar-nav-show')
        }

        function cerrarMenu() {
            document.querySelector('.navbar').classList.remove('navbar-show')
            document.querySelector('.navbar-nav').classList.remove('navbar-nav-show')
        }

        function submenu() {
            document.querySelector('.nav-list-productos').classList.toggle('nav-list-productos-show')
            document.querySelector('.nav-list-productos svg').classList.toggle('svg-rotar')
            document.querySelector('.navbar').classList.toggle('navbar-show-submenu')
        }

        function cerrarSubmenu() {
            document.querySelector('.nav-list-productos').classList.remove('nav-list-productos-show')
            document.querySelector('.nav-list-productos svg').classList.remove('svg-rotar')
            document.querySelector('.navbar').classList.remove('navbar-show-submenu')
        }
    }, [])

    return (
        <div>
            <nav className="navbar">
                <NavLink className="navbar-brand" to='/inicio'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-boxes"
                        viewBox="0 0 16 16">
                        <path
                            d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
                    </svg>
                    <p>En3Decoro</p>
                </NavLink>
                <div className="navbar-icon">
                    <span className="line1-icon"></span>
                    <span className="line2-icon"></span>
                    <span className="line3-icon"></span>
                </div>
                <div className="navbar-nav">
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'navbar-nav-focus' : ''}
                                to="/inicio">Inicio</NavLink>
                        </li>
                        <li className="nav-list-productos">
                            <div className="nav-list-productos-title">
                                Productos
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-caret-down" viewBox="0 0 16 16">
                                    <path
                                        d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                </svg>
                            </div>
                            <ul>
                                <li>
                                    <NavLink
                                        className={({ isActive }) => isActive ? 'navbar-nav-focus' : ''}
                                        to="/jardineros">Jardineros</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive }) => isActive ? 'navbar-nav-focus' : ''}
                                        to="/macetas">Macetas</NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className={({ isActive }) => isActive ? 'navbar-nav-focus' : ''}
                                        to="/accesorios">Accesorios</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => isActive ? 'navbar-nav-focus' : ''}
                                to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
} 
