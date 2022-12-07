import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../data/Catalogo'
import Item from './Item'


const ItemList = () => {

  const {categoryid} = useParams()
  

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
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(catalogo)
      },2000)
    })
  }
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 p-5 m-5 '>
      
      {items.map((p) => <Item key={p.id} {...p}/>)}
    </div>
  )
}

export default ItemList