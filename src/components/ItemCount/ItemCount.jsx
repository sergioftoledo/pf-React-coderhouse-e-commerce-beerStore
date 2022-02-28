import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock = 15, inicial = 1, onAdd}) {
    const [count, setCount] = useState(inicial)

    // Agrega un producto al contador.
    function sumar() {
        if (count < stock) {
            setCount(count + 1)            
        }
    }

    // Saca un producto del contador si hay más de uno.
    function restar() {
        if (count > 1) {
            setCount(count -1)
        }
    }

    function onAdd () {
        console.log(count)
    }

  return (
    <>
        <div className='contenedor-contador'>
            <div className='contenedor-contador-botones'>
                <button className='disminuir-cantidad' onClick={ restar }>-</button>
                <span>{ count }</span>
                <button className='aumentar-cantidad' onClick={ sumar }>+</button>
            </div>
            <div className='contenedor-agregar-carrito'>
                <button className='agregrar-carrito' onClick={ onAdd }>agregar al carrito</button>
            </div>
        </div>
    </>
  )
}

export default ItemCount