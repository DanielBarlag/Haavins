import styles from "./homepage.module.css";
import bgImage from '../../resources/images/haavins123.png';
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
    useEffect(() => {
        document.body.style.background = `url(${bgImage})`;
        document.body.style.backgroundSize = "cover";
        return () => {
            document.body.style.background = "linear-gradient(180deg, #091428 0%, #0A1428 100%), url(null)";
            document.body.style.backgroundBlendMode = null;
            document.body.style.backgroundSize = null;
            document.body.style.opacity = null;
        };
      }, []);
      
    const handleCharityClick = () => {
        document.getElementById("charity-selection")?.setAttribute("style","opacity:100%;transition: opacity 0.5s;")
        document.getElementById("charity-btn")?.setAttribute("style","margin-left:0%;transition:0.5s;")
        document.getElementById("charity-paragraph")?.setAttribute("style","margin-left:0%;transition: margin-left 0.5s;")
        document.getElementById("art-selection")?.setAttribute("style","opacity:30%;transition: opacity 0.5s;")
        document.getElementById("art-btn")?.setAttribute("style","margin-left:700%;transition: margin-left 0.5s;")
        document.getElementById("art-paragraph")?.setAttribute("style","margin-left:700%;transition: margin-left 0.5s;")
    }   

    const handleArtClick = () => {
        document.getElementById("charity-selection")?.setAttribute("style","opacity:30%;transition: opacity 0.5s;")
        document.getElementById("charity-btn")?.setAttribute("style","margin-left:-700%;transition: margin-left 0.5s;")
        document.getElementById("charity-paragraph")?.setAttribute("style","margin-left:-700%;transition: margin-left 0.5s;")
        document.getElementById("art-selection")?.setAttribute("style","opacity:100%;transition: opacity 0.5s;")
        document.getElementById("art-btn")?.setAttribute("style","margin-left:0%;transition: margin-left 0.5s;;")
        document.getElementById("art-paragraph")?.setAttribute("style","margin-left:0%;transition: margin-left 0.5s;")
    }
    return(
        <div id="home-container" className={styles.homeContainer}>
            <div className={styles.textContainer}>
                <h1 id="art-selection" className={styles.artText} onClick={handleArtClick}>Art</h1>
                <h1 className={styles.xText}>X</h1>
                <h1 id="charity-selection" className={styles.charityText} onClick={handleCharityClick}>Charity</h1>
            </div>
            <div id="content-container" className={styles.contentContainer}>
                <Link id="art-btn" className={styles.artLink} to="/productpage"><button id="art-btn" className={styles.artBtn}>VIEW THE COLLECTION</button></Link>
                <p id="art-paragraph" className={styles.artParagraph}>We are a company that sells art and donates a percentage of each sale to charity. What makes us unique is that we let our customers decide which charities to support. Every month, we offer 10 charity options, and our customers vote for two of them. Then, when you buy a piece of art, you can choose which charity you want the proceeds to go to. It's an easy way to give back while enjoying beautiful art.</p>
                <Link id="charity-btn" className={styles.charityLink} to="/charity"><button  className={styles.charityBtn}>VIEW OUR CONCEPT</button></Link>
                <p id="charity-paragraph"className={styles.charityParagraph}>We are a company that sells art and donates a percentage of each sale to charity. What makes us unique is that we let our customers decide which charities to support. Every month, we offer 10 charity options, and our customers vote for two of them. Then, when you buy a piece of art, you can choose which charity you want the proceeds to go to. It's an easy way to give back while enjoying beautiful art.</p>
            </div>
        </div>

        
    )
}
export default HomePage