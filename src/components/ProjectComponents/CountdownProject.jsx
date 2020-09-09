import React from 'react';
import Project from './Project';

export default function CountdownProject() {
  return (
    <Project title="Countdown Creator" skillsUsed="Vue, JavaScript, NodeJS, Express, and Mongo" description={getDescription()} isWebApp defaultImages={getImages()} mobileImages={getMobileImages()} gitLink={"https://github.com/jparry67/custom-countdown"} tryLink={"https://countdown.spencermitchell.me"} />
  )
}

function getDescription() {
  return "Countdown Creator is a web app built with Vue.js on the front end and NodeJS, Express, and MongoDB on the back end. Countdown Creator allows users to customize and create personal countdowns. After creating their countdown, users are given a personal URL that allows them to access their countdown anytime. As part of this project, I learned more about responsive design and state management within Vue.js, non-relational databases, and pair programming as I worked with my friend on it.";
}

function getImages() {
  return [
    "/images/projects/countdown/Countdown1.png",
    "/images/projects/countdown/Countdown2.png",
    "/images/projects/countdown/Countdown3.png",
    "/images/projects/countdown/Countdown4.png",
    "/images/projects/countdown/Countdown5.png"
  ]
}

function getMobileImages() {
  return [
    "/images/projects/countdown/Countdown1-Mobile.png",
    "/images/projects/countdown/Countdown2-Mobile.png",
    "/images/projects/countdown/Countdown3-Mobile.png",
    "/images/projects/countdown/Countdown4-Mobile.png",
    "/images/projects/countdown/Countdown5-Mobile.png"
  ]
}