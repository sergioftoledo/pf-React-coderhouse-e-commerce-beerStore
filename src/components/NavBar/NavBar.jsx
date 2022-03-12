import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './NavBar.css'

const NavBar = () => {
  return (
	<header>
		<Link to='/'>
		<img src={ logo } className= "logo" alt="logo beer store"/>
		</Link>
		<nav className="navegacion">
			<Link to='/'><li>inicio</li></Link>
			<Link to='/'><li>nosotros</li></Link>
			<Link to='/'><li>productos</li></Link>
		</nav>
	<CartWidget />
	</header>
  )
}

export default NavBar