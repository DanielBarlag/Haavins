import React from "react";
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";
import bag from "../../resources/images/shopping_bag.png"
import hamburger from "../../resources/images/Hamburger.png"
 
const Navbar = () => {
            let count = 0;


            const handleClick = () => {
               if(count == 0){
                  document.getElementById("content")?.setAttribute("style",`transform:translateY(100%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
                  count += 1;
                  console.log(count)
               }else if(count == 1){
                  document.getElementById("content")?.setAttribute("style",`transform:translateY(0%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
                  count -= 1;
                  console.log(count)
               }
                  
               }
               

    return( 
      <>
         <div className={styles.navbarcontainer}>
            <Link to="" className={styles.logo} ><h1 className={styles.logo}>Haavins</h1></Link>
         <div className={styles.navbarcontent}>
         </div>
            <img className={styles.hamImg}src={hamburger} onClick={handleClick}></img>
         <div className={styles.cartLink}>
            <Link className={styles.selectionText} to="/cart" >Bag</Link>
            <img className={styles.bagImg}src={bag}></img>
         </div>
      </div>
      <div className={styles.menu}>
         <div id="content" className={styles.content}>
            <Link className={styles.selection} to="/cart" >Bag</Link>
            <Link className={styles.selection} to="/productpage" >Collection</Link>
            <Link className={styles.selection} to="/charity" >Concept</Link>
         </div>
            
      </div>
      </>
    
   ) 
      
      
      
      
      
}

    
   

export default Navbar;