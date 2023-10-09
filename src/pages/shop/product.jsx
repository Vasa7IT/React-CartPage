import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'
export const Product=(props) =>{
    const {id,name,price,image}=props.data;
    const {addToCart,cartItems} =useContext(ShopContext)

    const cartItemAmount=cartItems[id]

  return (
    <div className='product'>
        <img src={image} alt={name} />
        <div className='description'>
            <p>
                <strong>{name}</strong>
            </p>
            <p>
               ${price} 
            </p>
        </div> 
        <button className='cartBtn' onClick={()=>addToCart(id)}>
          Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}
          </button>
    </div>
       
  )
}
