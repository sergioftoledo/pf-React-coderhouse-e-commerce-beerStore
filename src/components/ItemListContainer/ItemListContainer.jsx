import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

function ItemListContainer({ saludo }) {
  return (
    <>
      <div className="contenedor-items">{ saludo }</div>
      <ItemCount />
    </>
  )
}

export default ItemListContainer