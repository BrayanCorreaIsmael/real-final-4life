import React, { useEffect, useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard } from '../../components'
import Header from '../../components/Header/Header'
import './HomePage.css'

const HomePage = () => {
    const {products} = useCustomContext()
    const [searchProduct, setSearchProduct] = useState('')
    const [max, setMax] = useState(1000000)
    const [min, setMin] = useState(0)
    const [currentProducts, setCurrentProducts] = useState(products)

    useEffect(() =>{
      setCurrentProducts(products.filter(
        producto => producto.nombre.toLowerCase().includes(searchProduct.toLowerCase()) && producto.precio >= min && producto.precio <= max
      ))
    }, [searchProduct, max, min])
  return (
<>
<div className='product-container'>
  <h1>Lista de productos</h1>

  <input className='Input' placeholder='Busca con el nombre del producto' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}/>
  <div>
    <h2>Buscador por precios</h2>
    <div className='Container-maxmin'>
      <input className='minmax' type='text' value={min} onChange={(e) => setMin(Number(e.target.value))}/>
      <input className='minmax' type='text' value={max} onChange={(e) => setMax(Number(e.target.value))}/>
    </div>
  </div>
  
  <div className='container'>
  <span className='anteojos'> &#128374; </span>
  <p className='nuestrosProductos'> Nuestros Productos </p>
  <span className='anteojos'> &#128374;</span>
</div>

  <div>
    {
      currentProducts.length > 0 
      ?
      currentProducts.map(producto => (
        <ProductCard producto={producto} key={producto.id}/>
      ))
      :
      <h2>No se encuentra ningún producto bajo esos parámetros</h2>
    }
  </div>
</div>

</>
  )
}

export default HomePage


