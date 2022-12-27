import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'


const Product = (props) => {
    const {id,productName,price,productImage} = props.data
    const { addToCart,cartItems } = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
    return (
    <div className='productItem'>
     <div className='productCard'>
       <img className='productImage' alt='prodcutimage' src={productImage} />
       <div className='productDesc'>
          <p className='productName'>{productName}</p>
          <p className='price'>{price} <span style={{color: "black",fontSize:'1rem'}}>$</span></p>
       </div>
       <button className='addtocart' onClick={() => addToCart(id)}>
       Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
       </button>
       
     </div>
    </div> 
  )
}

export default Product