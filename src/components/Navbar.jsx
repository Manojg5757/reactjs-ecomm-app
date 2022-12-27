import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div>
    <div className='navbar'>
    <ul>
        <li><Link to={"/"}>Shop</Link></li>
        <li><Link to={"/cart"}><ShoppingCart size={32} /></Link></li>
    </ul>
    </div>

    </div>
  )
}

export default Navbar