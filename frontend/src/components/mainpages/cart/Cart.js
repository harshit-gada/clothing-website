import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import { DetailProduct } from '../utils/DetailProducts/DetailProduct';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const state=useContext(GlobalState);
  const [cart]=state.UserApi.cart
  if(cart.length===0){
    return <h2 className="text-center text-5xl font-medium">Cart Empty</h2>
  }
  return (
  <>
    {
      cart.map(product=>(
        <div className='detail'> 
          <div>
            <img src={product.images.url} alt='productImage'/> </div> 
            <div className='box-detail'>
                <div className='row'>
                  <h2>{product.product_title}</h2>   
                </div>
                <div><h6>{product.product_id}</h6></div>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <p>{product.content}</p>
                <p>Sold: {product.sold}</p>
                <Link to='/cart' className='cart'>Add to Cart</Link>
            </div>  
        </div>
      ))
  }
</>
  )
}
