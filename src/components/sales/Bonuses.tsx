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
              OFERTA ESPECIAL DE LANÇAMENTO
            </span>
          </div>
          <h2 className="section-title">
            E ainda leva <span className="text-shimmer">2 bônus exclusivos</span>
          </h2>
          <p className="section-subtitle">
            Tudo grátis na compra do Código do Centenário
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bônus 1 */}
          <div className="card-glow text-center group">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 sm:w-56 animate-float">
                <img
                  src={BONUS1_COVER}
                  alt="Cardápio Bio-Ativo — Bônus 1"
                  className="w-full h-auto rounded-xl shadow-2xl shadow-neon-500/25 drop-shadow-[0_0_18px_rgba(132,204,22,0.35)]"
                />
              </div>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-lilac-500/15 border border-lilac-500/30 mb-3">
              <span className="text-lilac-300 font-heading font-semibold text-sm">BÔNUS 1</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-cream mb-3">
              Cardápio Bio-Ativo: 21 Dias de Refeições Práticas
            </h3>
            <p className="text-cream/80 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] mb-4">
              Um guia rápido e prático com sugestões de refeições fáceis (café da manhã, almoço, jantar e
              lanches) focadas em alimentos altamente antioxidantes e anti-inflamatórios. O que colocar
              no prato hoje, sem complicações ou ingredientes caros.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-500/10 border border-neon-500/30">
              <span className="text-cream/50 line-through text-lg">R$ 67,00</span>
              <span className="text-neon-400 font-heading font-bold text-lg">GRÁTIS</span>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="card-glow text-center group">
            <div className="flex justify-center mb-6">
              <div className="relative w-48 sm:w-56 animate-float">
                <img
                  src={BONUS2_COVER}
                  alt="Rastreador de Idade Biológica — Bônus 2"
                  className="w-full h-auto rounded-xl shadow-2xl shadow-lilac-500/25 drop-shadow-[0_0_18px_rgba(167,139,250,0.35)]"
                />
              </div>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-lilac-500/15 border border-lilac-500/30 mb-3">
              <span className="text-lilac-300 font-heading font-semibold text-sm">BÔNUS 2</span>
            </div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-cream mb-3">
              Rastreador de Idade Biológica & Checklist de Hábitos
            </h3>
            <p className="text-cream/80 text-[1.125rem] sm:text-[1.25rem] leading-[1.7] mb-4">
              Um diário visual de hábitos em PDF para imprimir ou preencher no celular. Anote diariamente
              suas horas de sono, consumo de água, nível de energia e prática de exercícios. Veja a
              evolução da sua saúde semana a semana.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-500/10 border border-neon-500/30">
              <span className="text-cream/50 line-through text-lg">R$ 47,00</span>
              <span className="text-neon-400 font-heading font-bold text-lg">GRÁTIS</span>
            </div>
          </div>
        </div>

        {/* Bundle Mockup */}
        <div className="mt-16 text-center">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-cream mb-8">
            O Kit Completo que você recebe hoje:
          </h3>
          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap items-end">
            {/* E-book principal - 3D Cover */}
            <div className="flex flex-col items-center gap-2">
              <BookCover3D size={130} />
              <p className="text-cream/40 text-[0.6rem] sm:text-xs line-through">R$ 97</p>
            </div>
            {/* Tablet bônus 1 */}
            <div className="w-28 sm:w-36 flex flex-col items-center gap-2 mb-6">
              <img
                src={BONUS1_COVER}
                alt="Cardápio Bio-Ativo"
                className="w-full h-auto rounded-lg shadow-xl shadow-neon-500/20 drop-shadow-[0_0_10px_rgba(132,204,22,0.25)]"
              />
              <p className="text-cream/40 text-[0.6rem] sm:text-xs line-through">R$ 67</p>
            </div>
            {/* Prancheta bônus 2 */}
            <div className="w-28 sm:w-36 flex flex-col items-center gap-2 mb-6">
              <img
                src={BONUS2_COVER}
                alt="Rastreador & Checklist"
                className="w-full h-auto rounded-lg shadow-xl shadow-lilac-500/20 drop-shadow-[0_0_10px_rgba(167,139,250,0.25)]"
              />
              <p className="text-cream/40 text-[0.6rem] sm:text-xs line-through">R$ 47</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
