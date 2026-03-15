'use client'
import { useEffect, useRef } from 'react'
import { ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '1200+', label: 'Happy Clients' },
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: TrendingUp, value: '₹50Cr+', label: 'Claims Settled' },
  { icon: Star, value: '4.9★', label: 'Client Rating' },
]

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate particles
    const particles = particlesRef.current?.querySelectorAll('.particle')
    particles?.forEach((p, i) => {
      const el = p as HTMLElement
      el.style.animationDelay = `${i * 0.4}s`
      el.style.left = `${Math.random() * 100}%`
      el.style.top = `${Math.random() * 100}%`
    })
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-700/30 rounded-full blur-3xl pointer-events-none" />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-gold-400/30 rounded-full animate-float"
            style={{ animationDuration: `${4 + Math.random() * 4}s` }}
          />
        ))}
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(245,196,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,196,0,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
              Certified LIC Agent — MDRT Qualifier
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Protect What<br />
              <span className="gold-shimmer">Matters Most</span><br />
              <span className="text-slate-300 text-4xl md:text-5xl">to You</span>
            </h1>

            <p className="font-body text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              As your dedicated LIC advisor, I help you choose the right insurance plan — tailored to your life goals, budget, and family's future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/30 hover:-translate-y-1 text-base"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-gold-400/30 text-gold-400 hover:bg-gold-400/10 font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base"
              >
                Explore Plans
              </a>
            </div>
          </div>

          {/* Right — Agent card */}
          <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-72 md:w-80">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gold-400/10 rounded-3xl blur-xl" />

              <div className="relative glass-card rounded-3xl p-6 gold-glow">
                {/* Avatar placeholder */}
                <div className="w-full h-56 rounded-2xl mb-4 overflow-hidden border border-gold-400/20 relative">
                  <img
                    src="/chacha.jpeg"
                    alt="Pitamber Singh - LIC Agent"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <h3 className="font-display text-xl font-bold text-white">Pitamber Singh</h3>
                <p className="text-gold-400 text-sm font-medium mb-3">Senior LIC Development Officer</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                  <span className="text-slate-400 text-xs ml-1">(4.9 / 5)</span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {['MDRT', 'COT', 'LIC Certified'].map((b) => (
                    <span key={b} className="text-xs bg-gold-400/10 border border-gold-400/20 text-gold-400 px-3 py-1 rounded-full">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass-card rounded-2xl p-5 text-center">
              <Icon className="w-5 h-5 text-gold-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-white">{value}</div>
              <div className="text-slate-400 text-xs mt-1 font-body">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  )
}
