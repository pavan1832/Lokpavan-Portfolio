"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export default function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
  variants={slideInFromTop}
  className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
>
  <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
  <h1 className="Welcome-text text-[13px]">
    Software Engineer Portfolio
  </h1>
</motion.div>


        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Turning ideas{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            into scalable,
          </span>{" "}
          real-world solutions.
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] space-y-4"
        >
          <p>
            Hi, I’m Lokpavan P  a builder at heart who enjoys turning ideas into
            clear, reliable digital experiences.
          </p>
          <p>
            I work across different layers of software systems and enjoy learning
            new tools when problems demand it.
          </p>
          <p>
            I’m looking for opportunities where learning, impact, and
            craftsmanship come together.
          </p>
        </motion.div>

        <motion.a
          variants={slideInFromLeft(1)}
         href="/lokpavanp_Resume.pdf"
          download
          className="py-2 px-6 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white w-fit"
        >
          Download Resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="Hero background"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
