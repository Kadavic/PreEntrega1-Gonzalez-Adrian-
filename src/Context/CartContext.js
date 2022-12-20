import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

export const Contexto = createContext()

export const useCartContext= () => {
    const cartContext = useContext(Contexto)
    return cartContext
}



const CartContext = ({children}) => {
    const [cart, setCart] = useState([])
    const addNewProduct = (product) =>{
        const oldProduct = cart.find((currentProduct) => currentProduct.id === product.id)
        
        if (!oldProduct) {
            const newCart=[...cart,product]
            setCart(newCart)
        } else {
            const oldCart = cart.filter((currentProduct) => currentProduct.id !== product.id)
            const newProduct = {...product, quantity: product.quantity + oldProduct.quantity}
            setCart([...oldCart, newProduct])
        }
    }

    const deleteProduct = (product) => {
        const newCart = cart.filter((currentProduct) => currentProduct.id !== product.id)
        setCart(newCart)
    }

    console.log(cart)


  return (
    <Contexto.Provider value={{cart,addNewProduct,deleteProduct}}>
        {children}
    </Contexto.Provider>
  )
}

export default CartContext