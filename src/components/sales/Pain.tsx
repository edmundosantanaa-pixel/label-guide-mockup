export default function Pain() {
  const pains = [
    'Você acorda cansado(a) todos os dias, mesmo depois de dormir a noite toda?',
    'Se sente invisível quando se olha no espelho, sem reconhecer aquela pessoa cheia de vida que existia antes?',
    'Já se conformou com dores no corpo, falta de energia e disposição como se fosse "normal" pela sua idade?',
    'Sua autoestima está no chão e você evita sair, encontrar amigos ou tirar fotos?',
    'Já tentou várias dietas e rotinas, mas nada parece funcionar ou durar mais de uma semana?',
    'Tem medo de envelhecer doente, dependente e sem qualidade de vida?',
  ]

  return (
    <section className="py-20 bg-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 to-forest-900" />
      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Se você respondeu <span className="text-lilac-400">SIM</span> a qualquer uma dessas perguntas...
          </h2>
          <p className="section-subtitle">
            Este conteúdo foi escrito para você
          </p>
        </div>

        <div className="grid gap-4 max-w-3xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-forest-900/60 border border-lilac-500/15 hover:border-lilac-500/30 transition-all duration-300"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-lilac-500/20 flex items-center justify-center text-lilac-300 text-xl font-bold">
                {i + 1}
              </span>
              <p className="body-text !text-[1.125rem] sm:!text-[1.25rem]">{pain}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="body-text text-cream/90">
            Saiba que <strong className="text-neon-400">não é "só a idade"</strong>.
            E mais importante: <strong className="text-lilac-300">não é culpa sua</strong>.
            Ninguém te ensinou como seu corpo realmente funciona — e como ele pode se regenerar.
          </p>
          <p className="body-text mt-4 text-cream/90">
            Mas isso muda <strong className="text-neon-400">hoje</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
