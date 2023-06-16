import styles from "./charityselection.module.css";
import unicefImage from "../../resources/images/uniceflogo.png"
import wwfImage from "../../resources/images/wwflogo.png"
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const CharitySelection = () => {
    const navigate = useNavigate();
    const [charity, setCharity] = useState("WWF")

    return(<div className={styles.contentContainer}>
                <div className={styles.charityContainer}>
                    <h1 className={styles.headerText}>Select charitable organization</h1>
                    <p className={styles.charityText}>We let our customers decide which cause they want to support. You can split the money or select one.</p>
                    <div className={styles.unicefSelection} onClick={() => setCharity('UNICEF')}>
    <img className={styles.unicefImage} src={unicefImage}></img>
</div>
<div className={styles.wwfSelection} onClick={() => setCharity('WWF')}>
    <img className={styles.wwfImage} src={wwfImage}></img>
</div>
                    <div className={styles.btnSelectionContainer}>
                        <button className={styles.continueBtn} onClick={() => navigate("/productpage")}>CONTINIUE SHOPPING</button>
                        <button className={styles.checkoutBtn} onClick={() => navigate("/payment", {state: {charity}})}>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
        </div>) 
}

export default CharitySelection