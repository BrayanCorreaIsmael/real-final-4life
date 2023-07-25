import React from 'react'
// import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'
import './ProductCard.css'

const ProductCard = ({producto}) => {
  return (
    <div className='product-card'>
  <div className='product-image'>
    <img src={producto.image} alt={producto.nombre} />
  </div>
  <div className="product-details">
    <h2>{producto.nombre}</h2>
    <h3>Precio: ${producto.precio}</h3>
    <p>Descripcion: {producto.descripcion}</p>
    <Link to={'/detail/' + producto.id} className='button-primary-productcard'>Ver detalle</Link>
   
  </div>
</div>

  )
}

export default ProductCard