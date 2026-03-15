'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            // Add staggered delays for children with data-delay
            el.querySelectorAll('[data-reveal]').forEach((child, i) => {
              const htmlChild = child as HTMLElement
              setTimeout(() => {
                htmlChild.classList.add('visible')
              }, i * 120)
            })
            el.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
