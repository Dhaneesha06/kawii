import React from 'react'
import './Footer.css'
import kawaiititlelogo from '../images/kawaiititlelogo.avif'
import amex from '../images/amex.jpg'
import discover from '../images/discover.jpg'
import applepay from '../images/applepay.jpg'
import gpay from '../images/gpay.jpg'
import maestro1 from '../images/maestro1.jpg'
import maestrocard from '../images/maestrocard.jpg'
import shoppay from '../images/shoppay.jpg'
import unionpay from '../images/unionpay.jpg'
import visa from '../images/visa.jpg'
import paypal from '../images/paypal.jpg'

const Footer = () => {
  return (
    <div>
         <section>
        <div class="row15">
          <h5>Subscribe and Be the First to Know!</h5>
          <p>Subscribe to our Newsletter and be the first to know about the latest news, fun blogs, sales and discounts!</p>
          <div class="form-floating ms-5 me-5 mb-3">
            
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Enter email here - then hit subscribe</label>

        </div>
      </div>
    </section>
  
    <section>
      
        <div class="row16">
        
          <div class="footer1">
            <h6>Shop Collections</h6>
           
              <li>Home Decor</li>
              <li>Kawaii Fashion</li>
              <li>Accessories</li>
              <li> Stationery & School Supplies</li>
              <li>Soft Toys & Plushies</li>
              <li>Mystery Stationery Lucky Bag</li>
              <li>Gift Card 💜</li>
           
          </div>
          <div class="footer2">
             <h6>Useful links</h6>
            
              <li>About Us</li>
              <li>Reviews ⭐️</li>
              <li>F.A.Q</li>
              <li>Sizing Chart</li>
              <li>Shipping & Delivery</li>
              <li>Kawaii News Blog</li>
              <li>Track Your Order</li>
           
          </div>
          <div class="footer3">
            <h6>Contact us</h6>
            <p>Have questions or need help with an order.<br/>
               Please contact us using our contact form and <br/>
               a member of the team will be very happy to help.</p>
            <u>CONTACT US</u>

          </div>
          <div class="footer4">
            <p>Join over 100K on Instagram and Follow Us
               @thekawaiishoppu</p>
           
            <li><i class='bx bxl-facebook-square'></i></li>
            <li><i class='bx bxl-instagram' ></i></li>
            <li><i class='bx bxl-tiktok'></i></li>
            <li><i class='bx bxl-pinterest' ></i></li>
            <li><img src={kawaiititlelogo}/></li><br/>
            
            <button class="ps-3 pe-3 pt-2 pb-2 mt-3">♡ Follow on Shop</button>
          </div>
        </div>
    </section> 
    <section>
      <div class="row17">
        <div class="end1">
          <p>Shipping Policy | Refund Policy | Terms of Service | Privacy Policy</p>
          <p>Copyright © 2024 The Kawaii Shoppu.</p>
        </div>
        <div class="end2">
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              India (INR ₹)
            </a>
          
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" href="#">Australia (AUD $)</a></li>
              <li><a class="dropdown-item" href="#">Belgium (EUR €)</a></li>
              <li><a class="dropdown-item" href="#">Canada (CAD $)</a></li>
            </ul>
            <ul class="dhanee mt-3">
              <li><img src={amex}/></li>
              <li><img src={gpay}/></li>
              <li><img src={discover}/></li>
              <li><img src={applepay}/></li>
              <li><img src={maestro1}/></li>
              <li><img src={maestrocard}/></li>
              <li><img src={paypal}/></li>
              <li><img src={shoppay}/></li>
              <li><img src={unionpay}/></li>
              <li><img src={visa}/></li>
            </ul>
          </div>
        </div>
    </div>
    </section>
    </div>
  )
}

export default Footer