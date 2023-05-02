import React from "react";
// import { Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Home';
import Login from './views/Login';
import { Route, Routes } from "react-router-dom";
import Register from "./views/Register";
import Cart from "./views/Cart";
import Dashboard from "./views/Dashboard";
import WishList from "./views/WishList";
// import Footer from './components/footer/Footer';
// import MobileToggle from './components/footer/MobileToggle';
// import Main from './components/main/main';
// import HeaderOne from './components/navigation/HeaderOne';
// import HeaderTwo from './components/navigation/HeaderTwo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="account" element={<Dashboard />} />
        <Route path="wishlist" element={<WishList />} />
      </Routes>
    </div>
  );
}

export default App;
