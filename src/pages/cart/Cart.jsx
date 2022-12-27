import React,{ useContext } from 'react'
import { Products } from '../../product'
import { ShopContext } from '../../context/Shop-context'
import Cartitem from './cart-item'
import "./cart-item.css"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems,getTotalAmount } = useContext(ShopContext)
  const totalAmount = getTotalAmount()
  const navigate = useNavigate()
  return (
    <>
      <div>
        <h1 className='cartTitle'>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {Products.map((Product) =>{
         if(cartItems[Product.id] !== 0){
          return(
            <Cartitem data={Product} />
          )
         }
      })}   
      </div>
      <div className='continue'>
      <p style={{textAlign:"center"}}><b>Total:</b>${totalAmount}</p>
        <button  onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </>
  )
}

export default Cart