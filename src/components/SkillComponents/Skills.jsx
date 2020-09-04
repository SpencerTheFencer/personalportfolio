import React from 'react';
import SkillCard from './SkillCard';
import {
  JavaSvg, HtmlSvg, CssSvg, JavascriptSvg, ReactSvg, GitSvg, AndroidSvg, SassSvg, BootstrapSvg, VueSvg, SqlSvg, PythonSvg, CplusSvg, CSharpSvg, SeleniumSvg, AwsSvg, CSvg, MongoSvg, NodeSvg, ExpressSvg, DockerSvg
} from '../SvgComponents';

export default function Skills() {
  return (
    <div id="skillsPage">
      <div className="pageTitle">Skills</div>
      <div id="skillCategories">
        <div className="categorySection">
          <div className="categoryTitle">Experienced</div>
          <div className="categoryDescription">I have completed multiple projects with and have consistently used these languages/tools.</div>
          <div className="categorySkillsGrid">
            <SkillCard title="Java" titleColor="#0074BD"><JavaSvg /></SkillCard>
            <SkillCard title="HTML" titleColor="#E44D26"><HtmlSvg /></SkillCard>
            <SkillCard title="CSS" titleColor="#1572B6"><CssSvg /></SkillCard>
            <SkillCard title="JavaScript" titleColor="#323330"><JavascriptSvg /></SkillCard>
            <SkillCard title="React" titleColor="#61DAFB"><ReactSvg /></SkillCard>
            <SkillCard title="Git" titleColor="#F34F29"><GitSvg /></SkillCard>
          </div>
        </div>
        <div className="categorySection">
          <div className="categoryTitle">Competent</div>
          <div className="categoryDescription">I feel comfortable with these languages/tools, although I might have not used them recently or spent as much time with them.</div>
          <div className="categorySkillsGrid">
            <SkillCard title="Vue" titleColor="#41B883"><VueSvg /></SkillCard>
            <SkillCard title="Sass" titleColor="#CB6699"><SassSvg /></SkillCard>
            <SkillCard title="Bootstrap" titleColor="#5B4282"><BootstrapSvg /></SkillCard>
            <SkillCard title="SQL" titleColor="#424242"><SqlSvg /></SkillCard>
            <SkillCard title="Python" titleColor="#3974A4"><PythonSvg /></SkillCard>
            <SkillCard title="Android" titleColor="#A4C439"><AndroidSvg /></SkillCard>
            <SkillCard title="C++" titleColor="#00549D"><CplusSvg /></SkillCard>
            <SkillCard title="C#" titleColor="#37474F"><CSharpSvg /></SkillCard>
            <SkillCard title="Selenium" titleColor="#78909C"><SeleniumSvg /></SkillCard>
          </div>
        </div>
        <div className="categorySection">
          <div className="categoryTitle">Familiar</div>
          <div className="categoryDescription">I have used these languages/tools at least once. I know their use cases, but would need to brush up on them before using them again.</div>
          <div className="categorySkillsGrid">
            <SkillCard title="AWS" titleColor="#F7A80D"><AwsSvg /></SkillCard>
            <SkillCard title="C" titleColor="#283593"><CSvg /></SkillCard>
            <SkillCard title="Mongo" titleColor="#409433"><MongoSvg /></SkillCard>
            <SkillCard title="Node" titleColor="#83CD29"><NodeSvg /></SkillCard>
            <SkillCard title="Express" titleColor="#000000"><ExpressSvg /></SkillCard>
            <SkillCard title="Docker" titleColor="#028BB8"><DockerSvg /></SkillCard>
          </div>
        </div>
      </div>
    </div>
  )
}