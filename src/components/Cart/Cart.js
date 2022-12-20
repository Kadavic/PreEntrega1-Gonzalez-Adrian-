import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {
    const {cart, deleteProduct} = useCartContext()
  return (
    <div>
        {
            cart.map(product => (
                <>
                    <h1>{product.nombre}</h1>
                    <button onClick={() => deleteProduct(product)}>Eliminar producto</button>
                </>
            ))
        }
    </div>
  )
}

export default Cart