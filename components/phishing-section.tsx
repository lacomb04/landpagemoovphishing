"use client"

import { motion } from "framer-motion"
import CodeBlock from "./code-block"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function PhishingSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">O que é Phishing?</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Phishing é uma técnica de ataque onde cibercriminosos se passam por entidades legítimas para enganar
              pessoas e obter informações sensíveis como senhas, dados bancários ou dados pessoais.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Emails Falsos</h4>
                  <p className="text-gray-400">
                    Criminosos enviam emails que parecem vir de bancos, redes sociais ou empresas conhecidas
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Links Maliciosos</h4>
                  <p className="text-gray-400">
                    URLs que parecem legítimas, mas levam a sites falsos projetados para roubar dados
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-2">Urgência Falsa</h4>
                  <p className="text-gray-400">Mensagens que criam pressão para ação imediata sem pensar</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CodeBlock
              code={`// Exemplo de Email Phishing

Remetente: "suporte@bancobrasil.com"
(Real: suporte@bb.com.br)

Assunto: Urgente! Confirme sua identidade

Corpo:
Sua conta foi comprometida!
Clique AGORA para recuperar acesso:
[https://bancobrasil-seguro-login.com]

⚠️ SINAIS DE PERIGO:
• Endereço de email ligeiramente diferente
• Pressão por ação imediata
• URL suspeita (hover para ver)
• Solicitação de senha/dados sensíveis`}
              language="text"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-green-900/20 border border-green-500/50 rounded-lg p-8"
        >
          <div className="flex gap-3 items-start">
            <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-white mb-3">Como se proteger:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Verifique o email do remetente com cuidado</li>
                <li>✓ Nunca clique em links diretos de emails</li>
                <li>✓ Sempre acesse sites digitando a URL diretamente</li>
                <li>✓ Empresas legítimas nunca pedem senhas por email</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
