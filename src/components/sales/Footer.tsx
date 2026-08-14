export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-neon-500/10 py-10">
      <div className="container-sales text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-2xl">🌿</span>
          <span className="font-heading font-bold text-xl text-cream">O Código do Centenário</span>
        </div>
        <p className="text-cream/50 text-sm sm:text-base mb-4 max-w-xl mx-auto">
          Este produto não substitui acompanhamento médico. Consulte sempre um profissional de saúde
          antes de iniciar qualquer programa alimentar ou de exercícios.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-cream/40 text-sm sm:text-base mb-4">
          <span>🔒 Pagamento seguro Hotmart</span>
          <span>•</span>
          <span>⚡ Acesso imediato</span>
          <span>•</span>
          <span>✅ Garantia de 7 dias</span>
        </div>
        <p className="text-cream/30 text-xs sm:text-sm">
          © 2026 O Código do Centenário. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
