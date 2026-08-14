import { HOTMART_LINK } from './data'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-forest-950 to-forest-900 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/7787409/pexels-photo-7787409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Pareja mayor activa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/90 to-forest-900" />

      <div className="container-sales relative z-10 text-center">
        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-cream leading-tight mb-6">
          Tu nueva vida comienza<br />
          <span className="text-shimmer">con una decisión</span>
        </h2>

        <p className="body-text max-w-2xl mx-auto mb-4">
          Puedes seguir sintiéndote cansado(a), sin energía y sin autoestima —
          o puedes dar el primer paso ahora.
        </p>
        <p className="body-text max-w-2xl mx-auto mb-10">
          Por <strong className="text-neon-400">menos de US$ 10 al mes</strong>, recibes el manual
          completo que va a transformar tu relación con tu cuerpo y con tu vida.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-2xl sm:text-3xl animate-pulse-slow">
            QUIERO VIVIR MEJOR
          </a>
          <p className="text-cream/60 text-base sm:text-lg">
            US$ 9,90 al contado o 4x de US$ 2,48 • Acceso inmediato • Garantía de 7 días
          </p>
        </div>
      </div>
    </section>
  )
}
