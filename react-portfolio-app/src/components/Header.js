import React from 'react';
import '../App.css';

function Header() {
  return (
    <header>
        <section class="page-title">
            <img id="header-img" 
            src="../images/unnamed.jpg" 
            alt="Header Photo" />
            <div>
                <h2>Sean Gordon</h2>
                <h3>Web Development Portfolio</h3>
            </div>
        </section>
        <nav class="main-nav">
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#my-work">My Work</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#resume">Resume</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;