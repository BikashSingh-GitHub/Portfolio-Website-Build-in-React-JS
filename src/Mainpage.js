import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Mainpage() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
<div class="bg-gradient-to-r from-blue-600 via-green-400 to-yellow-300 min-h-screen">        <header className="header">
        <nav className="navbar">
          <div className="container mx-auto">
            <div className="logo">
              <a href="#">My Portfolio</a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <div className="social-media">
                    <a href="https://www.linkedin.com/in/bikash-singh-410204aa/">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/BikashSingh-GitHub">
                      <FaGithub size={24} />
                    </a>
                    <a href="https://twitter.com/BikashSinghTwit">
                      <FaTwitter size={24} />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="hero-section">
          <div className="container mx-auto">
            <div className="hero-content">
              <h1 className="hero-heading">
                Hi, I'm Bikash Singh
              </h1>
              <p className="hero-text">
                With a lifelong enthusiasm for science and technology and a firm conviction in their potential to improve our world, I have dedicated myself to the pursuit of success in this field, culminating in the completion of both a Bachelor's and Master's degree in Computer Applications.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary"
                href="https://github.com/BikashSingh-GitHub?tab=repositories"
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid-item">
              <h2 className="section-heading">
                Skills
              </h2>
              <ul className="skill-list">
                <li>
                  HTML/CSS
                </li>
                <li>
                  JavaScript
                </li>
                <li>
                  React
                </li>
                <li>
                  Node.js
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <h2 className="section-heading">
                Projects
              </h2>
              <ul className="project-list">
                <li>
                  Project 1
                </li>
                <li>
                  Project 2
                </li>
                <li>
                  Project 3
                </li>
                <li>
                  Project 4
                </li>
              </ul>
            </div>
            <div className="grid-item">
              <h2 className="section-heading
">
Contact Me
</h2>
<div className="contact-form">
<form>
<label htmlFor="name">Name:</label>
<input type="text" id="name" name="name" required />
<label htmlFor="email">Email:</label>
<input type="email" id="email" name="email" required />
<label htmlFor="message">Message:</label>
<textarea id="message" name="message" required></textarea>
<motion.button
whileHover={{ scale: 1.05 }}
className="btn btn-primary"
type="submit"
>
Submit
</motion.button>
</form>
</div>
</div>
</div>
</div>
</main>
<footer className="footer">
<div className="container mx-auto">
<p>© 2023 Bikash Singh. All rights reserved.</p>
</div>
</footer>
</div>
);
}

export default Mainpage;