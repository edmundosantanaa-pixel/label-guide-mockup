const COVER_BG = 'https://images.pexels.com/photos/16947173/pexels-photo-16947173.jpeg?auto=compress&cs=tinysrgb&h=1200&w=900'

interface BookCover3DProps {
  size?: number
  className?: string
}

export default function BookCover3D({ size = 260, className = '' }: BookCover3DProps) {
  const height = Math.round(size * 1.38)

  return (
    <div className={`relative ${className}`} style={{ perspective: '1400px' }}>
      <div
        className="relative"
        style={{
          transform: 'rotateY(-22deg) rotateX(4deg)',
          transformStyle: 'preserve-3d',
          width: `${size}px`,
          height: `${height}px`,
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-r-lg rounded-l-sm overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            boxShadow:
              '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 30px rgba(132,204,22,0.15), inset 0 0 0 1px rgba(255,255,255,0.05)',
          }}
        >
          <img
            src={COVER_BG}
            alt="Capa do Código do Centenário"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-900/60 to-forest-950/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/40 to-transparent" />

          <div className="relative h-full flex flex-col justify-between p-6 text-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-lilac-500/15 border border-lilac-500/40 backdrop-blur-sm mb-5">
                <span className="text-lilac-300 text-[0.6rem] font-heading font-bold tracking-widest">
                  E-BOOK DIGITAL
                </span>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center -mt-4">
              <div className="text-3xl mb-3 tracking-wider">🌿</div>
              <h3 className="font-heading font-black text-3xl text-cream leading-[1.05] drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                O Código do
              </h3>
              <h3 className="font-heading font-black text-3xl text-neon-400 leading-[1.05] mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                Centenário
              </h3>
              <div className="w-14 h-[3px] bg-gradient bg-neon-500 mx-auto my-4 shadow-[0_0_8px_rgba(132,204,22,0.5)]" />
              <p className="text-cream/80 text-sm font-heading italic tracking-wide">
                Viva Mais, Viva Melhor
              </p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-cream/50 text-[0.6rem] font-heading tracking-[0.2em] uppercase">
                Manual de Longevidade Ativa
              </p>
              <div className="flex gap-2 text-lg">
                <span>💧</span>
                <span>🧬</span>
                <span>💚</span>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
        </div>

        {/* Spine */}
        <div
          className="absolute top-0 bottom-0"
          style={{
            left: '0',
            width: '18px',
            transform: 'rotateY(90deg) translateZ(-9px) translateX(-9px)',
            transformOrigin: 'left center',
            background: 'linear-gradient(90deg, #0a1a0a 0%, #1a3a1a 50%, #0a1a0a 100%)',
            borderRadius: '2px 0 0 2px',
            boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.4)',
          }}
        >
          <div className="h-full flex items-center justify-center">
            <span
              className="text-cream/40 text-[0.55rem] font-heading font-bold tracking-[0.3em] whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              O CÓDIGO DO CENTENÁRIO
            </span>
          </div>
        </div>

        {/* Pages edge */}
        <div
          className="absolute top-1 bottom-1"
          style={{
            right: '0',
            width: '10px',
            transform: 'rotateY(-90deg) translateZ(5px) translateX(5px)',
            transformOrigin: 'right center',
            background:
              'repeating-linear-gradient(90deg, #f5f0e1 0px, #e8e0d0 1px, #f5f0e1 2px, #ddd5c5 3px)',
            borderRadius: '0 2px 2px 0',
          }}
        />

        {/* Bottom edge */}
        <div
          className="absolute left-1 right-1"
          style={{
            bottom: '0',
            height: '10px',
            transform: 'rotateX(-90deg) translateZ(5px) translateY(5px)',
            transformOrigin: 'bottom center',
            background: 'linear-gradient(180deg, #0a1a0a, #1a3a1a)',
            borderRadius: '0 0 2px 2px',
          }}
        />

        {/* Top edge */}
        <div
          className="absolute left-1 right-1"
          style={{
            top: '0',
            height: '10px',
            transform: 'rotateX(90deg) translateZ(5px) translateY(-5px)',
            transformOrigin: 'top center',
            background: 'linear-gradient(180deg, #1a3a1a, #0a1a0a)',
            borderRadius: '2px 2px 0 0',
          }}
        />
      </div>

      {/* Ground shadow */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          bottom: '-24px',
          width: '80%',
          height: '40px',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.45) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
    </div>
  )
}
