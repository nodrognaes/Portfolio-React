import React from 'react';
import '../App.css';

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
            <DownloadLink src="../../public/resume.pdf">Click to download</DownloadLink>
        </div>
    </main>
  );
}