import { Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-gold-400/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center">
              <Shield className="w-4 h-4 text-gold-400" />
            </div>
            <span className="font-display font-bold text-white">
              Pitamber <span className="text-gold-400">Singh</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-body text-slate-500">
            <a href="#home" className="hover:text-gold-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-gold-400 transition-colors">About</a>
            <a href="#services" className="hover:text-gold-400 transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-gold-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a>
          </div>

          {/* Disclaimer */}
          <p className="text-slate-600 text-xs font-body text-center md:text-right max-w-xs">
            © {new Date().getFullYear()} Pitamber Singh · Authorized LIC Agent. Insurance is subject to market risks.
          </p>
        </div>
      </div>
    </footer>
  )
}
