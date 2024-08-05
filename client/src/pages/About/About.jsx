import React from 'react';
import './About.css';

function About() {

  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-section">
        <p>
          Just like a spaceship embarks on a journey, our Recipe Sharing App aims to take you on a culinary adventure.
        </p>
      </section>
      <section className="about-us-section">
        <h2>Mission</h2>
        <p>Just like a spaceship embarks on a journey, our Recipe Sharing App aims to take you on a culinary adventure. </p>
      </section>
      <section className="about-us-section">
        <h2>Vision</h2>
        <p>We are constantly seeking new ways to improve your experience</p>
      </section>
      <section className="about-us-section">
        <h2>Culture</h2>
        <p>We represent our commitment to providing a comprehensive and user-centric platform. 
        </p>
      </section>
    </div>
  );
};

export default About;
