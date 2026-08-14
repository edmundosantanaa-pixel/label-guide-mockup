import { HOTMART_LINK } from './data'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/10136746/pexels-photo-10136746.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Floresta verdejante"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-forest-950/85 to-forest-950" />
      </div>

      {/* Content */}
      <div className="container-sales relative z-10 py-20 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-neon-500/10 border border-neon-500/30 mb-6 animate-fade-in-up">
          <span className="text-neon-400 font-heading font-semibold text-sm sm:text-base">
            GUIA PRÁTICO DE LONGEVIDADE ATIVA
          </span>
        </div>

        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6 animate-fade-in-up">
          O Código do <span className="text-shimmer">Centenário</span>
        </h1>

        <p className="body-text max-w-2xl mx-auto mb-4 animate-fade-in-up">
          Descubra os <strong className="text-neon-400">segredos da longevidade ativa</strong> que vão
          regenerar seu corpo, devolver sua energia e resgatar sua autoestima — em qualquer idade.
        </p>

        <p className="body-text max-w-2xl mx-auto mb-10 animate-fade-in-up">
          Um guia prático de <strong className="text-lilac-300">7 capítulos e 30 páginas</strong> com
          tudo o que você precisa para <strong className="text-neon-400">recuperar energia e disposição</strong>.
        </p>

        <div className="flex flex-col items-center gap-4 animate-fade-in-up">
          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-xl sm:text-2xl">
            QUERO COMEÇAR MINHA TRANSFORMAÇÃO
          </a>
          <p className="text-cream/60 text-base sm:text-lg">
            Acesso imediato • Garantia de 7 dias • Pagamento seguro
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
            <strong className="text-cream">4.8/5</strong> — Avaliação média dos leitores
          </p>
        </div>
      </div>
    </section>
  )
}
