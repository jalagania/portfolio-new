/* eslint-disable react/prop-types */
import "./SingleProject.css";

function SingleProject({ project }) {
  return (
    <div className="project">
      <img src={project.cover} alt="project image" className="project__cover" />
      <p className="project__title">{project.title}</p>
      <div className="project__tools">
        {project.tools.map((tool, index) => (
          <p key={index} className={tool}>
            {tool}
          </p>
        ))}
      </div>
      <div className="project__links">
        <a href={project.netlify} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={project.github} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
}

export default SingleProject;
