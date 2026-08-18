import { useState, useMemo } from 'react'
import { Moon, Droplets, Footprints, Pizza, Salad, BrainCog, Wine, Sun, type LucideIcon } from 'lucide-react'

import { HOTMART_LINK } from './data'

type Habit = {
  id: string
  label: string
  icon: LucideIcon
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
    label: 'Horas de sono por noite',
    icon: Moon,
    min: 3,
    max: 10,
    step: 0.5,
    default: 6.5,
    impact: 1.5,
    unit: 'h',
  },
  {
    id: 'water',
    label: 'Copos de água por dia',
    icon: Droplets,
    min: 0,
    max: 12,
    step: 1,
    default: 4,
    impact: 0.4,
    unit: ' copos',
  },
  {
    id: 'exercise',
    label: 'Dias de exercício por semana',
    icon: Footprints,
    min: 0,
    max: 7,
    step: 1,
    default: 1,
    impact: 1.2,
    unit: ' dias',
  },
  {
    id: 'processed',
    label: 'Refeições processadas por semana',
    icon: Pizza,
    min: 0,
    max: 21,
    step: 1,
    default: 10,
    impact: -0.35,
    unit: ' refeições',
  },
  {
    id: 'vegetables',
    label: 'Porções de vegetais por dia',
    icon: Salad,
    min: 0,
    max: 8,
    step: 1,
    default: 2,
    impact: 0.6,
    unit: ' porções',
  },
  {
    id: 'stress',
    label: 'Nível de estresse',
    icon: BrainCog,
    min: 1,
    max: 10,
    step: 1,
    default: 7,
    impact: -0.5,
    unit: '/10',
  },
  {
    id: 'alcohol',
    label: 'Bebidas alcoólicas por semana',
    icon: Wine,
    min: 0,
    max: 21,
    step: 1,
    default: 4,
    impact: -0.25,
    unit: ' drinks',
  },
  {
    id: 'sun',
    label: 'Minutos de sol por dia',
    icon: Sun,
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
      title: 'Seu corpo está incrivelmente jovem!',
      message: 'Seus hábitos estão mantendo seu corpo anos mais jovem que sua idade real. Continue assim e você terá uma longevidade excepcional.',
      color: 'text-neon-400',
      bg: 'from-neon-500/20 to-neon-500/5',
      emoji: '🌟',
    }
  }
  if (diff <= -1) {
    return {
      title: 'Seu corpo está mais jovem que você!',
      message: 'Seus hábitos estão funcionando a seu favor. Seu corpo está envelhecendo mais devagar que a média. Pequenos ajustes podem te levar ainda mais longe.',
      color: 'text-neon-400',
      bg: 'from-neon-500/15 to-neon-500/5',
      emoji: '✨',
    }
  }
  if (diff <= 2) {
    return {
      title: 'Seu corpo está na média',
      message: 'Seus hábitos estão mantendo seu corpo em equilíbrio. Com alguns ajustes simples, você pode melhorar significativamente sua idade biológica.',
      color: 'text-yellow-400',
      bg: 'from-yellow-500/15 to-yellow-500/5',
      emoji: '⚖️',
    }
  }
  if (diff <= 5) {
    return {
      title: 'Seu corpo está envelhecendo mais rápido',
      message: 'Seus hábitos atuais estão acelerando seu envelhecimento. A boa notícia: isso é reversível. Pequenas mudanças podem melhorar esse quadro em semanas.',
      color: 'text-orange-400',
      bg: 'from-orange-500/15 to-orange-500/5',
      emoji: '⚠️',
    }
  }
  return {
    title: 'Seu corpo precisa de atenção urgente',
    message: 'Seus hábitos estão envelhecendo seu corpo muito mais rápido que o normal. Mas não desanime: nunca é tarde para mudar. O Código do Centenário foi feito para situações como a sua.',
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
              SIMULADOR INTERATIVO
            </span>
          </div>
          <h2 className="section-title">
            Qual é a sua <span className="text-shimmer">idade biológica?</span>
          </h2>
          <p className="body-text mt-4 max-w-2xl mx-auto">
            Responda algumas perguntas rápidas sobre seus hábitos e descubra se o seu corpo está
            envelhecendo mais rápido ou mais devagar que a sua idade cronológica.
          </p>
          <p className="text-cream/50 text-base sm:text-lg mt-2">
            O resultado aparece aqui mesmo, sem anúncios e sem redirecionamentos.
          </p>
        </div>

        {/* Age input */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="card-glow !p-6 sm:!p-8">
            <label className="block text-center mb-4">
              <span className="font-heading font-semibold text-xl sm:text-2xl text-cream">
                Qual é a sua idade?
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
                <span className="text-cream/60 text-lg ml-1">anos</span>
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
              className="card-glow !p-5 sm:!p-6 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-neon-500/25 to-lilac-500/15 border border-neon-500/25 shadow-[0_0_18px_-6px_rgba(34,197,94,0.6)] transition-all duration-300 group-hover:scale-105 group-hover:border-neon-400/50">
                    <habit.icon className="w-5 h-5 text-neon-300" strokeWidth={1.75} />
                  </span>
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
            CALCULAR MINHA IDADE BIOLÓGICA
          </button>
        </div>

        {/* Result */}
        {showResult && (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className={`rounded-3xl bg-gradient-to-br ${verdict.bg} border border-neon-500/30 p-8 sm:p-10 text-center backdrop-blur-sm`}>
              <span className="text-5xl mb-4 block">{verdict.emoji}</span>

              <p className="text-cream/70 text-lg mb-2">Sua idade cronológica:</p>
              <p className="font-heading font-bold text-3xl text-cream mb-4">{age} anos</p>

              <div className="w-24 h-0.5 bg-neon-500/30 mx-auto mb-4" />

              <p className="text-cream/70 text-lg mb-2">Sua idade biológica:</p>
              <p className={`font-heading font-black text-6xl sm:text-7xl ${verdict.color} mb-2`}>
                {bioAge}
              </p>
              <p className="text-cream/60 text-lg mb-6">
                {diff > 0 ? `+${diff} anos acima` : diff < 0 ? `${diff} anos abaixo` : 'igual à sua idade real'}
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
                  Quer aprender a <strong className="text-neon-400">melhorar</strong> sua idade biológica
                  e resgatar sua energia e autoestima?
                </p>
                <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="btn-cta text-xl">
                  CONHECER O CÓDIGO DO CENTENÁRIO
                </a>
                <p className="text-cream/40 text-sm mt-3">
                  O resultado é uma estimativa baseada em seus hábitos e não substitui avaliação médica.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
