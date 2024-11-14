import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState';
import { Link } from 'react-router-dom';
import './style2.css'
export const DetailProduct = () => {
    const params=useParams();
    const state=useContext(GlobalState);
    const products=state.ProductApi.products[0];
    const addCart=state.UserApi.addCart;
    const [detailProduct,setDetailProduct]=useState([]);
    useEffect(()=>{
        if(params){
            products.forEach(product=>{
                if(product._id===params.id){
                    setDetailProduct(product);
                }
            })
        }
    },[params,products]);
    if(detailProduct.length===0){
        return null
    }
    console.log(detailProduct);
  return (
    <>
        <div className='detail'> 
            <div>
            <img src={detailProduct.images.url} alt='productImage'/> </div> 
            <div className='box-detail'>
                <div className='row'>
                    <h2>{detailProduct.product_title}</h2>
                    
                </div>
                <div><h6>{detailProduct.product_id}</h6></div>
                <span>{detailProduct.price}</span>
                <p>{detailProduct.description}</p>
                <p>{detailProduct.content}</p>
                <p>Sold: {detailProduct.sold}</p>
                <Link to='/cart' className='cart' onClick={() => addCart({product:detailProduct})}>Add to Cart</Link>
            </div>  
        </div>
    </>

  )
}
