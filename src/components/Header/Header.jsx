import React from 'react'
import './Header.css' 
import { CartPage, ContactPage, DetailPage, HomePage } from '../../screens'
import { NavLink, Route, Routes } from 'react-router-dom'



function Header() {
  return (
    <>  
    {/* <div className='header'>
        <div className='logo-container'>
            <img className='logo' src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg" alt="brand-lentes" />
            <h1>Ray-Ban</h1>
        </div>

  <nav className='navegador'>
    <NavLink to='/cart' className='button-primary'>Ir al carrito</NavLink>
    <NavLink to='/' className='button-primary'>Ir al Home</NavLink>
    <NavLink to='/contact/' className='button-primary'>Ir a contacto</NavLink>
  </nav>

  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/detail/:id' element={<DetailPage/>}/>
    <Route path='/cart' element={<CartPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
  </Routes>
    </div> */}

<div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg"
          alt="brand-lentes"
        />
        <h1>Ray-Ban</h1>
      </div>


       
        
         
      <nav className='navegador'>
        <NavLink to='/cart' className='button-primary'>
          Carrito
        </NavLink>
        <NavLink to='/' className='button-primary'>
         Home
        </NavLink>
        <NavLink to='/contact' className='button-primary'>
          Contacto
        </NavLink>
      </nav>
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  

    </>
  )
}

export default Header