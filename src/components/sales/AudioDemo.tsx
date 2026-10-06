import { Headphones } from "lucide-react";

import AudiobookPlayer from "@/components/AudiobookPlayer";
import { HOTMART_LINK } from "./data";

export default function AudioDemo() {
  return (
    <section className="py-20 bg-forest-950 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lilac-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-sales relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-lilac-500/30 bg-lilac-500/10 px-4 py-1.5 text-sm font-semibold text-lilac-300">
            <Headphones className="h-4 w-4" />
            AMOSTRA EXCLUSIVA
          </span>

          <h2 className="section-title mt-6">
            Ouça uma demonstração{" "}
            <span className="text-shimmer">do audiolivro</span>
          </h2>
          <p className="body-text mt-4 mb-8">
            Aperte o play e sinta na prática o tom calmo e direto do audiolivro
            que acompanha o seu <strong className="text-neon-400">Código do Centenário</strong>.
          </p>

          <div className="text-left">
            <AudiobookPlayer
              variant="dark"
              tracks={[
                {
                  title: "Introdução — O Código do Centenário",
                  src: "/audio/introducao.mp3",
                },
              ]}
            />
          </div>

          <p className="mt-8 text-cream/85 text-lg sm:text-xl leading-relaxed">
            Gostou? Isso é só a <strong className="text-neon-400">Introdução</strong>.
            A versão completa tem <strong className="text-lilac-300">Introdução + 7 capítulos</strong>{" "}
            para ouvir no celular, no carro ou em qualquer lugar.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <Headphones className="h-6 w-6" />
              QUERO O AUDIOLIVRO COMPLETO
            </a>
            <p className="text-cream/60 text-sm sm:text-base">
              8 faixas • Introdução + 7 capítulos • Acesso imediato após a compra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
