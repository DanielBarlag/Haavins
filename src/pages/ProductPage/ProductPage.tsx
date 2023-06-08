import styles from "./productpage.module.css";
import {PRODUCTS} from "../../products";
import {Product} from "./Product";
import {Link} from "react-router-dom" 

const ProductPage = () => {
    return ( 
    <div className={styles.productPageContainer}>
        <div className={styles.productpage}>
            
            {PRODUCTS.map((product) => (
            <Link to={`/productpage/${product.id}`} style={{textDecoration:'none'}}>
                <Product data={product}/>
            </Link>
            ))}
            
        </div>
    </div>
        
    )
}

export default ProductPage