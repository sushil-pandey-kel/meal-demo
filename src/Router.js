// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Menu from './pages/Menu';
import Cart from './components/Cart';
import MyOrders from './pages/MyOrders';
import './App.css'; // Ensure you have some basic styling

const AppRouter = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myorders" element={<MyOrders />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
