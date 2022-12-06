import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({nombre,img,categoria,precio,id}) => {
  return (
    /*
    <div className='p-5 flex flex-col items-center border border-cyan-900 rounded-lg border-4  bg-info-content m-7 '>
      <div className='flex-1'>{nombre}</div>
      <div className='flex-1'><img width={200} height={200} src={img} alt="game"/></div>
      <div className='flex-1'>{categoria}</div>
      <div className='flex-1'>{precio}</div>
      <div className='flex-1'><ItemCount stock={stock} initial={1}/></div>
    </div>
    */
    <div className="card bg-zinc-900 shadow-xl p-1 m-5">
      <figure className='pt-5'><Link to={`/item/${id}`}><img src={img} width={200} height={200} alt="Shoes"  /></Link></figure>
      <div className="card-body">
        <h2 className="card-title justify-center bg-zinc-700 text-white p-3 rounded-lg">
          {nombre}
        </h2>
        
        
        <div className="card-actions justify-end">
          <div className="badge badge-outline bg-cyan text-white">{categoria[0]}</div> 
          <div className="badge badge-outline bg-cyan text-white">USD {precio}</div> 
          
        </div>
       
      </div>
    </div>
  )
}

export default Item