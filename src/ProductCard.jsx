import React from 'react'

export default function ProductCard(props) {
  return (
    <div className='product-card'>
        <img src="https://productimages.hepsiburada.net/s/303/550/110000294955110.jpg/format:webp" />
        <p>{props.name}</p>
        <span>{props.price}</span>
      </div>
  )
}