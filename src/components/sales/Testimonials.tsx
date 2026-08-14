import { testimonials } from './data'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-xl">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-forest-900 relative overflow-hidden">
      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Quem já transformou sua <span className="text-shimmer">vida</span>
          </h2>
          <p className="section-subtitle">
            Histórias reais de pessoas que resgataram sua autoestima
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="card-glow flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-neon-500/40 shadow-lg"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg text-cream">{t.name}</h3>
                  <p className="text-cream/60 text-sm">{t.age} anos • {t.location}</p>
                  <Stars count={t.rating} />
                </div>
              </div>
              <p className="text-cream/85 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-2 mt-auto pt-2 border-t border-neon-500/10">
                <span className="text-neon-400 text-lg">✓</span>
                <span className="text-cream/50 text-sm font-heading">Compra verificada</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
