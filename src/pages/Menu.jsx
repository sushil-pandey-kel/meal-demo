// MenuPage.jsx
import React, { useState, useEffect } from 'react';
import './Menu.css';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async (search = '') => {
    setLoading(true);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();

    console.log(data);

    setMeals(data.categories || []);
    setLoading(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value) {
      setLoading(true);
      setTimeout(() => {
        fetchMeals(value);
      }, 1000); // Delay search by 1 second
    } else {
      fetchMeals();
    }
  };
  const handleAddToCart = () => {
    // addToCart(meal);
  };

  const clickHandler = (id)=> {
    navigate('/category/' + id)
  }

  return (
    <div className="menu-container">
      <h1>Menu</h1>
      <div className="search-bar">
        {/* <input
          type="text"
          placeholder="Search for a meal..."
          value={searchTerm}
          onChange={handleSearchChange}
        /> */}
      </div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="meals-list">
          {meals.map((meal) => (
            <div className="meal-card" key={meal.idCategory} onClick={() => clickHandler(meal.strCategory)}>
              <img src={meal.strCategoryThumb} alt={meal.strCategory} />
              <h2>{meal.strCategory}</h2>
              <p title={meal.strCategoryDescription}>{meal.strCategoryDescription.slice(0, 100)}...</p>
              {/* <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;
