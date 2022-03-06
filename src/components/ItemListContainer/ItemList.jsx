import React from 'react'
import Item from '../Item/Item'

const ItemList = ( { productos }) => {
  return (
    <div className="contenedor-cards">
        { productos.map( producto => {
            return ( 
            <Item  key= {producto.id} title= {producto.title} description= {producto.description} picture= {producto.pictureURL} stock= {producto.stock} />)
            
            }) }
        </div>
  )
}

export default ItemList