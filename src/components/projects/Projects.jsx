import React from "react";
import "./projects.css";
//import IMG from "../../assets";

const Projects = () => {
  return (
    <section id="projects">
      <h5>what projects i've done</h5>
      <h2>My Projects</h2>

      <div className="container projects__container">
        <article className="projects__item">
          <div className="projects__item-image">
            <img src="{IMG}" alt="" />
          </div>
          <h3>Project title</h3>
          <div className="projects__item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a href="#" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-image">
            <img src="{IMG}" alt="" />
          </div>
          <h3>Project title</h3>
          <div className="projects__item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a href="#" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-image">
            <img src="{IMG}" alt="" />
          </div>
          <h3>Project title</h3>
          <div className="projects__item-cta">
            <a href="https://github.com" className="btn">
              GitHub
            </a>
            <a href="#" className="btn btn-primary">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
