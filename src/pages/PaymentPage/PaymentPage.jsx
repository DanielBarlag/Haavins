import { useEffect , useState } from "react"
import { useNavigate } from 'react-router-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import styles from './paymentpage.module.css';
import { alpha, styled } from '@mui/material/styles';
import axios from "axios";
import { useContext} from 'react';
import { ShopContext } from "../../context/shop-context";
import { useLocation } from 'react-router-dom';

 const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#FFA35D',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
            color:'#FFA35D',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
                color: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
                color: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FFA35D',
                color: 'white',
            },
        },
        
            input: { color: 'white', transition: '9999s' },
            label: { color: 'white' },
        });


    const CssRadioButtons = styled(Radio)({
        color:'#FFA35D',
        '&.Mui-checked': {
          color:'#FFA35D'
        }
    });

const PaymentPage = () => {
    const location = useLocation();
    const [email, setEmail] = useState();
    const [charity, setCharity] = useState(location.state ? location.state.charity : "");
    const [deliveryOption, setDeliveryOption] = useState("");
    const [postal, setPostal] = useState(""); 
    const [address, setAddress] = useState();
    const [country, setCountry] = useState();
    const [description, setDescription] = useState("")
    const {cartItems, getCartItemsWithPrice} = useContext(ShopContext);
     const itemsWithPrice = getCartItemsWithPrice();

    const navigate = useNavigate();
   
    useEffect(() => {
        console.log(charity)
    }, [charity]);
    

    const handleSubmit = () => {
        setDescription(`${postal},${address},${country},${deliveryOption},${charity}`)
        navigate("/checkout", {state:{description},
        state:{email}
        });
    }

    const sendOrderEmail = () => {
        axios.post("http://localhost:3080/sendOrder", {description : description, email : email, items : itemsWithPrice}, { headers: { "Content-Type": "application/json" } }) 
    }


    return (
        <>
            <form id="customer-form" className={styles.customerForm} onSubmit={sendOrderEmail}> 
                <div className={styles.deliveryContainer}>
                    <h1 className={styles.title}>Delivery and pickup</h1>
                    <p className={styles.underTitle}>Choose if your item will be delivered to you or if you want to come and pickup</p>
                    <div className={styles.delivery}>
                        <p>Delivery</p>
                    </div>
                    <div className={styles.pickup}>
                        <p>Pickup</p>
                    </div>
                </div>
                <div className={styles.addressInputContainer}>
                    <p className={styles.underTitle}>Check to see if we deliver to your home.</p>
                    <CssTextField label="Postal Code" id="custom-css-outlined-input" onChange={(e) => setPostal(e.target.value)}/>
                    <CssTextField label="Address" id="custom-css-outlined-input" onChange={(e) => setAddress(e.target.value)}/>
                    <CssTextField className={styles.countryInput} label="Country" id="custom-css-outlined-select" onChange={(e) => setCountry(e.target.value)}/>
                </div>
                <h2 className={styles.deliveryOptionTitle}>Delivery options</h2>
                <div className={styles.deliveryOptionsContainer}>
                    <div className={styles.deliveryOption}>
                        <CssRadioButtons className={styles.radioButtons} checked={deliveryOption === "Mailbox-postnord"} onChange={() => setDeliveryOption("Mailbox-postnord")}/>
                        <p>Mailbox Delivery - PostNord</p>
                        <p>$20.00 - Delivery between 2 and 4 business days</p>
                    </div>
                    <div className={styles.deliveryOption}>
                        <CssRadioButtons className={styles.radioButtons} checked={deliveryOption  === "Home-postnord"} onChange={() => setDeliveryOption("Home-postnord")}/>
                        <p>Home Delivery - PostNord</p>
                        <p>$20.00 - Delivery between 1 and 3 business days</p>
                    </div>
                    <div className={styles.deliveryOption}>
                        <CssRadioButtons className={styles.radioButtons} checked={deliveryOption === "Mailbox-posten"} onChange={() => setDeliveryOption("Mailbox-posten")}/>
                        <p>Mailbox Delivery - Posten</p>
                        <p>$20.00 - Delivery between 2 and 4 business days</p>
                    </div>
                    <div className={styles.deliveryOption}>
                        <CssRadioButtons className={styles.radioButtons} checked={deliveryOption  === "Home-posten"} onChange={() => setDeliveryOption("Home-posten")}/>
                        <p>Home Delivery - Posten</p>
                        <p>$20.00 - Delivery between 1 and 3 business days</p>
                    </div>
                </div>
                <div className={styles.emailInputContainer}>
                    <h2 className={styles.title}>Personal details</h2>
                    <p className={styles.underTitle}>In order to better assist you, please enter your email address before continuing your purchase.</p>
                    <CssTextField className={styles.emailInput} label="Email" id="custom-css-outlined-input" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={styles.summaryContainer}>
                    <div className={styles.summaryTitle}>
                        <h2 className={styles.title}>Summary</h2>
                    </div>
                    <div className={styles.summaryContent}>
                        <p className={styles.underTitle}>Subtotal</p>
                        <p className={styles.entry}>$299</p>
                    </div>
                    <div className={styles.summaryContent}>
                        <p className={styles.underTitle}>Estimated Shipping</p>
                        <p className={styles.entry}>FREE</p>
                    </div>
                    <div className={styles.summaryContent}>
                        <h3 className={styles.underTitle}>Total</h3>
                        <h3 className={styles.entry}>$299</h3>
                    </div>
                    
                    <button className={styles.checkoutButton} type="submit">Check out</button>
                </div>
                
            </form>
        </>
    )
        
        
}

export default PaymentPage