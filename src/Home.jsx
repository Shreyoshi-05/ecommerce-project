import React, { createContext, useState } from 'react'
import About from './About';
import Header from './Header'
import Product from './Product';
import { useEffect } from 'react';
import First from './First';
import Cart from './Cart';
import SingleProduct from './SingleProduct';
import ProductOutlet from './ProductOutlet';
import Login from './Login';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

export const ecomContext = createContext();

function Home() {
  const[products , setProducts]= useState([])
  const[cart, setCart] = useState([]);


  function handelAddtoCart(e,prod){
    setCart([...cart,prod]);
  }

  const[users , setUsers] = useState([]);
  
  const[loggedInuser , setLoggedInuser] = useState([]);
    

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("https://strapi-store-server.onrender.com/api/products")
            const res = await response.json();
            console.log(res.data);
            setProducts(res.data);
        }
        fetchData();
    },[]);

    
    // console.log(cart);


  return (
    <>
      <BrowserRouter>
      <ecomContext.Provider value={{products, setProducts,handelAddtoCart, cart,setCart,users , setUsers, loggedInuser}}>
      <Header />
      <Routes>
        <Route path='/' element={<First />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/product' element={<ProductOutlet />} >
           <Route index element={<Product />}></Route>
           <Route path=':id' element={<SingleProduct />}></Route>
        </Route>
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
      </ecomContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default Home
