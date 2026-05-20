import heroImage from "../assets/ID-card.png";
import pythonLogo from "../assets/python.png";

import {
  FaCheckCircle,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

function VerifyPage() {

  return (

    <section
      className="
        min-h-screen
        bg-[#020617]
        flex
        items-center
        justify-center
        px-4
        py-10
        overflow-hidden
      "
    >

      {/* CARD */}
      <div
        className="
          relative
          w-full
          max-w-6xl
          rounded-[35px]
          overflow-hidden
          border
          border-blue-500/20
          bg-gradient-to-br
          from-[#03112b]
          via-[#061a44]
          to-[#020617]
          shadow-[0_0_60px_rgba(59,130,246,0.15)]
        "
      >

        {/* BACKGROUND PYTHON LOGO */}
        <img
          src={pythonLogo}
          alt="python"
          className="
            absolute
            w-[320px]
            md:w-[450px]
            opacity-[0.05]
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            pointer-events-none
          "
        />

        {/* BLUE GLOW */}
        <div
          className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[300px]
            h-[300px]
            bg-blue-500/20
            blur-3xl
            rounded-full
          "
        ></div>

        {/* YELLOW GLOW */}
        <div
          className="
            absolute
            bottom-[-100px]
            left-[-100px]
            w-[300px]
            h-[300px]
            bg-yellow-400/10
            blur-3xl
            rounded-full
          "
        ></div>

        {/* CONTENT */}
        <div
          className="
            relative
            z-20
            grid
            lg:grid-cols-2
            gap-10
            items-center
            p-6
            md:p-10
          "
        >

          {/* LEFT SIDE */}
          <div>

            {/* VERIFIED */}
            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <img
                src={pythonLogo}
                alt="python"
                className="w-12 md:w-16"
              />

              <div
                className="
                  flex
                  items-center
                  gap-2
                  text-blue-400
                  font-bold
                  tracking-wide
                  uppercase
                  text-sm
                  md:text-base
                "
              >

                VERIFIED DEVELOPER

                <FaCheckCircle className="text-blue-500" />

              </div>

            </div>

            {/* NAME */}
            <div className="mt-6">

              <h1
                className="
                  text-4xl
                  md:text-6xl
                  font-black
                  text-white
                  leading-tight
                "
              >

                Aliyu Bin Ahmad

              </h1>

              <h2
                className="
                  mt-3
                  text-yellow-400
                  text-xl
                  md:text-3xl
                  font-bold
                "
              >

                Python Backend Developer

              </h2>

            </div>

            {/* INFO GRID */}
            <div
              className="
                grid
                grid-cols-2
                gap-5
                mt-10
              "
            >

              {/* ID */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                "
              >

                <p className="text-gray-400 text-sm">
                  ID CODE
                </p>

                <h3
                  className="
                    mt-2
                    text-white
                    font-bold
                    text-lg
                  "
                >

                  DEV-ALIYU-01

                </h3>

              </div>

              {/* STATUS */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                "
              >

                <p className="text-gray-400 text-sm">
                  STATUS
                </p>

                <h3
                  className="
                    mt-2
                    text-green-400
                    font-bold
                    text-lg
                  "
                >

                  ✔ Verified

                </h3>

              </div>

              {/* JOINED */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                "
              >

                <p className="text-gray-400 text-sm">
                  JOINED
                </p>

                <h3
                  className="
                    mt-2
                    text-white
                    font-bold
                    text-lg
                  "
                >

                  May 2025

                </h3>

              </div>

              {/* ROLE */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-5
                  backdrop-blur-xl
                "
              >

                <p className="text-gray-400 text-sm">
                  ROLE
                </p>

                <h3
                  className="
                    mt-2
                    text-yellow-400
                    font-bold
                    text-lg
                  "
                >

                  Backend Developer

                </h3>

              </div>

            </div>

            {/* BUTTONS */}
            <div
              className="
                flex
                flex-wrap
                gap-4
                mt-10
              "
            >

              {/* VIEW PROFILE */}
              <a
                href="/"
                className="
                  bg-blue-500
                  hover:bg-blue-600
                  transition-all
                  duration-300
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                "
              >

                View Profile

              </a>

              {/* DOWNLOAD CV */}
              <a
                href="/Aliyu-CV.pdf"
                download
                className="
                  border
                  border-white/10
                  bg-white/5
                  hover:bg-white/10
                  transition-all
                  duration-300
                  text-white
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  gap-3
                "
              >

                <FaDownload />

                Download CV

              </a>

              {/* CONTACT */}
              <a
                href="mailto:yourmail@gmail.com"
                className="
                  bg-yellow-400
                  hover:bg-yellow-300
                  transition-all
                  duration-300
                  text-black
                  px-6
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  gap-3
                "
              >

                <FaEnvelope />

                Contact Me

              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              flex
              justify-center
              relative
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                md:w-[380px]
                md:h-[380px]
                bg-blue-500/20
                blur-3xl
                rounded-full
              "
            ></div>

            {/* ROTATING RING */}
            <div
              className="
                absolute
                w-[300px]
                h-[300px]
                md:w-[430px]
                md:h-[430px]
                border
                border-blue-500/20
                rounded-full
                animate-spin-slow
              "
            ></div>

            {/* SECOND RING */}
            <div
              className="
                absolute
                w-[260px]
                h-[260px]
                md:w-[380px]
                md:h-[380px]
                border
                border-yellow-400/20
                rounded-full
              "
            ></div>

            {/* IMAGE CONTAINER */}
            <div
              className="
                relative
                z-20
              "
            >

              {/* OUTER GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  bg-blue-500/20
                  blur-3xl
                  rounded-full
                  scale-110
                "
              ></div>

              {/* IMAGE */}
              <img
                src={heroImage}
                alt="hero"
                className="
                  relative
                  z-20
                  w-[260px]
                  h-[260px]
                  md:w-[420px]
                  md:h-[420px]
                  object-cover
                  rounded-full
                  border-[5px]
                  border-blue-500/30
                  shadow-[0_0_80px_rgba(59,130,246,0.5)]
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default VerifyPage;