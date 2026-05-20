import { motion } from "framer-motion";

import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {

  const contacts = [

    {
      icon: <FaWhatsapp size={28} />,
      title: "WhatsApp",
      value: "+234 903 804 7335",

      // 🔥 REPLACE WITH YOUR REAL WHATSAPP LINK
      link: "https://wa.me/2349038047335",

      color: "hover:border-green-400/40",
    },

    {
      icon: <FaEnvelope size={28} />,
      title: "Email",
      value: "aliyubinahmad2022@gmail.com",

      // 🔥 REPLACE WITH YOUR REAL EMAIL
      link: "mailto:aliyubinahmad2022@gmail.com",

      color: "hover:border-yellow-400/40",
    },

    {
      icon: <FaGithub size={28} />,
      title: "GitHub",
      value: "github.com/Hidar022",

      // 🔥 REPLACE WITH YOUR REAL GITHUB
      link: "https://github.com/Hidar022",

      color: "hover:border-blue-400/40",
    },

    {
      icon: <FaLinkedin size={28} />,
      title: "LinkedIn",
      value: "linkedin.com/in/aliyu-bin-ahmad-b10079341",

      // 🔥 REPLACE WITH YOUR REAL LINKEDIN
      link: "https://linkedin.com/in/aliyu-bin-ahmad-b10079341",

      color: "hover:border-cyan-400/40",
    },

  ];

  return (
    <section id="contact" className="relative z-40 px-6 md:px-14 py-28">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >

        <p className="text-yellow-400 font-semibold mb-4">
          LET’S CONNECT
        </p>

        <h2 className="text-4xl md:text-6xl font-black leading-tight">

          Let’s Build Something{" "}

          <span className="text-blue-400">
            Amazing Together
          </span>

        </h2>

        <p className="text-gray-400 mt-8 text-lg max-w-3xl mx-auto leading-relaxed">

          Open for collaborations, freelance work,
          backend development projects and tech opportunities.

        </p>

      </motion.div>

      {/* CONTACT GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {contacts.map((item, index) => (

          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"

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
              transition-all
              duration-500
              ${item.color}
            `}
          >

            {/* GLOW */}
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

            <div className="relative z-20 flex items-center gap-6">

              {/* ICON */}
              <div className="
                w-20
                h-20
                rounded-3xl
                bg-gradient-to-br
                from-blue-500
                to-yellow-400
                flex
                items-center
                justify-center
                shadow-lg
                shadow-blue-500/20
              ">

                {item.icon}

              </div>

              {/* TEXT */}
              <div>

                <h3 className="text-2xl font-black">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-3">

                  {item.value}

                </p>

              </div>

            </div>

          </motion.a>

        ))}

      </div>

    </section>
  );
}

export default Contact;