import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-3xl">Game Shop</a>
      </div>
      <div className='flex-auto'>
          <ul className="menu menu-horizontal p-0 ">
            <li><a>Juegos</a></li>
            <li tabIndex={0}>
              <a>
                Categoria
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Acción </a></li>
                <li><a>Disparos</a></li>
                <li><a>Estrategia</a></li>
                <li><a>Simulación</a></li>
                <li><a>Aventuras</a></li>
                <li><a>Indie</a></li>
              </ul>
            </li>
            <li><a>Ofertas</a></li>
          </ul>
      </div>
      <div className='flex-none'>
      <CartWidget/>
      </div>
       
            
    </div>
  )
}

export default NavBar