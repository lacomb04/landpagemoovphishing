"use client"

import { motion } from "framer-motion"
import TerminalText from "./terminal-text"

export default function ExperimentWarning() {
  return (
    <section className="relative py-20 px-4 bg-black border-t border-b border-cyan-500/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/50 rounded-lg p-8 md:p-12"
        >
          <div className="mb-6">
            <TerminalText text="⚠️ EXPERIMENTO DE CONSCIENTIZAÇÃO" speed={30} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">O que você acabou de ver?</h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Essa página foi criada como um <span className="text-cyan-400 font-semibold">experimento educacional</span>{" "}
            para demonstrar como ataques de{" "}
            <span className="text-cyan-400 font-semibold">phishing e engenharia social</span> funcionam. A proposta
            inicial de "Horas Acadêmicas Grátis" é uma isca comum usada por cibercriminosos para atrair vítimas.
          </p>

          <div className="bg-black/50 border border-cyan-500/30 rounded p-4 mt-8">
            <p className="text-sm text-gray-400 italic">
              Este projeto tem fins <span className="text-yellow-400">educacionais e de conscientização</span> apenas.
              Entender como funcionam os ataques é a melhor defesa contra eles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
