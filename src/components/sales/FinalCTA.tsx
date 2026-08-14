import { HOTMART_LINK } from './data'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-forest-950 to-forest-900 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/7787409/pexels-photo-7787409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Casal idoso ativo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950/90 to-forest-900" />

      <div className="container-sales relative z-10 text-center">
        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-cream leading-tight mb-6">
          Sua nova vida começa<br />
          <span className="text-shimmer">com uma decisão</span>
        </h2>

        <p className="body-text max-w-2xl mx-auto mb-4">
          Você pode continuar se sentindo cansado(a), sem energia e sem autoestima —
          ou pode dar o primeiro passo agora.
        </p>
        <p className="body-text max-w-2xl mx-auto mb-10">
          Por <strong className="text-neon-400">menos de R$ 10 por mês</strong>, você recebe o manual
          completo que vai transformar sua relação com seu corpo e com sua vida.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-2xl sm:text-3xl animate-pulse-slow">
            QUERO VIVER MELHOR
          </a>
          <p className="text-cream/60 text-base sm:text-lg">
            R$ 37,00 à vista ou 4x de R$ 9,75 • Acesso imediato • Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  )
}
