import React, { useContext } from 'react'
import { ecomContext } from './Home'
import { Link } from 'react-router-dom';

const Product = () => {

  const{products, handelAddtoCart}=useContext(ecomContext);
  // console.log(products);



  return (
    <>
    <div className="single-product-box">
      {
        products.map((p,i)=>{
          return(
            <div key={i} className="single">
              <Link to={`/product/${p.id}`}><img src={p.attributes.image} alt="" /></Link>
              <div id="des">
                <h3>{p.attributes.title}</h3>
                <p>${p.attributes.price/100}</p>
                <button onClick={(e)=>handelAddtoCart(e,p)}>Add to cart</button>
              </div>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Product
