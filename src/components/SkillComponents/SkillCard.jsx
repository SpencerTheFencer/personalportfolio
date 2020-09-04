import React from 'react';

export default function SkillCard(props) {
  const { title, titleColor } = props;

  return (
    <div className="skillCard">
      {props.children}
      <div className="skillTitle" style={{ color: titleColor || "" }}>{title || ""}</div>
    </div>
  )
}