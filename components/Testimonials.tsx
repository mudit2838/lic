'use client'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Noida, UP',
    plan: 'Jeevan Labh',
    rating: 5,
    text: 'Pitamber bhai helped me choose the perfect plan for my children\'s education. His patient explanation and honest advice made me feel confident about the investment. Highly recommend him!',
    initial: 'P',
  },
  {
    name: 'Amit Verma',
    location: 'Bijnor, UP',
    plan: 'LIC Tech Term',
    rating: 5,
    text: 'I had zero knowledge about insurance. Pitamber ji explained everything clearly, without any pressure. He got me the best term cover for my salary. Very trustworthy person.',
    initial: 'A',
  },
  {
    name: 'Sunita Agarwal',
    location: 'Najibabad, UP',
    plan: 'Jeevan Shanti',
    rating: 5,
    text: 'After my husband\'s retirement, Pitamber Singh guided us to choose Jeevan Shanti for a guaranteed monthly pension. The claim process was also smooth. God bless him!',
    initial: 'S',
  },
  {
    name: 'Rohit Mishra',
    location: 'Seohara, UP',
    plan: 'New Jeevan Anand',
    rating: 5,
    text: 'Been his client for 7 years now. Every year he follows up, reminds me of premium dates, and suggests improvements. This is what a true advisor looks like.',
    initial: 'R',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest font-body">Client Stories</span>
            <div className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What My Clients <span className="gold-shimmer">Say About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-body">
            Real experiences from real families I've had the privilege to protect.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal glass-card rounded-2xl p-7 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-gold-400/15" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-body italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-gold-400">{t.initial}</span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm font-body">{t.name}</div>
                  <div className="text-slate-500 text-xs font-body">{t.location} · {t.plan}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {['A', 'P', 'S', 'R'].map((letter) => (
                <div key={letter} className="w-7 h-7 rounded-full bg-gold-400/20 border-2 border-navy-900 flex items-center justify-center">
                  <span className="text-gold-400 text-xs font-bold">{letter}</span>
                </div>
              ))}
            </div>
            <span className="text-slate-300 text-sm font-body">Trusted by <strong className="text-gold-400">1200+ families</strong> across UP & Delhi NCR</span>
          </div>
        </div>
      </div>
    </section>
  )
}
