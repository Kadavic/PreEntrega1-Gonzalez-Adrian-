import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'




const Checkout = () => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im
    const styles = {
        title: "font-medium text-lg text-gray-800 tracking-wider leading-tight uppercase",
        text: "font-light text-sm text-gray-600 tracking-wide leading-normal",
        highlight: "font-medium text-xs text-gray-700 tracking-wider leading-loose uppercase",
        button: "font-medium text-xxs text-gray-700 tracking-wider leading-normal uppercase select-none",
        symbol: "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-400 border border-gray-400 w-7 h-7 flex items-center justify-center p-0.5",
        counter: "border border-x-1 border-x-white border-y-gray-400 text-gray-600 h-full text-center w-5 p-0.5"
    }


    const{cart, totalPrecioCarrito,totalProductosCarrito,emptyCart } = useCartContext()
    const [idCompra, setIdCompra] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }
    const orderDate = new Date().toLocaleDateString()

    function orderHandler() {
        const order = {
            buyer,
            item: cart,
            price: totalPrecioCarrito(),
            date: orderDate,
        }
        console.log("Nuevo pedido: ", order)
        saveOrder(order)
    }

    const saveOrder = async(order) =>{
        const db=getFirestore()
        const orderCollection = collection(db,'orders')
        const {id} = await addDoc(orderCollection,order)
        setIdCompra(id)
    }

  return (
    <div className='flex flex-col mx-[10%] my-[7%] p-4 justify-center items-center bg-zinc-900 rounded-lg' >
        <div className="flex justify-center items-center mx-auto xl:max-w-7xl mx-6 xl:mx-auto">
                <div className="flex w-full flex-col justify-center items-center">

                    
                    <h1 className={" mb-6 text-white text-lg p-1 rounded"}>Checkout</h1>
                    
                    
                    <div className="flex w-full flex-col lg:flex-row justify-start items-start">
                        
                        
                        <div className="flex flex-col self-start w-full md:w-1/2 mr-6">
                            <h2 >Resumen</h2>
                            <div className="flex flex-col border border-gray-200 p-4 mt-6">
                                <div className={"flex flex-row justify-between "}>
                                    <p>Cantidad de items:</p>
                                    <p>{totalProductosCarrito()}</p>
                                </div>
                                <div className={"flex flex-row justify-between "}>
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className={"flex flex-row justify-between font-semibold mt-10 "}>
                                    <p>Total:</p>
                                    <p>USD {totalPrecioCarrito()}</p>
                                </div>
                            </div>
                            <Link to='/cart' className={" flex flex-row items-center mt-3  bg-red-700 rounded-lg p-1"}>
                                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                                Volver al carrito
                            </Link>
                        </div>
                            <form className="space-y-6">
                                <h2>Detalles de facturación</h2>
                                <input
                                    className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                                    id="name"
                                    type="text"
                                    name="name"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                                    id="surname"
                                    type="text"
                                    name="surname"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                />
                                <input
                                    className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                />
                                <input
                                    className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                    className={"px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "}
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar e-mail"
                                />
                                
                            </form>
                            <div className='mt-[26%] mx-5 p-4'>
                                {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                                    ? (
                                        
                                        <input 
                                            onClick={() => { orderHandler(); setShowModal(true) }} 
                                            className={" focus:outline-none text-white bg-gray-700 focus:ring-transparent w-full text-center py-3 rounded p-5 cursor-pointer mt-6"}
                                            type="submit" 
                                            value="Proceder al pago" 
                                        />
                                    ) : (
                                    
                                        <input 
                                        className={" focus:outline-none text-white bg-gray-400 focus:ring-transparent w-full rounded p-5 text-center py-3 mt-6"}
                                            type="submit" 
                                            value="Proceder al pago" 
                                            disabled 
                                        />
                                    )
                                }
                            </div>
                    </div>
                </div>
        </div>
        <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-gray-800`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h2 className={"text-center text-black md:w-9/12 lg:w-7/12"}>¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                        <p className={"mt-6 text-center text-black md:w-9/12 lg:w-7/12 "}>Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Esperamos que hayas tenido una agradable experiencia en GAME SHOP. ¡Hasta la próxima!</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={emptyCart} className={" focus:outline-none text-white bg-gray-700 focus:ring-transparent w-40 text-center py-3 cursor-pointer"}>
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Checkout