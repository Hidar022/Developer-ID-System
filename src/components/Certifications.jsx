import { motion } from "framer-motion";

import {
  FaAward,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Certifications() {

  const certs = [

    {
      title: "Introduction to Cybersecurity",

      org: "Cisco Networking Academy",

      year: "2024",

      // 🔥 REPLACE WITH YOUR REAL CERTIFICATE LINK
      link: "#",
    },

    {
      title: "Network Technician Career Path",

      org: "Cisco Networking Academy",

      year: "2024",

      link: "#",
    },

    {
      title: "Web Development Certification",

      org: "KATDICT",

      year: "2025",

      link: "#",
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
          CERTIFICATIONS
        </p>

        <h2 className="text-4xl md:text-6xl font-black">

          Learning &{" "}

          <span className="text-blue-400">
            Achievements
          </span>

        </h2>

      </motion.div>

      {/* CERTIFICATE LIST */}
      <div className="max-w-6xl mx-auto space-y-8">

        {certs.map((cert, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="
              group
              relative
              bg-white/5
              border
              border-white/10
              backdrop-blur-2xl
              rounded-[35px]
              p-8
              overflow-hidden
              hover:border-yellow-400/30
              transition-all
              duration-500
            "
          >

            {/* GLOW */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-r
              from-yellow-400/5
              to-blue-500/5
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
            "></div>

            <div className="
              relative
              z-20
              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between
              gap-8
            ">

              {/* LEFT */}
              <div className="flex items-start gap-6">

                {/* ICON */}
                <div className="
                  w-20
                  h-20
                  rounded-3xl
                  bg-gradient-to-br
                  from-yellow-400
                  to-blue-500
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-yellow-400/20
                  shrink-0
                ">

                  <FaAward size={30} />

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-2xl md:text-3xl font-black">

                    {cert.title}

                  </h3>

                  <p className="text-gray-400 mt-3 text-lg">

                    {cert.org}

                  </p>

                  <div className="mt-5">

                    <span className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#081121]
                      border
                      border-white/10
                      text-sm
                      text-yellow-400
                    ">

                      {cert.year}

                    </span>

                  </div>

                </div>

              </div>

              {/* BUTTON */}
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-blue-500
                  hover:bg-blue-600
                  px-7
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  font-semibold
                  shrink-0
                "
              >

                <FaExternalLinkAlt />

                View Certificate

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;