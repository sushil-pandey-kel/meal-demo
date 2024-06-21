import React, { useContext, useState } from 'react';
import OrderContext from '../contexts/OrderContext';

const Checkout = () => {
  const { orders, addOrder } = useContext(OrderContext);
  const [address, setAddress] = useState('');

  const handleOrder = () => {
    // Add order logic
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
