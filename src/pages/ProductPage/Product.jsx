import React, {useContext} from "react";
import styles from "./product.module.css";
import {ShopContext} from '../../context/shop-context'

export const Product = (props) => {
    const {id, productName, price, productImage, editions } = props.data;
        const { addToCart, cartItems } = useContext(ShopContext);
        const cartItemAmount = cartItems[id] 
    return <div className={styles.product}>
        <div className={styles.imageContainer}>
            <img src={productImage}/>
        </div>
        
        <div className={styles.description}>
            <div>


            </div>
            <div>
                <p>editions</p>
                <p>{editions}</p>
            </div>
            
            <div className={styles.priceContainer}>
                <p>price</p>
                <p>${price}</p>
            </div>
            
        </div>
    </div>
}