import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (<>
            <div className='text-white-700 text-2xl'>{greeting}</div>
            <div>
            <ItemCount stock={5} initial={1}/>
            </div>
          </>
    
  )
}

export default ItemListContainer