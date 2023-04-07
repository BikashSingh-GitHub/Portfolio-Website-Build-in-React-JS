import React from 'react';
import './travel.css'; // import CSS file

function TravelPage() {
  return (
    <div className="travel-page">
      <h1>Welcome to our Travel Website</h1>
      <p>Explore the world with us!</p>
      <h2>Featured Destinations</h2>
      <ul className="featured-destinations">
        <li>
          <a href="/destinations/paris">
            <img src="https://source.unsplash.com/800x600/?paris" alt="Paris" />
            <h3>Paris, France</h3>
          </a>
        </li>
        <li>
          <a href="/destinations/tokyo">
            <img src="https://source.unsplash.com/800x600/?tokyo" alt="Tokyo" />
            <h3>Tokyo, Japan</h3>
          </a>
        </li>
        <li>
          <a href="/destinations/new-york">
            <img src="https://source.unsplash.com/800x600/?new-york" alt="New York" />
            <h3>New York City, USA</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default TravelPage;
