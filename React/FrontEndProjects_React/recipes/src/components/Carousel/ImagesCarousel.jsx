import React, { useEffect ,useState} from 'react'
import { images } from '../../data/Images'
import { Link } from 'react-router-dom'
import  classes from "./ImagesCarousel.module.css"



const ImagesCarousel = () => {
    const [currentIdx,setCurrentIdx]=useState(1);
    useEffect(() =>{
        let timer=setInterval(() =>{
            setCurrentIdx(currentIdx === images.length ? 1 : currentIdx+1) 

        },1000);

        return () => clearInterval(timer);
    },[currentIdx])

  return (
        <div className={classes.imagesShow}>
             {images.map((image, index) => {
               return <img
                 key={image.id}
                 src={image.url}
                 alt={image.alt}
                 className={image.id === currentIdx ? classes.active : classes.inactive}
                 
               />
       })}

        <div className={classes.info}>
           <h1>Aasif Bhai Recipes</h1>
           <h3>India's #1 Yummy Recipes Blog</h3>
           <h6>Experience Mesmerizing taste with your own cooked food by following secret recipe process</h6>
           <Link to="/home"><button className={classes.btn}>Explore →</button></Link>
           </div>
           </div>
      
    
  )
}

export default ImagesCarousel
