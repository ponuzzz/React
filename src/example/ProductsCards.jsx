import React from 'react'
import './card-page.css'

const ProductsCards = ({product}) => {
  return (
    <div className='product-card'>
      {product.offer && <span className='offer-badge'>{product.offer} % OFF</span>}

      <div className='product-image-area'>
        <img src={product.image} alt=''/>
      </div>
      <p className='product-category'>{product.category}</p>
      <h3 className='product-title'>{product.title}</h3>

      <div className='Product-rating'>
        {[...Array(5)].map((_,i)=>(
            <span key={i} className={i < product.rating ? "star filled":"star" }>
                ★
            </span>
        ))}

      </div>
    </div>

  )
}

export default ProductsCards
