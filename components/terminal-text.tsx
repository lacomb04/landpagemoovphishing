"use client"

export default function TerminalText({ text }: { text: string; speed?: number }) {
  return (
    <div className="font-mono text-lg md:text-2xl text-cyan-400 tracking-wider whitespace-pre-wrap break-words">
      <span>{text}</span>
    </div>
  )
}
