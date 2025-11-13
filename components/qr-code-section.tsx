"use client"

import { motion } from "framer-motion"
import { AlertTriangle, QrCode, Mail, Lock } from "lucide-react"

export default function QRCodeSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-black via-slate-950 to-black px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold">ALERTA DE SEGURANÇA</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            O Perigo dos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              QR Codes Maliciosos
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Os cibercriminosos frequentemente usam QR codes em banners e ofertas falsas para direcionar vítimas a
            páginas maliciosas onde solicitam dados sensíveis
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Side - How It Works */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <QrCode className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Como Funciona o Ataque</h3>
                  <p className="text-gray-300">O criminoso cria um QR code que parece legítimo</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Coleta de Dados</h3>
                  <p className="text-gray-300">
                    A vítima escaneia o código e é levada a uma página fraudulenta que solicita email e senha
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 border border-yellow-500/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Comprometimento</h3>
                  <p className="text-gray-300">
                    Com os dados obtidos, o criminoso acessa contas bancárias, email e outros serviços da vítima
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Visual Example */}
          <motion.div variants={itemVariants} className="flex flex-col gap-8">
            {/* Fake Banner Example */}
            <div className="bg-gradient-to-b from-blue-600/20 to-blue-900/20 border-2 border-blue-500/30 rounded-lg p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-blue-500 rounded-full mb-4">
                  <span className="text-white font-bold text-sm">OFERTA EXCLUSIVA</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Certificados Acadêmicos Grátis!</h4>
                <p className="text-gray-200 mb-6">Ganhe 200 horas de créditos acadêmicos sem custos</p>

                {/* QR Code Placeholder */}
                <div className="bg-white p-6 rounded-lg inline-block mb-6">
                  <div className="w-32 h-32 bg-gray-300 flex items-center justify-center rounded">
                    <QrCode className="w-16 h-16 text-gray-400" />
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-4">Escaneie para reivindicar sua oferta</p>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                  Escanear Agora
                </button>
              </div>
            </div>

            {/* Warning Box */}
            <div className="bg-red-500/5 border-2 border-red-500/50 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-red-400 mb-2">⚠️ Sinais de Alerta</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Ofertas muito boas para ser verdade (créditos grátis)</li>
                    <li>• QR codes em emails ou banners suspeitos</li>
                    <li>• URLs que não correspondem ao site oficial</li>
                    <li>• Pedidos para confirmar dados pessoais/bancários</li>
                    <li>• Design básico ou com erros de digitação</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Protective Measures */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-lg p-10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Lock className="w-6 h-6 text-green-400" />
            Como Se Proteger
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-green-400 font-bold mb-2">✓ Práticas Seguras</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Desconfie de ofertas muito generosas</li>
                <li>• Verifique a URL antes de inserir dados</li>
                <li>• Acesse sites diretamente pelo navegador</li>
                <li>• Use autenticação de dois fatores</li>
                <li>• Procure pelo HTTPS na barra de endereço</li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-2">🔒 Ferramentas de Proteção</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Antivírus e antimalware atualizado</li>
                <li>• Validador de URLs antes de abrir</li>
                <li>• Gerenciador de senhas seguro</li>
                <li>• VPN para conexões públicas</li>
                <li>• Monitoração de contas bancárias</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
