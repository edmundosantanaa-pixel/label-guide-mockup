import { HOTMART_LINK } from './data'

export default function Guarantee() {
  return (
    <section className="py-20 bg-forest-950 relative overflow-hidden">
      <div className="container-sales relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Seal */}
          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-36 sm:w-40 sm:h-40 animate-float">
              <div className="absolute inset-0 rounded-full border-4 border-neon-500/40 shadow-2xl shadow-neon-500/20 flex items-center justify-center bg-gradient-to-br from-forest-800 to-forest-950">
                <div className="text-center">
                  <span className="text-4xl sm:text-5xl block mb-1">🛡️</span>
                  <p className="font-heading font-black text-lg sm:text-xl text-neon-400">7 DIAS</p>
                  <p className="text-cream/60 text-xs sm:text-sm font-heading">DE GARANTIA</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title mb-4">
            Risco <span className="text-neon-400">zero</span> para você
          </h2>

          <p className="body-text mb-4">
            Você tem <strong className="text-neon-400">7 dias de garantia incondicional</strong>.
            Leia o e-book, aplique os primeiros passos e sinta a diferença.
          </p>
          <p className="body-text mb-8">
            Se por qualquer motivo — qualquer mesmo — você não estiver satisfeito,
            é só enviar um e-mail e devolvemos <strong className="text-lilac-300">100% do seu dinheiro</strong>.
            Sem perguntas, sem burocracia, sem desconforto.
          </p>

          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
            COMEÇAR MINHA TRANSFORMAÇÃO
          </a>
        </div>
      </div>
    </section>
  )
}
