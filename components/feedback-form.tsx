"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          rating,
          feedback,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar feedback");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setFeedback("");
      setRating(0);

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg p-6 md:p-8"
    >
      <h3 className="text-white font-bold text-xl mb-6">Deixe seu Feedback</h3>

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 p-4 bg-green-500/20 border border-green-500/50 rounded text-green-400 text-sm"
        >
          ✓ Obrigado! Seu feedback foi enviado com sucesso.
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded text-red-400 text-sm"
        >
          ✗ {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white text-sm focus:border-cyan-400 focus:outline-none transition"
            placeholder="Seu nome"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white text-sm focus:border-cyan-400 focus:outline-none transition"
            placeholder="seu.email@exemplo.com"
            required
          />
        </div>

        {/* Avaliação com Stars */}
        <div>
          <label className="block text-sm text-gray-300 mb-3">Avaliação</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="transition"
              >
                <Star
                  size={24}
                  className={`transition-all ${
                    star <= (hoveredRating || rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-600"
                  }`}
                />
              </motion.button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-xs text-gray-400 mt-2">{rating} de 5 estrelas</p>
          )}
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            Seu Feedback
          </label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full bg-black/50 border border-cyan-500/30 rounded px-3 py-2 text-white text-sm focus:border-cyan-400 focus:outline-none transition resize-none"
            placeholder="O que você achou? Deixe suas sugestões e comentários..."
            rows={4}
            required
          />
        </div>

        {/* Botão Submit */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 text-black font-bold py-2 rounded transition"
        >
          {loading ? "Enviando..." : "Enviar Feedback"}
        </motion.button>
      </form>
    </motion.div>
  );
}
