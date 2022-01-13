import React from 'react';
import '../App.css';
import ghlogo from '../images/3345023101530077752-512.png'
import watchhubimg from '../images/watchhub.PNG'
import techblogimg from '../images/techblog.PNG'
import notetakerimg from '../images/notetaker.PNG'
import wdsimg from '../images/scheduler.png'
import triviaimg from '../images/ss2.PNG'
import catgameimg from '../images/FWaUbZI.png'
import booksearchimg from '../images/bs.PNG'
import ecomredux from '../images/ecomredux.PNG'

export default function Contact() {
  return (
    <main>
        <article id="my-work">
            <h2>- Projects -</h2>
            <section className="proj-container">
                <figure className="card" id="proj1">
                    <a href="https://watchub-jbs.herokuapp.com/" target="_blank"><img className="proj-ss" src={watchhubimg} alt="Watch Hub" /></a>
                    <h3>Watch Hub</h3>
                    <a href="https://github.com/nodrognaes/WatchHub" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj2">
                    <a href="https://floating-river-78697.herokuapp.com/" target="_blank"><img className="proj-ss" src={booksearchimg} alt="Book Search" /></a>
                    <h3>Book Search</h3>
                    <a href="https://github.com/nodrognaes/book2" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj3">
                    <a href="https://ecom-redux.herokuapp.com/" target="_blank"><img className="proj-ss" src={ecomredux} alt="Ecom Redux" /></a>
                    <h3>Ecommerce Redux</h3>
                    <a href="https://github.com/nodrognaes/Ecom-Redux" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj4">
                    <a href="https://techblogu14.herokuapp.com/" target="_blank"><img className="proj-ss" src={techblogimg} alt="Tech Blog" /></a>
                    <h3>Tech Blog</h3>
                    <a href="https://github.com/nodrognaes/TechBlog" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj5">
                    <a href="https://note-taker-sg.herokuapp.com/" target="_blank"><img className="proj-ss" src={notetakerimg} alt="Watch Hub" /></a>
                    <h3>Note Taker</h3>
                    <a href="https://github.com/nodrognaes/NoteTaker" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj6">
                    <a href="https://nodrognaes.github.io/Work-Day-Scheduler/" target="_blank"><img className="proj-ss" src={wdsimg} alt="Work Day Scheduler" /></a>
                    <h3>Work Day Scheduler</h3>
                    <a href="https://github.com/nodrognaes/Work-Day-Scheduler" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj7">
                    <a className="proj-ss" href="https://nodrognaes.github.io/Trivia_Game/" target="_blank"><img className="proj-ss" src={triviaimg} alt="Trivia Game" /></a>
                    <h3>Trivia Game</h3>
                    <a href="https://github.com/nodrognaes/Trivia_Game" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                </figure>
                <figure className="card" id="proj8">
                    <a className="proj-ss" href="https://scratch.mit.edu/projects/517178277/" target="_blank"><img className="proj-ss" src={catgameimg} alt="Cat and Mouse Game Screenshot" /></a>
                    <h3>Cat and Mouse Game</h3>
                </figure>
            </section>
            <p id="gh-link">Please see my <a href="https://github.com/nodrognaes" target="_blank">Github</a>  page for more!</p>
        </article>
    </main>
  );
}