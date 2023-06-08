import { useContext} from 'react';
import { PRODUCTS } from "../../products";
import styles from "./cart.module.css";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item"
import {useNavigate} from "react-router-dom";
    

const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
       <div className={styles.cart}>
            <div className={styles.header}> 
                <h1 className={styles.title}>Review your items</h1>
                <p className={styles.underTitle}>Free delivery with every purchase above $299.00.</p>
            </div>
                {PRODUCTS.map((product) => {
                    if(cartItems[product.id] !== 0){
                        return <CartItem data ={product}/>
                    }
                 })}
            <div className={styles.checkout}>
                <p className={styles.subtotal}>Subtotal</p>
                <p className={styles.subtotalEntry}>${totalAmount}</p>
                <p className={styles.shipping}>Shipping</p>
                <p className={styles.shippingEntry}>$19.00</p>
                <h2 className={styles.total}>Total</h2>
                <h2 className={styles.totalEntry}>${totalAmount + 19}.00</h2>
                <div className={styles.buttonContainer}>
                    <button className={styles.shoppingBtn}>Continue Shopping</button>
                    <button className={styles.paymentBtn}onClick={() => navigate("/payment")}> Go to payment </button>
                </div>
            </div>
       </div>
    )
}

export default Cart;