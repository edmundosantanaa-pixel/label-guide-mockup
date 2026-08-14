import { useState } from 'react'
import { HOTMART_LINK, orderBumps } from './data'

export default function OrderBump() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))

  const totalSelected = orderBumps
    .filter((bump) => checked[bump.id])
    .reduce((sum, bump) => sum + parseFloat(bump.bumpPrice.replace(/[^\d,]/g, '').replace(',', '.')), 0)

  return (
    <section className="py-20 bg-gradient-to-b from-forest-950 to-forest-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-lilac-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-sales relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 rounded-full bg-lilac-500/15 border border-lilac-500/40 mb-4">
            <span className="text-lilac-300 text-xs font-heading font-bold tracking-widest">
              OFERTAS COMPLEMENTARIAS
            </span>
          </div>
          <h2 className="section-title">
            Mejora tus <span className="text-shimmer">resultados</span>
          </h2>
          <p className="section-subtitle">
            Agrega estos complementos a tu pedido con hasta 70% de descuento
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {orderBumps.map((bump) => {
            const isChecked = !!checked[bump.id]
            const isNeon = bump.accent === 'neon'
            const accentColor = isNeon ? 'neon' : 'lilac'

            return (
              <label
                key={bump.id}
                htmlFor={`bump-${bump.id}`}
                className={`block cursor-pointer rounded-2xl border-2 transition-all duration-300 ${
                  isChecked
                    ? isNeon
                      ? 'border-neon-400 bg-neon-500/10 shadow-lg shadow-neon-500/20'
                      : 'border-lilac-400 bg-lilac-500/10 shadow-lg shadow-lilac-500/20'
                    : 'border-forest-700 bg-forest-900/60 hover:border-forest-600'
                }`}
              >
                <div className="p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    id={`bump-${bump.id}`}
                    checked={isChecked}
                    onChange={() => toggle(bump.id)}
                    className="sr-only peer"
                  />
                  <div
                    className={`flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                      isChecked
                        ? isNeon
                          ? 'border-neon-400 bg-neon-500'
                          : 'border-lilac-400 bg-lilac-500'
                        : 'border-cream/30 bg-forest-800'
                    }`}
                  >
                    {isChecked && (
                      <svg
                        className="w-4 h-4 text-forest-950"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  {/* Box mockup icon */}
                  <div
                    className={`flex-shrink-0 w-14 h-16 sm:w-16 sm:h-20 rounded-lg flex items-center justify-center text-2xl sm:text-3xl border-l-2 shadow-lg ${
                      isNeon
                        ? 'bg-gradient-to-br from-forest-800 to-forest-950 border-neon-500/50 shadow-neon-500/20'
                        : 'bg-gradient-to-br from-forest-800 to-forest-950 border-lilac-500/50 shadow-lilac-500/20'
                    }`}
                  >
                    {bump.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-cream text-base sm:text-lg leading-snug">
                      {bump.name}
                    </h3>
                    <p className="text-cream/70 text-sm sm:text-[0.95rem] leading-[1.5] mt-1 mb-2">
                      {bump.description}
                    </p>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-cream/40 line-through text-sm">{bump.originalPrice}</span>
                      <span
                        className={`font-heading font-black text-xl sm:text-2xl ${
                          isNeon ? 'text-neon-400' : 'text-lilac-300'
                        }`}
                      >
                        {bump.bumpPrice}
                      </span>
                    </div>
                    <p
                      className={`mt-2 text-sm font-medium ${
                        isChecked
                          ? isNeon
                            ? 'text-neon-400'
                            : 'text-lilac-300'
                          : 'text-cream/50'
                      }`}
                    >
                      {isChecked
                        ? `✓ ¡Agregado! ${bump.name} por ${bump.bumpPrice}`
                        : `¡Sí! Quiero agregar ${bump.name} por solo ${bump.bumpPrice}`}
                    </p>
                  </div>
                </div>
              </label>
            )
          })}
        </div>

        {/* Summary bar */}
        {totalSelected > 0 && (
          <div className="max-w-3xl mx-auto mt-6 animate-fade-in-up">
            <div className="card-glow !p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-cream/70 text-sm">
                  {Object.values(checked).filter(Boolean).length} complemento(s) agregado(s)
                </p>
                <p className="font-heading font-bold text-cream text-lg">
                  Total adicional:{' '}
                  <span className="text-neon-400">
                    US$ {totalSelected.toFixed(2).replace('.', ',')}
                  </span>
                </p>
              </div>
              <a
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta text-lg"
              >
                ASEGURAR COMPLEMENTOS
              </a>
            </div>
          </div>
        )}

        <p className="text-center text-cream/40 text-sm mt-8 max-w-xl mx-auto">
          Estos complementos se ofrecen exclusivamente en esta etapa. Al continuar hacia el
          checkout, podrás confirmar tu selección.
        </p>
      </div>
    </section>
  )
}
