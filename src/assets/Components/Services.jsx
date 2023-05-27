const Services = ( { image,title,text } ) => {
    return ( 
        <>
              <div className="service-text">
             <img src={image} alt=""/>
             <div className="message">
             <p className="first">{title}</p>
             <p className="second">{text}</p>
             </div>
             </div>
        </>
     );
}
 
export default Services;