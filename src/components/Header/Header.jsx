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
      {/* <div className='logo-container'>
        <img
          className='logo'
          src="https://images.unsplash.com/photo-1644105637454-4943bc520c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
          alt="brand-lentes"/>
        <h1>Ray-Ban</h1>
      </div> */}
      <div className='header-container'>
  <div className='logo-container'>
  <img
        src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg"
        alt="Ray-Ban Logo"
        className='logoStyles'
        style={{width:'150px', height: '150px'}}
        
      />
  </div>
</div>




       
        
         
      <nav className='navegador'>
        <NavLink to='/cart' className='button-primary'>
        &#128722; Carrito
        </NavLink>
        <NavLink to='/' className='button-primary'>
        &#127968; Home
        </NavLink>
        <NavLink to='/contact' className='button-primary'>
        &#128229; Contacto
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