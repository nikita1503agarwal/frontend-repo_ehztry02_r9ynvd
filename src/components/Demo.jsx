import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">See it in action</h2>
          <p className="mt-4 text-slate-300">A quick look at the editor, prompts, and instant formatting.</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-2 backdrop-blur-xl"
        >
          <div className="aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
            <div className="h-full w-full rounded-lg border border-slate-700/50 bg-slate-900/60 p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="size-3 rounded-full bg-rose-500/80" />
                <span className="size-3 rounded-full bg-amber-400/80" />
                <span className="size-3 rounded-full bg-emerald-500/80" />
                <span className="ml-auto text-xs text-slate-400">AI Editor • Live</span>
              </div>
              <div className="grid h-full grid-cols-12 gap-4">
                <div className="col-span-4 rounded-lg border border-slate-700/50 bg-slate-800/50 p-3 text-slate-300 text-sm">
                  Prompt: Outline a post about quantum networking for beginners.
                </div>
                <div className="col-span-8 rounded-lg border border-slate-700/50 bg-slate-800/40 p-3 text-slate-200">
                  <p className="font-semibold">H1: Quantum Networking: A Friendly Guide</p>
                  <p className="mt-2 text-slate-300">Intro • What is it? • Key concepts • Why it matters • Getting started</p>
                  <p className="mt-4 text-slate-400 text-sm">Formatting • Citations • Pull-quotes • Image prompts</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
