import React from 'react'
import cart from './cart-icon.png'
import './CartWidget.css'

function CartWidget() {
  return (
    <img src={cart} className="cart-icono" alt="carrito de compras" />
  )
}

export default CartWidget