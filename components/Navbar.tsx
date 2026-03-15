'use client'
import { useState, useEffect } from 'react'
import { Menu, X, Shield } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-navy-950/90 backdrop-blur-md border-b border-gold-400/10 py-3 shadow-lg shadow-black/20'
        : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center group-hover:bg-gold-400/30 transition-all">
            <Shield className="w-4 h-4 text-gold-400" />
          </div>
          <span className="font-display text-lg font-bold text-white">
            Pitamber <span className="text-gold-400">Singh</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-body text-slate-300 hover:text-gold-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5"
        >
          Free Consultation
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-900/95 backdrop-blur-md border-t border-gold-400/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-gold-400 transition-colors font-body py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center bg-gold-400 text-navy-950 font-semibold px-5 py-2.5 rounded-full text-sm mt-2"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  )
}
