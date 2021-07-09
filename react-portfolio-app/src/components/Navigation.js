import React from 'react';

function Navigation({ handlePageChange }) {
  return (
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
  );
}

export default Navigation;