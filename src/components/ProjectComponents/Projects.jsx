import React from 'react';
import CountdownProject from './CountdownProject';
import TweeterProject from './TweeterProject';
import FamilyMapProject from './FamilyMapProject';
import PortfolioProject from './PortfolioProject';

export default function Projects() {
  return (
    <div id="projectsPage">
      <div className="pageTitle">Projects</div>
      <PortfolioProject />
      <TweeterProject />
      <CountdownProject />
      <FamilyMapProject />
    </div>
  )
}