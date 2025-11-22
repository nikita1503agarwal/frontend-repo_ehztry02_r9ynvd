import { motion } from 'framer-motion'
import { Sparkles, Brain, Feather, Layers, Send, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Brain,
    title: 'Neural Drafting',
    desc: 'Brainstorm, outline, and draft in seconds using multi-model orchestration.'
  },
  {
    icon: Feather,
    title: 'Voice Lock',
    desc: 'Train on your samples to keep tone, cadence, and style perfectly on-brand.'
  },
  {
    icon: Layers,
    title: 'Structure Aware',
    desc: 'Semantic sections, citations, pull-quotes, and image prompts—auto formatted.'
  },
  {
    icon: ShieldCheck,
    title: 'Fact Guard',
    desc: 'Evidence mode flags claims and attaches sources before you publish.'
  },
  {
    icon: Send,
    title: 'One-Click Publish',
    desc: 'Export straight to your CMS with SEO metadata and responsive images.'
  },
  {
    icon: Sparkles,
    title: 'Magic Tweaks',
    desc: 'Rewrite, expand, or change tone anywhere with inline commands.'
  },
]

export default function Features() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Built for high-velocity teams</h2>
          <p className="mt-4 text-slate-300">Everything you need to go from idea to publish, 10x faster.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-cyan-400/20 bg-slate-800/60 p-3">
                <Icon className="size-6 text-cyan-300" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
