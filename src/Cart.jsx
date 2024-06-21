import React, { useContext, useState } from 'react'
import { ecomContext } from './Home'
import { Link } from 'react-router-dom';

const Cart = () => {
  let sum = 0;

  const {cart,setCart,loggedInuser, users} = useContext(ecomContext);

  function getSubtotal(){
    if(cart.length > 0){
      cart.forEach((item)=>{
        sum += Number(item.attributes.price)
      })
      sum = sum/100;
      return sum;
    }
  }


  const[total,setTotal] = useState(getSubtotal());
  const[shipping,setShipping] = useState(5);
  const[tax,setTax] = useState(total/10);



  return (
    <>
    <div id="cartPage">
      <div id="cartProd">
        {
          cart.length > 0 ? 
          cart.map((cItem, cIndex)=>{
            return(
              <div className='cartProduct'>
                <div id="in-img">
                <img src={cItem.attributes.image} alt="" />
                </div>
                <div id="in-content">
                  <h3>{cItem.attributes.title}</h3>
                  <p>${cItem.attributes.price/100} </p>
                </div>
              </div>
            )
          })
          :" "
        }
      </div>

      <div id="cCart">
      <div id="cartCalculation">
        <div id="subtotal">
          <span>subtotal :</span>
          <span>${total}</span>
        </div>

        <div id="shipping">
          <span>Shipping :</span>
          <span>${shipping}</span>
        </div>

        <div id="Tax">
          <span>Tax :</span>
          <span>${tax}</span>
        </div>

        <div id="Total">
          <span>Total :</span>
          <span>${tax+shipping+total}</span>
        </div>

        
      </div>
      {loggedInuser.name ? (<Link to='/checkOut'>Checkout</Link>
        ):(<Link to='/login'>Proceed to Login</Link>)
        }
      </div>
      
      
    </div>
    </>
  )
}

export default Cart
