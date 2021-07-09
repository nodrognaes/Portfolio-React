import React from 'react';

export default function Contact() {
  return (
    <div id="contact">
        <h2>- Contact -</h2>
        <ul class="contact-info">
            <li>Phone: (856) 316-8625</li>
            <li>Email: <span id="email">nodrog.naes@gmail.com</span></li>
            <li class="icon" id="linkedin"><a href="https://www.linkedin.com/in/sean-gordon-3122a6196/" target="_blank"><img src="assets/images/174857.png" alt="linked in icon" width="30" height="30" /></a></li>
            <li class="icon" id="github"><a href="https://github.com/nodrognaes" target="_blank"><img src="assets/images/3345023101530077752-512.png" alt="github icon" width="30" height="30" /></a></li>
        </ul>
    </div>
  );
}