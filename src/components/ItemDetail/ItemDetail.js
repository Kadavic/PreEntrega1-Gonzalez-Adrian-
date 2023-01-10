import React, { useState } from 'react'

import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useCartContext } from '../../Context/CartContext'
import { catalogo } from '../data/Catalogo'
import ItemCount from '../ItemListContainer/ItemCount'



const ItemDetail = () => {

  const {addNewProduct} = useCartContext()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  
    useEffect(() => {
      getItemDetail().then( res => {
        setItem(res)
      })
    }, [id])
    
    const getItemDetail = () => {
        return new Promise((resolve,reject) => {
            const item =catalogo.find(p => p.id == id)
            setTimeout(() => {
                resolve(item)
                setLoading(true)
                
            }, 500);
        })
    }

    function onAdd(quantity){
      const newProduct = {...item, quantity}
      addNewProduct(newProduct)
    }

  return (
    <div>
      {
        !loading ? <h1 className='bg-neutral-focus text-center p-5 mt-[15%] mx-[40%]'>Cargando...</h1> : <div className="card grid grid-cols-3 place-content-center card-side bg-zinc-900 shadow-xl p-5 m-5">
                                <figure><img className='m-5 p-5 ' src={item.img} alt="Game"/></figure>
                                <div className="card-body ">
                                  <h2 className="card-title">{item.nombre}</h2>
                                  <p>{item.detalles}</p>
                                  <div className="card-actions justify-center">
                                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                                  </div>
                                </div>
                              </div>
      }
        
    </div>
  )
}

export default ItemDetail