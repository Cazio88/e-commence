import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
 
  return (
    <>
    
      <header className="primary-header container flex">
        <div className="header-inner-one flex">
          <div className="logo">
            <img src="..." alt="" />
          </div>
        
          <nav>
            <ul
              id="primary-navigation"
              className='primary-navigation flex'
            >
              <li><Link className="active fs-100 fs-montserrat bold-500" to="/HomePage">Home</Link></li>
              <li>
                <Link className="fs-100 fs-montserrat bold-500" to="/About">About</Link>
              </li>
              <li>
                <Link className="fs-100 fs-montserrat bold-500" to="/Shop">Shop</Link>
              </li>
              <li>
                <Link className="fs-100 fs-montserrat bold-500"to="/Blog">Blog</Link>
              </li>
              <li>
                <Link className="fs-100 fs-montserrat bold-500" to="/Contact">Contact Us</Link>
              </li>
              <li>
                <Link className="fs-100 fs-montserrat bold-500" to="/Cart">Cart page</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
     {/* This is a comment inside JSX  <div className="header-login flex">
        <p className="fs-100 fs-montserrat bold-500">login</p>
        <i className="uil uil-search"></i>
        <i
          id="cart-box"
          aria-controls="cart-icon"
          className="uil uil-shopping-bag"
        
        ></i>
        <div id="cart-icon" className='cart-icon'>
          <div className="shopping flex">
            <p>Shopping Basket</p>
            <i id="cross-btn" className="uil uil-times"></i>
          
          <div className="cart bold-800 flex">
            <i className="uil uil-shopping-cart-alt"></i>
            <p>Cart Is Empty</p>
          </div>
        </div>
      </div></div>*/}
      <div className="mobile-open-btn"><i className="uil uil-align-right"></i></div>
    </>
  );
};

export default Navbar;
