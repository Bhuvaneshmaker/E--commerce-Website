
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from "react";
import axios from 'axios';

export function Product(){
    const { id } = useParams();
    const [product ,setProduct] = useState();

    useEffect(() =>{
        console.log("THIS CALL HAPPEN")
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res  => setProduct(res.data))});
    console.log(product)
    return(
        <>
        <div className="product-page">
        {
         product ? (
            <div className="product-detail">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
                <h1 className="product-title">{product.title}</h1>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
            </div>
        </div>
         ) : (
            <h1>Loading.....</h1>
         )
        }
        </div>
        </>
    );
}


/*import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Product.css'; // New CSS file for individual product styling

export function Product() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProduct(res));}, [id]);

    return (
        <div className="product-page">
            {
            product ? (
                <div className="product-detail">
                    <img src={product.thumbnail} alt={product.title} className="product-detail-image" />
                    <div className="product-detail-info">
                        <h1 className="product-detail-title">{product.title}</h1>
                        <p className="product-detail-description">{product.description}</p>
                        <p className="product-detail-price">Price: ${product.price}</p>
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}*/



