import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const GetProducts = () => {
    const [product, setProduct] = useState([]);
   
    useEffect(() =>{ 
        axios.get("http://localhost:3030/product", {}).then(res => {
            const listItems = res.data?.map((d:any) => 
            <Link to={`/product/${d.id}`}>
                    <p>Title:{d.title} Price:{d.price}</p>
            </Link>)
            setProduct(listItems);
        }); 
        
    })
    
    return(<p>{product}</p>)
   
}

export default GetProducts;