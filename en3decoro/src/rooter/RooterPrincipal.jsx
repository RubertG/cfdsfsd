import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Nav } from '../components/Nav'
import { Contacto } from '../components/Contacto'
import { Producto } from '../components/Producto'
import { Footer } from '../components/Footer'
import { ProductoDesc } from '../components/ProductoDesc'

export const RooterPrincipal = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <>
          <Routes>
            <Route path='/' element={<Navigate to='/inicio' />} />
            <Route path='/inicio' element={<Inicio header='Inicio'/>} />
            <Route path='/jardineros' element={<Producto />} />
            <Route path='/jardineros/:id' element={<ProductoDesc />} />
            <Route path='/macetas' element={<Producto typeProduct='macetas' />} />
            <Route path='/macetas/:id' element={<ProductoDesc />} />
            <Route path='/accesorios' element={<Producto typeProduct='accesorios' />} />
            <Route path='/accesorios/:id' element={<ProductoDesc />} />
            <Route path='/contacto' element={<Contacto header='Contacto' />} />
          </Routes>
        </>

        <Footer />
      </BrowserRouter>

    </>
  )
}
