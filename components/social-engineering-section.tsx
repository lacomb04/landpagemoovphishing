"use client"

import { motion } from "framer-motion"
import CodeBlock from "./code-block"
import { Users } from "lucide-react"

export default function SocialEngineeringSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">Engenharia Social</h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <CodeBlock
              code={`// Cenários de Engenharia Social

# Pretexting (Pretext)
Atacante: "Olá! Sou do suporte técnico"
Vítima: Acredita e compartilha dados

# Tailgating (Acesso Físico)
Seguir alguém através de porta segura
Parecer que também trabalha lá

# Phoning Attacks
Ligação fingindo ser empresa respeitada
"Preciso verificar suas informações"

# Baiting (Isca)
USB deixado em local público
"Arquivos importantes da empresa"
Vítima conecta e instala malware

# False Authority
"Sou seu gerente/chefe"
"Preciso dos dados AGORA"
Pressão e autoridade para agir`}
              language="bash"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Engenharia social é a exploração da psicologia humana para obter acesso a informações ou sistemas. Os
              atacantes exploram a confiança, medo e urgência.
            </p>

            <div className="space-y-6">
              <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-6">
                <h4 className="font-bold text-white mb-2 text-lg">🎭 Manipulação Psicológica</h4>
                <p className="text-gray-300">
                  Exploram emoções como medo, ganância e confiança para prejudicar o julgamento
                </p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-6">
                <h4 className="font-bold text-white mb-2 text-lg">🎯 Pesquisa Prévia</h4>
                <p className="text-gray-300">Criminosos estudam vítimas em redes sociais e internet antes de atacar</p>
              </div>

              <div className="bg-purple-900/20 border border-purple-500/50 rounded-lg p-6">
                <h4 className="font-bold text-white mb-2 text-lg">⏰ Criação de Urgência</h4>
                <p className="text-gray-300">"Sua conta foi hackeada!" ou "Aja agora ou perca seus dados!"</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
