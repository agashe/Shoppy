import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './Layout/App';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignUp from './Pages/Auth/SignUp';
import SignIn from './Pages/Auth/SignIn';
import Profile from './Pages/Auth/Profile';
import ProductsList from './Pages/Products/List';
import ShowProduct from './Pages/Products/Show';
import OrdersList from './Pages/Orders/List';
import ShowOrder from './Pages/Orders/Show';
import Checkout from './Pages/Checkout';
import Cart from './Pages/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/profile" element={<Profile />} />

                    <Route path="/products" element={<ProductsList />} />
                    <Route path="/product" element={<ShowProduct />} />

                    <Route path="/orders" element={<OrdersList />} />
                    <Route path="/order" element={<ShowOrder />} />

                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/cart" element={<Cart />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
