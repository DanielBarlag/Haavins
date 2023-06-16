import React, { useContext, useEffect, useState } from "react";
import styles from "./cartitem.module.css";
import axios from 'axios';
import { ShopContext } from "../../context/shop-context";
import { style } from "@mui/system";

export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);
    const [country, setCountry] = useState('');
    const [multiplier, setMultiplier] = useState(1);
    const [currency, setCurrency] = useState('USD');
    const [shipping, setShipping] = useState(19)

    useEffect(() => {
        axios.get('http://ip-api.com/json?fields=status,country,currency')
            .then(response => {
            if(response.data.status === "success") {
                setCountry(response.data.country);
                if(response.data.country === "Norway"){
                    setMultiplier(10);
                    setCurrency("NOK");
                }
            } else {
                console.log("Unable to fetch data from API");
            }
            })
            .catch(error => {
            console.log(error);
            });
    }, []);

    return <div className={styles.CartItem}>
            <img className={styles.productImage} src={productImage}/>
            <div className={styles.description}>
                <h2>{productName}</h2>
                <h2 className={styles.price}>{price*multiplier} {currency}</h2>
            </div>
            <div className={styles.countHandler}>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
}