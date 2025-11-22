import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'Get a feel for AI writing with essential features.',
    features: ['3 posts/month', 'Basic voice tuning', 'Export to Markdown']
  },
  {
    name: 'Pro',
    price: '$39',
    highlight: true,
    desc: 'For creators and small teams publishing weekly.',
    features: ['Unlimited drafts', 'Advanced voice memory', 'SEO optimizer', 'CMS export']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Security, SSO, governance, and premium support.',
    features: ['SSO/SAML', 'Custom models', 'Compliance controls']
  },
]

export default function Pricing() {
  return (
    <section className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-300">Start free, upgrade when you’re ready.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-cyan-400/40' : 'border-white/10'} bg-slate-900/60 p-6 backdrop-blur-xl`}
            >
              {t.highlight && (
                <div className="absolute -top-3 right-6 rounded-full border border-cyan-400/30 bg-slate-900/80 px-3 py-1 text-xs text-cyan-300">
                  Most Popular
                </div>
              )}
              <h3 className="text-white font-semibold text-xl">{t.name}</h3>
              <div className="mt-2 text-4xl font-extrabold text-white">{t.price}</div>
              <p className="mt-2 text-slate-300 text-sm">{t.desc}</p>
              <ul className="mt-6 space-y-2 text-slate-300 text-sm">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <span className="inline-block size-1.5 rounded-full bg-cyan-400" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 font-semibold ${t.highlight ? 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_24px_rgba(56,189,248,0.35)]' : 'border border-slate-700/80 text-slate-200 bg-slate-900/30 hover:bg-slate-900/60'}`}>Get started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
