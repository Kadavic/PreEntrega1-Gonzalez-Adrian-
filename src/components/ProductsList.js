import React, { useEffect, useState } from 'react'

const ProductsList = () => {
/*
    useEffect(() => {
        randomPromise()
    },[])

    const randomPromise = () =>{
        const productsPromise = new Promise((resolve,reject) => {
            const rand = Math.random()
            if (rand > 0.5){
                resolve("Se resolvió satisfactoriamente")
            }
            reject("rechazada")
        })
        productsPromise.then((response) => {
            console.log(response)
        }).catch((err) => {
            console.log("ERROR: ",err)
        })

    }*/

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            console.log(response)
            setProducts(response)
        })
    },[])

    const getProducts = () => {
       return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(["prod1", "prod2", "prod3"])
            },2000)
        })
    }

  return (
    <div>
        <h1>ProductsList</h1>
        {products.map( (p,i) => <li key={i}>{p}</li>)}
    </div>
  )
}

export default ProductsList