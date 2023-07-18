import React from "react";
import "../styles/portfolio.css";
import dinnerMovie from "../assets/projects/DinnerAndMovie.png";
import Food4Thought from "../assets/projects/Food4Thought.png";
import jateImage from "../assets/projects/JATE.png";
import noteTaker from "../assets/projects/NoteTaker.png";
import weatherDash from "../assets/projects/weatherDash.png";
import dailyPlanner from "../assets/projects/dailyPlanner.png";

const projects = [
  {
    title: "Weather Dashboard",
    description:
      "The provided HTML, CSS, and JavaScript create a current and 5-day weather forecast for any city which is chosen through the search bar.",
    image: weatherDash,
    siteLink: "https://mvincent15.github.io/Weather-dashbaord/",
    repoLink: "https://github.com/MVincent15/Weather-dashbaord",
  },
  {
    title: "Note Taker",
    description:
      "The note taker application will allow the user to organize and keep track of tasks that need to be completed. This will also provide the functionality to add and delete a new note to the list.",
    image: noteTaker,
    siteLink: "https://young-ridge-02356.herokuapp.com/notes",
    repoLink: "https://github.com/MVincent15/Notes_Taker",
  },
  {
    title: "Text-Editor PWA",
    description:
      "JATE allows the user to create notes and code using JavaScript. This is a PWA that runs both in the browser and offline when installed onto your computer/tablet/or phone, using a service worker and caching to remain functional without connection.",
    image: jateImage,
    siteLink: "https://thawing-river-33730-1ff38027b815.herokuapp.com/",
    repoLink: "https://github.com/MVincent15/Text_Editor_PWA",
  },
  {
    title: "Food4Thought",
    description:
      "This application allows users to create, store, and update their very favorite recipes. It was created to be a virtual cookbook to keep all recipes in one place so the user never loses a go-to recipe again.",
    image: Food4Thought,
    siteLink: "https://floating-journey-48487.herokuapp.com/",
    repoLink: "https://github.com/MVincent15/Food4Thought",
  },
  {
    title: "Dinner and a Movie",
    description:
      "Users can also save their last 10 selected dinner locations and movie views, so they can ensure they're trying new options each time they use the application.",
    image: dinnerMovie,
    siteLink: "https://mvincent15.github.io/Dinner-and-a-Movie/",
    repoLink: "https://github.com/MVincent15/Dinner-and-a-Movie",
  },
  {
    title: "Daily Planner",
    description:
      "The provided HTML, CSS, and JavaScript create a planner for regular work-day hours.",
    image: dailyPlanner,
    siteLink: "https://mvincent15.github.io/dailyPlanner/",
    repoLink: "https://github.com/MVincent15/dailyPlanner",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <a href={project.siteLink}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </a>
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.siteLink} className="project-link">
                  Visit Site
                </a>
                <a href={project.repoLink} className="project-link">
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
