export default function ArrowDown() {
  return <div className="arrow"></div>;
}
import React from "react";
import "./ArrowDown.css";

export default function ArrowDown({ onClick }) {
  return (
    <div 
      className="arrow" 
      onClick={onClick} 
      title="Scroll down 👇"
    ></div>
  );
}
function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-overlay">
        <p>View Project</p>
      </div>
    </div>
  );
}
<a
  href="https://www.figma.com/proto/MYL8kyJz7hyJdYVnowQsBK/Postify?node-id=266-809"
  target="_blank"
  rel="noopener noreferrer"
  className="project-card"
>
  <div className="project-overlay">
    <span>View Project</span>
  </div>

</a>
