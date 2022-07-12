/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "../styles/route.css"
import { Button } from "react-bootstrap/Button"


const Cart = ({ cart, deleteForever }) => {

    const selected = cart
    // console.log(selected)
    const [items, setItem] = useState([]);
    const [total, setTotal] = useState();
    const [quantity, setQuantity] = useState(0);


    useEffect(() => {
        fetchItems();

    }, []);

    useEffect(() => {
        addQuantity();
    }, [quantity])


    useEffect(() => {
        calculateTotal();
    }, [items])


    const fetchItems = async () => {
        const data = await fetch(`https://fakestoreapi.com/products`);
        const products = await data.json()
        console.log(products)

        for (let i = 0; i < selected.length; i++) {

            setItem(arr => [...arr, products[selected[i]]])
            // console.log(items)
        }
        setQuantity(1)

        console.log(items)

    }

    const addQuantity = () => {
        setItem(items.map(arr => ({ ...arr, qty: 1 })))
    }
    const calculateTotal = () => {
        const total = items.reduce((accumulator, object) => {
            return accumulator + (object.price * object.qty);
        }, 0);
        setTotal(total.toFixed(0));
    }



    const increase = (arg, arg2) => {

        setItem(items.map(item =>
            item.id === arg
                ? { ...item, qty: arg2 + 1 }
                : item))
        calculateTotal();

    }
    const decrease = (arg, arg2) => {
        setItem(items.map(item =>
            item.id === arg
                ? { ...item, qty: arg2 - 1 }
                : item))
        calculateTotal();

    }

    const deleteProduct = (arg) => {
        setItem(items.filter(a => a.id !== arg))
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



                        <button className="btn btn-dark btn-sm" onClick={() => decrease(item.id, item.qty)} >-</button>
                        <div>Qunatity: {item.qty}</div>
                        <button onClick={() => increase(item.id, item.qty)} value={item.id}>+</button>
                        <button onClick={() => { deleteProduct(item.id); deleteForever(item.id); }}>Delete</button>




                    </div>

                ))}
            </div>
            <div>Total:${total}.00</div>
        </div>
    )
}
export default Cart