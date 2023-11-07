import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='bottom-wrap'>
    <div className='container grid grid-four-column' id='bottom-wrap'>
      <div className='bottom-main'>
    <div className='btm-1'>
     <h3 style={{color:"white"}}>Categories</h3>
     <h3>Women collection</h3>
     <h3>Men collection</h3>
     <h3>Child collection</h3>
     <h3>Leather shoesCategories</h3>
      
    </div>
    <div className='btm-2'>
     <h3 style={{color:"white"}}>Company</h3>
     <h3>About company</h3>
     <h3>Our services</h3>
     <h3>Store locator</h3>
     <h3>Contact us</h3>
      
    </div>
    <div className='btm-3'>
     <h3 style={{color:"white"}}>Useful links</h3>
     <h3>On sale product</h3>
     <h3>Our new product</h3>
     <h3>Order tracking</h3>
     <h3>Get the voucher</h3>
      
    </div>
    <div className='btm-4'>
     <h3 style={{color:"white"}}>Customer</h3>
     <h3>Help and support</h3>
     <h3>Shipping and delivery</h3>
     <h3>Payment method</h3>
     <h3>Terms and conditions</h3>
      
    </div>
    <div className='btm-5'>
     <h3 style={{color:"white"}}>Subscribe to newsletter</h3>
     <h3>Enter your email address for receiving</h3>
     <h3>valuable newsletters.</h3>
     <input></input><button className='footer-btn'><i class="fa-regular fa-envelope"></i></button>
     
      
    </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer