
import { useParams } from 'react-router-dom'
import { ecomContext } from './Home';
import React, { useContext, useEffect } from 'react'
import { useState } from 'react';

const SingleProduct = () => {
  
    const{id}=useParams();
    const{products,handelAddtoCart } = useContext(ecomContext);

    // console.log(id);
    // console.log(products);

    const[productTODisplay, setProductToDisplay] = useState({})


    useEffect(()=>{
        if(products.length > 0 && id){
          setProductToDisplay(products.find((prod)=> prod.id===Number(id)))
        }
    },[id,products]);

    console.log(productTODisplay);


  return (
    <>
    {Object.keys(productTODisplay).length > 0 ?(
      
    <div className='container'>
    <div id="image">
    <img src={productTODisplay.attributes.image} alt="" />
    </div>

    <div id="content">
    <h2>{productTODisplay.attributes.title}</h2>
    <h3>compny: {productTODisplay.attributes.company}</h3>
    <p>${productTODisplay.attributes.price/100}</p>
    <p>{productTODisplay.attributes.description}</p>
    <button onClick={(e)=>handelAddtoCart(e,productTODisplay)}>Add to cart</button>
    </div>
    </div>
    ):(
      ""
    )}
    </>
  )
}

export default SingleProduct
