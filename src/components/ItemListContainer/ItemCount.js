import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock}) => {
    const[count,setCount] = useState(0)
    function agregarAlContador(){
        count === stock ? <button disable={true}></button> : setCount(count+1)
    }
    function quitarAlContador(){
        count < 1  ? <button disable={true}></button> : setCount(count-1)
    }
  return (
    <div>
        <div className="btn-group">
            <button className="btn" onClick={quitarAlContador}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                </svg>
            </button>
            <button type="button" class="px-8 py-3 text-white bg-gray-600 rounded focus:outline-none disabled:opacity-100 " disabled>
                <p className="text-slate-50 font-semibold ">{count}</p>
            </button>
            <button className="btn"onClick={agregarAlContador}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    </div>
  )
}
export default ItemCount