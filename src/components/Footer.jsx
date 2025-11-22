export default function Footer() {
  return (
    <footer className="relative bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 shadow-[0_0_24px_rgba(56,189,248,0.35)]" />
          <span className="text-white font-semibold">NeuralPress</span>
        </div>
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NeuralPress. All rights reserved.</p>
      </div>
    </footer>
  )
}
