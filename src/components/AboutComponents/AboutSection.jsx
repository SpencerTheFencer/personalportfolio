import React from 'react';

export default function AboutSection(props) {
  const { aboutText, additionalText, imageSrc, id, descriptionAppear, descriptionDisappear } = props

  return (
    <div id={id} className="aboutSection" >
      <img className="aboutImage" src={imageSrc || ""} alt="about" />
      <div className="aboutText">
        <div className="iAmSection">
          <div className="iAm">I'm a</div>
          <div className={`description${descriptionAppear ? " enter" : ""}${descriptionDisappear ? " leave" : ""}`}>{aboutText || ""}</div>
        </div>
        <div className="additionalText">{additionalText || ""}</div>
      </div>
    </div>
  )
}