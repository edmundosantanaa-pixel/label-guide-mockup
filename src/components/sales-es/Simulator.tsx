import { useState, useMemo } from 'react'
import { HOTMART_LINK } from './data'

type Habit = {
  id: string
  label: string
  icon: string
  min: number
  max: number
  step: number
  default: number
  // positive = good habit (higher = younger), negative = bad habit (higher = older)
  impact: number
  unit: string
  options?: { value: number; label: string }[]
}

const habits: Habit[] = [
  {
    id: 'sleep',
    label: 'Horas de sueño por noche',
    icon: '😴',
    min: 3,
    max: 10,
    step: 0.5,
    default: 6.5,
    impact: 1.5,
    unit: 'h',
  },
  {
    id: 'water',
    label: 'Vasos de agua al día',
    icon: '💧',
    min: 0,
    max: 12,
    step: 1,
    default: 4,
    impact: 0.4,
    unit: ' vasos',
  },
  {
    id: 'exercise',
    label: 'Días de ejercicio por semana',
    icon: '🏃',
    min: 0,
    max: 7,
    step: 1,
    default: 1,
    impact: 1.2,
    unit: ' días',
  },
  {
    id: 'processed',
    label: 'Comidas procesadas por semana',
    icon: '🍔',
    min: 0,
    max: 21,
    step: 1,
    default: 10,
    impact: -0.35,
    unit: ' comidas',
  },
  {
    id: 'vegetables',
    label: 'Porciones de vegetales al día',
    icon: '🥬',
    min: 0,
    max: 8,
    step: 1,
    default: 2,
    impact: 0.6,
    unit: ' porciones',
  },
  {
    id: 'stress',
    label: 'Nivel de estrés',
    icon: '😰',
    min: 1,
    max: 10,
    step: 1,
    default: 7,
    impact: -0.5,
    unit: '/10',
  },
  {
    id: 'alcohol',
    label: 'Bebidas alcohólicas por semana',
    icon: '🍷',
    min: 0,
    max: 21,
    step: 1,
    default: 4,
    impact: -0.25,
    unit: ' tragos',
  },
  {
    id: 'sun',
    label: 'Minutos de sol al día',
    icon: '☀️',
    min: 0,
    max: 120,
    step: 10,
    default: 20,
    impact: 0.04,
    unit: ' min',
  },
]

// Optimal values for each habit
const optimal: Record<string, number> = {
  sleep: 8,
  water: 8,
  exercise: 4,
  processed: 0,
  vegetables: 5,
  stress: 3,
  alcohol: 0,
  sun: 30,
}

function calculateBioAge(chronologicalAge: number, values: Record<string, number>): number {
  let delta = 0

  for (const habit of habits) {
    const val = values[habit.id] ?? 0
    const opt = optimal[habit.id] ?? 0
    const diff = val - opt

    // For positive habits (impact > 0): being below optimal ages you
    // For negative habits (impact < 0): being above optimal ages you
    // The further from optimal, the bigger the penalty
    delta += diff * habit.impact
  }

  // Clamp the delta to reasonable bounds
  delta = Math.max(-15, Math.min(20, delta))

  const bioAge = chronologicalAge + delta
  return Math.round(bioAge * 10) / 10
}

function getVerdict(bioAge: number, chronoAge: number) {
  const diff = bioAge - chronoAge

  if (diff <= -5) {
    return {
      title: '¡Tu cuerpo está increíblemente joven!',
      message: 'Tus hábitos están manteniendo tu cuerpo años más joven que tu edad real. Sigue así y tendrás una longevidad excepcional.',
      color: 'text-neon-400',
      bg: 'from-neon-500/20 to-neon-500/5',
      emoji: '🌟',
    }
  }
  if (diff <= -1) {
    return {
      title: '¡Tu cuerpo está más joven que tú!',
      message: 'Tus hábitos están funcionando a tu favor. Tu cuerpo está envejeciendo más lento que el promedio. Pequeños ajustes pueden llevarte aún más lejos.',
      color: 'text-neon-400',
      bg: 'from-neon-500/15 to-neon-500/5',
      emoji: '✨',
    }
  }
  if (diff <= 2) {
    return {
      title: 'Tu cuerpo está en el promedio',
      message: 'Tus hábitos mantienen tu cuerpo en equilibrio. Con algunos ajustes simples, puedes mejorar significativamente tu edad biológica.',
      color: 'text-yellow-400',
      bg: 'from-yellow-500/15 to-yellow-500/5',
      emoji: '⚖️',
    }
  }
  if (diff <= 5) {
    return {
      title: 'Tu cuerpo está envejeciendo más rápido',
      message: 'Tus hábitos actuales están acelerando tu envejecimiento. La buena noticia: esto es reversible. Pequeños cambios pueden mejorar esta situación en semanas.',
      color: 'text-orange-400',
      bg: 'from-orange-500/15 to-orange-500/5',
      emoji: '⚠️',
    }
  }
  return {
    title: 'Tu cuerpo necesita atención urgente',
    message: 'Tus hábitos están envejeciendo tu cuerpo mucho más rápido de lo normal. Pero no te desanimes: nunca es tarde para cambiar. El Código del Centenario fue hecho para situaciones como la tuya.',
    color: 'text-red-400',
    bg: 'from-red-500/15 to-red-500/5',
    emoji: '🚨',
  }
}

export default function Simulator() {
  const [age, setAge] = useState(45)
  const [values, setValues] = useState<Record<string, number>>(() => {
    const defaults: Record<string, number> = {}
    habits.forEach((h) => (defaults[h.id] = h.default))
    return defaults
  })
  const [showResult, setShowResult] = useState(false)

  const bioAge = useMemo(() => calculateBioAge(age, values), [age, values])
  const verdict = useMemo(() => getVerdict(bioAge, age), [bioAge, age])
  const diff = Math.round((bioAge - age) * 10) / 10

  const handleChange = (id: string, value: number) => {
    setValues((p) => ({ ...p, [id]: value }))
    setShowResult(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-forest-900 to-forest-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-500/5 rounded-full blur-3xl" />

      <div className="container-sales relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 rounded-full bg-lilac-500/15 border border-lilac-500/30 mb-4">
            <span className="text-lilac-300 font-heading font-semibold text-sm sm:text-base">
              SIMULADOR INTERACTIVO
            </span>
          </div>
          <h2 className="section-title">
            ¿Cuál es tu <span className="text-shimmer">edad biológica?</span>
          </h2>
          <p className="body-text mt-4 max-w-2xl mx-auto">
            Responde algunas preguntas rápidas sobre tus hábitos y descubre si tu cuerpo está
            envejeciendo más rápido o más lento que tu edad cronológica.
          </p>
          <p className="text-cream/50 text-base sm:text-lg mt-2">
            El resultado aparece aquí mismo, sin anuncios y sin redirecciones.
          </p>
        </div>

        {/* Age input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="card-glow !p-6 sm:!p-8">
            <label className="block text-center mb-4">
              <span className="font-heading font-semibold text-xl sm:text-2xl text-cream">
                ¿Cuál es tu edad?
              </span>
            </label>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setAge((a) => Math.max(18, a - 1))}
                className="w-12 h-12 rounded-full bg-forest-700 hover:bg-forest-600 text-cream text-2xl font-bold transition-all hover:scale-110 flex items-center justify-center"
              >
                −
              </button>
              <div className="text-center min-w-[100px]">
                <span className="font-heading font-black text-5xl sm:text-6xl text-neon-400">
                  {age}
                </span>
                <span className="text-cream/60 text-lg ml-1">años</span>
              </div>
              <button
                onClick={() => setAge((a) => Math.min(100, a + 1))}
                className="w-12 h-12 rounded-full bg-forest-700 hover:bg-forest-600 text-cream text-2xl font-bold transition-all hover:scale-110 flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Habits */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          {habits.map((habit) => (
            <div
              key={habit.id}
              className="card-glow !p-5 sm:!p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{habit.icon}</span>
                  <span className="font-heading font-semibold text-[1.125rem] sm:text-[1.25rem] text-cream">
                    {habit.label}
                  </span>
                </div>
                <span className="font-heading font-bold text-xl sm:text-2xl text-neon-400 min-w-[60px] text-right">
                  {values[habit.id]}{habit.unit}
                </span>
              </div>
              <input
                type="range"
                min={habit.min}
                max={habit.max}
                step={habit.step}
                value={values[habit.id] ?? habit.min}
                onChange={(e) => handleChange(habit.id, Number(e.target.value))}
                className="w-full h-3 rounded-full appearance-none cursor-pointer bg-forest-700 accent-neon-500"
                style={{
                  background: `linear-gradient(to right, #22c55e 0%, #22c55e ${(((values[habit.id] ?? habit.min) - habit.min) / (habit.max - habit.min)) * 100}%, #133322 ${(((values[habit.id] ?? habit.min) - habit.min) / (habit.max - habit.min)) * 100}%, #133322 100%)`,
                }}
              />
              <div className="flex justify-between text-cream/40 text-sm mt-1">
                <span>{habit.min}{habit.unit}</span>
                <span>{habit.max}{habit.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Calculate button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowResult(true)}
            className="btn-cta text-xl sm:text-2xl"
          >
            CALCULAR MI EDAD BIOLÓGICA
          </button>
        </div>

        {/* Result */}
        {showResult && (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className={`rounded-3xl bg-gradient-to-br ${verdict.bg} border border-neon-500/30 p-8 sm:p-10 text-center backdrop-blur-sm`}>
              <span className="text-5xl mb-4 block">{verdict.emoji}</span>

              <p className="text-cream/70 text-lg mb-2">Tu edad cronológica:</p>
              <p className="font-heading font-bold text-3xl text-cream mb-4">{age} años</p>

              <div className="w-24 h-0.5 bg-neon-500/30 mx-auto mb-4" />

              <p className="text-cream/70 text-lg mb-2">Tu edad biológica:</p>
              <p className={`font-heading font-black text-6xl sm:text-7xl ${verdict.color} mb-2`}>
                {bioAge}
              </p>
              <p className="text-cream/60 text-lg mb-6">
                {diff > 0 ? `+${diff} años por encima` : diff < 0 ? `${diff} años por debajo` : 'igual a tu edad real'}
              </p>

              <div className="rounded-2xl bg-forest-950/60 p-6 mb-6">
                <h3 className={`font-heading font-bold text-xl sm:text-2xl ${verdict.color} mb-3`}>
                  {verdict.title}
                </h3>
                <p className="text-cream/85 text-[1.125rem] sm:text-[1.25rem] leading-[1.7]">
                  {verdict.message}
                </p>
              </div>

              {/* CTA to product */}
              <div className="border-t border-neon-500/20 pt-6">
                <p className="text-cream/80 text-[1.125rem] sm:text-[1.25rem] mb-4">
                  ¿Quieres aprender a <strong className="text-neon-400">mejorar</strong> tu edad biológica
                  y rescatar tu energía y autoestima?
                </p>
                <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-xl">
                  CONOCER EL CÓDIGO DEL CENTENARIO
                </a>
                <p className="text-cream/40 text-sm mt-3">
                  El resultado es una estimación basada en tus hábitos y no sustituye la evaluación médica.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
