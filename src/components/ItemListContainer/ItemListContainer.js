import React from 'react'

import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  return (<>
            <div className='text-white-700 text-2xl mt-10'>{greeting}</div>
            <div >
            <ItemList/>
            </div>
          </>
    
  )
}

export default ItemListContainer