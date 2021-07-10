import React from 'react';
import '../App.css';

export default function Contact() {
  return (
    <main>
        <article id="my-work">
            <h2>- Projects -</h2>
            <section className="proj-container">
                <figure className="card" id="proj1">
                    <a href="https://watchub-jbs.herokuapp.com/" target="_blank"><img className="proj-ss" src="../images/watchhub.PNG" alt="Watch Hub" /></a>
                    <h3>Watch Hub</h3>
                    <a href="https://github.com/nodrognaes/WatchHub" target="_blank"><img className="proj-gh" src="../images/3345023101530077752-512.png" alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj2">
                    <a href="https://techblogu14.herokuapp.com/" target="_blank"><img className="proj-ss" src="../images/techblog.PNG" alt="Watch Hub" /></a>
                    <h3>Watch Hub</h3>
                    <a href="https://github.com/nodrognaes/TechBlog" target="_blank"><img className="proj-gh" src="../images/3345023101530077752-512.png" alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj3">
                    <a href="https://note-taker-sg.herokuapp.com/" target="_blank"><img className="proj-ss" src="../images/notetaker.PNG" alt="Watch Hub" /></a>
                    <h3>Note Taker</h3>
                    <a href="https://github.com/nodrognaes/NoteTaker" target="_blank"><img className="proj-gh" src="../images/3345023101530077752-512.png" alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj4">
                    <a href="https://nodrognaes.github.io/Work-Day-Scheduler/" target="_blank"><img className="proj-ss" src="../images/scheduler.png" alt="Work Day Scheduler" /></a>
                    <h3>Work Day Scheduler</h3>
                    <a href="https://github.com/nodrognaes/Work-Day-Scheduler" target="_blank"><img className="proj-gh" src="../images/3345023101530077752-512.png" alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj5">
                    <a className="proj-ss" href="https://nodrognaes.github.io/Trivia_Game/" target="_blank"><img className="proj-ss" src="../images/ss2.PNG" alt="Trivia Game" /></a>
                    <h3>Trivia Game</h3>
                    <a href="https://github.com/nodrognaes/Trivia_Game" target="_blank"><img className="proj-gh" src="../images/3345023101530077752-512.png" alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj6">
                    <a className="proj-ss" href="https://scratch.mit.edu/projects/517178277/" target="_blank"><img className="proj-ss" src="../images/FWaUbZI.png" alt="Cat and Mouse Game Screenshot" /></a>
                    <h3>Cat and Mouse Game</h3>
                </figure>
            </section>
        </article>
    </main>
  );
}