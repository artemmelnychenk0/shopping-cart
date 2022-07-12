/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MdOutlineDeleteForever } from 'react-icons/md'

const Cart = ({ cart, deleteForever }) => {

    const selected = cart

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
        for (let i = 0; i < selected.length; i++) {
            setItem(arr => [...arr, products[selected[i]]])
        }
        setQuantity(1)
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
            <div className="display-cart">
                {items.map(item => (

                    <div key={item.id} className="item-cart">
                        <img src={item.image} alt={item.title}></img>
                        <div>{item.title}</div>
                        <div>${Number(item.price).toFixed(0)}.00</div>
                        <div>Qunatity: </div>
                        <button onClick={() => decrease(item.id, item.qty)} >-</button>
                        <div>{item.qty}</div>
                        <button onClick={() => increase(item.id, item.qty)} value={item.id}>+</button>
                        <button className='delete' onClick={() => { deleteProduct(item.id); deleteForever(item.id); }}><MdOutlineDeleteForever size='2em' /></button>
                    </div>

                ))}
            </div>
            <div className="cart-total">Total:${total}.00</div>
            <div className="container-btn">
                <button className="checkout">Proceed to Checkout</button>
            </div>
        </div>
    )
}
export default Cart