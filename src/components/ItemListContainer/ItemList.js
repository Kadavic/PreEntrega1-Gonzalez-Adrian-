import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../data/Catalogo'
import Item from './Item'
import { collection, getDocs, getFirestore } from 'firebase/firestore'


const ItemList = () => {

  const {categoryid} = useParams()
  const [loading, setLoading] = useState(true) 
  const[items, setItems] = useState([])

  useEffect(() => {
    if(categoryid) {
      getItems().then(response => {
        console.log(response)
        setItems(response.filter(p => p.categoria == categoryid))
      })
    } else{
      getItems().then(response => {
        console.log(response)
        setItems(response)
      })
    }
  },[categoryid])

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(catalogo)
        setLoading(false)
      },2000)
    })
  }
  return (
    <div>
      <h1 className=' text-lg mx-[40%] mt-5 text-center p-2 rounded-lg text-white bg-base-300  '>Lista de juegos</h1>
      {
        loading ? <h1 className='bg-neutral-focus text-center p-5 mt-[15%] mx-[40%]'>Cargando...</h1> : <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 p-5 m-5 '>
        
        {items.map((p) => <Item key={p.id} {...p}/>)}
      </div>
      }
      
    </div>

  )
}

export default ItemList