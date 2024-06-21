// Cart.jsx
import React from 'react';
import './Cart.css';

const Cart = () => {
  // Sample cart items. Replace with dynamic data as needed.
  const cartItems = [
    {
      id: 1,
      name: 'Beef Wellington',
      image: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
      quantity: 2,
      price: 25.99
    },
    {
      id: 2,
      name: 'Chicken Alfredo',
      image: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
      quantity: 1,
      price: 15.99
    }
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
