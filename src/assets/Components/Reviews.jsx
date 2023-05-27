const Reviews = ( { title,image,text } ) => {
    return ( 
        <>
                               <div className={title}>
                            <img src={image} alt="twitter-image" />
                            <div className="review-text">
                                {text}
                            </div>
                        </div>
        </>
     );
}
 
export default Reviews;