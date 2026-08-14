import { HOTMART_LINK } from './data'
import BookCover3D from './BookCover3D'

const BONUS1_COVER = 'https://images.pexels.com/photos/5792537/pexels-photo-5792537.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
const BONUS2_COVER = 'https://images.pexels.com/photos/8844562/pexels-photo-8844562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'

export default function Bonuses() {
  return (
    <section className="py-20 bg-forest-950 relative overflow-hidden">
      <div className="container-sales relative z-10">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-2 rounded-full bg-lilac-500/15 border border-lilac-500/30 mb-4">
            <span className="text-lilac-300 font-heading font-semibold text-sm sm:text-base">
              OFERTA ESPECIAL DE LANZAMIENTO
            </span>
          </div>
          <h2 className="section-title">
            Y además te llevas <span className="text-shimmer">2 bonos exclusivos</span>
          </h2>
          <p className="section-subtitle">
            Todo gratis con la compra de El Código del Centenario
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bono 1 */}
          <div className="card-glow text-center group">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 sm:w-56 animate-float">
                <img
                  src={BONUS1_COVER}
                  alt="Menú Bio-Activo — Bono 1"
                  className="w-full h-auto rounded-xl shadow-2xl shadow-neon-500/25 drop-shadow-[0_0_18px_rgba(132,204,22,0.35)]"
                />
              </div>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-lilac-500/15 border border-lilac-500/30 mb-3">
              <span className="text-lilac-300 font-heading font-semibold text-sm">BONO 1</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-cream mb-3">
              Menú Bio-Activo: 21 Días de Comidas Prácticas
            </h3>
            <p className="text-cream/80 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] mb-4">
              Una guía rápida y práctica con sugerencias de comidas fáciles (desayuno, almuerzo, cena y
              meriendas) enfocadas en alimentos altamente antioxidantes y antiinflamatorios. Qué poner
              en el plato hoy, sin complicaciones ni ingredientes caros.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-500/10 border border-neon-500/30">
              <span className="text-cream/50 line-through text-lg">US$ 13,00</span>
              <span className="text-neon-400 font-heading font-bold text-lg">GRATIS</span>
            </div>
          </div>

          {/* Bono 2 */}
          <div className="card-glow text-center group">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 sm:w-56 animate-float">
                <img
                  src={BONUS2_COVER}
                  alt="Rastreador de Edad Biológica — Bono 2"
                  className="w-full h-auto rounded-xl shadow-2xl shadow-lilac-500/25 drop-shadow-[0_0_18px_rgba(167,139,250,0.35)]"
                />
              </div>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-lilac-500/15 border border-lilac-500/30 mb-3">
              <span className="text-lilac-300 font-heading font-semibold text-sm">BONO 2</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-cream mb-3">
              Rastreador de Edad Biológica y Checklist de Hábitos
            </h3>
            <p className="text-cream/80 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] mb-4">
              Un diario visual de hábitos en PDF para imprimir o completar en el celular. Anota
              diariamente tus horas de sueño, consumo de agua, nivel de energía y práctica de
              ejercicio. Mira la evolución de tu salud semana a semana.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-500/10 border border-neon-500/30">
              <span className="text-cream/50 line-through text-lg">US$ 9,00</span>
              <span className="text-neon-400 font-heading font-bold text-lg">GRATIS</span>
            </div>
          </div>
        </div>

        {/* Bundle Mockup */}
        <div className="mt-16 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-cream mb-8">
            El Kit Completo que recibes hoy:
          </h3>
          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap items-end">
            {/* E-book principal - 3D Cover */}
            <div className="flex flex-col items-center gap-2">
              <BookCover3D size={130} />
              <p className="text-cream/40 text-[0.6rem] sm:text-xs line-through">US$ 19</p>
            </div>
            {/* Tablet bono 1 */}
            <div className="w-28 sm:w-36 flex flex-col items-center gap-2 mb-6">
              <img
                src={BONUS1_COVER}
                alt="Menú Bio-Activo"
                className="w-full h-auto rounded-lg shadow-xl shadow-neon-500/20 drop-shadow-[0_0_10px_rgba(132,204,22,0.25)]"
              />
              <p className="text-cream/40 text-[0.6rem] sm:text-xs line-through">US$ 13</p>
            </div>
            {/* Tabla bono 2 */}
            <div className="w-28 sm:w-36 flex flex-col items-center gap-2 mb-6">
              <img
                src={BONUS2_COVER}
                alt="Rastreador y Checklist"
                className="w-full h-auto rounded-lg shadow-xl shadow-lilac-500/20 drop-shadow-[0_0_10px_rgba(167,139,250,0.25)]"
              />
              <p className="text-cream/40 text-[0.6rem] sm:text-xs line-through">US$ 9</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
