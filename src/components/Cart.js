/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "../styles/route.css"



const Cart = ({ cart }) => {

    const selected = cart
    console.log(selected)

    useEffect(() => {
        fetchItems();

    }, []);

    const [items, setItem] = useState([]);



    const fetchItems = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`);
        const products = await data.json()


        for (let i = 0; i < selected.length; i++) {

            setItem(arr => [...arr, products[selected[i]]])
            console.log(items)
        }



    }

    return (
        <div className="sidecart">
            <h1>Cart</h1>
            <div className="display">
                {items.map(item => (

                    <div key={item.id} className="item">

                        <img src={item.image} alt={item.title}></img>

                        <div>{item.title}</div>

                        <div>${Number(item.price).toFixed(0)}.00</div>




                    </div>

                ))}
            </div>
        </div>
    )
}
export default Cart