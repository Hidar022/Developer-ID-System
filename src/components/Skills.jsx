import { motion } from "framer-motion";

import {
  SiPython,
  SiDjango,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

import {
  ShieldCheck,
  Database,
  Server,
  Globe,
} from "lucide-react";

function Skills() {

  const skills = [

    {
      icon: <SiPython />,
      name: "Python",
      desc: "Backend Development",
    },

    {
      icon: <SiDjango />,
      name: "Django",
      desc: "REST APIs & Systems",
    },

    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
      desc: "Database Management",
    },

    {
      icon: <SiDocker />,
      name: "Docker",
      desc: "Containerization",
    },

    {
      icon: <SiGit />,
      name: "Git & GitHub",
      desc: "Version Control",
    },

    {
      icon: <SiLinux />,
      name: "Linux",
      desc: "Server Environment",
    },

    {
      icon: <SiReact />,
      name: "React",
      desc: "Modern Frontend",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      desc: "Modern UI Design",
    },

  ];

  return (

    <section
      id="skills"
      className="
        relative
        z-40
        px-6
        md:px-14
        py-24
        overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-blue-500/10
        blur-3xl
        rounded-full
      "></div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
          text-center
          relative
          z-20
        "
      >

        <p className="
          text-yellow-400
          font-semibold
          tracking-[4px]
          uppercase
        ">

          Technical Expertise

        </p>

        <h2 className="
          text-4xl
          md:text-6xl
          font-black
          text-white
          mt-4
        ">

          Skills & Technologies

        </h2>

        <p className="
          text-gray-400
          mt-6
          max-w-3xl
          mx-auto
          text-lg
        ">

          Technologies and tools I use
          to build scalable, secure and
          modern digital solutions.

        </p>

      </motion.div>

      {/* TOP FLOATING ICONS */}
      <div className="
        absolute
        top-24
        left-10
        hidden
        lg:flex
        bg-[#081121]
        border
        border-white/10
        p-4
        rounded-2xl
        backdrop-blur-xl
      ">

        <Database className="text-blue-400" />

      </div>

      <div className="
        absolute
        top-40
        right-10
        hidden
        lg:flex
        bg-[#081121]
        border
        border-white/10
        p-4
        rounded-2xl
        backdrop-blur-xl
      ">

        <ShieldCheck className="text-yellow-400" />

      </div>

      {/* SKILLS GRID */}
      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-8
        mt-20
        relative
        z-20
      ">

        {skills.map((skill, index) => (

          <motion.div
            key={index}

            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}

            viewport={{
              once: true,
            }}

            whileHover={{
              y: -10,
            }}

            className="
              relative
              group
              bg-white/5
              border
              border-white/10
              backdrop-blur-2xl
              rounded-[32px]
              p-8
              overflow-hidden
              hover:border-blue-500/30
              transition-all
              duration-500
            "
          >

            {/* BACKGROUND LIGHT */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-br
              from-blue-500/5
              to-yellow-400/5
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "></div>

            {/* ICON */}
            <div className="
              relative
              z-20
              w-20
              h-20
              rounded-3xl
              bg-gradient-to-br
              from-blue-500/20
              to-yellow-400/20
              flex
              items-center
              justify-center
              text-4xl
              text-blue-400
              shadow-lg
              shadow-blue-500/10
            ">

              {skill.icon}

            </div>

            {/* TEXT */}
            <div className="
              relative
              z-20
              mt-8
            ">

              <h3 className="
                text-2xl
                font-black
                text-white
              ">

                {skill.name}

              </h3>

              <p className="
                text-gray-400
                mt-3
                leading-relaxed
              ">

                {skill.desc}

              </p>

            </div>

            {/* SMALL CORNER LIGHT */}
            <div className="
              absolute
              top-0
              right-0
              w-28
              h-28
              bg-yellow-400/10
              blur-3xl
            "></div>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM FLOATING ICONS */}
      <div className="
        absolute
        bottom-24
        left-20
        hidden
        lg:flex
        bg-[#081121]
        border
        border-white/10
        p-4
        rounded-2xl
        backdrop-blur-xl
      ">

        <Server className="text-blue-400" />

      </div>

      <div className="
        absolute
        bottom-16
        right-24
        hidden
        lg:flex
        bg-[#081121]
        border
        border-white/10
        p-4
        rounded-2xl
        backdrop-blur-xl
      ">

        <Globe className="text-yellow-400" />

      </div>

    </section>

  );
}

export default Skills;