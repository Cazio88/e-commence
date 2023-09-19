
import React, { useState } from 'react';
import "../css/product.css"

const Products = () => {
  
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    if (likeCount > 0) {
      setLikeCount(likeCount - 1);
    }
  };
  return (
    <>
    <section className="single-product grid">
      <div>
        <img src="image/product-img.jpg" alt="" />
      </div>
      <div className="product-info grid">
        <h1 className="fs-poppins fs-400 blod-900">Beats</h1>
        <div className="star-icon flex">
          <div>
            <i className="uil text-red uil-star"></i>
            <i className="uil text-red uil-star"></i>
            <i className="uil text-red uil-star"></i>
            <i className="uil text-red uil-star"></i>
            <i className="uil uil-star"></i>
          </div>
          <div>
            <p className="fs-montserrat fs-100">(1 customer review)</p>
          </div>
        </div>

        <div className="price">
          <p className="bold-700 fs-poppins fs-300">$ 995.00</p>
        </div>

        <div>
          <p className="fs-montserrat lineheight">
            There are many variations passages of Lorem Ipsum available, but the
            majority have suffered alteration words some form by injected or
            randomized which don’t even slightly believable. If you are going to
            use a passage of Lorem Ipsum, you need to be sure there isn’t
            anything
          </p>
        </div>

        <div className="product-add-cart flex">
          <input type="number" min="0" max="10" className="bg-gray fs-poppins" />
          <button
            className="product-btn large-btn bg-red text-white fs-poppins fs-50"
          >
            Add to cart
          </button>
        </div>

        <div>
          <p className="fs-montserrat text-red">
            <span className="text-black">Category: </span>Headphone
          </p>
        </div>
      </div>
    </section>


    <section className="product-description grid">
      <div className="product-taps flex">
        <a id="dis-tab" className="fs-poppins fs-200 text-black bold-700 active-tab"
          >Description</a
        >
        <a
          id="rev-tab"
          className="fs-poppins fs-200 text-black bold-700 tabs-light-text"
          >Reviews(1)</a
        >
      </div>

      <div className="description grid" data-tab="false">
        <h3 className="text-black fs-poppins fs-300">Description</h3>
        <p className="fs-montserrat lineheight">
          There are many variations passages of Lorem Ipsum available, but the
          majority have suffered alteration words some form by injectedor
          randomized which don’t even slightly believable. If you are going to
          use a passage of Lorem Ipsum, you need to be sure there isn’t anything
          embarrassing hidden in the middle of text. All the Lorem Ipsum
          generators on the Internet tend to repeat predefined chunks as
          necessary, making this the first true generator on the Internet. It
          uses a dictionary of over 200 Latin words, combined with a handful of
          model sentence structures, to generate Lorem Ipsum which looks
          reasonable. The generated Lorem Ipsum is therefore always free from
          repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>

      <article className="reviews-container" data-tab="false">
        <div className="reviews">
          <p className="text-black fs-poppins fs-200 bold-700">
            1 review for Rockey Mountain
          </p>
        </div>
        <div id="post-reviews">
          <div
            id="display-reviews"
            className="display-reviews bg-very-light-gray flex"
          >
            <div>
              <i className="uil text-black uil-user-circle"></i>
            </div>
            <div>
              <div className="connent-box">
                <i className="uil text-red uil-star"></i>
                <i className="uil text-red uil-star"></i>
                <i className="uil text-red uil-star"></i>
                <i className="uil text-red uil-star"></i>
                <i className="uil uil-star"></i>
                <p className="fs-poppins fs-200">
                  <span className="bold-700">Paul </span>- October 7, 2019
                </p>
                <p className="fs-poppins fs-200">Hello</p>
              </div>
              <div className="flex likes-icon">
              <i className="uil bg-gray uil-thumbs-up" onClick={handleLike}></i>
              <i className="uil bg-gray uil-thumbs-down" onClick={handleDislike}></i>
               <span id="count-like" className="bg-white fs-poppins">
              {likeCount}
              </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="reviews">
            <p className="text-black fs-poppins fs-200">Add a review</p>
          </div>

          <div className="give-reviews flex">
            <div>
              <p className="text-black fs-poppins fs-200 bold-700">Your rating *</p>
            </div>
            <div>
              <i className="uil uil-star"></i>
              <i className="uil uil-star"></i>
              <i className="uil uil-star"></i>
              <i className="uil uil-star"></i>
              <i className="uil uil-star"></i>
            </div>
          </div>
          <div className="message grid">
            <p className="fs-montserrat">Your review</p>
            <textarea
              type="text"
              rows="10"
              className="bg-very-light-gray fs-montserrat"
            ></textarea>
          </div>
        </div>
        <div className="review-btn flex">
          <button
            id="add-connent"
            className="large-btn bg-red text-white fs-poppins fs-50"
          >
            Submit
          </button>
        </div>
      </article>
    </section>
    <section className="best-product container">
      <h2 className="letter-spacing bold-800 fs-poppins">Related products</h2>
    </section>

    <section className="best-Seller related-product">
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
        <img src="image/p-4.jpg" alt="" />
        <p className="fs-poppins bold-500">Game Console Controller Cable</p>
        <p className="fs-poppins bold-500">$995.00</p>

     
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
    </>


  )}
  export default Products;