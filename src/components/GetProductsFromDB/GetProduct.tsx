import axios from "axios";
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react";

axios.defaults.withCredentials = true;

const GetProduct = () => {
    const {id} = useParams();
    const [idProduct, setIdProduct] = useState("");
    const [product, setProduct] = useState();
    

    useEffect(() =>{ 
    setIdProduct(`${id}`)
    axios.post("http://localhost:3030/productss", { id: idProduct,}).then((res) => {
        const listItems = res.data?.map((d:any) => 
            <div> 
                <p>Title:{d.title} Price:{d.price}</p>
                    <img src={`http://localhost:3030/Images/${d.filename}`} alt=""/>
            </div>
            )
            setProduct(listItems);
    });     
})
    return (<div className="">{product}</div>)
} 

export default GetProduct
