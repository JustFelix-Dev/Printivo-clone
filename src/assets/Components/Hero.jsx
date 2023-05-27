import { useEffect, useRef,useState } from "react";
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    // const { ref:myRef, inView:myElement } = useInView();
    const myRef = useRef();
    const [ navbar,setNavbar ] = useState(false)

    const changeBg =()=>{
        if(window.scrollY > 180){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }
    
    const showNav =()=>{
        myRef.current.classList.toggle('active')
    }

    window.addEventListener('scroll', changeBg)

    return ( 
        <>
           
           <div  ref={myRef} className="smNav">
           <span onClick={showNav} class="material-symbols-outlined close">close</span>
            <ul className="smNav-list">
            <li><a href="#">Home</a></li>
                    <li><a href="#">All Products</a></li>
                    <li className="sideNav"><a href="#">Bags</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Banners & Large Format</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Brochures</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Business Cards</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Calendars</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Campaign Materials</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Caps & Hats</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">ClothesTag</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Clothing & Apparel</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Corporate Gifts</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Envelopes</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Flyers & Handbills</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Frames & Wall Arts</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Greeting Cards</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">ID Cards</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Labels</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Letterhead</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Mugs</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Notepads and Jotters</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Posters</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Presentation Folders</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Promotional Items</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Stickers</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Umbrella</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li className="sideNav"><a href="#">Wedding Stationery</a><span class="material-symbols-outlined">arrow_forward_ios</span></li>
                    <li><a href="#">Become a Reseller</a></li>
                    <li><a href="#">Cost Calculator</a></li>
            </ul>
           </div>


        <div  className={ navbar ? "Mhero active" : 'Mhero'}>
            <div className="Mhero-container">
            <nav>
                <img src="images/printivo.svg" alt="brand--logo" height="36" width="140"/>
                <ul className="hero-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">All Products</a></li>
                    <li><a href="#">Become a Reseller</a></li>
                    <li><a href="#">Cost Calculator</a></li>
                    <li className="onPage"><a href="#">Sign in</a></li>
                    <li><a href="#">Create Account</a></li>
                    <li  className="cart onPage"><a href="#"><img src="images/cart.svg" alt="hero-cart"/></a></li>
                    <div className="navItem">
                    </div>
                </ul>
            </nav>
            </div>
        </div>
        <button onClick={showNav} className="heroBtn">Menu</button>
        
           <div className="hero">
        <div className="hero-container">
            <div className="hero-text">
                <p className="first">Quality Prints</p>
                <p className="second">Shipped to your doorstep</p>
                <div className="hero-search">
                    <p>What would you like to print today?</p>
                    <div className="hero-searchbar">
                        <input type="text" placeholder="Search for Business cards, T-shirts, Mugs, etc"/>
                        <div className="search-icon"><img src="images/search-bar.svg" alt=""/></div>
                    </div>
                </div>
            </div>
            <img src="images/printivo-card.webp" alt="" width="430" height="340" className="printivo-card"/>
        </div>
    </div>
        </>
     );
}
 
export default Hero;