import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  
  Github,
  Globe,
     
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: "Tactix Game",
      description:
        "Tactix is an enhanced and interactive version of the classic Tic-Tac-Toe game built using the Raylib library in C. The game offers both single-player (against AI) and multiplayer modes, providing an engaging experience with sound effects, a modern user interface, and responsive gameplay.",
      longDescription:
        "Tactix is an enhanced and interactive version of the classic Tic-Tac-Toe game built using the Raylib library in C. The game offers both single-player (against AI) and multiplayer modes, providing an engaging experience with sound effects, a modern user interface, and responsive gameplay.",
      technologies: ["Core C", "RAYLIB"],
      icon: Globe,
      color: "from-blue-500 to-blue-700",
      image: "./Public/tic.jpg",
      link: "https://github.com/Faraz-18/tactix-game-project",
    },
    {
      id: 2,
      title: "Budget-Tracker-Website",
      description:
        "A basic web-based application designed to help users manage their finances effectively. This Budget Tracker enables users to record, categorize, and analyze their expenses through an interactive and responsive interface. Built with HTML, CSS, and JavaScript, the application ensures a seamless and dynamic user experience.",
      longDescription:
        "A basic web-based application designed to help users manage their finances effectively. This Budget Tracker enables users to record, categorize, and analyze their expenses through an interactive and responsive interface. Built with HTML, CSS, and JavaScript, the application ensures a seamless and dynamic user experience.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],

      color: "from-cyan-500 to-cyan-700",
      image: "./Public/web.jpg",
      link: "https://github.com/Faraz-18/budget-tracker-website",
    },
    {
      id: 3,
      title: "Python Projects",
      description:
        "Artificial Intelligence and Machine Learning projects developed using Python programming, showcasing my early steps as a freshman exploring innovative technologies. These projects highlight problem-solving skills, analytical thinking, and the ability to apply theoretical knowledge into practical implementations.",
      longDescription:
        "Artificial Intelligence and Machine Learning projects developed using Python programming, showcasing my early steps as a freshman exploring innovative technologies. These projects highlight problem-solving skills, analytical thinking, and the ability to apply theoretical knowledge into practical implementations.",
      technologies: ["Python","AI/ML"],
      color: "from-purple-500 to-purple-700",
      image: "./Public/py.png",
      link : "https://github.com/Faraz-18/Python-Project",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative solutions I've built, from enterprise
            applications to cutting-edge mobile experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id
                )
              }
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 leading-relaxed">
                  {selectedProject === project.id
                    ? project.longDescription
                    : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div
                  className={`flex space-x-3 transition-all duration-300 ${
                    selectedProject === project.id
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-2"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border-2 border-slate-300 hover:border-blue-600 
             text-slate-700 hover:text-blue-600 rounded-lg font-medium transition-all duration-200"
                  >
                    <Github size={16} />
                    Source
                  </a>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
