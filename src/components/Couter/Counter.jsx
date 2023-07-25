import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './Counter.css'

const Counter = ({initialValue, stock, id}) => {
    const {addProductCart } = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)
    const onClickAddProduct = () =>{
        addProductCart(id, quantity)
        Swal.fire(
            '¡Buen Trabajo!',
            '¡Se añadió el producto!',
            'success'
        )
       
    }
    return (
        <>
        <div className="details">
            <div >
                <button className='button' onClick={() => setQuantity(quantity >1 ? quantity - 1 : quantity)} >-</button>
                <span className='number-confirm'>{quantity}</span>
                <button className='button' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
            </div>
            <button className="confirm-button" onClick={onClickAddProduct}>Confirmar</button>
        </div>
        </>
    )
}

export default Counter