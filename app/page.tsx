import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pitamber Singh — LIC Insurance Advisor',
    description:
      'Trusted LIC Insurance Agent in Dhampur, Bijnor, Uttar Pradesh offering Term Life, Endowment, Child, Pension and Health Insurance plans.',
    url: 'https://pitambersingh-lic.vercel.app',
    telephone: '+91-9760607071',
    email: 'pitambersingh@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dhampur',
      addressLocality: 'Bijnor',
      addressRegion: 'Uttar Pradesh',
      postalCode: '246735',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '29.3082',
      longitude: '78.5084',
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    sameAs: ['https://wa.me/919760607071'],
    priceRange: 'Free Consultation',
    image: 'https://pitambersingh-lic.vercel.app/og-image.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1200',
    },
  }

  return (
    <ScrollRevealProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </ScrollRevealProvider>
  )
}