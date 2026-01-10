import React from 'react'

const ProductCard = ({title,image}) => {
  return (
    <div>
        <img src={image} alt={title}/>
        <p>title</p>
      
    </div>
  )
}

export default ProductCard
