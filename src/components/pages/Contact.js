import React from 'react'
import "../css/contact.css"

const Contact = () => {
  return (
    <>
      <section className="shop-feature bg-gray grid">
      <div>
        <p className="fs-montserrat text-black">
          Home <span aria-hidden="true" className="margin"></span> Contact Us
        </p>
      </div>
      <h2 className="fs-poppins fs-300 bold-700">Contact Us</h2>
    </section>


    <section className="contact-us grid">
      <div className="contact-info">
        <div>
          <h1 className="fs-poppins text-red fs-200">Contact Us</h1>
          <h3 className="fs-poppins text-black fs-400">Get In ouch</h3>
          <p className="fs-montserrat fs-100">
            When, while lovely valley teems with vapour around meand meridian
            the upper impenetrable .
          </p>
        </div>
        <form action="#" className="contact-form grid">
          <div className="grid">
            <input
              className="bg-gray text-black fs-poppins"
              type="text"
              placeholder="Your E-mail"
            />
          </div>
          <div className="grid">
            <input
              className="bg-gray text-black fs-poppins"
              type="text"
              placeholder="Phone number"
            />
          </div>
          <div>
            <textarea
              className="bg-gray text-black fs-poppins"
              rows="10"
              placeholder="Your Message Here"
            >
            </textarea>
          </div>

          <div className="contact-btn">
            <button className="large-btn bg-red text-white fs-poppins fs-50">
              Submit
            </button>
          </div>
        </form>
      </div>

     
      <div>
        <div className="map">
          <h4 className="fs-poppins fs-200 text-red">
            Google Maps API Key Is Messing
          </h4>
          <p className="fs-montserrat fs-100">
            In order to use google maps on your website, you have to create an
            api key and insert it in customizer "Google Maps API Key" field.
          </p>
        </div>
      </div>
    </section>

  

    <section className="suport-container grid">
      <div className="support-info grid">
        <div className="suport-img grid">
          <img src="image/sup-1.svg" alt="" />
        </div>
        <div>
          <p className="fs-100">
            <span className="fs-200 fs-poppins bold-700">Email:</span
            > kophy.fm@gmail.com
          </p>
          <p className="fs-poppins fs-100">kophy.fm@gmail.com</p>
        </div>
      </div>
      <div className="support-info grid">
        <div className="suport-img grid">
          <img src="image/sup-2.svg" alt="" />
        </div>
        <div>
          <p className="fs-100">
            <span className="fs-200 fs-poppins bold-700">Phone:</span
            > +233 (0) 554 677 399
          </p>
          <p className="fs-poppins fs-100">+233 (0) 554 677 399</p>
        </div>
      </div>
      <div className="support-info grid">
        <div className="suport-img grid">
          <img src="image/sup-3.svg" alt="" />
        </div>
        <div>
          <p className="fs-100">
            <span className="fs-200 fs-poppins bold-700">Address:</span
            > Cazio_Studios Weija
          </p>
          <p className="fs-poppins fs-100">Accra Ghana</p>
        </div>
      </div>
    </section>
    </>


  )}
  export default Contact;