import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
  return (<>
            <div className='text-white-700 text-2xl flex-auto'>{greeting}</div>
            <div>
            <ItemCount stock={10}/>
            </div>
          </>
    
  )
}

export default ItemListContainer