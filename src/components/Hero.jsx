import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";

import {
  Code2,
  Database,
  ShieldCheck,
  Terminal,
} from "lucide-react";

function Hero() {
  return (
    <section className="relative z-40 px-6 md:px-14 pt-8 md:pt-14">

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* SMALL BADGE */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full backdrop-blur-md mb-8">

            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>

            <span className="text-sm text-gray-300">
              Hi, I'm
            </span>

          </div>

          {/* TITLE */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Aliyu{" "}

            <span className="text-yellow-400">
              Bin Ahmad
            </span>

          </h1>

          {/* SUBTITLE */}
          <h2 className="text-2xl md:text-3xl mt-5 font-semibold text-blue-400">

            Python Backend Developer

          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-8 text-lg leading-relaxed max-w-2xl">

            I build secure, scalable and efficient backend systems
            with Python & Django.

            <br />
            <br />

            Passionate about solving real-world problems
            through clean code and modern technologies.

          </p>

          {/* BUTTONS */}
            <div className="
              flex
              flex-wrap
              gap-5
              mt-10
            ">

              {/* PROJECT BUTTON */}
              <a
                href="#projects"

                className="
                  bg-gradient-to-r
                  from-yellow-400
                  to-yellow-500
                  text-black
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-yellow-500/20
                "
              >

                View Projects →

              </a>

              {/* CONTACT BUTTON */}
              <a
                href="#contact"

                className="
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  px-8
                  py-4
                  rounded-2xl
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >

                Contact Me

              </a>

            </div>

          {/* STATUS */}
          <div className="flex items-center gap-3 mt-8">

            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

            <p className="text-gray-400">
              Available for Freelance
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">

            {[
              ["5+", "Projects Completed"],
              ["3+", "Years Learning"],
              ["100%", "Dedication"],
              ["24/7", "Problem Solver"],
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-5 hover:border-blue-500/30 transition-all duration-300"
              >

                <h3 className="text-3xl font-black text-blue-400">
                  {item[0]}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {item[1]}
                </p>

              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >

          {/* MAIN GLOW */}
          <div className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-yellow-400/10 blur-3xl rounded-full"></div>

          {/* YELLOW GLOW */}
          <div className="absolute w-[220px] h-[220px] md:w-[350px] md:h-[350px] bg-yellow-400/10 blur-3xl rounded-full"></div>

          {/* INNER LIGHT */}
        <div className="absolute inset-10 rounded-full bg-gradient-to-br from-blue-500/10 to-yellow-400/10 blur-2xl"></div>

          {/* ROTATING CIRCLE */}
          <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] border border-blue-500/20 rounded-full animate-spin-slow"></div>

          {/* SECOND CIRCLE */}
          <div className="absolute w-[240px] h-[240px] md:w-[340px] md:h-[340px] border border-yellow-400/20 rounded-full"></div>

          {/* PARTICLES */}
        <div className="absolute top-20 left-32 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>

        <div className="absolute bottom-20 right-24 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>

        <div className="absolute top-40 right-10 w-2 h-2 bg-white rounded-full animate-ping"></div>

        <div className="absolute bottom-32 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>

        {/* FLOATING ICONS */}
          <div className="absolute top-10 left-10 bg-[#081121] border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-xl">

            <Code2 className="text-blue-400" />

          </div>

          <div className="absolute top-20 right-10 bg-[#081121] border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-xl">

            <Database className="text-yellow-400" />

          </div>

          <div className="absolute bottom-20 left-5 bg-[#081121] border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-xl">

            <Terminal className="text-blue-400" />

          </div>

          <div className="absolute bottom-10 right-5 bg-[#081121] border border-white/10 p-4 rounded-2xl backdrop-blur-xl shadow-xl">

            <ShieldCheck className="text-yellow-400" />

          </div>

          {/* IMAGE CONTAINER */}
            <motion.div
            animate={{
                y: [0, -15, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="relative z-20"
            >

            {/* OUTER GLOW */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110"></div>

            {/* BLUE RING */}
            <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-ping"></div>

            {/* YELLOW RING */}
            <div className="absolute inset-[-20px] border border-yellow-400/20 rounded-full"></div>

            {/* IMAGE */}
            <img
                src={heroImage}
                alt="hero"
                className="
                    relative
                    z-20
                    w-[320px]
                    h-[320px]
                    md:w-[460px]
                    md:h-[460px]
                    object-cover
                    rounded-full
                    border-4
                    border-blue-500/20
                    shadow-[0_0_80px_rgba(59,130,246,0.6)]
                "
                />
  

            </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;