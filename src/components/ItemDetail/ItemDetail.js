import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../data/Catalogo'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = () => {
    const [item, setItem] = useState({})
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
            }, 500);
        })
    }
  return (
    <div>
        <div className="card grid grid-cols-3 place-content-center card-side bg-zinc-900 shadow-xl p-5 m-5">
          <figure><img className='m-5 p-5 ' src={item.img} alt="Game"/></figure>
          <div className="card-body ">
            <h2 className="card-title">{item.nombre}</h2>
            <p>{item.detalles}</p>
            <div className="card-actions justify-center">
              <ItemCount stock={item.stock} initial={1}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail