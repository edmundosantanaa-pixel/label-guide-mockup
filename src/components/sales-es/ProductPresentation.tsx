import { HOTMART_LINK } from './data'
import BookCover3D from './BookCover3D'

export default function ProductPresentation() {
  return (
    <section className="py-20 bg-forest-900 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Presentando...</h2>
          <p className="section-subtitle">El manual que va a cambiar tu relación con tu cuerpo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          {/* 3D Box Book Cover */}
          <div className="flex justify-center">
            <div className="animate-float">
              <BookCover3D size={260} />
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="body-text mb-4">
              <strong className="text-neon-400">El Código del Centenario</strong> es un e-book directo y
              práctico que reúne los principios de longevidad activa observados en poblaciones con mayor
              expectativa de vida saludable, traducidos en hábitos simples que caben en tu rutina.
            </p>
            <p className="body-text mb-4">
              En <strong className="text-lilac-300">7 capítulos y 30 páginas</strong>, vas a
              descubrir paso a paso cómo mejorar tu energía, fortalecer tu cuerpo y rescatar la
              autoestima que sentías afectada.
            </p>
            <p className="body-text mb-6">
              Sin términos complicados. Sin dietas locas. Sin necesidad de gimnasio ni suplementos
              caros. Solo <strong className="text-neon-400">acciones simples y poderosas</strong> que
              caben en tu rutina.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Acceso inmediato después de la compra',
                'Lectura en cualquier dispositivo (celular, tablet, computadora)',
                'Lenguaje simple y directo, sin rodeos',
                'Plan de acción de 90 días incluido',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-neon-400 text-xl mt-0.5">✓</span>
                  <span className="text-cream/85 text-[1.125rem] sm:text-[1.25rem]">{item}</span>
                </li>
              ))}
            </ul>

            <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
              QUIERO EL MÍO AHORA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
