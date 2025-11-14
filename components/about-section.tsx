"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

const highlights = [
  {
    title: "GTI 4º período",
    description:
      "Somos estudantes de Gestão da Tecnologia da Informação, em plena jornada acadêmica no quarto período.",
    icon: GraduationCap,
  },
  {
    title: "Paixão por segurança",
    description:
      "Transformamos pesquisas e experiências práticas em conteúdos acessíveis sobre cibersegurança.",
    icon: ShieldCheck,
  },
  {
    title: "Aprender compartilhando",
    description:
      "Acreditamos que conhecimento se multiplica quando dividido com a comunidade.",
    icon: Sparkles,
  },
];

const teamMembers = ["Victor Lacomb de Melo", "Eduardo Reis", "Vinicius Kamay"];

export default function AboutSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-black via-indigo-950/10 to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-64 w-64 translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-10 w-10 text-indigo-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Quem somos nós
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full mb-8" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Somos estudantes de Gestão da Tecnologia da Informação (GTI) no 4º
            período e criamos este projeto para promover conscientização sobre
            crimes cibernéticos. A cada nova disciplina, exploramos formas de
            traduzir conceitos técnicos em experiências visuais e didáticas.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-8 rounded-2xl border border-indigo-500/40 bg-indigo-900/20 p-6"
          >
            <div className="mb-6">
              <div className="w-full max-w-2xl h-48 md:h-56 rounded-xl overflow-hidden border border-white/20 mx-auto">
                <Image
                  src={encodeURI("/images/Foto integrantes.png")}
                  alt="Foto dos integrantes"
                  width={960}
                  height={640}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="text-white text-lg font-semibold text-center mt-3">
                Equipe: {teamMembers.join(" • ")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {teamMembers.map((member) => (
                <span
                  key={member}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-wide text-indigo-100"
                >
                  {member}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-xl border border-indigo-500/40 bg-indigo-900/20 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/15">
                    <Icon className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-black/40">
            <Image
              src="/images/progress-20behind.jpg"
              alt="Equipe de estudantes de GTI"
              width={680}
              height={520}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-gray-200">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">
                  Projeto acadêmico
                </p>
                <p className="text-xl font-semibold text-white">
                  Turma GTI - 4º período
                </p>
                <p className="text-xs text-indigo-100 mt-2">
                  Integrantes: {teamMembers.join(" • ")}
                </p>
              </div>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-wide">
                2025
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
