import React from 'react'
import './details.css';
import { useParams } from 'react-router-dom';
import { products } from './data/product';
const ProductDetails = () => {

    const { id } = useParams();
    const product = products.find((p) => p.id == id);
    if (!products) {
        return <h2 style={{ textAlign: 'center' }}>product not found</h2>
    }
    return (
        <div className='details-container'>
            {/* left */}
            <div className=''>
                <img src={product.image}
                    alt={products.title}
                    className='details-image'
                />
                <div className='details-thumbnails'>
                    {product.gallery?.map((img, i) => (
                        <img key={i} src={img} className='details-thumb' />
                    ))}

                </div>
            </div>
            {/* right */}
            <div>
                <h2 className='details-title'>{product.title}</h2>
                <div className='details-rating'>
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < product.rating ? "star filled" : "star"}>
                            ★
                        </span>
                    ))}
                 </div>
                 <p className='details-description'>{product.description}</p>

                 <div className='details-price-row'>
                    <span className='details-new-price'>
                      ₹ {product.price}
                    </span>
                    {product.oldPrice &&(
                        
                        <span className='details-old-price'>
                           ₹{product.oldPrice}
                        </span>
                    )}
                 </div>
                 <button className='details-btn'>add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetails
