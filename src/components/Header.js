import React from 'react';
import '../App.css';
import headerPhoto from '../images/unnamed.jpg'

export default function Header({ handlePageChange }) {
  return (
    <header>
        <section class="page-title">
            <a href="#about" onClick={() => handlePageChange('About')}>
              <img id="header-img" 
              src={headerPhoto}
              alt="Header Photo" />
            </a>
            <div>
                <h2>Sean Gordon</h2>
                <h3>Web Development Portfolio</h3>
            </div>
        </section>
        <nav className="main-nav">
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

