import React from "react";
// import { Route, Routes } from "react-router-dom";

import './App.css';
import Home from './Home';
import Login from './views/Login';
import { Route, Routes } from "react-router-dom";
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
      </Routes>
    </div>
  );
}

export default App;
