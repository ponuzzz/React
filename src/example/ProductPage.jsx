import React from 'react';
import { products } from './data/product';
import { Link } from 'react-router-dom';
import ProductsCards from './ProductsCards';
import './p-page.css';

const ProductPage = () => {
    return (

        <div className='products-container'>
            <h2 className='section-title'>
                special footwer with offers
            </h2>
            <p className='section-subtitle'>
                Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className='products-grid'>
                {products.map((item) => (
                    <Link key={item.id} to={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
                        <ProductsCards product={item} />
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default ProductPage
