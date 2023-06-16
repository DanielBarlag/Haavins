import React, {createContext, useState, useEffect} from "react";
import { PRODUCTS} from "../products"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    // Check if there's a saved cart in localStorage first
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        return JSON.parse(savedCart);
    }

    let cart = {};
    for (let product of PRODUCTS) {
        cart[product.id] = 0;
    }
    return cart; 
} 

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        // Whenever cartItems changes, save it to localStorage
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            } 
        }

        return totalAmount;
    }


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0}));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }

    const getCartItemsWithPrice = () => {
        return Object.entries(cartItems)
          .map(([itemId, quantity, productName]) => ({
            productName: productName,
            id: itemId,
            quantity: quantity,
            price: PRODUCTS.find((product) => product.id === Number(itemId)).price,
          }))
          .filter((item) => item.quantity > 0);
      };

      const getProductById = (itemId) => {
        return PRODUCTS.find((product) => product.id === itemId) || {}; 
    };  

    

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getCartItemsWithPrice, getProductById};

    console.log(cartItems);
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};