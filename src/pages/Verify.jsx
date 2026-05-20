import { motion } from "framer-motion";

import {
  FaShieldAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

import heroImage from "../assets/hero.png";

function Verify() {

  return (
    <div className="
      min-h-screen
      bg-[#050816]
      text-white
      flex
      items-center
      justify-center
      px-6
      py-20
      overflow-hidden
      relative
    ">

      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        w-[500px]
        h-[500px]
        bg-blue-500/20
        blur-3xl
        rounded-full
      "></div>

      <div className="
        absolute
        w-[400px]
        h-[400px]
        bg-yellow-400/10
        blur-3xl
        rounded-full
      "></div>

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}

        className="
          relative
          z-20
          w-full
          max-w-5xl
          bg-white/5
          border
          border-white/10
          backdrop-blur-2xl
          rounded-[40px]
          p-10
          md:p-16
          overflow-hidden
        "
      >

        {/* VERIFIED BADGE */}
        <div className="
          inline-flex
          items-center
          gap-3
          bg-green-500/10
          border
          border-green-500/20
          px-5
          py-3
          rounded-full
          mb-10
        ">

          <FaCheckCircle className="text-green-400" />

          <span className="text-green-400 font-semibold">

            VERIFIED DEVELOPER

          </span>

        </div>

        {/* CONTENT */}
        <div className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        ">

          {/* LEFT */}
          <div className="relative flex justify-center">

            {/* IMAGE GLOW */}
            <div className="
              absolute
              w-[320px]
              h-[320px]
              bg-blue-500/20
              blur-3xl
              rounded-full
            "></div>

            {/* IMAGE */}
            <img
              src={heroImage}
              alt="developer"

              className="
                relative
                z-20
                w-[280px]
                h-[280px]
                md:w-[360px]
                md:h-[360px]
                object-cover
                rounded-full
                border-4
                border-blue-500/20
                shadow-[0_0_80px_rgba(59,130,246,0.5)]
              "
            />

          </div>

          {/* RIGHT */}
          <div>

            <h1 className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            ">

              Aliyu{" "}

              <span className="text-yellow-400">
                Bin Ahmad
              </span>

            </h1>

            <h2 className="
              text-2xl
              text-blue-400
              font-semibold
              mt-6
            ">

              Python Backend Developer

            </h2>

            {/* ID */}
            <div className="
              mt-10
              bg-[#081121]
              border
              border-white/10
              rounded-3xl
              p-6
            ">

              <p className="text-gray-400">
                Developer ID
              </p>

              <h3 className="
                text-3xl
                font-black
                mt-2
                text-yellow-400
              ">

                DEV-ALIYU-01

              </h3>

            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-4 mt-10">

              {[
                "Python",
                "Django",
                "React",
                "Cybersecurity",
                "REST APIs",
              ].map((skill, index) => (

                <span
                  key={index}
                  className="
                    px-5
                    py-3
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-gray-300
                  "
                >

                  {skill}

                </span>

              ))}

            </div>

            {/* BUTTON */}
            <a
              href="/"
              className="
                inline-flex
                items-center
                gap-3
                mt-12
                bg-blue-500
                hover:bg-blue-600
                px-8
                py-4
                rounded-2xl
                transition-all
                duration-300
                font-semibold
              "
            >

              <FaExternalLinkAlt />

              Open Portfolio

            </a>

          </div>

        </div>

        {/* SECURITY ICON */}
        <div className="
          absolute
          top-8
          right-8
          text-blue-400/20
          text-7xl
        ">

          <FaShieldAlt />

        </div>

      </motion.div>

    </div>
  );
}

export default Verify;