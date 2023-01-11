import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../data/Catalogo'
import Item from './Item'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const ItemList = () => {

  const {categoryid} = useParams()
  const [loading, setLoading] = useState(true) 
  const[items, setItems] = useState([])

  useEffect(() => {
    !categoryid ? getItems() : getItemsCategory()
  },[categoryid])

  const getItems = async () =>{
    const db=getFirestore()
    const collectionRef = collection(db, 'Catalogo')
    const snapshot = await getDocs( collectionRef) 
    
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      
    
  }

  const getItemsCategory = async () =>{
    const db=getFirestore()
    const collectionRef = query(collection(db, 'Catalogo'), where('categoria','==', categoryid))
    const snapshot = await getDocs( collectionRef) 
    
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      
    
  }

 /* const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(catalogo)
        setLoading(false)
      },2000)
    })
  }*/
  return (
    <div>
      <h1 className=' text-lg mx-[40%] mt-5 text-center p-2 rounded-lg text-white bg-base-300  '>Lista de juegos</h1>
       
        <div className='grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 p-5 m-5 '>
        {items.map((p) => <Item key={p.id} {...p}/>)}
        </div>
      
      
    </div>

  )
}

export default ItemList