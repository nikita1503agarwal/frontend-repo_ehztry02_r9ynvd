import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Demo from './components/Demo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-violet-600 shadow-[0_0_24px_rgba(56,189,248,0.35)]" />
            <span className="font-semibold">NeuralPress</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
          </div>
          <button className="rounded-xl px-4 py-2 text-sm font-semibold bg-white/5 hover:bg-white/10 border border-white/10">Sign in</button>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <div id="features"><Features /></div>
        <Benefits />
        <div id="demo"><Demo /></div>
        <div id="pricing"><Pricing /></div>
        <div id="testimonials"><Testimonials /></div>
      </main>
      <Footer />
    </div>
  )
}

export default App
