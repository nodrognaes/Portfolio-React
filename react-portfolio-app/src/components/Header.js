import React from 'react';
import '../App.css';

export default function Header({ handlePageChange }) {
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
            <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#my-work"
          onClick={() => handlePageChange('Work')}
        >
          My Work
        </a>
      </li>
      <li id="contact">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')} 
        >
          Resume
        </a>
      </li>
    </ul>
        </nav>
    </header>
  );
}

