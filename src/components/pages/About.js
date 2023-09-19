import React from 'react'
import "../css/about.css"

const About = () => {
  return (
    <>
    <div>
       
   <section className="about-section grid">
       <div>
           <img src="image/about-us.png" alt="" />
       </div>
       <div className="about-info">
           <h3 className="fs-poppins fs-200 text-red">Welcome To Digital Ecommerce</h3>
           <h1 className="fs-poppins fs-500 text-black">Who We Are?</h1>
           <p className="fs-montserrat fs-100">When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray<br /><br />

            gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me .<br /><br />
            when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence .</p>
            <div className="about-btn">
                <button className="large-btn bg-red text-white fs-poppins fs-50">Shop By Category</button>
              </div>
       </div>
   </section>

   <section className="brands grid">
          <div>
         <img src="image/br-1.png" alt="" />
        </div>
          <div>
         <img src="image/br-2.png" alt="" />
        </div>
          <div>
         <img src="image/br-3.png" alt="" />
        </div>
          <div>
         <img src="image/br-4.png" alt="" />
        </div>
          <div>
         <img src="image/br-5.png" alt="" />
        </div>
        </section>
        </div>
    </>


  )}
  export default About;