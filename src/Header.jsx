import React, { useContext } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { ecomContext } from './Home';

function Header() {

  const{cart} = useContext(ecomContext)

  return (
    <div>
      <header>

        <div className="top">
            <button><Link to='/login'>Login</Link></button>
            <button><Link to='/login'>Register</Link></button>
        </div>

        <div className="bottom">
            <div id="lft">
                <h2>LoGo</h2>
            </div>

            <div id="right">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/product">Product</Link>
                <Link to=""><DarkModeIcon /></Link>
                <Link to=""><ShoppingCartIcon /> <span>{cart.length}</span> </Link>


            </div>
        </div>

      </header>
    </div>
  )
}

export default Header
