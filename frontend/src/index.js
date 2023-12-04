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
import List from './Pages/Products/List';
import Show from './Pages/Products/Show';

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

                    <Route path="/products" element={<List />} />
                    <Route path="/product" element={<Show />} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
);
