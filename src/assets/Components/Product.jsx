const Product = ({ id,title,subText,price,buttonText }) => {
   
    return ( 
        <>
         <div className="product-card">
                <div className="wrapper">
                    <div className="card-image">
                        <div className={id}></div>
                    </div>
                </div>
                <div className="card-content">
                    <p className="first">{title}</p>
                    <p className="second">{subText}</p>
                    <p className="third">{price}</p>
                    <button>{buttonText} <i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
  
        </>
     );
}
 
export default Product;