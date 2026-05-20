import { motion } from "framer-motion";

import {
  Menu,
  Download,
} from "lucide-react";

function Navbar() {

  const navItems = [
    ["Home", "home"],
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Certifications", "certifications"],
    ["Contact", "contact"],
  ];

  return (

    <motion.nav
      initial={{
        y: -80,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 1,
      }}

      className="
        sticky
        top-0
        z-50
        px-6
        md:px-14
        py-5
      "
    >

      {/* GLASS CONTAINER */}
      <div
        className="
          max-w-7xl
          mx-auto
          bg-white/5
          border
          border-white/10
          backdrop-blur-2xl
          rounded-3xl
          px-6
          py-4
          flex
          items-center
          justify-between
          shadow-[0_0_40px_rgba(59,130,246,0.08)]
        "
      >

        {/* LOGO */}
        <a
          href="#home"

          className="
            flex
            items-center
            gap-4
          "
        >

          {/* ICON */}
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-blue-500
              to-yellow-400
              flex
              items-center
              justify-center
              shadow-lg
              shadow-blue-500/20
            "
          >

            <span className="
              text-2xl
              font-black
              text-white
            ">

              P

            </span>

          </div>

          {/* TEXT */}
          <div>

            <h1 className="
              text-lg
              md:text-xl
              font-black
              text-white
            ">

              Aliyu Bin Ahmad

            </h1>

            <p className="
              text-sm
              text-gray-400
            ">

              Python Backend Developer

            </p>

          </div>

        </a>

        {/* NAV LINKS */}
        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-10
            text-gray-300
            font-medium
          "
        >

          {navItems.map(
            (item, index) => (

              <li key={index}>

                <a
                  href={`#${item[1]}`}

                  className="
                    relative
                    cursor-pointer
                    hover:text-yellow-400
                    transition-all
                    duration-300
                    group
                  "
                >

                  {item[0]}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      w-0
                      h-[2px]
                      bg-yellow-400
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>

                </a>

              </li>

            )
          )}

        </ul>

        {/* RIGHT SIDE */}
        <div className="
          flex
          items-center
          gap-4
        ">

          {/* CV BUTTON */}
          <a
            href="/Aliyu-CV.pdf"
            download

            className="
              hidden
              md:flex
              items-center
              gap-2
              bg-gradient-to-r
              from-blue-500
              to-yellow-400
              text-black
              px-6
              py-3
              rounded-2xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-blue-500/20
            "
          >

            <Download size={18} />

            Download CV

          </a>

          {/* MOBILE MENU */}
          <button
            className="
              lg:hidden
              bg-white/5
              border
              border-white/10
              p-3
              rounded-2xl
              backdrop-blur-xl
            "
          >

            <Menu />

          </button>

        </div>

      </div>

    </motion.nav>

  );
}

export default Navbar;