import { chapters } from './data'

export default function Chapters() {
  return (
    <section className="py-20 bg-forest-950 relative overflow-hidden">
      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Lo que vas a descubrir en cada <span className="text-shimmer">capítulo</span>
          </h2>
          <p className="section-subtitle">
            7 capítulos. 30 páginas. Una transformación completa.
          </p>
        </div>

        <div className="grid gap-5 max-w-3xl mx-auto">
          {chapters.map((ch) => (
            <div
              key={ch.number}
              className="card-glow group"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-500 to-forest-600 flex items-center justify-center font-heading font-black text-2xl text-forest-950 shadow-lg shadow-neon-500/20">
                  {ch.number}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-cream">
                      {ch.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-neon-400/70 font-heading bg-neon-500/10 px-2 py-0.5 rounded-full">
                      {ch.pages}
                    </span>
                  </div>
                  <p className="text-cream/80 text-[1.125rem] sm:text-[1.25rem] leading-[1.75]">
                    {ch.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
