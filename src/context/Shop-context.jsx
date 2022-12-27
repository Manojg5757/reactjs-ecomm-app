import { React, createContext, useState } from 'react'

import { Products } from '../product'

export const ShopContext = createContext(null)

 const getDefaultCart = () =>{
    let Cart = {}
    for(let i=1;i<Products.length+1; i++){
        Cart[i] =0 
    }
    return Cart;
 }

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())
    
    const getTotalAmount = () =>{
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = Products.find((product) => product.id === Number(item))
         totalAmount += cartItems[item] * itemInfo.price
        }
      }
      return totalAmount
    }

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}));
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}));
    }
    const updateCartItemAmount = (newAmount, itemId) =>{
      setCartItems((prev) =>({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems,addToCart,removeFromCart,updateCartItemAmount, getTotalAmount}
    console.log(cartItems)
    return (
   
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

