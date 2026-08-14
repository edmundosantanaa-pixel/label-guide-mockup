import { useEffect, useState } from 'react'
import { HOTMART_LINK } from './data'

export default function CountdownBar() {
  const [time, setTime] = useState({ h: 23, m: 59, s: 59 })

  useEffect(() => {
    const t = setInterval(() => {
      setTime((p) => {
        let { h, m, s } = p
        s--
        if (s < 0) { s = 59; m-- }
        if (m < 0) { m = 59; h-- }
        if (h < 0) { h = 23; m = 59; s = 59 }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(t)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-lilac-500 via-forest-700 to-neon-600 text-white text-center py-2 px-4 shadow-lg">
      <p className="text-sm sm:text-base font-heading font-semibold">
        Oferta especial termina en {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
      </p>
    </div>
  )
}
