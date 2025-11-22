import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function NeonButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(34,211,238,0.35), 0 0 80px rgba(168,85,247,0.25)' }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-cyan-50 bg-gradient-to-r from-cyan-500 to-violet-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-[0_0_24px_rgba(56,189,248,0.35)]"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 to-fuchsia-500/20 blur-xl pointer-events-none" />
    </motion.button>
  )
}

function FloatingOrb({ size = 140, colorFrom = '#22d3ee', colorTo = '#a78bfa', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 0.3, y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: 'easeInOut' }}
      className="pointer-events-none absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${colorFrom}, ${colorTo} 60%, transparent 70%)`,
        filter: 'blur(40px) saturate(120%)',
      }}
    />
  )
}

export default function Hero() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 60, damping: 12 })
  const springY = useSpring(y, { stiffness: 60, damping: 12 })
  const rot = useTransform(springX, [ -100, 100 ], [ -6, 6 ])
  const floatX = useTransform(springX, (v) => v * 0.05)
  const floatY = useTransform(springY, (v) => v * 0.05)

  useEffect(() => {
    const handle = (e) => {
      const { innerWidth, innerHeight } = window
      const dx = (e.clientX - innerWidth / 2) / (innerWidth / 2)
      const dy = (e.clientY - innerHeight / 2) / (innerHeight / 2)
      x.set(dx * 120)
      y.set(dy * 120)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [x, y])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* Spline 3D hero animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for premium glow (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 size-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.6)_40%,rgba(2,6,23,0.9))]" />
      </div>

      {/* Subtle particles */}
      <FloatingOrb size={220} colorFrom="#06b6d4" colorTo="#8b5cf6" delay={0.2} />
      <FloatingOrb size={180} colorFrom="#22d3ee" colorTo="#22d3ee" delay={1.3} />
      <FloatingOrb size={200} colorFrom="#a78bfa" colorTo="#0ea5e9" delay={2.1} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 sm:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/60 px-4 py-2 text-sm text-cyan-200/80 backdrop-blur-md"
          >
            <span className="inline-block size-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            Fully AI-powered writing platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            style={{ textShadow: '0 0 24px rgba(34,211,238,0.18), 0 0 48px rgba(168,85,247,0.15)' }}
          >
            Create breathtaking blog posts with AI precision
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-6 text-lg sm:text-xl text-slate-300"
          >
            From idea to publish-ready in seconds. Intelligent research, on-brand voice, and flawless formatting—automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <NeonButton>Start writing free</NeonButton>
            <motion.button whileHover={{ scale: 1.05 }} className="rounded-xl px-6 py-3 border border-slate-700/80 text-slate-200 bg-slate-900/30 hover:bg-slate-900/60">
              Watch demo
            </motion.button>
          </motion.div>
        </div>

        {/* Floating cards that react to mouse */}
        <div className="relative mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Neural Outline', desc: 'Instant, SEO-smart structures built by our graph engine.' },
            { title: 'Style Memory', desc: 'Learns your tone and keeps it consistent across posts.' },
            { title: 'One-Click Publish', desc: 'Export to CMS with clean HTML, images, and metadata.' },
          ].map((f, i) => (
            <motion.div
              key={i}
              style={{ x: floatX, y: floatY, rotate: rot }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 opacity-0 group-hover:opacity-20 blur-xl pointer-events-none" />
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle top vignette to increase contrast over Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
    </section>
  )
}
