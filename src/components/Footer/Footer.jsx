import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footerStyles'>
    
    <div className='infoStyles'>
      <p>Dirección: 1234 Calle Principal, Ciudad, País</p>
      <p>Teléfono: +1 234 567 890</p>
      <p>Email: info@ray-ban.com</p>
    </div>
    <div>
      <img
        src="https://www.ray-ban.com/rbstatichtml/assets/images/red-logo.svg"
        alt="Ray-Ban Logo"
        className='logoStyles'
        style={{width:'150px', height: '150px'}}
        
      />
    </div>
  </footer>

  );
}

export default Footer