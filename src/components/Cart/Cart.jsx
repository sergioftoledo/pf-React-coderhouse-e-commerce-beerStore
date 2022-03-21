import { useCartContext } from '../context/cartContext'
import './Cart.css'
const Cart = () => {
  const { cartList, clearCart } = useCartContext()
  console.log(cartList)

  return (
    <div className='contenedor-cart' id='cart'>
      {cartList.map(item => <li>{item.title} {item.quantity}</li>)}
      <button onClick={clearCart}>clear carrito</button>
    </div>
  )
}

export default Cart