import React from 'react';
import '../App.css';
import lilogo from '../images/174857.png';
import ghlogo from '../images/3345023101530077752-512.png'
import me from '../images/me.png';

export default function About() {
  return (
    <div>
      <section class="banner">
        <h1>Welcome to my Web Portfolio!</h1>
      </section>
      <main>
        <div id="about-me">
          <h2>- About Me -</h2>
          <div className="about-cont">
            <p>
                Hi! My name is Sean, and I am a full-stack web developer with a specific interest in web design. I'm a recent graduate of a coding bootcamp program through Rutgers University where I created web applications using CSS, Javascript, MERN, etc. While I am new to the field, I am excited to continue learning and growing as a developer!
                <br />
                <br />
                I currently live in southern New Jersey. Hobbies include music, film, photography, and disc golf. More content to come...
            </p>
            {/* <img id="about-img" src={me}></img> */}
          </div>   
        </div>
        <div id="contact">
          <ul className="contact-info">
            <h4>Please feel free to contact me by:</h4>
            <li>Phone: (856) 316-8625</li>
            <li>Email: <span id="email">nodrog.naes@gmail.com</span></li>
            <li className="icon" id="linkedin"><a href="https://www.linkedin.com/in/sean-gordon-3122a6196/" target="_blank"><img src={lilogo} alt="linked in icon" width="30" height="30" /></a></li>
            <li className="icon" id="github"><a href="https://github.com/nodrognaes" target="_blank"><img src={ghlogo} alt="github icon" width="30" height="30" /></a></li>
          </ul>
        </div>
      </main>
    </div>
  );
}