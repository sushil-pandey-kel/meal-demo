// MyOrders.jsx
import React from 'react';
import './MyOrders.css';

const MyOrders = () => {
  // Sample orders data. Replace with dynamic data as needed.
  const orders = [
    {
      id: 1,
      date: '2024-05-25',
      items: [
        {
          name: 'Beef Wellington',
          image: 'https://www.themealdb.com/images/media/meals/1529444830.jpg',
        },
        {
          name: 'Chicken Alfredo',
          image: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
        },
      ],
      totalItems: 3,
    },
    {
      id: 2,
      date: '2024-05-20',
      items: [
        {
          name: 'Pasta Carbonara',
          image: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
        },
      ],
      totalItems: 1,
    },
  ];

  return (
    <div className="orders-container">
      <h1>My Orders</h1>
      <div className="orders-list">
        {orders.map(order => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <h2>Order Date: {order.date}</h2>
              <p>Total Items: {order.totalItems}</p>
            </div>
            <div className="order-items">
              {order.items.map((item, index) => (
                <div className="order-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
