import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useLocation } from "react-router-dom";
import { useContext} from 'react';



import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import axios from "axios"; 
import { Product } from "../ProductPage/Product";


const stripePromise = loadStripe("pk_test_51MvMUGGozc3MD4kaNWu4arFQlWVWs4CUozGeEmTJBI65L6BfeoLl6eM4idYY4HTzNWY2IsbJRbQj8BTSy9bM6cBR00a6onxXC5");


const CheckoutPage = () => {
  const location = useLocation();
  const description = location.state.description;
  const email = location.state.email;
  const [clientSecret, setClientSecret] = useState("");
  const {cartItems, getCartItemsWithPrice} = useContext(ShopContext);
  const itemsWithPrice = getCartItemsWithPrice();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
       console.log("useEffect")
       console.log(description)
       console.log(email)
    axios.post("http://localhost:3080/create-payment-intent", {description : description, email : email, items : itemsWithPrice}, { headers: { "Content-Type": "application/json" } })
    .then((res) => setClientSecret(res.data.clientSecret))
   
    .catch((error) => console.log(error));
    
   
}, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

      return (
        <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm/>
          </Elements>
        )}
      </div>
      );
    }


export default CheckoutPage;
