"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div>
            <h3 className="text-white font-bold mb-4">Projeto Educacional</h3>
            <p className="text-gray-400 text-sm">Desenvolvido para conscientizar sobre phishing e engenharia social</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Denunciar Phishing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Reportar Segurança
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition">
                  Mais Informações
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <p className="text-gray-400 text-sm">
              Dúvidas sobre segurança? Entre em contato conosco para mais informações sobre proteção digital.
            </p>
          </div>
        </motion.div>

        <div className="border-t border-cyan-500/20 pt-8">
          <p className="text-center text-gray-500 text-sm">© 2025 Projeto de Conscientização em Segurança Digital</p>
          <p className="text-center text-gray-600 text-xs mt-2">Este projeto é apenas para fins educacionais</p>
        </div>
      </div>
    </footer>
  )
}
