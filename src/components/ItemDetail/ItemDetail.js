import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../data/Catalogo'

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
        
        <h2>Detalles del juego: {id}</h2>
        <h2>{item.nombre}</h2>
        
        
    </div>
  )
}

export default ItemDetail