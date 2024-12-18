import React from 'react'
import './Shopnow.css'
import kawaiiimage1 from '../images/kawaiiimage1.avif'
import kawaiiimage2 from '../images/kawaiiimage2.webp'
import kawaiiimage3 from '../images/kawaiiimage3.webp'
import kawaiiimage4 from '../images/kawaiiimage4.avif'
import softtoys1 from '../images/softtoys1.avif'
import softtoys2 from '../images/softtoys2.jpg'
import softtoys3 from '../images/softtoys3.avif'
import softtoys4 from '../images/softtoys4.avif'

const Shopnow = () => {
  return (
    <div>
         
              <div class="container">
                <div class="row1">
                    <p>Home - Trending this week</p>
                </div>
                </div>
                <div class="container">
                <div class="row2">
                    <h4>TRENDING THIS WEEK</h4>
                    <p>Explore the latest trends in the world of Kawaii and shop this weeks bestsellers! ✨</p>
                </div>
                </div>
                <div class="container">
                  <div class="row4">
                   <p>531 Products</p>
                   </div>
                </div>
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
                    <div class="container">
                            <div class="row12">
                              <div class="col-4-lg">
                                <img src={softtoys1} class="rounded"/>
                                <p>Kawaii Capybara Turtle Shell Backpack Soft Toy Plushie</p>
                                <p>From Rs. 2,600.00</p>
                              </div>
                              <div class="col-4-lg">
                                <img src={softtoys2} class="rounded"  width="300px" height="300px"/>
                                <p>Pastel Flower Daisy Plush Chair Cushion Pillow</p>
                                <p>From Rs. 4,800.00</p>
                                {/* <h6><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star'   ></i><i class='bx bxs-star' ></i><i class='bx bxs-star'   ></i> 6 reviews</h6>             */}
                    
                              </div>
                              <div class="col-4-lg">
                                <img src={softtoys3} class="rounded"/>
                                <p>50/130cm Bed Cuddle Kitty Cat with Plushie</p>
                                <p>From Rs. 2,800.00</p>
                                {/* <h6><i class='bx bxs-star' ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star' ></i><i class='bx bxs-star'  ></i><i class='bx bxs-star'  ></i> 5 reviews</h6>             */}
                    
                              </div>
                              <div class="col-4-lg">
                                <img src={softtoys4} class="rounded"/>
                                <p>18/25cm Strawberry / Carrot Bunny Zipper Surprise Plushie</p>
                                <p>From Rs. 1,600.00</p>
                              </div>
                            </div>
                          </div>
    </div>
  )
}

export default Shopnow