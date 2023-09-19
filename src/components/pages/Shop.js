
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/shop.css"

const Shop = () => {

  return (
    <>
     
    <main className="shop-main-container grid">

      <div>
        <div className="shop-title flex">
          <div>
            <h2 className="fs-poppins fs-300">Shop</h2>
            <p className="fs-montserrat">Showing 1-9 of 10 results</p>
          </div>
          <div>
            <select name="text" id="" className="fs-poppins bg-black text-white">
              <option value="">Default Sorting</option>
              <option value="">Short By popularity</option>
              <option value="">Short By Average rating</option>
              <option value="">Short By latest</option>
              <option value="">Short By price: Low To High</option>
              <option value="">Short By price: High To Low</option>
            </select>
          </div>
        </div>
  
        <section className="shop-product grid">
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button> 
              <Link className="bg-red text-white fs-montserrat" to="/Products"> Add to Cart </Link>
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>


            <div className="pup-up">
                <p className="fs-poppins">Sell</p>
            </div>


          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button> <Link className="bg-red text-white fs-montserrat" to = "/Products">
                Add To Cart</Link>
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>
          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>
          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>
          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>

               <div className="pup-up">
                <p className="fs-poppins">Sell</p>
            </div>

          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>
          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>
          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>

               <div className="pup-up">
                <p className="fs-poppins">Sell</p>
            </div>

          </div>
          <div className="product-list grid">
            <img src="image/p-3.jpg" alt="" />
            <p className="fs-montserrat bold-600">Beats</p>
            <div className="shop-btn flex">
              <button className="bg-red text-white fs-montserrat">
                Add To Cart
              </button>
              <p className="fs-montserrat bold-700">$ 995.00</p>
            </div>
          </div>
        </section>

        <div className="next-page fs-poppins flex ">
            <span className="bg-red text-white active bold-800">1</span>
            <span className="bold-800 text-black">2</span>
            <span><i className="uil text-red uil-angle-double-right"></i></span>
        </div>
      </div>
    
      <section>
        <div className="sidebar-search text-black bg-gray flex">
          <input
            type="text"
            placeholder="Search Here"
            className="fs-montserrat bg-gray"
          />
          <div>
            <i className="uil bg-red text-white uil-search"></i>
          </div>
        </div>

        <aside className="sidebar-category">
          <div className="category-list flex">
            <h3 className=" fs-poppins bold-700 fs-200">Product Categories</h3>
            <i id="arrow" className="uil uil-angle-right" data-category="false"></i>
          </div>

          <div className="shop-category-list">
            <ul id="side-nav" className="sidebar-nav grid" data-category="false">
              <li>
                <a className="fs-montserrat text-black bold-500" href="#"
                  >Earphone</a
                >
              </li>
              <li>
                <a className="fs-montserrat text-black bold-500" href="#"
                  >Gadgets</a
                >
              </li>
              <li>
                <a className="fs-montserrat text-black bold-500" href="#">Gaming</a>
              </li>
              <li>
                <a className="fs-montserrat text-black bold-500" href="#"
                  >Headphone</a
                >
              </li>
              <li>
                <a className="fs-montserrat text-black bold-500" href="#">Laptop</a>
              </li>
              <li>
                <a className="fs-montserrat text-black bold-500" href="#"
                  >Speaker</a
                >
              </li>
              <li>
                <a className="fs-montserrat text-black bold-500" href="#"
                  >Uncategorized</a
                >
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
    </>


  )}
  export default Shop;