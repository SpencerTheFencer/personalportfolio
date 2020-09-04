import React from 'react';
import Project from './Project';

export default function TweeterProject() {
  return (
    <Project title="Tweeter" skillsUsed="Java, Android, AWS" description={getDescription()} defaultImages={getImages()} />
  )
}

function getDescription() {
  return "Tweeter is a Java Android app with AWS for the back end. Tweeter is a mini Twitter clone, allowing users to follow other people and create status posts. The goal for this project was to use design patterns and get exposed to AWS. Some design patterns used included the Observer, MVP, and Facade patterns. As for AWS, I learned API Gateway, Lambda, and DynamoDB.";
}

function getImages() {
  return [
    "/images/projects/tweeter/Tweeter1.png",
    "/images/projects/tweeter/Tweeter2.png",
    "/images/projects/tweeter/Tweeter3.png",
    "/images/projects/tweeter/Tweeter4.png",
    "/images/projects/tweeter/Tweeter5.png",
    "/images/projects/tweeter/Tweeter6.png",
    "/images/projects/tweeter/Tweeter7.png",
    "/images/projects/tweeter/Tweeter8.png",
    "/images/projects/tweeter/Tweeter9.png",
    "/images/projects/tweeter/Tweeter10.png",
  ]
}