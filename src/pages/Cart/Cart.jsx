import { useContext} from 'react';
import { PRODUCTS } from "../../products";
import styles from "./cart.module.css";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item"
import {useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
    

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
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

  
    if(totalAmount !== 0){  console.log(cartItems)
        return (
       <div className={styles.cart}>
            <div className={styles.header}> 
                <h1 className={styles.title}>Review your items</h1>
            </div>
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <CartItem data ={product}/>  
                    }
                        
                 })}
            <div className={styles.checkout}>
                <p className={styles.subtotal}>Subtotal</p>
                <p className={styles.subtotalEntry}>{totalAmount*multiplier}.00 {currency}</p>
                <p className={styles.shipping}>Shipping</p>
                <p className={styles.shippingEntry}>{shipping*multiplier}.00 {currency}</p>
                <h2 className={styles.total}>Total</h2>
                <h2 className={styles.totalEntry}>{totalAmount*multiplier+shipping*multiplier}.00 {currency}</h2>
                <div className={styles.buttonContainer}>
                    <button className={styles.shoppingBtn}onClick={() => navigate("/productpage")}>Continue Shopping</button>
                    <button className={styles.paymentBtn}onClick={() => navigate("/charityselection")}> Go to payment </button>
                </div>
            </div>
       </div>
    )
    }else
    {  
        return(<h1>Your cart is empty</h1>)}
    
} 

export default Cart;