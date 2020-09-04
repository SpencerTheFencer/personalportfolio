import React from 'react';
import Project from './Project';

export default function FamilylMapProject() {
  return (
    <Project title="Family Map" skillsUsed="Java, Android, SQL" description={getDescription()} defaultImages={getImages()} />
  )
}

function getDescription() {
  return "Family Map is a Java Android app with a Java local server for the back end. The app provides a geographical view of fake family history (via dummy data). Settings are given to display or filter out certain relationships and events. Because this was my first Android app I created, I got a lot of experience with the nuances of android programming. Along with that, I developed a better understanding of relational databases and SQL.";
}

function getImages() {
  return [
    "/images/projects/family-map/FamilyMap1.png",
    "/images/projects/family-map/FamilyMap2.png",
    "/images/projects/family-map/FamilyMap3.png",
    "/images/projects/family-map/FamilyMap4.png",
    "/images/projects/family-map/FamilyMap5.png",
    "/images/projects/family-map/FamilyMap6.png",
    "/images/projects/family-map/FamilyMap7.png",
    "/images/projects/family-map/FamilyMap8.png",
  ]
}