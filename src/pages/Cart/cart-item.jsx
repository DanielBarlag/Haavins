import React, { useContext } from "react";
import styles from "./cartitem.module.css";
import { ShopContext } from "../../context/shop-context";
import { style } from "@mui/system";

export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemAmount } = useContext(ShopContext);
    return <div className={styles.CartItem}>
            <img className={styles.productImage} src={productImage}/>
            <div className={styles.description}>
                <h2>{productName}</h2>
                <h2 className={styles.price}>${price}</h2>
            </div>
            <div className={styles.countHandler}>
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
}