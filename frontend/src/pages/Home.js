import React from 'react'
import './Home.css'
import hoodieblanket from '../images/hoodieblanket.webp'
import cutespace from '../images/cutespace.webp'
import angycat from '../images/angycat.webp'
import lamplight from '../images/lamplight.webp'
import shopgifts from '../images/shopgifts.webp'
import wintercollections from '../images/wintercollections.webp'
import deskaccessories from '../images/deskaccessories.webp'
import kawaiiimage1 from '../images/kawaiiimage1.avif'
import kawaiiimage2 from '../images/kawaiiimage2.webp'
import kawaiiimage3 from '../images/kawaiiimage3.webp'
import kawaiiimage4 from '../images/kawaiiimage4.avif'
import giftcard from '../images/giftcard.webp'
import softtoys1 from '../images/softtoys1.avif'
import softtoys2 from '../images/softtoys2.jpg'
import softtoys3 from '../images/softtoys3.avif'
import softtoys4 from '../images/softtoys4.avif'
import Homes from '../products/Homes'


const Home = () => {
  return (
    <div>
         <section>
      <div class="row3">
        <div class="buttons">
        <button class="a h1">SHOP</button>  <button class="b h1">CUTE</button><br/>
        <button class="c h1">LIVE</button>  <button class="d h1">CUTE</button><br/><br/>
        <button class="e">SHOP TRENDING</button>     <button class="f">NEW IN</button>
      </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row5">
            <h4>TRENDING THIS WEEK</h4>
            <u>Shop Most Popular</u>
            </div>
        </div>
    </section>
    <section>
       <div class="container">
        <div class="row">
          {Homes.map((item)=>(
               <div class="col-lg-4">
               <div class="card" key={item.id}>
                 <img src={item.img} class="card-img-top rounded" alt="..."/>
                 <p> {item.des}</p>
                 <p>{item.price}</p>
                 <h6><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'  ></i> 5 reviews</h6>            
              
             </div>
             </div>
          ))}
         
          {/* <div class="col-4-lg">
         
            <div class="card" >
            
             <img src={cutespace} class="card-img-top rounded"  alt="..."/>
              <p>Machine Crane Game</p>
              <p>From Rs. 5,400.00</p>
              <h6><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i> 6 reviews</h6> 
                
            </div>
           
          </div>
          <div class="col-4-lg">
            <div class="card"  >
              <img src={angycat} class="card-img-top rounded" alt="..." />
              <p>Angy Cat Kawaii Cozy Sweater</p>
              <p>From Rs. 2,800.00</p>
              <h6><i class='bx bxs-star'   ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i> 4 reviews</h6>            

              
            </div>
          </div>
          <div class="col-4-lg">
            <div class="card">
              <img src={lamplight} class="card-img-top rounded" alt="..."/>
              <p>My Flame Friend Cozy Lamp</p>
              <p>From Rs. 3,400.00</p>
              <h6><i class='bx bxs-star' ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'  ></i> 2 reviews</h6>            
            </div>
          </div>
        </div>
       </div>
    </section>
    <section>
      <div class="container">
        <div class="row7">
              <div class="col">
                <img src={shopgifts} class="rounded" />
                <div class="col1">
                <h5>SHOP GIFTS</h5>
                <p>Kawaii Gift for Kawaii Cuties!</p>
                <button>SHOP GIFTS</button>
                </div>
              </div>
              <div class="col">
                <img src={wintercollections} class="rounded" />
                <div class="col2">
                <h5>WINTER COLLECTIONS</h5>
                <p>Shop pjs,Bedding,Lights and More!</p>
                <button>SHOP COZY</button>
                </div>
              </div>
              <div class="col">
                <img src={deskaccessories} class="rounded" />
                <div class="col3">
                <h5>DESK ACCESSORIES</h5>
                <p>Study in Kawaii Style..</p>
                <button>SHOP DESK</button>
                </div>
              </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row8">
        <h4>NEW IN</h4>
        <u>Shop New Collection</u>
      </div>
    </section>
    <section>
      <div class="container">
      <div class="row9">
        <div class="col-4-lg">
          
          <img src={kawaiiimage1} class="rounded"/>
          <p>Kawaii Cute Capybara Stationery Pencil Case</p>
          <h6>From Rs. 1,500.00</h6>
        </div>
        <div class="col-4-lg">
          
          <img src={kawaiiimage2} class="rounded"/>
          <p>Cozy Winter Fluffy Cosplay Snuddie House Robe</p>
          <h6>Rs. 5,300.00</h6>
        </div>
        <div class="col-4-lg">
          
          <img src={kawaiiimage3} class="rounded" />
          <p>Cute Cat Bedside Night Light</p>
          <h6>Rs. 2,800.00</h6>
        </div>
        <div class="col-4-lg">
          
          <img src={kawaiiimage4} class="rounded"/>
          <p>Super Soft Giant Leaf Blanket for Bed / Sofa</p>
          <h6>From Rs. 2,300.00</h6>
        </div>
      </div>
    </div>
    </section>
    <section>
      <div class="container">
        <div class="row10">
          <div class="giftcard1">
            <img src={giftcard} class="rounded"/>
          </div>  
          <div class="giftcard2 mt-5">
            <h3>The Kawaii Shoppu Gift Card</h3>
            <h2>From Rs. 1,210.03</h2>
            <p>Last minute shopping? Give them the gift of choice! Sent straight to their inbox on a date of your choice! (Listed in GBP, available to spend in all currencies)</p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row11">
        <h4>Soft Toys and Plushies</h4>
        <u>Shop Adorable Plushies</u>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row12">
          <div class="col-4-lg">
            <img src={softtoys1} class="rounded"/>
            <p>Kawaii Capybara Turtle Shell Backpack Soft Toy Plushie</p>
            <p>From Rs. 2,600.00</p>
          </div>
          <div class="col-4-lg">
            <img src={softtoys2} class="rounded" width="300px" height="300px"  />
            <p>Pastel Flower Daisy Plush Chair Cushion Pillow</p>
            <p>From Rs. 4,800.00</p>
            {/* <h6><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star' ></i><i class='bx bxs-star'   ></i> 6 reviews</h6>             */}

          {/* </div>
          <div class="col-4-lg">
            <img src={softtoys3} class="rounded"/>
            <p>50/130cm Bed Cuddle Kitty Cat with Plushie</p>
            <p>From Rs. 2,800.00</p>
            <h6><i class='bx bxs-star' ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star' ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i> 5 reviews</h6>            

          </div>
          <div class="col-4-lg">
            <img src={softtoys4} class="rounded"/>
            <p>18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
            <p>From Rs. 1,600.00</p>
          </div>  */}
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row13">
          <h3>Frequently asked questions...</h3>
       
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Do you ship to my country?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <p>Absolutely! To check if we ship to your location:</p>
                <ul>
                  <li>Browse our collections and Add items to your cart then proceed to checkout.</li>
                  <li>Look for the 'Country' dropdown menu.</li>
                  <li>If you find your country listed there, great news – we ship to you!</li>
                  <li>Select your country and continue with your purchase.</li>
                </ul>
                Check our shipping policy HERE
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                100% Free Shipping on every order!
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <p>Good news! We offer free shipping on all orders, to most countries in the world. Just shop, order, and relax — we've got the shipping fees covered for you.</p>
                <i class="h6">*Please note we try our best to cover customs fees where possible, but we are not responsible for any possible customs fees charged by your countries' government.</i><br/><br/>
                <p>Check our shipping policy HERE</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                How long does shipping take?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <p>The timing for shipping can vary based on your specific location. Usually shipping times vary from 10 - 28 days depending on where you live. To get an accurate estimate:</p>
                <ul>
                  <li>Simply enter your shipping details at checkout. This will allow us to provide you with the best estimate for when you can expect your order.</li>
                </ul>
                  <i class="h6">Remember, shipping durations are calculated in business days (Monday-Friday), not including public holidays.</i><br/><br/>
                  Ready to find out when your items will arrive? Click HERE to head to your cart then proceed to checkout.<br/><br/>
                  Check our shipping policy HERE
               
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                Do I have to pay customs duty taxes when my order arrives?
              </button>
            </h2>
            <div id="flush-collapsefour" class="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
               <p>For our valued customers across the globe, here's a concise guide on what to expect in terms of duties and taxes when your order arrives:</p>
               <ul>
                <li>For customers in the USA, UK, Canada, and Australia:No Customs fees, allowing for a smooth delivery experience.</li>
                <li>Customers from other countries:While it's not common, your order may be subject to local tariffs, duties, and value-added tax (VAT) upon arrival in your country. These charges are not covered in our pricing. We recommend checking with your local customs office for detailed information to avoid any unexpected charges.</li>
               </ul>
               <p>Thank you for choosing to shop with us. We strive to make your international ordering process as easy and transparent as possible.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingfive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefive" aria-expanded="false" aria-controls="flush-collapsefive">
                Will I be able to track my order?
              </button>
            </h2>
            <div id="flush-collapsefive" class="accordion-collapse collapse" aria-labelledby="flush-headingfive" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <p>Yes, every order comes with a tracking code. After you complete your purchase, expect to receive this code via email within our processing period of 3 to 7 working days.</p>
                <p>Stay informed from the moment your order leaves our warehouse to the moment it arrives at your door. </p>
                <p>Ready to keep an eye on your next favourite buy? Head to checkout, and let's get your order on the journey to you.</p>
                <h6>Track your order HERE</h6>
              </div>
            </div>
          </div>
        
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingsix">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsesix" aria-expanded="false" aria-controls="flush-collapsesix">
                Which payment options do you accept?
              </button>
            </h2>
            <div id="flush-collapsesix" class="accordion-collapse collapse" aria-labelledby="flush-headingsix" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                <p>We've got a variety of payment options to make your checkout process as convenient as possible:</p>
                <ul>
                  <li>Major credit and debit cards: Visa, Mastercard, and more.</li>
                  <li>Digital wallets: PayPal, Apple Pay, Google Pay.</li>
                  <li>Shop Pay for quick and secure checkout.</li>
                  <li>Klarna Instalments, for spreading out your payments. (selected countries only)</li>
                </ul>
                  <p>And that's just the start — we accept several other payment methods to cater to your needs.</p>
                  <p>Ready to snag your favorites? Click here to head to your cart then proceed to checkout. and choose the payment method that works best for you.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </section>

    </div>
  )
}

export default Home


