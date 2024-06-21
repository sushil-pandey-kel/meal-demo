import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import AboutMe from './pages/AboutMe';
import Cart from './components/Cart';
import MyOrders from './pages/MyOrders';
import './App.css';
import Category from './pages/Category';
import Favourite from './pages/Favourite';
import RandomMeal from './pages/RandomMeal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiThMenu } from "react-icons/ti";
import Offcanvas from 'react-bootstrap/Offcanvas';

const App = () => {
  const [isShow, setShow] = useState(false);
  const handleShow = () => {
    setShow(!isShow);
  }

  return (
    <div className="app">
      <div className='menu-icon' onClick={handleShow}>
        <TiThMenu className='humIcon' />
      </div>
      {/* <Sidebar /> */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/favourites" element={<Favourite />} />
          <Route path="/randommeal" element={<RandomMeal />} />

        </Routes>

        <Offcanvas show={isShow} onHide={handleShow}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Meal App</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default App;
