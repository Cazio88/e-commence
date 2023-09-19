import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>

<section className="footer grid">
        <div className="footer-logo grid">
          <img src="..." alt="" />
          <p className="fs-montserrat fs-200">
            There are many variations passages of Lorem Ipsum available, but the
            majority have
          </p>
          <div className="social-media flex">
            <i className="uil uil-facebook-f"></i>
            <i className="uil uil-instagram"></i>
            <i className="uil uil-linkedin"></i>
            <i className="uil uil-twitter"></i>
          </div>
        </div>

        <div className="footer-menu grid">
          <h3 className="fs-poppins fs-200 bold-800">Quick Links</h3>
          <ul>
            <li>
              <Link className="fs-montserrat text-black fs-200" to ="/HomePage">Home</Link>
            </li>
            <li>
              <Link className="fs-montserrat text-black fs-200" to="/About">About</Link>
            </li>
            <li>
              <Link className="fs-montserrat text-black fs-200" to = " /Shop">Shop</Link>
            </li>
            <li>
              <Link className="fs-montserrat text-black fs-200" to = " /Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="contact grid">
          <h3 className="fs-poppins fs-200 bold-800">Contact</h3>
          <p className="fs-montserrat">
            +233 (0) 554 677 399 Mchathy hill
            CazioStydios, CZ 223332
          </p>
        </div>

        <div className="emails grid">
          <h3 className="fs-poppins fs-200 bold-800">Subscribe To Our Email</h3>
          <p className="updates fs-poppins fs-300 bold-800">
            For Latest News & Updates
          </p>
          <div className="inputField flex bg-gray">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="fs-montserrat bg-gray"
            />
            <button className="bg-red text-white fs-poppins fs-50">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="copyRight">
        <p className="c-font fs-montserrat fs-200">
          © 2023 Cazio_studios. All rights reserved.
        </p>
        <p className="fs-montserrat fs-100 text-align p-top">
          Privacy Policy . Term Condition
        </p>
      </section>
      </div>
  )
}


  export default Footer;