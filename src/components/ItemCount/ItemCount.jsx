import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial)

    // Agrega un producto al contador.
    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)            
        }
    }

    // Saca un producto del contador si hay más de uno.
    const restar = () => {
        if (count > initial) {
            setCount(count -1)
        }
    }

  return (
    <>
        <div className='contenedor-contador'>
            <div className='contenedor-contador-botones'>
                <button className='disminuir-cantidad' onClick={ restar }>-</button>
                <span className='contador'>{ count }</span>
                <button className='aumentar-cantidad' onClick={ sumar }>+</button>
            </div>
            <div className='contenedor-agregar-carrito'>
                <button className='agregrar-carrito' onClick={ () => onAdd(count) }>agregar al carrito</button>
            </div>
        </div>
    </>
  )
}

export default ItemCount