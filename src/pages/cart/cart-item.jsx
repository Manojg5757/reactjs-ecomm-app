import React from 'react'
import "./cart-item.css"
import { ShopContext } from '../../context/Shop-context'
import { useContext } from 'react'

const Cartitem = (props) => {
    const {id,productName,price,productImage} = props.data
    const { cartItems,addToCart,removeFromCart,updateCartItemAmount } = useContext(ShopContext)
  return (
   <div className='cartItem'>
     <img src={productImage} />
     <div className='cartDesc'>
        <p className='productName'><b>{productName}</b></p>
        <p className='price'>${price}</p>
        <div className='buttons'>
        <button className='minus' onClick={() =>removeFromCart(id)}>-</button>
        <button><input value={cartItems[id]} onChange={(e) =>updateCartItemAmount(Number(e.target.value),id)}  className='inputBox' /></button>
        <button className='plus' onClick={()=>addToCart(id) }>+</button>
        </div>
     </div>
   </div>
  )
}

export default Cartitem