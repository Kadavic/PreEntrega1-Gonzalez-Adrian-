import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar  bg-neutral-focus  flex items-center justify-between">
      <div className='flex-1'>
        <a href='' className="btn btn-ghost normal-case text-3xl ">Game Shop</a>
      </div>
      <div className='shrink-0'>
          <ul className="menu menu-horizontal p-0 bg-base-300 font-bold rounded-lg">
            <li><a href=''>Juegos</a></li>
            <li tabIndex={0}>
              <a href=''>
                Categoría
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul style={{zIndex:1}} className="p-2 bg-base-100 bg-base-200 rounded-sm ">
                <li><a href=''>Acción </a></li>
                <li><a href=''>Disparos</a></li>
                <li><a href=''>Estrategia</a></li>
                <li><a href=''>Simulación</a></li>
                <li><a href=''>Aventuras</a></li>
                <li><a href=''>Indie</a></li>
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