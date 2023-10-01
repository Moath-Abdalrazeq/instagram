import React from 'react'
import Avatar from './Avatar';
import '../../styles/carousel.css';
import { statusCarousel } from '../../data';

const Carousel = () => {    
    return (
        <section>
            <div className="carousel-body">
                {
                    statusCarousel.map((item)=>{
                        return <Avatar key={item} image={item} />
                    })
                }
            </div>
        </section>
    )
}

export default Carousel