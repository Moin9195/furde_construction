"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center w-full justify-center dark:bg-black ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" >
        <Image
          src="/bedroom.jpg" // Replace with your own image path
          alt="Construction Site"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-50 object-cover"
        />
        
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 md:px-12 max-w-3xl"
      >
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
          Building the Future with Strength and Precision
        </h1>
        <p className="text-gray-200 mt-4 md:text-lg">
          Trusted experts in civil engineering, architecture, and industrial development. We bring your vision to life.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border  hover:bg-black hover:text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
