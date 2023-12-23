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
import PageNotFound from './Pages/Errors/PageNotFound';
import { default as axios } from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));

// set base url
axios.defaults.baseURL = 'http://localhost:5000/api/v1';

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

                    <Route path="/products/:op/:arg/:slug?" element={<ProductsList />} />
                    <Route path="/product/:id/:slug?" element={<ShowProduct />} />

                    <Route path="/orders" element={<OrdersList />} />
                    <Route path="/order/:code" element={<ShowOrder />} />

                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
