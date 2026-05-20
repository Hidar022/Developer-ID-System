import { motion } from "framer-motion";

import {
  FaPython,
  FaReact,
  FaLinux,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostman,
  SiCyberdefenders,
} from "react-icons/si";

import heroImage from "../assets/hero.png";

function About() {

  const skills = [
  {
    icon: <FaPython size={35} />,
    title: "Python",
    color: "text-yellow-400",
  },

  {
    icon: <SiDjango size={35} />,
    title: "Django",
    color: "text-green-400",
  },

  {
    icon: <FaReact size={35} />,
    title: "React",
    color: "text-cyan-400",
  },

  {
    icon: <FaLinux size={35} />,
    title: "Linux",
    color: "text-white",
  },

  {
    icon: <SiPostman size={35} />,
    title: "REST APIs",
    color: "text-orange-400",
  },

  {
    icon: <SiCyberdefenders size={35} />,
    title: "Cybersecurity",
    color: "text-red-400",
  },
];

  return (
    <section className="relative z-40 px-6 md:px-14 py-28">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <p className="text-yellow-400 font-semibold mb-4">
          ABOUT ME
        </p>

        <h2 className="text-4xl md:text-6xl font-black">

          Building Modern{" "}

          <span className="text-blue-400">
            Backend Systems
          </span>

        </h2>

      </motion.div>

      {/* CONTENT */}
      <div className="grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* GLOW */}
          <div className="absolute w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full"></div>

          {/* IMAGE */}
          <img
            src={heroImage}
            alt="about"
            className="
              relative
              z-20
              w-[300px]
              h-[300px]
              md:w-[420px]
              md:h-[420px]
              object-cover
              rounded-[40px]
              border
              border-white/10
              shadow-[0_0_80px_rgba(59,130,246,0.4)]
            "
          />

        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[40px]
            p-10
          ">

            <h3 className="text-3xl md:text-4xl font-black mb-8">

              Aliyu Bin Ahmad

            </h3>

            <p className="text-gray-400 leading-relaxed text-lg">

              Passionate Python Backend Developer focused on building secure,
              scalable and efficient systems using Django and modern technologies.

              <br /><br />

              I enjoy solving real-world problems through backend architecture,
              APIs and cybersecurity practices.

              <br /><br />

              Currently improving my fullstack development journey
              with React and advanced backend engineering.

            </p>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="
                bg-[#081121]
                border
                border-white/10
                rounded-2xl
                p-5
              ">

                <h4 className="text-yellow-400 text-2xl font-black">
                  5+
                </h4>

                <p className="text-gray-400 mt-2">
                  Real Projects
                </p>

              </div>

              <div className="
                bg-[#081121]
                border
                border-white/10
                rounded-2xl
                p-5
              ">

                <h4 className="text-yellow-400 text-2xl font-black">
                  3+
                </h4>

                <p className="text-gray-400 mt-2">
                  Certifications
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* TECH STACK */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-24">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-6
              flex
              flex-col
              items-center
              justify-center
              hover:border-blue-500/30
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >

            <div className={`${skill.color} mb-4`}>
              {skill.icon}
            </div>

            <h4 className="font-semibold text-gray-300">
              {skill.title}
            </h4>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default About;