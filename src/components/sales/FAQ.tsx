import { useState } from 'react'
import { faqs } from './data'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-20 bg-forest-900 relative overflow-hidden">
      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Perguntas <span className="text-shimmer">frequentes</span>
          </h2>
          <p className="section-subtitle">Tudo o que você precisa saber antes de comprar</p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-forest-950/60 border border-neon-500/15 overflow-hidden transition-all duration-300 hover:border-neon-500/30"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-heading font-semibold text-[1.125rem] sm:text-[1.25rem] text-cream">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 text-neon-400 text-2xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-cream/80 text-[1.125rem] sm:text-[1.25rem] leading-[1.7]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
