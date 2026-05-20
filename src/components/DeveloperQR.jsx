import { motion } from "framer-motion";

import {
  QRCodeCanvas,
} from "qrcode.react";

function DeveloperQR() {

  // 🔥 YOUR VERIFICATION URL
  const verifyURL =
    "http://localhost:5173/verify/DEV-ALIYU-01";

  return (

    <section className="
      relative
      z-40
      px-6
      md:px-14
      py-28
    ">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}

        className="text-center mb-20"
      >

        <p className="text-yellow-400 font-semibold mb-4">

          DEVELOPER QR

        </p>

        <h2 className="
          text-4xl
          md:text-6xl
          font-black
        ">

          Scan To Verify{" "}

          <span className="text-blue-400">
            Identity
          </span>

        </h2>

        <p className="
          text-gray-400
          mt-8
          text-lg
          max-w-3xl
          mx-auto
          leading-relaxed
        ">

          This QR code securely connects to the
          official developer verification page.

        </p>

      </motion.div>

      {/* QR CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}

        className="
          relative
          max-w-xl
          mx-auto
          bg-white/5
          border
          border-white/10
          backdrop-blur-2xl
          rounded-[40px]
          p-12
          text-center
          overflow-hidden
        "
      >

        {/* GLOW */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-br
          from-blue-500/5
          to-yellow-400/5
        "></div>

        {/* QR */}
        <div className="relative z-20">

          <div className="
            inline-flex
            p-6
            bg-white
            rounded-[30px]
            shadow-2xl
          ">

            <QRCodeCanvas
              value={verifyURL}
              size={260}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />

          </div>

          {/* ID */}
          <h3 className="
            text-3xl
            font-black
            mt-10
          ">

            DEV-ALIYU-01

          </h3>

          <p className="
            text-gray-400
            mt-4
            text-lg
          ">

            Scan with your mobile camera
            to verify developer identity.

          </p>

        </div>

      </motion.div>

    </section>

  );
}

export default DeveloperQR;