'use client'
import { CheckCircle2, Award, BookOpen, HeartHandshake } from 'lucide-react'

const highlights = [
  { icon: Award, text: 'MDRT & COT Award Winner — 8 consecutive years' },
  { icon: BookOpen, text: 'LIC Development Officer with 15+ years of experience' },
  { icon: HeartHandshake, text: 'Helped 1200+ families secure their financial future' },
  { icon: CheckCircle2, text: 'Transparent, client-first advisory — no pressure selling' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-navy-900/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 reveal">
          <div className="w-8 h-px bg-gold-400" />
          <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest font-body">Who I Am</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left — visual card */}
          <div className="flex-shrink-0 reveal-left">
            <div className="relative w-72 md:w-80">
              <div className="absolute -inset-4 bg-gold-400/5 rounded-3xl blur-xl" />
              <div className="relative glass-card rounded-3xl p-8 text-center">
                {/* Big initial avatar */}
               <div className="w-full h-56 rounded-2xl mb-4 overflow-hidden border border-gold-400/20 relative">
  <img
    src="/chacha.jpeg"
    alt="Pitamber Singh - LIC Agent"
    className="w-full h-full object-cover object-top"
  />
</div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Pitamber Singh</h3>
                <p className="text-gold-400 text-sm mb-4 font-medium">LIC Development Officer</p>
                <div className="h-px bg-gold-400/20 mb-4" />
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="font-display text-2xl font-bold text-white">15+</div>
                    <div className="text-slate-400 text-xs font-body">Years Exp.</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white">1200+</div>
                    <div className="text-slate-400 text-xs font-body">Clients</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white">₹50Cr</div>
                    <div className="text-slate-400 text-xs font-body">Settled</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-white">98%</div>
                    <div className="text-slate-400 text-xs font-body">Satisfied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 reveal-right">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Your Trusted Partner<br />
              <span className="gold-shimmer">In Every Life Stage</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-6 font-body">
              I'm Pitamber Singh, a certified LIC Development Officer based in Dhampur(Shekhpur That), Uttar Pradesh. Over the past 15 years, I have dedicated myself to helping individuals and families find the right insurance coverage — not just policies, but peace of mind.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-body">
              My approach is always client-first. I sit down with you, understand your goals, your risks, and your family's needs — and then recommend the most suitable LIC plan. No jargon. No pressure. Just honest advice.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-body leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/30 hover:-translate-y-0.5"
            >
              Talk to Me Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
