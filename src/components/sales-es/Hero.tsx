import { HOTMART_LINK } from './data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/10136746/pexels-photo-10136746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Bosque verde exuberante"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/85 to-forest-950" />
      </div>

      {/* Content */}
      <div className="container-sales relative z-10 py-20 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-neon-500/10 border border-neon-500/30 mb-6 animate-fade-in-up">
          <span className="text-neon-400 font-heading font-semibold text-sm sm:text-base">
            GUÍA PRÁCTICA DE LONGEVIDAD ACTIVA
          </span>
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6 animate-fade-in-up">
          El Código del <span className="text-shimmer">Centenario</span>
        </h1>

        <p className="body-text max-w-2xl mx-auto mb-4 animate-fade-in-up">
          Descubre los <strong className="text-neon-400">secretos de la longevidad activa</strong> que van
          a regenerar tu cuerpo, devolver tu energía y rescatar tu autoestima, a cualquier edad.
        </p>

        <p className="body-text max-w-2xl mx-auto mb-10 animate-fade-in-up">
          Una guía práctica de <strong className="text-lilac-300">7 capítulos y 30 páginas</strong> con
          todo lo que necesitas para <strong className="text-neon-400">recuperar energía y vitalidad</strong>.
        </p>

        <div className="flex flex-col items-center gap-4 animate-fade-in-up">
          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-xl sm:text-2xl">
            QUIERO COMENZAR MI TRANSFORMACIÓN
          </a>
          <p className="text-cream/60 text-base sm:text-lg">
            Acceso inmediato • Garantía de 7 días • Pago seguro
          </p>
        </div>

        {/* Rating */}
        <div className="mt-12 flex flex-col items-center gap-2 animate-fade-in-up">
          <div className="flex gap-1 text-4xl">
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
            <span className="text-yellow-400">★</span>
          </div>
          <p className="text-cream/70 text-lg">
            <strong className="text-cream">4.8/5</strong> — Calificación promedio de los lectores
          </p>
        </div>
      </div>
    </section>
  )
}
