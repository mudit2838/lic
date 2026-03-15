'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    plan: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      setSubmitted(true)
    } catch (error) {
      alert('Failed to submit. Please try again or contact via WhatsApp.')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9760607071',
      href: 'tel:+919760607071',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'pitambersingh@gmail.com',
      href: 'mailto:pitambersingh@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Dhampur, Bijnor, UP 246735',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-400" />
            <span className="text-gold-400 text-sm font-semibold uppercase tracking-widest font-body">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-gold-400" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Start Your <span className="gold-shimmer">Free Consultation</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto font-body">
            Fill in your details and I'll get back to you within 24 hours to discuss the best plan for you.
          </p>
        </div>


        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Info */}

          <div className="flex-shrink-0 lg:w-80 reveal-left">

            <div className="space-y-4 mb-10">

              {contactInfo.map(({ icon: Icon, label, value, href }) => (

                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 glass-card rounded-xl p-4 group"
                >

                  <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>

                  <div>
                    <div className="text-slate-500 text-xs font-body mb-0.5">
                      {label}
                    </div>

                    <div className="text-white text-sm font-semibold font-body">
                      {value}
                    </div>
                  </div>

                </a>

              ))}

            </div>

            {/* WhatsApp CTA */}

            <a
              href="https://wa.me/919760607071"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold px-5 py-3.5 rounded-xl transition-all duration-300 text-sm font-body"
            >

              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">

                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />

              </svg>

              Chat on WhatsApp

            </a>

          </div>


          {/* Contact Form */}

          <div className="flex-1 reveal-right">

            {submitted ? (

              <div className="glass-card rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">

                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Thank You!
                </h3>

                <p className="text-slate-400 font-body">
                  I'll contact you within 24 hours to discuss your insurance needs.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8"
              >

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">

                  {/* Name */}

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-navy-800/60 border border-navy-700 text-white px-4 py-3 rounded-xl text-sm"
                  />

                  {/* Phone */}

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    required
                     pattern="[0-9]{10}"
                    maxLength={10}
                    minLength={10}
                    
                    className="w-full bg-navy-800/60 border border-navy-700 text-white px-4 py-3 rounded-xl text-sm"
                    onInput={(e) => {
                      e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                    }}
                  />

                </div>

                {/* Email */}

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full mb-4 bg-navy-800/60 border border-navy-700 text-white px-4 py-3 rounded-xl text-sm"
                />

                {/* Plan */}

                <select
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                  className="w-full mb-4 bg-navy-800/60 border border-navy-700 text-white px-4 py-3 rounded-xl text-sm"
                >
                  <option value="">Select a plan type...</option>
                  <option>Term Life Insurance</option>
                  <option>Endowment Plan</option>
                  <option>Child Plan</option>
                  <option>Pension / Retirement</option>
                  <option>Money Back Plan</option>
                  <option>Not Sure — Need Guidance</option>
                </select>

                {/* Message */}

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your needs or any questions..."
                  rows={4}
                  className="w-full mb-6 bg-navy-800/60 border border-navy-700 text-white px-4 py-3 rounded-xl text-sm"
                />

                <button
                  type="submit"
                  disabled={loading || !form.name || !form.phone}
                  className="w-full flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-300 disabled:opacity-50 text-navy-950 font-bold px-8 py-4 rounded-xl transition-all duration-300"
                >

                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy-950/30 border-t-navy-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}

                </button>

              </form>

            )}

          </div>

        </div>

      </div>

    </section>
  )
}