// MenuPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Category.css';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Category = () => {
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const {category} = useParams();
  const [favorite, setFavorite] = useState([]);


  useEffect(() => {
    setFavorite(JSON.parse(localStorage.getItem("myItems")));
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    setLoading(true);
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category);
    const data = await response.json();

    console.log(data);

    setMeals(data.meals || []);
    setLoading(false);
  };

 
  const clickHandler = (favourite) => {
    const items = JSON.parse(localStorage.getItem("myItems")) || [];
    const index = items?.findIndex(value => value.idMeal === favourite.idMeal);

    if (index === -1 || !items) {
      items.push(favourite);
    } else {
      items.splice(index, 1);
    }
    setFavorite(items);
    const newItems = JSON.stringify(items)
    localStorage.setItem("myItems",newItems);
  }

  return (
    <div className="menu-container">
      <h1>{category}</h1>
      <div className="search-bar">
        
      </div>
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="meals-list">
          {meals.map((meal) => (
            <div title='Add To Favourite' className="meal-card" key={meal.idMeal} onClick={() => clickHandler(meal)}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strMeal}</h2>
              {favorite?.findIndex(item => item.idMeal === meal.idMeal) === -1 ? <FaRegHeart/> :<FaHeart className='fill-heart'/>}
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
