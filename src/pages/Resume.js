import React from 'react';
import '../App.css';
import resume from '../Sean Gordon Resume 2022 (1).pdf';
import img from '../images/resumess.PNG';

class DownloadLink extends React.Component {
    render() {
        return (
            <a href={this.props.src} download>{this.props.children}</a>
        )
    }
}

export default function Resume() {
  return (
    <main>
        <div className="resume">
            <h2>- Resume -</h2>
            <a href="https://docs.google.com/document/d/1KWwjtTPQsxPEF748a4Niun8k49PfmHEw5plewp7zZtU/edit?usp=sharing" target=" ">
                <img id="resumeimg" src={img} />
            </a>
            <br />
            <br />
            <a href="https://docs.google.com/document/d/1KWwjtTPQsxPEF748a4Niun8k49PfmHEw5plewp7zZtU/edit?usp=sharing" target=" ">
                Click to view on Google Docs or
            </a>
            <DownloadLink src={resume}>Download PDF</DownloadLink>
        </div>
    </main>
  );
}