/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const Product = ({ addToCart }) => {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState([]);
    const id = useParams();
    const selected = id.id;

    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${selected}`);
        const product = await data.json()
        setItem(product)
    }

    return (
        <div>
            <div >
                <div>
                    <img src={item.image} alt={item.title} className="product-img"></img>
                    <div className="product-title">{item.title}</div>
                    {/* <div className="product-desc">{item.description}</div> */}
                    <div className="product-price">${Number(item.price).toFixed(0)}.00</div>
                </div>
                <button className="product-add" type="submit" onClick={() => addToCart(selected)} value={item.id}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product
