import React from 'react';
import Project from './Project';

export default function PortfolioProject() {
  return (
    <Project title="Portfolio" skillsUsed="React, JavaScript, Sass" description={getDescription()} isWebApp defaultImages={getImages()} mobileImages={getMobileImages()} gitLink={"https://github.com/SpencerTheFencer/personalportfolio"} />
  )
}

function getDescription() {
  return "My Portfolio is a web app built with React.js. My goal for the project was to build a responsive web app that would allow me to showcase some of my projects and skills. This project helped me to learn and develop a better understanding of Sass, CSS animations, and state management and hooks in React.js.";
}

function getImages() {
  return [
    "/images/projects/portfolio/Portfolio1.png",
    "/images/projects/portfolio/Portfolio2.png",
    "/images/projects/portfolio/Portfolio3.png",
    "/images/projects/portfolio/Portfolio4.png",
  ]
}

function getMobileImages() {
  return [
    "/images/projects/portfolio/Portfolio1-Mobile.png",
    "/images/projects/portfolio/Portfolio2-Mobile.png",
    "/images/projects/portfolio/Portfolio3-Mobile.png",
    "/images/projects/portfolio/Portfolio4-Mobile.png",
  ]
}