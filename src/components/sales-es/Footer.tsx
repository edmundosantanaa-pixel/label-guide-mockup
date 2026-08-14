export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-neon-500/10 py-10">
      <div className="container-sales text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🌿</span>
          <span className="font-heading font-bold text-xl text-cream">El Código del Centenario</span>
        </div>
        <p className="text-cream/50 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Este producto no sustituye el acompañamiento médico. Consulta siempre a un profesional de la
          salud antes de comenzar cualquier programa alimenticio o de ejercicios.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-cream/40 text-sm sm:text-base mb-4">
          <span>🔒 Pago seguro Hotmart</span>
          <span>•</span>
          <span>⚡ Acceso inmediato</span>
          <span>•</span>
          <span>✅ Garantía de 7 días</span>
        </div>
        <p className="text-cream/30 text-xs sm:text-sm">
          © 2026 El Código del Centenario. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
