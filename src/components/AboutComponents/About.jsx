import React, { useState, useEffect } from 'react';
import AboutSection from './AboutSection'

export default function About() {
  let [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    document.getElementById("about0").classList.add("active");
    document.querySelector("#about3 .description").classList.add("keep");
  }, []);

  const showNextSection = (e, startOver = false) => {
    let sectionToDisappear = document.getElementById(`about${currentSection}`);
    let nextSection = startOver ? 0 : currentSection + 1;
    let sectionToAppear = document.getElementById(`about${nextSection}`);
    sectionToDisappear.classList.add("disappear");
    setTimeout(() => {
      sectionToDisappear.classList.remove("active");
      sectionToDisappear.classList.remove("disappear");
      sectionToAppear.classList.add("active")
      setCurrentSection(nextSection);
    }, 850);
  }

  const startOver = () => {
    showNextSection({}, true);
  }

  return (
    <div id="aboutPage">
      <div className="pageTitle">About Me</div>
      <AboutSection aboutText="Software Engineer" imageSrc="/images/about/se1.jpg" id="about0" descriptionAppear />
      <AboutSection aboutText="Software Engineer" imageSrc="/images/about/se2.jpg" additionalText="I enjoy creating software that is fun and easy to use" id="about1" descriptionDisappear />
      <AboutSection aboutText="BYU Student" imageSrc="/images/about/byu1.jpg" id="about2" descriptionAppear />
      <AboutSection aboutText="BYU Student" imageSrc="/images/about/byu2.jpg" additionalText="I'm majoring in Computer Science (emphasis on Software Engineering), and minoring in both Business and Family Life" id="about3" />
      <AboutSection aboutText="BYU Student" imageSrc="/images/about/byu3.jpg" additionalText="I will graduate in December 2021" id="about4" descriptionDisappear />
      <AboutSection aboutText="Husband" imageSrc="/images/about/husband1.jpg" id="about5" descriptionAppear />
      <AboutSection aboutText="Husband" imageSrc="/images/about/husband2.jpg" additionalText="My wife and I got married in May 2019 and live in Provo, UT" id="about6" descriptionDisappear />
      <div className={`aboutBtn nextButton${currentSection === 6 ? " lastPage" : ""}`} onClick={showNextSection}>
        <div className="nextButtonText">Next</div>
        <i className="nextArrow material-icons">keyboard_arrow_right</i>
      </div>
      <a className={`aboutBtn skillsButton${currentSection === 6 ? " lastPage" : ""}`} href="/skills">Go to Skills</a>
      <div className={`aboutBtn startOverButton${currentSection === 6 ? " lastPage" : ""}`} onClick={startOver}>
        <div className="startOverButtonText">Start Over</div>
        <i className="startOverIcon material-icons">refresh</i>
      </div>
    </div>
  )
}