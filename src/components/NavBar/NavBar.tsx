import React from "react";
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import bag from "../../resources/images/shopping_bag.png"
 
const Navbar = () => {
    return( 
    <div className={styles.navbarcontainer}>
        <h1 className={styles.logo}>Haavins</h1>
         <div className={styles.navbarcontent}>
            
            
         </div>
         <div className={styles.cartLink}>
            <Link className={styles.selectionText} to="">About us</Link>
            <Link className={styles.selectionText} to="/productpage"> Collection </Link>
            <Link className={styles.selectionText} to="/cart" >Bag</Link>
            <img className={styles.bagImg}src={bag}></img>
         </div>
        
    </div>
   ) 
}

    
   

export default Navbar;