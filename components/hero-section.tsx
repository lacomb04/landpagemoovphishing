"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import TerminalText from "./terminal-text"

export default function HeroSection({ scrollY }: { scrollY: number }) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/images/progress-20behind.jpg"
          alt="Hacker background"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image src="/images/moov-20logo.png" alt="Moov Logo" width={80} height={80} className="h-20 w-auto" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white tracking-tighter">
            Horas Acadêmicas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">
              Grátis?
            </span>
          </h1>
        </motion.div>

        {/* Terminal Text Effect */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <TerminalText text="> Descubra a Realidade por Trás" />
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="text-cyan-400 text-center">
            <p className="text-sm mb-2">Scroll para continuar</p>
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
