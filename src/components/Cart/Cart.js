import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'

const Cart = () => {
    const {cart, deleteProduct , totalPrecioCarrito, emptyCart} = useCartContext()
  return (
    <div className='flex flex-col mx-[10%] my-[7%] p-2 justify-center items-center bg-zinc-900'>
        {
            cart.length > 0 ? (
                <>
                    <h1 className='uppercase font-semibold text-lg bg-base-300 p-3 rounded-lg '>Carrito</h1>
                    <div className='w-[60%] flex reative h-[50px] bg-dimWhite m-1 font-medium'>
                        <div className='flex justify-center items-center w-[12%]'/>
                        <div className='flex justify-center items-center w-[45%]'>
                            Producto
                        </div>
                        <div className='flex justify-center items-center w-[15%]'>
                            Precio Unitario
                        </div>
                        <div className='flex justify-center items-center w-[12%]'>
                            Unidades
                        </div>
                        <div className='flex justify-center items-center w-[15%]'>
                            Precio Total
                        </div>
                    </div>
                    {
                        cart.map(product => (
                            <div key={product.id} className='w-[60%] flex relative h-[100px] bg-dimWhite m-1'>
                                <div className='flex justify-center items-center w-[12%]'>
                                    <button className='px-8 py-3 text-white bg-gray-600  focus:outline-none disabled:opacity-100 ' onClick={() => deleteProduct(product)}>Eliminar producto</button>

                                </div>
                                <div className='flex justify-center items-center w-[15%]'>
                                    <img src={product.img} alt={product.nombre} className='h-[90px]'/>
                                </div>
                                <div className='flex items-center w-[30%]'>
                                    <h3>{product.nombre}</h3>
                                </div>
                                <div className='flex items-center justify-center w-[15%]'>
                                    <h3>USD {product.precio}</h3>
                                </div>
                                <div className='flex items-center justify-center w-[12%]'>
                                    <h3>{product.quantity}</h3>
                                </div>
                                <div className='flex items-center justify-center w-[15%]'>
                                    <h3>USD {product.quantity * product.precio}</h3>
                                </div>
                            </div>
                        ))
                    }   
                    <div className='w-[60%] flex justify-end m-1'>
                        <div className='w-[42%] flex relative h-[50px] bg-dimWhite font-medium items-center justify-between px-8'>
                            <h3>PRECIO TOTAL:</h3>
                            <h3>USD {totalPrecioCarrito()}</h3>
                        </div>    
                    </div> 
                    <div className='w-[60%] flex justify-end m-1 gap-5'>
                        <button onClick={() => emptyCart()} className='px-5 py-2 text-white bg-red-800 rounded-lg'>VACIAR CARRITO</button>
                        <Link to='/checkout' className='px-5 text-white btn bg-green-800 py-2'>Terminar Compra</Link>
                    </div>
                </>
            ) : (
                <div className='flex flex-col items-center m-5'>
                    <h1 className='text-2xl m-5 font-medium bg-zinc-700 p-5'>El carrito esta vacio! </h1>
                    <div>
                        <Link to='/' className="text-white font-medium uppercase bg-neutral-focus py-2 px-4">Volver al inicio</Link>
                    </div>
                </div>    
            )
        }
    </div>
  )            
}        

export default Cart