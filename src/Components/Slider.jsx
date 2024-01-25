import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image4 from"../assets/4.png"
import image2 from"../assets/2.jpeg"
import image3 from"../assets/3.jpeg"




function Slider() {
    return (
        <Carousel autoPlay infiniteLoop interval ={1000} showThumbs ={false} showStatus	={false} showArrows={false}	>
            <div>
                <img src={image4} className="max-h-[80vh] rounded-2xl" />
                
            </div>
            <div>
                <img src={image2} className="max-h-[80vh] rounded-2xl" />
                
            </div>
            <div>
                <img src={image3} className="max-h-[80vh] rounded-2xl"/>
                
            </div>
        </Carousel>
    )
}

export default Slider