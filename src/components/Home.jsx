import React from 'react';
import { Name, LinkedInSvg, GithubSvg, FacebookSvg } from './SvgComponents';

export default function Home() {
  return (
    <div id="homePage">
      <div id="introSection">
        <div id="introText">
          <p id="hello">Hi!</p>
          <p id="myNameIs">My name is</p>
          <Name />
        </div>
        <div id="introImage"><img src="/images/home-portrait.jpg" alt="Spencer Mitchell" /></div>
      </div>
      <div id="introButtons">
        <a id="aboutButton" className="btn" href="/about">About Me</a>
        <a id="projectsButton" className="btn" href="/projects">Check Out My Projects</a>
        <a id="resumeButton" className="btn" href="/resume.pdf" target="_blank" rel="noopener noreferrer"><i className="material-icons">file_download</i>Download Resume</a>
      </div>
      <div id="socialLinks">
        <a className="socialLink" href="https://www.linkedin.com/in/spencerkmitchell" target="_blank" rel="noopener noreferrer"><LinkedInSvg /></a>
        <a className="socialLink" href="https://www.github.com/SpencerTheFencer" target="_blank" rel="noopener noreferrer"><GithubSvg /></a>
        <a className="socialLink" href="https://www.facebook.com/spencer.mitchell.330/" target="_blank" rel="noopener noreferrer"><FacebookSvg /></a>
      </div>
    </div>
  )
}