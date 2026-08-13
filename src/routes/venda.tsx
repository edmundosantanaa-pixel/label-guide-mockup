import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  Leaf,
  Heart,
  ShieldCheck,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { useState } from "react";

import ebookMockup from "../assets/codigo-centenario-ebook-mockup.png";
import bonusRotulos from "../assets/guia-rotulos-suplementacao-vital-mockup.png";
import bonusMobilidade from "../assets/plano-mobilidade-forca-mockup.png";
import bonusAudiolivro from "../assets/audiolivro-codigo-centenario-mockup.png";
import bonusProtocolo from "../assets/protocolo-nutricional-anti-inflamatorio-mockup.png";

export const Route = createFileRoute("/venda")({
  head: () => ({
    meta: [
      {
        title:
          "O Código do Centenário — Manual de Longevidade Ativa | Oferta Especial",
      },
      {
        name: "description",
        content:
          "Descubra o manual prático para viver mais, com mais saúde, energia e vitalidade. E-book + 4 bônus exclusivos por apenas R$ 37,00.",
      },
      {
        property: "og:title",
        content: "O Código do Centenário — Manual de Longevidade Ativa",
      },
      {
        property: "og:description",
        content:
          "Descubra o manual prático para viver mais, com mais saúde, energia e vitalidade. E-book + 4 bônus exclusivos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

// IMPORTANT: substitua pelo link real de checkout da Hotmart antes de publicar.
const HOTMART_CHECKOUT_URL = "#checkout";
const SUPPORT_EMAIL = "edmundodossantossantana27@gmail.com";

const faqData = [
  {
    question: "Em quanto tempo recebo o material?",
    answer:
      "Imediatamente após a confirmação do pagamento. Você recebe um e-mail com o link para baixar o e-book e todos os bônus.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim. O pagamento é processado pela Hotmart, plataforma líder em produtos digitais no Brasil, com ambiente 100% seguro.",
  },
  {
    question: "Tenho garantia?",
    answer:
      "Sim. Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer:
      "Sim. O e-book está em PDF e pode ser aberto em qualquer celular, tablet ou computador. O audiolivro está em MP3.",
  },
];

const chapters = [
  {
    icon: Heart,
    title: "Os Pilares da Longevidade",
    description: "Entenda como hábitos simples impactam sua saúde a longo prazo.",
  },
  {
    icon: Leaf,
    title: "Alimentação Anti-Inflamatória",
    description: "Cardápios e estratégias para reduzir inflamação e ganhar energia.",
  },
  {
    icon: Clock,
    title: "Rotina de 10 Minutos por Dia",
    description: "Exercícios de mobilidade e força para qualquer idade e nível.",
  },
  {
    icon: Sparkles,
    title: "Suplementação Inteligente",
    description: "Como ler rótulos e escolher apenas o que seu corpo precisa.",
  },
];

const bonuses = [
  {
    title: "Guia Prático de Rótulos & Suplementação Vital",
    image: bonusRotulos,
    description: "Aprenda a ler rótulos e escolher suplementos com segurança.",
    value: "R$ 47,00",
  },
  {
    title: "Plano de Mobilidade & Força (10 Min/Dia)",
    image: bonusMobilidade,
    description: "Série de exercícios curtos para articulações e músculos saudáveis.",
    value: "R$ 57,00",
  },
  {
    title: "Audiolivro O Código do Centenário (MP3)",
    image: bonusAudiolivro,
    description: "Ouça o conteúdo completo aonde estiver: caminhada, carro ou academia.",
    value: "R$ 67,00",
  },
  {
    title: "Protocolo Nutricional Anti-Inflamatório",
    image: bonusProtocolo,
    description: "Plano alimentar prático para reduzir inflamação e melhorar disposição.",
    value: "R$ 57,00",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          Código do Centenário
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#beneficios" className="hover:text-foreground">
            Benefícios
          </a>
          <a href="#conteudo" className="hover:text-foreground">
            Conteúdo
          </a>
          <a href="#bonus" className="hover:text-foreground">
            Bônus
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <a
          href={HOTMART_CHECKOUT_URL}
          className="hidden rounded-full bg-success px-4 py-2 text-sm font-semibold text-success-foreground shadow-sm transition hover:bg-success/90 sm:inline-block"
        >
          Quero Acessar
        </a>
        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border px-4 py-4 sm:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
            <a href="#beneficios" onClick={() => setOpen(false)} className="hover:text-foreground">
              Benefícios
            </a>
            <a href="#conteudo" onClick={() => setOpen(false)} className="hover:text-foreground">
              Conteúdo
            </a>
            <a href="#bonus" onClick={() => setOpen(false)} className="hover:text-foreground">
              Bônus
            </a>
            <a href="#faq" onClick={() => setOpen(false)} className="hover:text-foreground">
              FAQ
            </a>
            <a
              href={HOTMART_CHECKOUT_URL}
              className="mt-2 rounded-full bg-success px-4 py-2 text-center font-semibold text-success-foreground"
            >
              Quero Acessar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-sage/20 to-sky/20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              <Sparkles className="h-3.5 w-3.5" />
              Oferta Especial de Lançamento
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Descubra o Código para Viver Mais e Melhor
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              O manual prático de longevidade ativa que une ciência, nutrição,
              movimento e hábitos para você ter mais energia, saúde e vitalidade
              todos os dias.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={HOTMART_CHECKOUT_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-success px-8 py-4 text-lg font-bold text-success-foreground shadow-lg transition hover:bg-success/90 hover:shadow-xl sm:w-auto"
              >
                Quero o Meu Acesso Agora
                <CheckCircle2 className="h-5 w-5" />
              </a>
              <p className="text-sm text-muted-foreground">
                Acesso imediato por apenas{" "}
                <span className="font-bold text-success">R$ 37,00</span>
              </p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Pagamento 100% seguro via Hotmart • 7 dias de garantia
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-success/10 blur-3xl" />
              <img
                src={ebookMockup}
                alt="Capa 3D do e-book O Código do Centenário"
                width={500}
                height={500}
                className="relative w-full max-w-md drop-shadow-2xl"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="beneficios" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Você se sente cansado, sem disposição ou preocupado com a saúde?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A boa notícia é que pequenas mudanças, aplicadas com consistência,
          podem transformar sua qualidade de vida a partir de hoje.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { text: "Falta de energia no dia a dia" },
            { text: "Dores e rigidez nas articulações" },
            { text: "Confusão sobre o que comer e suplementar" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="font-semibold text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section className="bg-sky/20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Apresentamos: O Código do Centenário
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Um guia completo para quem quer viver mais, com mais saúde,
              mobilidade e disposição — sem métodos radicais ou promessas
              impossíveis.
            </p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {chapters.map((chapter, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-success/10 text-success">
                  <chapter.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{chapter.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {chapter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section id="bonus" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-success">
            Bônus Exclusivos
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Você ainda leva 4 materiais complementares
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todos os bônus são entregues juntos com o e-book principal.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((bonus, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-md"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold text-foreground">{bonus.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">
                  {bonus.description}
                </p>
                <p className="mt-4 text-sm font-bold text-success">
                  Valor: {bonus.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const totalValue = 228;
  const offerPrice = 37;

  return (
    <section className="bg-gradient-to-br from-sage/30 via-background to-sky/30 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-success/30 bg-card p-8 text-center shadow-lg sm:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
            <Star className="h-3.5 w-3.5" />
            Oferta por tempo limitado
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Invista na sua longevidade hoje
          </h2>
          <p className="mt-4 text-muted-foreground">
            E-book principal + 4 bônus exclusivos por um único investimento.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <p className="text-lg text-muted-foreground line-through">
              Valor total: R$ {totalValue},00
            </p>
            <p className="text-5xl font-bold text-success sm:text-6xl">
              R$ {offerPrice},00
            </p>
            <p className="text-sm text-muted-foreground">
              Pagamento único • Acesso vitalício
            </p>
          </div>
          <a
            href={HOTMART_CHECKOUT_URL}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-success px-8 py-4 text-lg font-bold text-success-foreground shadow-lg transition hover:bg-success/90 hover:shadow-xl sm:w-auto"
          >
            Quero Comprar Agora
            <CheckCircle2 className="h-5 w-5" />
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-success" />
            7 dias de garantia incondicional
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-success/10 text-success sm:h-52 sm:w-52">
              <ShieldCheck className="h-20 w-20 sm:h-28 sm:w-28" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Garantia de 7 Dias
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Você tem uma semana inteira para acessar todo o material. Se por
              qualquer motivo sentir que não é para você, devolvemos 100% do seu
              dinheiro. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-sky/20 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <div className="mt-10 space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-semibold text-foreground">{item.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-sm text-muted-foreground">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-success py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-success-foreground sm:text-4xl">
          Dê o primeiro passo para uma vida mais longa e saudável
        </h2>
        <p className="mt-4 text-lg text-success-foreground/90">
          Junte-se a quem já está aplicando o Código do Centenário no dia a dia.
        </p>
        <a
          href={HOTMART_CHECKOUT_URL}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-lg font-bold text-foreground shadow-lg transition hover:bg-background/90"
        >
          Quero Meu Acesso Agora
          <CheckCircle2 className="h-5 w-5" />
        </a>
        <p className="mt-4 text-sm text-success-foreground/80">
          R$ 37,00 • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
        <p>
          Dúvidas? Fale com o suporte:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="hover:text-foreground">
            Termos de Uso
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="#" className="hover:text-foreground">
            Política de Privacidade
          </a>
        </div>
        <p className="mt-6">
          © {new Date().getFullYear()} Código do Centenário. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

function SalesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <section id="conteudo" className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              O que você vai receber
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "E-book completo em PDF",
                "4 bônus em PDF/MP3",
                "Acesso vitalício",
                "Atualizações futuras",
                "Suporte por e-mail",
                "Garantia de 7 dias",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  <span className="font-medium text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Bonuses />
        <Pricing />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
