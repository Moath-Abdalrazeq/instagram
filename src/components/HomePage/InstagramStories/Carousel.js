import React from 'react'
import Avatar from './Avatar';
 
import { statusCarousel } from '../../../data';
 
 

const Carousel = () => {    
    return (
        
        <section style={{display:"flex"}}>
            <div  style={{display:"flex", marginLeft:"250px" , marginTop:"20px"}}>
                {
                    statusCarousel.map((item)=>{
                        return <Avatar key={item.id} image={item} />
                    })
                }
            </div>
       
        </section>
    )
}

export default Carousel