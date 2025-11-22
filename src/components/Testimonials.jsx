import { motion } from 'framer-motion'

const quotes = [
  {
    name: 'Maya Chen',
    role: 'Head of Content, NovaCloud',
    quote: 'We cut our production time by 80% and our quality went up. The voice memory is unreal.'
  },
  {
    name: 'Daniel Ortiz',
    role: 'Founder, HyperType',
    quote: 'Our most-read posts this year were generated here. It nails clarity without sounding robotic.'
  },
  {
    name: 'Sofia Karim',
    role: 'Marketing Lead, Quanta',
    quote: 'Evidence mode is a game changer. No more guessing—every claim is backed up.'
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Loved by fast-moving teams</h2>
          <p className="mt-4 text-slate-300">From startups to enterprises, teams ship faster with confidence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <p className="text-slate-200">“{q.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{q.name} • {q.role}</div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
