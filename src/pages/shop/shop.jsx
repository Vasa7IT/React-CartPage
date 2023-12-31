import React from 'react'
import {PRODUCTS} from "../../products";
import {Product} from './product';
import "./shop.css";
export const Shop = () => {
  return (
    <div className="shop">
        <div calssName="shopTitle">
            <h1>E-Mart</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product)=>(
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}
