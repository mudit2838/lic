'use client'
import { Shield, Heart, Baby, Briefcase, Clock, Umbrella } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Term Life Insurance',
    description: 'Comprehensive protection for your family at affordable premiums. Secure their future with the right cover.',
    plans: ['LIC Tech Term', 'LIC Jeevan Amar', 'LIC New Tech Term'],
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    icon: Heart,
    title: 'Endowment Plans',
    description: 'Savings + protection in one plan. Build wealth while keeping your family covered.',
    plans: ['Jeevan Labh', 'New Endowment', 'Jeevan Anand'],
    color: 'from-rose-500/20 to-rose-600/5',
  },
  {
    icon: Baby,
    title: 'Child Plans',
    description: 'Invest today for your child\'s education, marriage, and future milestones.',
    plans: ['Jeevan Tarun', 'New Children Money Back', 'Jeevan Lakshya'],
    color: 'from-emerald-500/20 to-emerald-600/5',
  },
  {
    icon: Briefcase,
    title: 'Pension & Retirement',
    description: 'Build a steady income post-retirement. Enjoy your golden years without financial stress.',
    plans: ['Jeevan Shanti', 'New Jeevan Nidhi', 'Jeevan Akshay'],
    color: 'from-purple-500/20 to-purple-600/5',
  },
  {
    icon: Clock,
    title: 'Money Back Plans',
    description: 'Periodic cash payouts throughout the policy term — liquidity when you need it most.',
    plans: ['New Money Back 20yr', 'New Money Back 25yr', 'Bima Bachat'],
    color: 'from-amber-500/20 to-amber-600/5',
  },
  {
    icon: Umbrella,
    title: 'Health & Riders',
    description: 'Add critical illness, accidental disability, and premium waiver riders to enhance your cover.',
    plans: ['Accidental Rider', 'Critical Illness Rider', 'Premium Waiver'],
    color: 'from-cyan-500/20 to-cyan-600/5',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest font-body">What I Offer</span>
            <div className="w-8 h-px bg-gold-400" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Plans for Every <span className="gold-shimmer">Life Goal</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto font-body">
            From your first job to your retirement — I have the right LIC plan for every chapter of your life.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="reveal glass-card rounded-2xl p-6 group cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm font-body leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Plans list */}
                <div className="space-y-1.5">
                  {service.plans.map((plan) => (
                    <div key={plan} className="flex items-center gap-2 text-xs text-slate-500 font-body">
                      <div className="w-1 h-1 rounded-full bg-gold-400/60 flex-shrink-0" />
                      {plan}
                    </div>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-1 text-gold-400/50 group-hover:text-gold-400 text-xs font-semibold transition-colors">
                  Know more
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
