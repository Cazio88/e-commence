import React from 'react'
import "../css/index.css"

const HomePage = () => {

  return (
    <>
    <main className="hero-section">
      <div>
        <h1 className="fs-200 fs-poppins">
          Beats Solo
          <span className="block lineheight fs-300 bold-900 big-wireless fs-poppins"
            >Wireless</span
          ><span
            className="text-white fs-900 uppercase lineheight-2 bold-bolder fs-poppins"
            >HeadPhone</span
          >
        </h1>
        <img src="image/image1.png" alt="" />
      </div>
      <div className="hero-inner flex">
        <div>
          <button className="large-btn bg-red text-white fs-poppins fs-50">
            Shop By Category
          </button>
        </div>
        <div className="hero-info">
          <h4 className="fs-montserrat">Description</h4>
          <p className="fs-montserrat">
            There are many variations passages of Lorem Ipsum available, but the
            majority have suffered alteration
          </p>
        </div>
      </div>
    </main>


    <section className="product-section">
      <div className="category bg-black grid">
        <div>
          <h3 className="text-white fs-50 fs-montserrat bold">
            Enjoy <span className="block fs-300 fs-poppins bold">With</span
            ><span
              className="earphone uppercase fs-400 fs-montserrat bold-900 lineheight"
              >Earphone</span
            >
          </h3>
          <button className="prdduct-btn large-btn text-white bg-red fs-montserrat">
            Browse
          </button>
        </div>
        <div className="product-img1">
          <img src="image/h.png" alt="" />
        </div>
      </div>
      <div className="category bg-yellow grid">
        <div>
          <h3 className="text-white fs-50 fs-montserrat bold">
            New <span className="block fs-300 fs-poppins bold">Wear</span
            ><span
              className="earphone uppercase fs-400 fs-montserrat bold-900 lineheight"
              >Gadget</span
            >
          </h3>
          <button
            className="prdduct-btn large-btn text-yellow bg-white fs-montserrat"
          >
            Browse
          </button>
        </div>
        <div className="product-img2">
          <img src="image/w.png" alt="" />
        </div>
      </div>
      <div className="category bg-red grid">
        <div>
          <h3 className="text-white fs-50 fs-montserrat bold">
            Trend <span className="block fs-300 fs-poppins bold">Devices</span
            ><span
              className="earphone uppercase fs-400 fs-poppins bold-900 lineheight"
              >Laptop</span
            >
          </h3>
          <button className="prdduct-btn large-btn text-red bg-white fs-poppins">
            Browse
          </button>
        </div>
        <div className="product-img3">
          <img src="image/Laptop.png" alt="" />
        </div>
      </div>
      <div className="category bg-gray grid">
        <div>
          <h3 className="text-black fs-50 fs-poppins bold">
            Best
            <span className="block fs-300 fs-poppins bold text-black">Gaming</span
            ><span
              className="earphone uppercase fs-400 fs-poppins bold-900 lineheight"
              >Console</span
            >
          </h3>
          <button className="prdduct-btn large-btn text-white bg-red fs-poppins">
            Browse
          </button>
        </div>
        <div className="product-img4">
          <img src="image/gam.png" alt="" />
        </div>
      </div>
      <div className="category bg-green grid">
        <div>
          <h3 className="text-white fs-50 fs-poppins bold">
            Play <span className="block fs-300 fs-poppins bold">Game</span
            ><span
              className="earphone uppercase fs-400 fs-poppins bold-900 lineheight"
              >Oculus</span
            >
          </h3>
          <button className="prdduct-btn large-btn text-green bg-white fs-poppins">
            Browse
          </button>
        </div>
        <div className="product-img5">
          <img src="image/man2.png" alt="" />
        </div>
      </div>
      <div className="category bg-blue grid">
        <div>
          <h3 className="text-white fs-50 fs-poppins bold">
            New <span className="block fs-300 fs-poppins bold">Amazon</span
            ><span
              className="earphone uppercase fs-400 fs-poppins bold-900 lineheight"
              >speaker</span
            >
          </h3>
          <button className="prdduct-btn large-btn text-blue bg-white fs-poppins">
            Browse
          </button>
        </div>
        <div className="product-img6">
          <img src="image/mus.png" alt="" />
        </div>
      </div>
    </section>


    <section className="service-section">
      <div className="service">
        <img src="image/free.svg" alt="" />
        <div className="service-info">
          <h3 className="fs-poppins fs-200">Free Shippng</h3>
          <p className="fs-montserrat fs-50">Free Shipping On All Order</p>
        </div>
      </div>
      <div className="service">
        <img src="image/sett.svg" alt="" />
        <div className="service-info">
          <h3 className="fs-poppins fs-200">Money Guarantee</h3>
          <p className="fs-montserrat fs-50">30 Day Money Back</p>
        </div>
      </div>
      <div className="service">
        <img src="image/supt.svg" alt="" />
        <div className="service-info">
          <h3 className="fs-poppins fs-200">Online Support 24/7</h3>
          <p className="fs-montserrat fs-50">Technical Support 24/7</p>
        </div>
      </div>
      <div className="service">
        <img src="image/pay.svg" alt="" />
        <div className="service-info">
          <h3 className="fs-poppins fs-200">Secure Payment</h3>
          <p className="fs-montserrat fs-50">All Cards Accepted</p>
        </div>
      </div>
    </section>

    <section className="feature-section bg-red">
      <div className="feature-one grid">
        <img src="image/p-1.png" alt="" />
        <p className="text-white uppercase">20% OFF</p>
        <p
          className="font-size lineheight fs-500 text-white fs-poppins bold-900 uppercase"
        >
          fine <span className="smile">smile</span>
        </p>
        <p className="text-white fs-poppins fs-50">15 Nov To & Dec</p>
      </div>
      <div className="feature-info">
        <h2 className="fs-200 text-white fs-poppins bold-500">Beats Solo Air</h2>
        <p className="fs-poppins fs-300 bold-800 text-white">Summer Sale</p>
        <p className="fs-montserrat text-white fs-50">
          Company that’s grown from 270 to 480 employees in the last 12 months.
        </p>
        <button className="prdduct-btn large-btn text-red bg-white fs-poppins">
          Shop
        </button>
      </div>
    </section>


    <section className="best-product container">
      <h2 className="letter-spacing bold-800 fs-poppins">Best Seller Products</h2>
      <p className="fs-montserrat fs-100">
        speakerThere are many variations passages
      </p>
    </section>


    <section className="best-Seller">
      <div className="product grid">
        <img src="image/p-2.jpg" alt="" />
        <p className="fs-poppins bold-500">White EliteBook Tablet 810</p>
        <p className="fs-poppins bold-500">$995.00</p>


        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
   
      </div>
      <div className="product grid">
        <img src="image/p-3.jpg" alt="" />
        <p className="fs-poppins bold-500">White EliteBook Tablet 810</p>
        <p className="fs-poppins bold-500">$995.00</p>

   
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
       
      </div>
      <div className="product grid">
	  
        <img src="image/p-4.jpg" alt="" /> <a href ="product.html" style={{color:"black"}}>
        <p className="fs-poppins bold-500">Game Console Controller Cable</p>
        <p className="fs-poppins bold-500">$995.00</p>
		</a>
	
     
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
       
      </div>
      <div className="product grid">
        <img src="image/p-5.jpg" alt="" />
        <p className="fs-poppins bold-500">Rocky Mountain</p>
        <p className="fs-poppins bold-500">$995.00</p>

  
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
       
      </div>
      <div className="product grid">
        <img src="image/p9.jpg" alt="" />
        <p className="fs-poppins bold-500">White EliteBook Tablet 810</p>
        <p className="fs-poppins bold-500">$995.00</p>

     
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
     
      </div>
      <div className="product grid">
        <img src="image/p-7.jpg" alt="" />
        <p className="fs-poppins bold-500">Wireless Audio System Multiroom 360</p>
        <p className="fs-poppins bold-500">$995.00</p>

      
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
     
      </div>
      <div className="product grid">
        <img src="image/p8.png" alt="" />
        <p className="fs-poppins bold-500">Wireless Audio System Multiroom 360</p>
        <p className="fs-poppins bold-500">$995.00</p>

   
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
    
      </div>
      <div className="product grid">
        <img src="image/p9.jpg" alt="" />
        <p className="fs-poppins bold-500">Smartwatch 2.0 LTE Wifi</p>
        <p className="fs-poppins bold-500">$995.00</p>

 
        <div className="product-details grid bg-red">
          <i className="text-white uil uil-shopping-cart-alt"></i>
          <i className="text-white uil uil-heart-alt"></i>
        </div>
    
      </div>
    </section>

  
    <section className="feature-section bg-green">
      <div className="feature-green feature-one grid">
        <img src="image/p12.png" alt="" />
        <p className="text-white uppercase">20% OFF</p>
        <p
          className="font-size lineheight fs-500 text-white fs-poppins bold-900 uppercase"
        >
          HAPPY <span className="smile">HOURSE</span>
        </p>
        <p className="text-white fs-poppins fs-50">15 Nov To & Dec</p>
      </div>
      <div className="feature-info">
        <h2 className="fs-200 text-white fs-poppins bold-500">Beats Solo Air</h2>
        <p className="fs-poppins fs-300 bold-800 text-white">Summer Sale</p>
        <p className="fs-montserrat text-white fs-50">
          Company that’s grown from 270 to 480 employees in the last 12 months.
        </p>
        <button className="prdduct-btn large-btn text-green bg-white fs-poppins">
          Shop
        </button>
      </div>
    </section>
   
    <section className="best-product container">
      <h2 className="letter-spacing bold-800 fs-poppins">Recent News</h2>
      <p className="fs-montserrat fs-100">There are many variations passages</p>
    </section>
   

    <section className="recent-news grid">
      <div className="news grid">
        <img src="image/news-1.png" alt="" />
        <div className="fs-montserrat fs-100 flex padding-inline">
          <p>Ocutober 5, 2022</p>
          <p>by Ecommercestore3/ Edit</p>
        </div>
        <h2 className="fs-poppins padding-inline fs-200 blod-600">
          How to choose perfect gadgets
        </h2>
        <p className="fs-montserrat padding-inline fs-100">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper s ...
        </p>
      </div>

      <div className="news grid">
        <img src="image/news-2.png" alt="" />
        <div className="fs-montserrat fs-100 flex padding-inline">
          <p>Ocutober 5, 2022</p>
          <p>by Ecommercestore3/ Edit</p>
        </div>
        <h2 className="fs-poppins padding-inline fs-200 blod-600">
          How to choose perfect gadgets
        </h2>
        <p className="fs-montserrat padding-inline fs-100">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper s ...
        </p>
      </div>

      <div className="news grid">
        <img src="image/news-1.png" alt="" />
        <div className="post-date fs-montserrat fs-100 flex padding-inline">
          <p>Ocutober 5, 2022</p>
          <p>by Ecommercestore3/ Edit</p>
        </div>
        <h2 className="fs-poppins padding-inline fs-200 blod-600">
          How to choose perfect gadgets
        </h2>
        <p className="fs-montserrat padding-inline fs-100">
          When, while the lovely valley teems with vapour around me, and the
          meridian sun strikes the upper s ...
        </p>
      </div>
      </section>
    
 
    </>
  )
}

export default HomePage;
