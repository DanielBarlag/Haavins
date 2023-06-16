import styles from "./productpage.module.css";
import {PRODUCTS} from "../../products";
import {Product} from "./Product";
import {Link} from "react-router-dom" 
import bgImage from '../../resources/images/haavins123.png';

const ProductPage = () => {
    return ( 
        <>
            <img src={bgImage} className={styles.background}></img>
            <h1 className={styles.artHeader}>Art</h1>
             <div className={styles.productPageContainer}>
            <div className={styles.productpage}>
            
            {PRODUCTS.map((product) => (
            <Link to={`/productpage/${product.id}`} style={{textDecoration:'none'}}>
                <Product data={product}/>
            </Link>
            ))}
            
        </div>
    </div>
        
        </>
    
    )
}

export default ProductPage