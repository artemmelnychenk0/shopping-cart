import React, { useState, useEffect } from "react";
import "../styles/route.css"

const Cart = (props) => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fakestoreapi.com/products/1');
        const products = await data.json()
        console.log(products)
        setItems(products);
        console.log(items)
    }

    return (
        <div className="sidecart">
            <h1>Cart</h1>
            <div className="display">
                <img src={items.image} alt={items.title}></img>
                <div>{items.title}</div>
                <div>{items.price}</div>
            </div>
        </div>
    )
}
export default Cart