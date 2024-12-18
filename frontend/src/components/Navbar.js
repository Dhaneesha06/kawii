import React from 'react'
import './Navbar.css'
import kawaiilogo from '../images/kawaiilogo.avif'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
         <section>
        <div class="row1">
            <div class="search">
                <ul>
                    <li class="icon"><i class='bx bx-search'></i></li>
                    <li class="text">Search our store</li>
                </ul>
            </div>
            <div class="logo">
                <img src={kawaiilogo}/>
            </div>
            <div class="login">
                <ul>
                    <li class="currency">India (INR ₹)</li>
                    <li class="user"><i class='bx bx-user' ></i></li>
                    <li class="bag"><i class='bx bxs-shopping-bags'></i></li>
                </ul>
            </div>
        </div>
    </section>
    <section>
        <div class="shoppy">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Popular'>Popular!</Link></li>  
                <li><Link to='/Shopnow'>Shop Now!</Link></li>   
                <li>On Sale Today!</li>  
                <li>Gift Card 💌</li>  
                <li>Shoppu Points</li>   
                <li>Contact us</li>
            </ul>
        </div>
    </section>  
    <section>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <p>Extra Savings!code:'YAYPINK'🐰</p>
              </div>
              <div class="carousel-item">
                <p>Free Shipping to USA | UK | AU | EU +</p>
              </div>
            </div>
          </div>
    </section>
    </div>
  )
}

export default Navbar