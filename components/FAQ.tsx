'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is LIC and why should I choose it?',
        a: "LIC (Life Insurance Corporation of India) is the largest and most trusted government-owned insurance company in India. With over 65 years of experience, it has settled crores of claims and is backed by the Government of India — making it the safest choice for your family's financial security.",
      },
      {
        q: 'How do I choose the right LIC plan?',
        a: "The right plan depends on your age, income, family size, financial goals, and risk appetite. As your LIC advisor, I analyze all these factors and recommend the most suitable plan — whether it's a term plan for pure protection, endowment for savings, or pension for retirement.",
      },
      {
        q: 'What documents are required to buy a LIC policy?',
        a: 'You typically need: Age proof (Aadhaar, PAN, Birth Certificate), Address proof (Aadhaar, Voter ID, Passport), Income proof (salary slip, ITR), Recent passport-size photographs, and a duly filled proposal form.',
      },
    ],
  },
  {
    category: 'Premium & Payment',
    questions: [
      {
        q: 'What are the different premium payment modes?',
        a: 'LIC offers flexible premium payment modes — Monthly, Quarterly, Half-Yearly, and Annual. You can pay via cash, cheque, online (LIC portal, NEFT, UPI), or through auto-debit from your bank account.',
      },
      {
        q: 'What happens if I miss a premium payment?',
        a: 'LIC provides a grace period of 30 days (15 days for monthly mode). If not paid within the grace period, the policy lapses. However, it can be revived within 5 years by paying all due premiums with interest.',
      },
      {
        q: 'Can I get tax benefits on LIC premiums?',
        a: 'Yes! LIC premiums are eligible for tax deduction under Section 80C of the Income Tax Act (up to ₹1.5 lakh per year). The maturity/death benefit received is also tax-free under Section 10(10D), subject to conditions.',
      },
    ],
  },
  {
    category: 'Claims',
    questions: [
      {
        q: 'How do I file a death claim with LIC?',
        a: "To file a death claim: (1) Inform the nearest LIC branch, (2) Submit the claim form along with death certificate, original policy bond, and nominee's ID proof. As your agent, I personally assist your family through the entire claim process.",
      },
      {
        q: 'How long does LIC take to settle a claim?',
        a: "LIC settles death claims within 30 days of receiving all required documents. For maturity claims, the amount is credited directly to your bank account on the due date. LIC's claim settlement ratio is consistently above 98%.",
      },
      {
        q: 'Can a claim be rejected by LIC?',
        a: 'Claims can be rejected if there is suppression of material facts (hiding medical history), fraud, or policy lapse at the time of death.',
      },
    ],
  },
  {
    category: 'Policy & Surrender',
    questions: [
      {
        q: 'Can I surrender my LIC policy before maturity?',
        a: "Yes, most LIC policies acquire a surrender value after 3 years of premium payment. However, surrendering early means you get less than what you've paid.",
      },
      {
        q: 'Can I take a loan against my LIC policy?',
        a: 'Yes! LIC policies acquire loan eligibility after 3 years. You can borrow up to 90% of the surrender value at a nominal interest rate.',
      },
      {
        q: 'How do I change the nominee in my LIC policy?',
        a: "You can change the nominee by submitting a nomination form at the nearest LIC branch or through the LIC online portal.",
      },
    ],
  },
]

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('General')

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key)
  }

  const currentFaqs = faqs.find((f) => f.category === activeCategory)

  return (
    <section id="faq" className="relative py-28 overflow-hidden">

      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/4 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gold-shimmer">Questions</span>
          </h2>

          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Everything you need to know about LIC policies.
          </p>

        </div>

        {/* Categories */}

        <div className="flex flex-wrap justify-center gap-2 mb-10">

          {faqs.map((f) => (

            <button
              key={f.category}
              onClick={() => { setActiveCategory(f.category); setOpenIndex(null) }}
              className={`px-5 py-2 rounded-full text-sm font-semibold border ${
                activeCategory === f.category
                  ? 'bg-gold-400/20 border-gold-400 text-gold-400'
                  : 'border-navy-700 text-slate-400'
              }`}
            >
              {f.category}

            </button>

          ))}

        </div>

        {/* Questions */}

        <div className="space-y-3">

          {currentFaqs?.questions.map((item, i) => {

            const key = `${activeCategory}-${i}`
            const isOpen = openIndex === key

            return (

              <div key={key} className="glass-card rounded-2xl overflow-hidden">

                <button
                  onClick={() => toggle(key)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >

                  <span className={`font-semibold ${isOpen ? 'text-gold-400' : 'text-white'}`}>
                    {item.q}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-gold-400 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />

                </button>

                {isOpen && (

                  <div className="px-6 pb-5 text-slate-400 text-sm border-t border-navy-700 pt-4">

                    {item.a}

                  </div>

                )}

              </div>

            )

          })}

        </div>

        {/* CTA */}

        <div className="mt-12 text-center">

          <p className="text-slate-400 mb-4">
            Still have questions? I'm here to help!
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/30"
          >
            Ask Me Directly →
          </a>

        </div>

      </div>

    </section>
  )
}