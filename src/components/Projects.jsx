import { projects } from "../projects";
import "./Projects.css";
import SingleProject from "./SingleProject";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h3 className="section-heading">Projects</h3>
        <div className="projects-container">
          {projects.map((project, index) => (
            <SingleProject key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
