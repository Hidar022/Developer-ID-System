import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Projects() {

  const projects = [

    {
      title: "VTU App",

      desc:
        "Virtual Top-Up platform for airtime, data bundles and utility payments.",

      tech: ["Django", "React", "REST API"],

      // 🔥 REPLACE THIS LATER WITH YOUR REAL LIVE LINK
      live: "https://bin-datasub.vercel.app",

      // 🔥 REPLACE THIS LATER WITH YOUR REAL GITHUB LINK
      github: "https://github.com/Hidar022/Bin_datasub",
    },

    {
      title: "Tailoring Management System",

      desc:
        "Smart tailoring system for customer measurements, orders and payments.",

      tech: ["Python", "Django", "SQLite"],

      live: "https://hidar022.pythonanywhere.com/",
      github: "https://github.com/Hidar022/Tailoring_website",
    },

    {
      title: "BizDashboard",

      desc:
        "Business analytics dashboard with transactions, charts and management tools.",

      tech: ["React", "Tailwind", "Django"],

      live: "https://biz-dashboard-frontend.vercel.app/",
      github: "https://github.com/Hidar022/BizDashboard",
    },

    {
      title: "Blood Bank Management",

      desc:
        "System for managing blood donors, requests and hospital records.",

      tech: ["Python", "Database", "Django"],

      live: "https://blood-bank-management-system-xi-six.vercel.app/",
      github: "https://github.com/Hidar022/Blood-Bank-Management-System",
    },

    {
      title: "KSITM-VLCP",

      desc:
        "Virtual Learning & Collaboration Platform for students and lecturers.",

      tech: ["React", "API", "Django"],

      live: "https://ksitm-vlcp-roan.vercel.app/",
      github: "https://github.com/Hidar022/KSITM-VLCP",
    },

  ];

  return (
    <section id="projects" className="relative z-40 px-6 md:px-14 py-28">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <p className="text-yellow-400 font-semibold mb-4">
          MY PROJECTS
        </p>

        <h2 className="text-4xl md:text-6xl font-black">

          Featured{" "}

          <span className="text-blue-400">
            Development Work
          </span>

        </h2>

      </motion.div>

      {/* PROJECT GRID */}
            <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        max-w-7xl
        mx-auto
        ">

       {projects.map((project, index) => (

        <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            duration: 0.7,
            delay: index * 0.1,
            }}
            viewport={{ once: true }}

            className={`
            group
            relative
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[35px]
            p-8
            overflow-hidden
            hover:border-blue-500/30
            transition-all
            duration-500

            ${index === 3 ? "xl:col-start-1" : ""}
            ${index === 4 ? "xl:col-start-3" : ""}
            `}
        >
            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/5
                to-yellow-400/5
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
              "
            ></div>

            {/* ICON */}
            <div
              className="
                relative
                z-20
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-br
                from-blue-500
                to-yellow-400
                flex
                items-center
                justify-center
                mb-8
                shadow-lg
                shadow-blue-500/20
              "
            >

              {index % 2 === 0 ? (
                <FaReact size={28} />
              ) : (
                <FaPython size={28} />
              )}

            </div>

            {/* TITLE */}
            <h3 className="relative z-20 text-2xl font-black mb-5">

              {project.title}

            </h3>

            {/* DESCRIPTION */}
            <p className="relative z-20 text-gray-400 leading-relaxed">

              {project.desc}

            </p>

            {/* TECH STACK */}
            <div className="relative z-20 flex flex-wrap gap-3 mt-8">

              {project.tech.map((tech, techIndex) => (

                <span
                  key={techIndex}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-[#081121]
                    border
                    border-white/10
                    text-sm
                    text-gray-300
                  "
                >

                  {tech}

                </span>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="relative z-20 flex gap-4 mt-10">

              {/* LIVE DEMO */}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  bg-blue-500
                  hover:bg-blue-600
                  px-5
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  font-semibold
                "
              >

                <FaExternalLinkAlt />

                Live Demo

              </a>

              {/* GITHUB */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  bg-white/5
                  border
                  border-white/10
                  hover:bg-white/10
                  px-5
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300
                  font-semibold
                "
              >

                <FaGithub />

                GitHub

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;