"use client"

import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  // O código agora é exibido completo imediatamente
  
  return (
    <div className="bg-black/50 border border-cyan-500/30 rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 px-4 py-3 border-b border-cyan-500/20 flex items-center justify-between">
        <span className="text-cyan-400 font-mono text-sm">{language}</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full" />
          <div className="w-2 h-2 bg-yellow-500 rounded-full" />
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
      </div>
      <pre className="p-6 overflow-x-auto">
        <code className="font-mono text-sm text-gray-300 whitespace-pre-wrap break-words">
          {code}
        </code>
      </pre>
    </div>
  )
}
