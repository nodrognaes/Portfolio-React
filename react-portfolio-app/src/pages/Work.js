import React from 'react';
import '../App.css';

export default function Contact() {
  return (
    <main>
        <article id="my-work">
            <h2>- Projects -</h2>
            <section class="container">
                <section className="first-proj">
                    <figure class="card" id="proj1">
                        <a href="https://watchub-jbs.herokuapp.com/" target="_blank"><img src="../images/watchhub.PNG" alt="Watch Hub" /></a>
                        <h3>Watch Hub</h3>
                    </figure>
                </section>
                <section className="other">
                    <figure class="card" id="proj2">
                        <a href="https://nodrognaes.github.io/Work-Day-Scheduler/" target="_blank"><img src="../images/scheduler.png" alt="Work Day Scheduler" /></a>
                        <h3>Work Day Scheduler</h3>
                    </figure>
                    <figure className="card" id="proj3">
                        <a href="https://nodrognaes.github.io/Trivia_Game/" target="_blank"><img src="../images/ss2.PNG" alt="Trivia Game" /></a>
                        <h3>Trivia Game</h3>
                    </figure>
                    <figure className="card" id="proj4">
                        <a href="https://scratch.mit.edu/projects/517178277/" target="_blank"><img src="../images/FWaUbZI.png" alt="Cat and Mouse Game Screenshot" /></a>
                        <h3>Cat and Mouse Game</h3>
                    </figure>
                </section> 
            </section>
        </article>
    </main>
  );
}