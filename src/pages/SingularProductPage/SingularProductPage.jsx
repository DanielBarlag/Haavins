import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from '../../context/shop-context';
import { Product } from "../ProductPage/Product";
import { PRODUCTS } from "../../products";
import styles from "./singularproductpage.module.css";
import uniceflogo from "../../resources/images/uniceflogo.png";
import wwflogo from "../../resources/images/wwflogo.png";
import brickwall from "../../resources/images/brickwall.jpg";
import drywall from "../../resources/images/plasterwall.jpg";
import arttrack from "../../resources/images/art_track.png";
import technique from "../../resources/images/brush.png";
import straighten from "../../resources/images/straighten.png";
import sell from "../../resources/images/sell.png";
import Radio from '@mui/material/Radio';
import backgroundImage from '../../resources/images/haavins123.png';
import { alpha, styled } from '@mui/material/styles';
import axios from 'axios';
    





const SingularProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    let count = 0;
    const { addToCart, cartItems } = useContext(ShopContext);
    const [country, setCountry] = useState('');
    const [multiplier, setMultiplier] = useState(1);
    const [currency, setCurrency] = useState('USD');
    const [shipping, setShipping] = useState(19)

    
    useEffect(() => {
    axios.get('http://ip-api.com/json?fields=status,country,currency')
        .then(response => {
        if(response.data.status === "success") {
            setCountry(response.data.country);
            if(response.data.country === "Norway"){
                setMultiplier(10);
                setCurrency("NOK");
            }
        } else {
            console.log("Unable to fetch data from API");
        }
        })
        .catch(error => {
        console.log(error);
        });
    }, []);


    useEffect(() => {
        // Fetch product data using getProductById and update product state
        const foundProduct = PRODUCTS.find((product) => product.id === parseInt(id)) || {};
        setProduct(foundProduct);
    }, [id]); 


    

    const CssRadioButtons = styled(Radio)({
        color:'#FFA35D',
        '&.Mui-checked': {
          color:'#FFA35D'
        }
    });

    

   /* 
    JS FOR BACKGROUND SELECTOR 
   
   const handleBrickClick = () => {
        document.getElementById("brick-btn")?.setAttribute("style",`color:#FFA35D;transition: color 0.2s;`);
        document.getElementById("drywall-btn")?.setAttribute("style",`color:white;transition: color 0.2s;`);
        document.getElementById("standard-btn")?.setAttribute("style",`color:white;transition: color 0.2s;`);
        document.getElementById("brick-img")?.setAttribute("style",`transform:translateX(112%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
        document.getElementById("dry-img")?.setAttribute("style",`transform:translateX(0%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
    }

    const handleDryClick = () => {
        document.getElementById("brick-btn")?.setAttribute("style",`color:white;transition:color 0.2s;`);
        document.getElementById("drywall-btn")?.setAttribute("style",`color:#FFA35D;transition:color 0.2s;`);
        document.getElementById("standard-btn")?.setAttribute("style",`color:white;transition:color 0.2s;`);
        document.getElementById("dry-img")?.setAttribute("style",`transform:translateX(-113%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
        document.getElementById("brick-img")?.setAttribute("style",`transform:translateX(0%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
    }

    const handleStandardClick = () => {
        document.getElementById("brick-btn")?.setAttribute("style",`color:white;transition:color 0.2s;`);
        document.getElementById("drywall-btn")?.setAttribute("style",`color:white;transition:color 0.2s;`);
        document.getElementById("standard-btn")?.setAttribute("style",`color:#FFA35D;transition:color 0.2s;`);
        document.getElementById("brick-img")?.setAttribute("style",`transform:translateX(0%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
        document.getElementById("dry-img")?.setAttribute("style",`transform:translateX(0%);transition:transform 0.2s cubic-bezier(.33,.31,0,1.03);`)
    }*/


    useEffect(() => {
        document.body.style.background = `url(${backgroundImage})`;
        document.body.style.backgroundSize = "cover";
        return () => {
            document.body.style.background = "linear-gradient(180deg, #091428 0%, #0A1428 100%), url(null)";
            document.body.style.backgroundBlendMode = null;
            document.body.style.backgroundSize = null;
            document.body.style.opacity = null;
        };
      }, []);

    /*const leftClick = () => {
        console.log("left")
        count += 1;
        console.log(count)
            document.getElementById("left")?.setAttribute("style","opacity:100%;transition:0.5s;")
            document.getElementById("product-description")?.setAttribute("style",`transform:translateX(-100%);transition:transform 0.6s cubic-bezier(.33,.31,0,1.03);`)
            document.getElementById("product-container")?.setAttribute("style",`transform:translateX(-100%);transition:transform 0.6s cubic-bezier(.33,.31,0,1.03); `)
    }

    const rightClick = () => {
        console.log("right")
        count -= 1; 
        console.log(count)
        if(count == 0){
            document.getElementById("right")?.setAttribute("style","opacity:100%;transition:0.5s;")
        }
        document.getElementById("product-container")?.setAttribute("style",`transform:translateX(0%);transition:transform 0.6s cubic-bezier(.33,.31,0,1.03);`)
        document.getElementById("product-description")?.setAttribute("style",`transform:translateX(0%);transition:transform 0.6s cubic-bezier(.33,.31,0,1.03);`)
    }
    */
    return (
    
    <div className={styles.background}>
        <div className={styles.contentCointainer}>
            <div id="product-container" className={styles.productContainer}>
                <div className={styles.artistSection}>
                    <h4 className={styles.by}>By</h4>
                    <h4 className={styles.artist}>HAAVINS</h4>
                </div>
                <h1 className={styles.productTitle}>{product.productName}</h1>
                <div className={styles.imageContainer}>
                    <img className={styles.productImage} src={product.productImage}></img>
                </div>
                
                {/*
                
                    HTML FOR BACKGROUND SELECTOR 

                <div className={styles.backgroundSelection}> 
                        <p className={styles.standardBtn} id="standard-btn" onClick={handleStandardClick}> Standard</p>
                        <p id="drywall-btn" onClick={handleDryClick}>  Dry wall</p>
                        <p id="brick-btn" onClick={handleBrickClick}> Brick wall</p>
                        <p iD="custom-btn"> Custom</p>
                </div>*/}
                
                <div className={styles.buyContainer}>
                    <div>
                        <div className={styles.svgTextContainer}>
                            <img className={styles.img} src={arttrack}></img>
                            <p>Editions</p>
                        </div>
                        <h4>{product.editions}</h4>
                    </div>
                    <div>
                        <div className={styles.svgTextContainer}>
                            <img className={styles.img} src={technique}></img>
                            <p>Technique</p>
                        </div>
                        <h4>{product.technique}</h4>
                    </div>
                    <div>
                        <div className={styles.svgTextContainer}>
                            <img className={styles.img} src={straighten}></img>
                            <p>Size</p>    
                        </div>
                        <h4>{product.size}</h4>
                    </div>  
                    <div>
                        <div className={styles.svgTextContainer}>
                            <img className={styles.img} src={sell}></img>
                            <p className={styles.priceText}>Price</p>
                        </div>
                        <h4>{product.price*multiplier} {currency}</h4>
                    </div>
                    <button id="add-btn"className={styles.addToBag} onClick={() => addToCart(product.id)}>Add to bag</button>
                </div>
                <div className={styles.wallContainer}>
                    <img id="brick-img" className={styles.brickwall} src={brickwall}></img>
                    <img id="dry-img" className={styles.drywall} src={drywall}></img>
                </div>
            </div>
            <div id="product-description" className={styles.productDescriptionContainer}>
                <div className={styles.backBtn}>
                    <p className={styles.backBtnText}>Back</p>
                </div>
                <h1 className={styles.charityTitle}>Select chartiable organization</h1>
                <h2 className={styles.charityUndertitle}>We let our customers decide which cause they want to support. You can choose to split the money or select one. </h2>
                <div className={styles.charitySelectionContainer}>
                    <div className={styles.unicefSelection}>
                        <img className={styles.unicefLogo}src={uniceflogo}></img>
                        <CssRadioButtons className={styles.radioButtons}></CssRadioButtons>
                    </div>
                    <div className={styles.wwfSelection}>
                        <img className={styles.wwfLogo} src={wwflogo}></img>
                        <CssRadioButtons className={styles.radioButtons}></CssRadioButtons>
                    </div>
                </div>
                <div className={styles.proceedBtns}>
                    <button className={styles.continueBtn}>Continue Shopping</button>
                    <button className={styles.proceedBtn} onClick={() => addToCart(product.id)}>Proceed to checkout</button>
                </div>
            </div>
        </div>
    </div>
        
        

    );
}

export default SingularProductPage;