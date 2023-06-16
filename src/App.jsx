import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Navbar from "./components/NavBar/NavBar";
import  ProductPage from "./pages/ProductPage/ProductPage";
import  Cart  from "./pages/Cart/Cart";
import Charity from "./pages/Charity/Charity";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { ShopContextProvider } from "./context/shop-context";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import SingularProductPage from "./pages/SingularProductPage/SingularProductPage";
import HomePage from "./pages/Homepage/HomePage";
import CharitySelection from "./pages/CharitySelection/CharitySelection";
import Thankyou from "./pages/Thankyou/Thankyou";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/thankyou" element={<Thankyou/>} />
            <Route path="/charityselection" element={<CharitySelection/>}/>
            <Route path="/charity" element={<Charity/>} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/productpage" element={<ProductPage/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="productpage/:id" element={<SingularProductPage/>}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
