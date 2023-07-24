import React from 'react'

function Productdetails({producto}) {
  return (
    <div>
        <h2>{producto.nombre}</h2>
        <p>Precio:{producto.precio}</p>
        <p>Descripcion: {producto.descripcion}</p>
    </div>
  )
}

export default Productdetails