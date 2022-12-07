import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { catalogo } from '../data/Catalogo'
import CartWidget from './CartWidget'

const NavBar = () => {
  
  

  return (
    <div className="navbar  bg-neutral-focus  flex items-center justify-between">
      <div className='flex-1'>
        <Link to='/'className="btn btn-ghost normal-case text-3xl ">Game Shop</Link>
      </div>
      <div className='shrink-0'>
          <ul className="menu menu-horizontal p-0 bg-base-300 font-bold rounded-lg">
            <li><Link to={"/"}>Juegos</Link></li>
            <li tabIndex={0}>
              <Link>
                Categoría
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul style={{zIndex:1}} className="p-2 bg-base-100 bg-base-200 rounded-sm ">
                <li><Link to={`/category/Horror`} >Horror</Link></li>
                <li><Link to={`/category/Arcade`} >Arcade</Link></li>
                <li><Link to={`/category/Space`} >Space</Link></li>
                <li><Link to={`/category/Adventure`} >Adventure</Link></li>
                <li><Link to={`/category/Indie`} >Indie</Link></li>
              </ul>
              
            </li>
            
            <li><a href=''>Ofertas</a></li>
          </ul>
      </div>
      <div className='flex-1'>
      <CartWidget/>
      </div>
       
            
    </div>
  )
}

export default NavBar