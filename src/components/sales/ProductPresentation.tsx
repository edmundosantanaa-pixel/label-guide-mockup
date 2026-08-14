import { HOTMART_LINK } from './data'
import BookCover3D from './BookCover3D'

export default function ProductPresentation() {
  return (
    <section className="py-20 bg-forest-900 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">Apresentando...</h2>
          <p className="section-subtitle">O manual que vai mudar sua relação com seu corpo</p>
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
              <strong className="text-neon-400">O Código do Centenário</strong> é um e-book direto e
              prático que reúne os princípios de longevidade ativa observados em populações com maior
              expectativa de vida saudável, traduzidos em hábitos simples que cabem na sua rotina.
            </p>
            <p className="body-text mb-4">
              Em <strong className="text-lilac-300">7 capítulos e 30 páginas</strong>, você vai
              descobrir passo a passo como melhorar sua energia, fortalecer seu corpo e resgatar a
              autoestima que você sentia abalada.
            </p>
            <p className="body-text mb-6">
              Sem termos complicados. Sem dietas malucas. Sem precisar de academia ou suplementos
              caros. Apenas <strong className="text-neon-400">ações simples e poderosas</strong> que
              cabem na sua rotina.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                'Acesso imediato após a compra',
                'Leitura em qualquer dispositivo (celular, tablet, computador)',
                'Linguagem simples e direta, sem enrolação',
                'Plano de ação de 90 dias incluído',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 text-neon-400 text-xl mt-0.5">✓</span>
                  <span className="text-cream/85 text-[1.125rem] sm:text-[1.25rem]">{item}</span>
                </li>
              ))}
            </ul>

            <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta">
              QUERO O MEU AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
