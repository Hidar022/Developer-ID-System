import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  Download,
} from "lucide-react";

import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

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
        px-4
        md:px-14
        py-5
      "
    >

      {/* GLASS NAVBAR */}
      <div
        className="
          max-w-7xl
          mx-auto
          bg-white/5
          border
          border-white/10
          backdrop-blur-2xl
          rounded-3xl
          px-5
          md:px-6
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
            gap-3
          "
        >

          {/* ICON */}
          <div
            className="
              w-12
              h-12
              md:w-14
              md:h-14
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

            <span
              className="
                text-xl
                md:text-2xl
                font-black
                text-white
              "
            >

              P

            </span>

          </div>

          {/* TEXT */}
          <div>

            <h1
              className="
                text-sm
                md:text-xl
                font-black
                text-white
              "
            >

              Aliyu Bin Ahmad

            </h1>

            <p
              className="
                text-xs
                md:text-sm
                text-gray-400
              "
            >

              Python Backend Developer

            </p>

          </div>

        </a>

        {/* DESKTOP NAV */}
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

          {navItems.map((item, index) => (

            <li key={index}>

              <a
                href={`#${item[1]}`}

                className="
                  relative
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

          ))}

        </ul>

        {/* RIGHT SIDE */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >

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

          {/* MOBILE BUTTON */}
          <button

            onClick={() =>
              setMenuOpen(!menuOpen)
            }

            className="
              lg:hidden
              bg-white/5
              border
              border-white/10
              p-3
              rounded-2xl
              backdrop-blur-xl
              text-white
            "
          >

            {menuOpen
              ? <X />
              : <Menu />
            }

          </button>

        </div>

      </div>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            className="
              lg:hidden
              mt-4
              bg-[#081121]/95
              border
              border-white/10
              backdrop-blur-2xl
              rounded-3xl
              p-6
              shadow-2xl
            "
          >

            <ul
              className="
                flex
                flex-col
                gap-6
                text-lg
                text-gray-300
              "
            >

              {navItems.map((item, index) => (

                <li key={index}>

                  <a
                    href={`#${item[1]}`}

                    onClick={() =>
                      setMenuOpen(false)
                    }

                    className="
                      block
                      hover:text-yellow-400
                      transition-all
                      duration-300
                    "
                  >

                    {item[0]}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>

  );
}

export default Navbar;