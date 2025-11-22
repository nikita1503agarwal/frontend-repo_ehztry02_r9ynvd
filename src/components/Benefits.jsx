import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Publish in hours, not weeks',
    desc: 'Go from a blank page to a fully formatted, SEO-ready article in a single session.'
  },
  {
    title: 'Stay perfectly on-brand',
    desc: 'Train the voice model on your content and keep every post consistent.'
  },
  {
    title: 'Ship confidently',
    desc: 'Evidence mode attaches citations, while style rules ensure polish and quality.'
  },
]

export default function Benefits() {
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <h3 className="text-white font-semibold text-lg">{b.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
