// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUtensils, FaInfoCircle, FaShoppingCart, FaClipboardList } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/" className="sidebar-link">
          <FaHome className="sidebar-icon" />
          Home
        </Link>
        <Link to="/menu" className="sidebar-link">
          <FaUtensils className="sidebar-icon" />
          Menu
        </Link>
        
        
        <Link to="/favourites" className="sidebar-link">
          <FaClipboardList className="sidebar-icon" />
          Favourites
        </Link>
        <Link to="/randommeal" className="sidebar-link">
          <FaClipboardList className="sidebar-icon" />
          Random Meal
        </Link>
        <Link to="/aboutme" className="sidebar-link">
          <FaInfoCircle className="sidebar-icon" />
          About Me
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
