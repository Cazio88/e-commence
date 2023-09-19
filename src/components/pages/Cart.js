import React from 'react'
import "../css/cart.css"

const Cart = () => {
  return (
    <>
    <section className="shop-feature bg-gray grid">
      <div>
        <p className="fs-montserrat text-black">
          Home <span aria-hidden="true" className="margin"></span> Cart
        </p>
      </div>
      <h2 className="fs-poppins fs-300 bold-700">Cart</h2>
    </section>


    <section className="table">
      <table>
        <thead className="thead fs-poppins text-black bold-700 bg-very-light-gray">
          <tr>
            <td></td>
            <td></td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><i className="uil uil-times"></i></td>
            <td><i className="uil uil-user-circle"></i></td>
            <td>Beats</td>
            <td>$995.00</td>
            <td><input type="number" min="0" max="10" /></td>
            <td>$4975.00</td>
          </tr>
          <tr>
            <td><i className="uil uil-times"></i></td>
            <td><i className="uil uil-user-circle"></i></td>
            <td>Beats</td>
            <td>$995.00</td>
            <td><input type="number" min="0" max="10" /></td>
            <td>$4975.00</td>
          </tr>
          <tr>
            <td><i className="uil uil-times"></i></td>
            <td><i className="uil uil-user-circle"></i></td>
            <td>Beats</td>
            <td>$995.00</td>
            <td><input type="number" min="0" max="10" /></td>
            <td>$4975.00</td>
          </tr>
        </tbody>
      </table>

      <div className="copen-box flex">
        <div>
            <input className="copen-input fs-poppins text-black" type="text" />
            <button className="cupen-btn fs-poppins bold-700 text-black">Apply coupen</button>
        </div>
        <div>
            <button className="cupen-btn fs-poppins bold-700 text-black">Update cart</button>
        </div>
    </div>
      
    </section>

    <section className="check-out grid">

        <div>

        </div>
        <div>
        <h3 className="fs-poppins fs-300 text-black bold-700">Cart totals</h3>

        <table>
            <thead className="thead fs-poppins text-black bold-700">
              <tr>
                <td className="bg-very-light-gray">Subtotal</td>
                <td>$4,975.00</td>
              </tr>
            </thead>
            <thead className="thead fs-poppins text-black bold-700">
              <tr>
                <td className="bg-very-light-gray">Total</td>
                <td className="bold-700">$4,975.00</td>
              </tr>
            </thead>
            </table>
            <div className="grid">
                <button className="fs-poppins text-black bold-800 fs-300 bg-gray">Proceed to checkout</button>
            </div>
        </div>

    </section>
    </>

  )}
  export default Cart;