import React from 'react';
import '../App.css';
import ghlogo from '../images/3345023101530077752-512.png'
import jammmimg from '../images/jammmin.png';
import watchhubimg from '../images/watchhub.PNG'
import techblogimg from '../images/techblog.PNG'
import notetakerimg from '../images/notetaker.PNG'
import wdsimg from '../images/scheduler.png'
import triviaimg from '../images/ss2.PNG'
import catgameimg from '../images/FWaUbZI.png'
import booksearchimg from '../images/bs.PNG'
import ecomredux from '../images/ecomredux.PNG'
import eight from '../images/8ball.png';
import colmar from '../images/colmar.png';
import torta from '../images/torta.png';
import limitless from '../images/limitless.png';
import wordts from '../images/wordts.png';

export default function Contact() {
    return (
        <main>
            <article id="my-work">
                <h2>- Projects -</h2>
                <section className="proj-container">
                    <figure className="card" id="proj10">
                        <a href="https://wordts.herokuapp.com/" target="_blank"><img className="proj-ss" src={wordts} alt="Colmar" /></a>
                        <h3>Wordts - word game</h3>
                        <a href="https://github.com/nodrognaes/Wordts" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                    </figure>
                    <figure className="card" id="proj0">
                        <a href="https://www.limitlessyoga.org/" target="_blank"><img className="proj-ss" src={limitless} alt="Limitless Yoga" /></a>
                        <h3>Limitless Yoga (Squarespace demo)</h3>
                    </figure>
                    <figure className="card" id="proj7">
                        <a href="https://nodrognaes.github.io/ColmarAcademy/" target="_blank"><img className="proj-ss" src={colmar} alt="Colmar" /></a>
                        <h3>Colmar Academy (layout demo)</h3>
                        <a href="https://github.com/nodrognaes/ColmarAcademy" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                    </figure>
                    <figure className="card" id="proj8">
                        <a href="https://nodrognaes.github.io/TortoiseshellOptics/" target="_blank"><img className="proj-ss" src={torta} alt="Tortoiseshell Optics" /></a>
                        <h3>Tortoiseshell Optics (responsive demo)</h3>
                        <a href="https://github.com/nodrognaes/TortoiseshellOptics" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                    </figure>
                    <figure className="card" id="proj1">
                        <a href="https://jammminsg.herokuapp.com/" target="_blank"><img className="proj-ss" src={jammmimg} alt="Jammmin" /></a>
                        <h3>Jammmin (Spotify login required)</h3>
                        <a href="https://github.com/nodrognaes/Jammmin" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                        {/* <p>Music search engine to create playlists and add to</p> */}
                    </figure>
                    <figure className="card" id="proj2">
                        <a href="https://floating-river-78697.herokuapp.com/" target="_blank"><img className="proj-ss" src={booksearchimg} alt="Book Search" /></a>
                        <h3>Book Search</h3>
                        <a href="https://github.com/nodrognaes/book2" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                    </figure>
                    <figure className="card" id="proj9">
                        <a href="https://watchub-jbs.herokuapp.com/" target="_blank"><img className="proj-ss" src={watchhubimg} alt="Watch Hub" /></a>
                        <h3>Watch Hub</h3>
                        <a href="https://github.com/nodrognaes/WatchHub" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
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
                        <a href="https://nodrognaes.github.io/Trivia_Game/" target="_blank"><img className="proj-ss" src={triviaimg} alt="Trivia Game" /></a>
                        <h3>Trivia Game</h3>
                        <a href="https://github.com/nodrognaes/Trivia_Game" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                    </figure>
                    <figure className="card" id="proj6">
                        <a href="https://nodrognaes.github.io/8ball/" target="_blank"><img className="proj-ss" src={eight} alt="8ball" /></a>
                        <h3>Magic 8ball</h3>
                        <a href="https://github.com/nodrognaes/8ball" target="_blank"><img className="proj-gh" src={ghlogo} alt="github icon" width="30" height="30" /></a>
                    </figure>
                </section>
                <p id="gh-link">Please see my <a href="https://github.com/nodrognaes" target="_blank">Github</a>  page for more!</p>
            </article>
        </main>
    );
}