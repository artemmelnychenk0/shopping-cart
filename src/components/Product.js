/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react"
import '../styles/shop.css'
import { useParams } from "react-router-dom";


const Product = ({ addToCart }) => {


    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState([]);
    const [total, setTotal] = useState(0)
    const [quantity, setQuantity] = useState(0)


    const id = useParams();
    const selected = id.id;
    console.log(selected);



    const fetchItem = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${selected}`);
        const product = await data.json()
        setItem(product)

    }


    const increase = () => {
        const num = Number((item.price).toFixed(0))
        setQuantity(quantity + 1)
        setTotal(total + num)


    }
    const decrease = () => {
        const num = Number((item.price).toFixed(0))
        setQuantity(quantity - 1)
        setTotal(total - num)
    }

    // const addToCart = (e) => {
    //     const info = e.target.value;
    //     setSelected(info);
    // }



    return (
        <div>
            <h1>Item</h1>
            <div className="display">


                <div className="item">

                    <img src={item.image} alt={item.title}></img>

                    <div>{item.title}</div>

                    <div>${Number(item.price).toFixed(0)}.00</div>
                    <button onClick={decrease}>-</button>
                    <div>{quantity}</div>
                    <button onClick={increase}>+</button>

                </div>

                <div>Total:${total}.00</div>
                <button type="submit" onClick={() => addToCart(selected)} value={item.id}>Add to Cart</button>



            </div>

            {/* <img src={item.image} alt={item.title}></img> */}
        </div>
    )
}
export default Product
