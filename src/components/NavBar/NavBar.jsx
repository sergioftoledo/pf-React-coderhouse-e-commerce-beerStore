import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
	<header>
		<a href="index.html"><img src={ logo } className= "logo" alt="logo beer store"/></a>
		<nav className="navegacion">
			<a href="index.html"><li>inicio</li></a>
			<a href="##"><li>nosotros</li></a>
			<a href="##"><li>productos</li></a>
		</nav>
	<CartWidget />
	</header>
  )
}

export default NavBar