import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

function ItemListContainer({ saludo }) {

  const onAdd = cantidad => {
    console.log(cantidad)
  }

  return (
    <>
      <div className="contenedor-items">{ saludo }</div>
      <ItemCount stock={15} initial={1} onAdd={onAdd} />
    </>
  )
}

export default ItemListContainer