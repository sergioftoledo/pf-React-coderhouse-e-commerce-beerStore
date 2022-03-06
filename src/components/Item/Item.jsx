import React from 'react'
import './Item.css'

const Item = ({ id, title, price, picture, stock, description }) => {
  return (
    <div key= { id } className='card'>
                <div className='card-img'>
                    <img src={ picture } alt="" />
                </div>
                <div>
                    <h3 className='titulo-producto'>
                        { title }
                </h3>
                </div>
                <span className='producto-stock'>
                    stock: { stock }
                </span>
                <div className='producto-descripcion'>
                    <button className='producto-detalles-boton'>
                        más detalles
                    </button>
                </div>
            </div>
  )
}

export default Item