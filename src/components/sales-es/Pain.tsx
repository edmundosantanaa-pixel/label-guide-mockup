export default function Pain() {
  const pains = [
    '¿Te levantas cansado(a) todos los días, incluso después de dormir toda la noche?',
    '¿Te sientes invisible al mirarte al espejo, sin reconocer a esa persona llena de vida que existía antes?',
    '¿Ya te resignaste a los dolores en el cuerpo, la falta de energía y vitalidad como si fuera "normal" por tu edad?',
    '¿Tu autoestima está por el suelo y evitas salir, ver amigos o tomarte fotos?',
    '¿Ya probaste varias dietas y rutinas, pero nada parece funcionar o durar más de una semana?',
    '¿Tienes miedo de envejecer enfermo(a), dependiente y sin calidad de vida?',
  ]

  return (
    <section className="py-20 bg-forest-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 to-forest-900" />
      <div className="container-sales relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Si respondiste <span className="text-lilac-400">SÍ</span> a cualquiera de estas preguntas...
          </h2>
          <p className="section-subtitle">
            Este contenido fue escrito para ti
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
            Debes saber que <strong className="text-neon-400">no es "solo la edad"</strong>.
            Y algo aún más importante: <strong className="text-lilac-300">no es tu culpa</strong>.
            Nadie te enseñó cómo funciona realmente tu cuerpo, ni cómo puede regenerarse.
          </p>
          <p className="body-text mt-4 text-cream/90">
            Pero eso cambia <strong className="text-neon-400">hoy</strong>.
          </p>
        </div>
      </div>
    </section>
  )
}
