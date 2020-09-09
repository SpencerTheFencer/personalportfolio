import React, { useState } from 'react';

export default function Project(props) {
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  let [isDefaultPlatformSelected, setIsDefaultPlatformSelected] = useState(true);
  const { title, skillsUsed, isWebApp, description, defaultImages, mobileImages, gitLink, tryLink } = props

  const navigateLeft = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(defaultImages.length - 1);
    }
    else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  const navigateRight = () => {
    if (currentImageIndex === defaultImages.length - 1) {
      setCurrentImageIndex(0);
    }
    else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  const CarouselImageIcons = () => {
    return (
      defaultImages.map((image, index) => <div className={`carouselIcon${currentImageIndex === index ? " active" : ""}`} onClick={() => setCurrentImageIndex(index)} key={index}></div>)
    )
  }

  return (
    <div className="projectContainer">
      <div className="projectTitle">{title || ""}</div>
      <div className="project">
        <div className="imageContainer">
          {isWebApp
            ? <div className="platformSelectButton">
              <div className={`desktopButton${isDefaultPlatformSelected ? " active" : ""}`} onClick={() => setIsDefaultPlatformSelected(true)}>Desktop</div>
              <div className={`mobileButton${!isDefaultPlatformSelected ? " active" : ""}`} onClick={() => setIsDefaultPlatformSelected(false)}>Mobile</div>
            </div>
            : null
          }
          {isDefaultPlatformSelected
            ? <img className={`image ${isWebApp ? "desktopImage" : "mobileImage"}`} src={defaultImages[currentImageIndex]} alt="project" />
            : <img className="image mobileImage" src={mobileImages[currentImageIndex]} alt="project" />
          }
          <div className="carousel">
            <i className="material-icons leftArrow" onClick={navigateLeft}>keyboard_arrow_left</i>
            <CarouselImageIcons />
            <i className="material-icons rightArrow" onClick={navigateRight}>keyboard_arrow_right</i>
          </div>
        </div>
        <div className="projectSummary">
          <div className="description">{description || ""}</div>
          <div className="skillsUsed">Skills developed: {skillsUsed || ""}</div>
          <div className="projectButtons">
            {gitLink ? <a href={gitLink} className="gitButton projectButton" target="_blank" rel="noopener noreferrer">Source code</a> : <p>*Because this was for a class project, I did not put the source code in a public repo</p>}
            {tryLink ? <a href={tryLink} className="tryButton projectButton" target="_blank" rel="noopener noreferrer">Try it out</a> : null}
          </div>
        </div>
      </div>
    </div>
  )
}