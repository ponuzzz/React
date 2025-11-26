import React from 'react'
import { useParams } from 'react-router-dom'
import { FaBox } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2><FaBox /> product id:{id}</h2>
        </div>
    );
};

export default ProductDetails
