function Footer() {
  return (
    <footer className="relative z-40 px-6 md:px-14 pb-10">

      <div className="
        max-w-7xl
        mx-auto
        bg-white/5
        border
        border-white/10
        backdrop-blur-2xl
        rounded-[35px]
        p-8
      ">

        <div className="
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        ">

          {/* LEFT */}
          <div>

            <h2 className="text-2xl font-black">

              <span className="text-blue-400">
                Aliyu
              </span>{" "}

              Bin Ahmad

            </h2>

            <p className="text-gray-400 mt-3">

              Python Backend Developer • Cybersecurity Enthusiast

            </p>

          </div>

          {/* RIGHT */}
          <div className="text-gray-400 text-center md:text-right">

            <p>
              © 2026 All Rights Reserved
            </p>

            <p className="mt-2 text-sm">

              Designed & Built with React + Django

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;