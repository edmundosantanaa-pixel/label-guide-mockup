import { HOTMART_LINK } from './data'

export default function Offer() {
  const items = [
    { name: 'E-book O Código do Centenário (7 capítulos, 30 páginas)', value: 'R$ 97,00', bonus: false },
    { name: 'Bônus 1: Cardápio Bio-Ativo de 21 Dias', value: 'R$ 67,00', bonus: true },
    { name: 'Bônus 2: Rastreador de Idade Biológica & Checklist', value: 'R$ 47,00', bonus: true },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      <div className="container-sales relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Sua oferta <span className="text-shimmer">completa</span>
          </h2>
          <p className="section-subtitle">Confira tudo o que você leva hoje</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="card-glow !p-8 sm:!p-10 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-lilac-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Items list */}
              <div className="space-y-4 mb-8">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-neon-500/10">
                    <div className="flex items-start gap-3">
                      <span className={`flex-shrink-0 text-xl mt-0.5 ${item.bonus ? 'text-lilac-300' : 'text-neon-400'}`}>
                        {item.bonus ? '🎁' : '📘'}
                      </span>
                      <span className="text-cream/90 text-[1.125rem] sm:text-[1.25rem] leading-[1.6]">
                        {item.name}
                      </span>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-cream/50 line-through text-[1.125rem]">{item.value}</span>
                      <p className={`font-heading font-bold ${item.bonus ? 'text-neon-400' : 'text-cream/60'} text-sm`}>
                        {item.bonus ? 'GRÁTIS' : 'Incluso'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="text-center mb-6">
                <p className="text-cream/60 text-lg mb-1">Valor total:</p>
                <p className="text-cream/40 line-through text-3xl sm:text-4xl font-heading font-bold">
                  R$ 211,00
                </p>
              </div>

              {/* Price */}
              <div className="text-center mb-8 py-6 px-4 rounded-2xl bg-gradient-to-r from-neon-500/10 to-lilac-500/10 border border-neon-500/30">
                <p className="text-cream font-heading font-semibold text-lg mb-2">Hoje por apenas:</p>
                <p className="font-heading font-black text-5xl sm:text-6xl text-neon-400 mb-2">
                  R$ 37,00
                </p>
                <p className="text-cream/70 text-base sm:text-lg">
                  ou em até <strong className="text-lilac-300">4x de R$ 9,75</strong> no cartão
                </p>
              </div>

              {/* CTA */}
              <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-2xl w-full animate-pulse-slow">
                QUERO GARANTIR AGORA
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-cream/50 text-sm sm:text-base">
                <span className="flex items-center gap-1">🔒 Pagamento seguro</span>
                <span className="flex items-center gap-1">⚡ Acesso imediato</span>
                <span className="flex items-center gap-1">✅ Garantia de 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
