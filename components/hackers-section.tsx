"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Eye, Bug } from "lucide-react";

export default function HackersSection() {
  const attacks = [
    {
      title: "Malware & Ransomware",
      description:
        "Software malicioso que infecta seu computador e pode criptografar seus arquivos",
      icon: <Bug className="w-8 h-8" />,
      color: "from-red-400 to-pink-500",
    },
    {
      title: "SQL Injection",
      description:
        "Exploração de bancos de dados através de entradas não validadas",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-400 to-red-500",
    },
    {
      title: "Força Bruta",
      description:
        "Tentativa de adivinhar senhas testando múltiplas combinações",
      icon: <Lock className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Monitoramento",
      description: "Spyware que rastreia suas atividades online e offline",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-red-950/10 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tipos de Ataques Hackers
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {attacks.map((attack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${attack.color} bg-opacity-10 border border-opacity-30 rounded-lg p-8 hover:border-opacity-60 transition-all`}
              style={{
                borderColor: `rgba(255, 255, 255, 0.1)`,
              }}
            >
              <div
                className={`bg-gradient-to-r ${attack.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white`}
              >
                {attack.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {attack.title}
              </h3>
              <p className="text-xl font-bold text-white mb-3">
                {attack.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-lg p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            🛡️ Dicas de Proteção
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-400 font-bold mb-3">Comportamento</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Não abra anexos de desconhecidos</li>
                <li>✓ Desconfie de ofertas muito boas</li>
                <li>✓ Verifique informações antes de compartilhar</li>
                <li>✓ Mantenha software sempre atualizado</li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-bold mb-3">Tecnologia</h4>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Use autenticação de dois fatores (2FA)</li>
                <li>✓ Senhas fortes e únicas por site</li>
                <li>✓ Antivírus e firewall atualizado</li>
                <li>✓ VPN em redes públicas de WiFi</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
