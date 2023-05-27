import { useEffect, useState } from 'react'
import About from './assets/Components/About'
import Articles from './assets/Components/Articles'
import Brands from './assets/Components/Brands'
import Footer from './assets/Components/Footer'
import Hero from './assets/Components/Hero'
import Navbar from './assets/Components/Navbar'
import Product from './assets/Components/Product'
import Reviews from './assets/Components/Reviews'
import Services from './assets/Components/Services'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  useEffect(()=>{
    if('serviceWorker' in navigator){
      window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/sw.js')
        .then((registration)=>{
           console.log('SW registered: ' , registration);
        })
        .catch(registrationError =>{
          console.log('SW registration failed: ' , registrationError);
        })
      })

    }
  },[])


  return (
  <>
  <Navbar/>
  <Hero/>
  <div className="products">
        <div className="head">
            <span>Popular Products</span>
            <a href="#">See All Products</a>
        </div>
        <div className="product-grid">
        <Product id='child one' title = 'Two-sided Business Cards' subText='STARTING AT' price={(<>₦8,855 <span>per 100</span></>)} buttonText='Browse Two-sided Bu...' />
        <Product id='child two' title = 'A5 flyers (Single Sided)' subText='STARTING AT' price={(<>₦15,000 <span>per 100</span></>)} buttonText='Browse A5 flyers (S...' />
        <Product id='child three' title = {( <>Round Stickers (3.5" <br/> Diameter)</>)} subText='STARTING AT' price={(<>₦9,000 <span>per 100</span></>)} buttonText='Browse Round Sticke...' />
        <Product id='child four' title = 'Simple Mugs' subText='STARTING AT' price={(<> ₦2,750 <span>per 1</span></>)} buttonText='Browse Simple Mugs' />
        <Product id='child five' title = 'Postcards (A6)' subText='STARTING AT' price={(<> ₦12,903 <span>per 50</span></>)} buttonText='Browse Postcards (A...' />
        <Product id='child six' title = 'Roll Up Banners (Big Base)' subText='STARTING AT' price={(<> ₦32,000 <span>per 1</span></>)} buttonText='Browse Roll Up Bann...' />
        <Product id='child seven' title = 'A2 Posters' subText='STARTING AT' price={(<>₦41,400 <span>per 100</span></>)} buttonText='Browse A2 Posters' />
        <Product id='child eight' title = 'Trifold Brochures' subText='STARTING AT' price={(<> ₦27,600 <span>per 100</span></>)} buttonText='Browse Trifold Broc...' />
        <Product id='child nine' title = 'Landscape ID Cards' subText='STARTING AT' price={(<>₦1,800 <span>per 1</span></>)} buttonText='Browse Landscape ID...' />
        <Product id='child ten' title = 'Off White T-shirts' subText='STARTING AT' price={(<>₦3,499 <span>per 1</span></>)} buttonText='Browse Off White T-...' />
        <Product id='child eleven' title = 'A4 Branded Paper Bags' subText='STARTING AT' price={(<>₦60,950 <span>per 100</span></>)} buttonText='Browse A4 Branded P...' />
        <Product id='child twelve' title = 'A4 Courier Bags' subText='STARTING AT' price={(<>₦16,000 <span>per 100</span></>)} buttonText='Browse A4 Courier B...' />
      
        </div>
    </div>
    <div className="products">
        <div className="head">
            <span>Popular Categories</span>
            <a href="#">See All Categories</a>
        </div>
        <div className="product-grid">
        <Product id='child once' title = 'Greetings Card' subText='STARTING AT' price={(<>₦4,949 <span>per 75</span></>)} buttonText='Browse Greeting Car...' />
        <Product id='child twice' title = 'Stickers' subText='STARTING AT' price={(<>₦16,000 <span>per 100</span></>)} buttonText='Browse Stickers' />
            </div>
            </div>

  <Brands/>

  <div className="reviews">
                <div className="reviews-wrapper">
                    <p className="head">What Customers Say About Us🙌🏿</p>
                    <div className="review">
                     <Reviews title='review-one' image='images/twitter.svg' text={(
                      <>
                        <p>Amina Ebele <span>@DeliciousAmina</span></p>
                      <p>I am now the unofficial <span>@Printivo</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
                      </>
                     )} />
                       <Reviews title='review-two' image='images/twitter.svg' text={(
                      <>
                       <p>Oluwatosin <span> @tosingirlfx</span></p>
                                <p> <span> @Printivo</span> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p>
                      </>
                     )} />
                       <Reviews title='review-three' image='images/twitter.svg' text={(
                      <>
                        <p>Oluwatosin<span> @olgablark</span></p>
                                <p>These guys <span> @Printivo</span> are really awesome and affordable. Excellent customer service and delivery too. Thank you.</p>
                      </>
                     )} />
                     
                    </div>
                </div>
            </div>

            <div className="services">
                <div className="wrapper">
                    <p className="head">You can count on us for:</p>
                    <div className="service-content">

                     <Services image="images/clock.svg" title="Fast Turnaround Within Days" text='Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.'/>
                     <Services image="images/quality.svg" title="100% Top Quality" text='Only the finest materials, machines and people will be involved in fulfilling your order.'/>
                     <Services image="images/wallet.svg" title="Affordable Services" text=' All products are adequately priced to ensure you get value for your money at all times.'/>
                    </div>
                </div>
            </div>
  <Articles/>
  <About/>
  <Footer/>
  </>
  )
}

export default App
