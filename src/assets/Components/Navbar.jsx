const Navbar = () => {
    return ( 
        <>
           <header>
        <nav>
            <div className="header-list">
                <ul className="left-side">
                    <li><a href="#">Corporate Pricing</a></li>
                    <li><a href="#">Discover Stores</a></li>
                    <li><a href="#">Track Orders</a></li>
                </ul>
                <ul className="right-side">
                    <li><span className="help"> Need help? Call:</span><a href="">+2348091084333, +2348091085333</a></li>
                    <li><a href="">
                        <img src="images/whatsapp.svg" alt="whatsapp--icon" height={32} width={32}/>
                    </a></li>
                    <li><a href="#">
                        <img src="images/nigeria.svg" alt="nigeria--svg"/> <span className="country">Nigeria</span>
                    </a></li>
                </ul>
            </div>
        </nav>
    </header>
        </>
     );
}
 
export default Navbar;