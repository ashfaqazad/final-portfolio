import React, { useState } from "react";
import { gsap } from "gsap";
import projectsData from "./projectData"; // Updated data
import "../StyleSheet/Projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  React.useEffect(() => {
    gsap.fromTo(
      ".projects-heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, scrollTrigger: ".projects-heading" }
    );
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2>

      {/* Buttons for filtering */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>
          All
        </button>
        <button onClick={() => setFilter("Front-End")} className={filter === "Front-End" ? "active" : ""}>
          Front-End
        </button>
        <button onClick={() => setFilter("Full-Stack")} className={filter === "Full-Stack" ? "active" : ""}>
          Full-Stack
        </button>
      </div>

      {/* Projects rendering */}
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image}
              alt={`${project.title} thumbnail`}
              className="project-image"
            />
            <h6 className="sub-title">{project.title}</h6>
            <p className="paragraph">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link"
              >
                Live
              </a>
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;





// import React, { useState } from "react";
// import { gsap } from "gsap";
// import projectsData from "./projectData"; // Import your data
// import "../StyleSheet/Projects.css";

// const Projects = () => {
//   const [filter, setFilter] = useState("All"); // State for filtering projects

//   // Function to filter projects based on selected category
//   const filteredProjects = projectsData.filter((project) => {
//     if (filter === "All") return true;
//     return project.category === filter;
//   });

//   React.useEffect(() => {
//     gsap.fromTo(
//       ".projects-heading",
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.5, scrollTrigger: ".projects-heading" }
//     );
//   }, []);

//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="projects-heading">Projects</h2>

//       {/* Buttons for filtering */}
//       <div className="filter-buttons">
//         <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>
//           All
//         </button>
//         <button onClick={() => setFilter("Front-End")} className={filter === "Front-End" ? "active" : ""}>
//           Front-End
//         </button>
//         <button onClick={() => setFilter("Full-Stack")} className={filter === "Full-Stack" ? "active" : ""}>
//           Full-Stack
//         </button>
//       </div>

//       <div className="projects-container">
//         {filteredProjects.map((project, index) => (
//           <div key={index} className="project-card">
//             <img
//               src={project.image}
//               alt={`${project.title} thumbnail`}
//               className="project-image"
//             />
//             <h4 className="sub-title">{project.title}</h4>
//             <p className="paragraph">{project.description}</p>
//             <div className="project-stack">
//               {project.stack.map((tech, idx) => (
//                 <span key={idx} className="tech-badge">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="project-links">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="live-link"
//               >
//                 Live
//               </a>
//               <a
//                 href={project.sourceLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="source-link"
//               >
//                 Source
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;














// import React from "react";
// import { gsap } from "gsap";
// import projectsData from "./projectData"; // Import your data
// import "../StyleSheet/Projects.css";

// const Projects = () => {
//   React.useEffect(() => {
//     gsap.fromTo(
//       ".projects-heading",
//       { x: -100, opacity: 0 },
//       { x: 0, opacity: 1, duration: 1.5, scrollTrigger: ".projects-heading" }
//     );
//   }, []);

//   return (
//     <section id="projects" className="projects-section">
//       <h2 className="projects-heading">Projects</h2>
//       <div className="projects-container">
//         {projectsData.map((project, index) => (
//           <div key={index} className="project-card">
//             <img
//               src={project.image}
//               alt={`${project.title} thumbnail`}
//               className="project-image"
//             />
//             <h4 className="sub-title">{project.title}</h4>
//             <p className="paragraph">{project.description}</p>
//             <div className="project-stack">
//               {project.stack.map((tech, idx) => (
//                 <span key={idx} className="tech-badge">
//                   {tech}
//                 </span>
//               ))}
//             </div>
//             <div className="project-links">
//               <a
//                 href={project.liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="live-link"
//               >
//                 Live
//               </a>
//               <a
//                 href={project.sourceLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="source-link"
//               >
//                 Source
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




