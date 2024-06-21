// AboutMe.jsx
import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="profile-section">
          <img src="https://via.placeholder.com/150" alt="Profile" className="profile-picture" />
          <div className="profile-info">
            <h2>John Doe</h2>
            <p>
              Hi, I'm John Doe, a passionate food lover and the creator of this meal store. I love exploring new recipes and sharing my culinary adventures with everyone. Welcome to my world of delicious meals!
            </p>
          </div>
        </div>
        <div className="personal-comments">
          <h2>My Journey</h2>
          <p>
            Cooking has always been a part of my life. From a young age, I was fascinated by the art of creating delicious dishes. Over the years, I've honed my skills and developed a deep love for exploring new cuisines. This meal store is a reflection of my culinary journey and my desire to bring the best meals to your table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
