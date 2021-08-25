import React from 'react';
import '../App.css';
import lilogo from '../images/174857.png';
import ghlogo from '../images/3345023101530077752-512.png'

export default function Contact() {
  return (
    <main>
        <div id="contact">
            <h2>- Contact -</h2>
            {/* <div id="contact-form">
              <form>
                <div>
                  <label htmlFor="name">Name:</label>
                  <br />
                  <input type="text" id="name" required />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <br />
                  <input type="email" id="email" required />
                </div>
                <div>
                  <label htmlFor="message">Message:</label>
                  <br />
                  <textarea id="message" required />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div> */}
            <ul className="contact-info">
                <h4>Please feel free to contact me by:</h4>
                <li>Phone: (856) 316-8625</li>
                <li>Email: <span id="email">nodrog.naes@gmail.com</span></li>
                <li className="icon" id="linkedin"><a href="https://www.linkedin.com/in/sean-gordon-3122a6196/" target="_blank"><img src={lilogo} alt="linked in icon" width="30" height="30" /></a></li>
                <li className="icon" id="github"><a href="https://github.com/nodrognaes" target="_blank"><img src={ghlogo} alt="github icon" width="30" height="30" /></a></li>
            </ul>
        </div>
    </main>
  );
}