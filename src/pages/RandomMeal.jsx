// MenuPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgLayoutGrid } from 'react-icons/cg';

const RandomMeal = () => {
  const [meals, setMeals] = useState([]);
  
  const [loading, setLoading] = useState(false);
  


  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {

    console.log('clicked')
    setLoading(true);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();

    console.log(data);

    setMeals(data.meals || []);
    setLoading(false);
  };

 

 
 

  return (
    <div className="menu-container">
      <h1>Random Meal</h1>
      <div className="search-bar">
        
      </div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <><div className="meals-list">
            {meals.map((meal) => (
              <div className="meal-card" key={meal.idMeal} >
                <img src={meal.strMealThumb} alt={meal.strMeal} />

                <h3>{meal.strMeal}</h3>
                <h2>{meal.strCategory}</h2>

              </div>
            ))}
          </div ><button className="add-to-cart-button" onClick={fetchCategoryData}>Generate</button></>
      )}
    </div>
  );
};

export default RandomMeal;
