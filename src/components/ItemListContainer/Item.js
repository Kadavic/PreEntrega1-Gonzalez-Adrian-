import React from 'react'

const Item = ({nombre,img,categoria,detalles,precio}) => {
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
    <div className="card bg-zinc-900  p-1 m-5">
      <figure className='pt-5'><a href=""><img src={img} width={200} height={200} alt="Shoes"  /></a></figure>
      <div className="card-body">
        <h2 className="card-title justify-center bg-zinc-700 text-white p-3 rounded-lg">
          {nombre}
        </h2>
        
        
        <div className="card-actions justify-end">
          <div className="badge badge-outline bg-cyan text-white">{categoria}</div> 
          <div className="badge badge-outline bg-cyan text-white">USD {precio}</div> 
          
        </div>
        <div className='border border-stone-600 m-5 p-5 '>
        {detalles}
        </div>
      </div>
    </div>
  )
}

export default Item