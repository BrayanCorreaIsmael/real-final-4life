import React from 'react'
import './ProductCartCard.css'

const ProductCartCard = ({producto}) => {
  return (
    <>
    <div className='product-details-final'>
  <img src={producto.image} alt={producto.nombre} style={{width:'150px', height: '150px'}}/>
  <div className='product-details-final-text'>
    <h2>{producto.nombre}</h2>
    <p>Descripcion: {producto.descripcion}</p>
  </div>
</div>
  <h3>Precio: {producto.precio}</h3>
  <p className="quantity">Cantidad: {producto.quantity}</p>
  <hr />



  </>    


  )
}

export default ProductCartCard