import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


import { CartPage, ContactPage, DetailPage, HomePage } from './screens'
import { NavLink, Route, Routes } from 'react-router-dom'


function App() {


  return (
    <div>
      <Header></Header>
      {/* <nav>
        <NavLink to='/cart' className='button-primary'>Ir al carrito</NavLink>
        <NavLink to='/' className='button-primary'>Ir al Home</NavLink>
        <NavLink to='/contact/' className='button-primary'>Ir a contacto</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes> */}
      <Footer></Footer>
    </div>
  )
}

export default App
