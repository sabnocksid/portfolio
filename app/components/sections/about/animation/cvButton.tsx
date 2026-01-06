"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface DownloadCVButtonProps {
  fileUrl: string;
  text?: string;
}

export default function DownloadCVButton({
  fileUrl,
  text = "Download CV ~ ",
}: DownloadCVButtonProps) {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 group">
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full pointer-events-none"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <defs>
          <path
            id="circlePath"
            d="
              M 100, 100
              m -80, 0
              a 80,80 0 1,1 160,0
              a 80,80 0 1,1 -160,0
            "
          />
        </defs>
        <text>
          <textPath
            href="#circlePath"
            className="uppercase text-blue-600 font-inter text-md md:text-lg tracking-[3px] font-medium fill-current"
          >
            {text.repeat(5)}
          </textPath>
        </text>
      </motion.svg>

   <motion.a
        href={fileUrl}
        download
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="z-10 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-500 group-hover:shadow-blue-500/50"
      >
        <ArrowUpRight className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.a>
    </div>
  );
}