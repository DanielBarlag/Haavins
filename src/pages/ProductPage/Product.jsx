import React, {useContext} from "react";
import styles from "./product.module.css";
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const {id, productName, price, productImage } = props.data;
        const { addToCart, cartItems } = useContext(ShopContext);
        const cartItemAmount = cartItems[id] 
    return <div className={styles.product}>
        <img src={productImage}/>
        <div className={styles.description}>
            <h2>{productName}</h2>
            <h2>${price}</h2>
        </div>
        
    </div>
}