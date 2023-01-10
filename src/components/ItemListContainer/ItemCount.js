import React, { useEffect } from 'react'
import { useState } from 'react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, initial, onAdd}) => {
    const[count,setCount] = useState(1)
    const [bandera, setBandera] = useState(false)
    
    useEffect( () => {                          
        console.log("Se hizo render")
    })

    useEffect( () => {
        console.log("Este efecto solo en montaje")
    },[])
    
    function agregarAlContador(){
        console.log("se hizo click")
        count === stock ? <button disable={true}></button> : setCount(count+1)
    }

    function quitarAlContador(){
        console.log("se hizo click")
        count < initial  ? <button disable={true}></button> : setCount(count-1)
    }

    const handleAddToCart = () => {
        onAdd(count)
        setBandera(!bandera)
    }
  return (
    <div className='flex items-center justify-center mt-5 '>
        {
            !bandera ?   <div className='p-5 border-y-4 border-zinc-800   bg-zinc-700'>
                            <div className="btn-group flex items-center justify-center p-5">
                                <button className="btn" onClick={quitarAlContador}>
                                <MinusSmallIcon className="h-6 w-6 text-white-500"/>
                                </button>

                                <button type="button" class="px-8 py-3 text-white bg-gray-600  focus:outline-none disabled:opacity-100 " disabled>
                                    <p className="text-slate-50 font-semibold ">{count}</p>
                                </button>

                                <button className="btn"onClick={agregarAlContador}>
                                <PlusSmallIcon className='h-6 w-6 text-white-500'/>
                                </button>
                            </div>
                            <div className='flex items-center justify-center  '>
                                <button className='btn' onClick={handleAddToCart}>
                                    Agregar al carrito
                                </button>
                            
                            </div>
                        </div> :    <div className='flex items-center justify-center m-10 '>
                                        <Link to='/Cart' className='btn'>
                                            Finalizar compra
                                        </Link>
                                        <Link to='/' className='btn'>
                                            Seguir comprando
                                        </Link>
                                    </div>
        }
            
    </div>
  )
}
export default ItemCount