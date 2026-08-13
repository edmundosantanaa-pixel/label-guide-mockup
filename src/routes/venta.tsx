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

export const Route = createFileRoute("/venta")({
  head: () => ({
    meta: [
      {
        title:
          "El Código del Centenario — Manual de Longevidad Activa | Oferta Especial",
      },
      {
        name: "description",
        content:
          "Descubre el manual práctico para vivir más, con más salud, energía y vitalidad. E-book + 4 bonos exclusivos por solo US$ 9,90.",
      },
      {
        property: "og:title",
        content: "El Código del Centenario — Manual de Longevidad Activa",
      },
      {
        property: "og:description",
        content:
          "Descubre el manual práctico para vivir más, con más salud, energía y vitalidad. E-book + 4 bonos exclusivos.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://label-guide-mockup.lovable.app/venta" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://label-guide-mockup.lovable.app/venta" },
    ],
  }),
  component: SalesPageES,
});

// IMPORTANTE: reemplaza por el enlace real de checkout de Hotmart antes de publicar.
const HOTMART_CHECKOUT_URL = "#checkout";
const SUPPORT_EMAIL = "edmundodossantossantana27@gmail.com";

const faqData = [
  {
    question: "¿En cuánto tiempo recibo el material?",
    answer:
      "Inmediatamente después de la confirmación del pago. Recibirás un correo con el enlace para descargar el e-book y todos los bonos.",
  },
  {
    question: "¿El pago es seguro?",
    answer:
      "Sí. El pago se procesa a través de Hotmart, plataforma líder en productos digitales, con un entorno 100% seguro.",
  },
  {
    question: "¿Tengo garantía?",
    answer:
      "Sí. Tienes 7 días de garantía incondicional. Si no te gusta, te devolvemos el 100% de tu dinero.",
  },
  {
    question: "¿Puedo acceder desde el celular?",
    answer:
      "Sí. El e-book está en PDF y se puede abrir en cualquier celular, tablet o computadora. El audiolibro está en MP3.",
  },
];

const chapters = [
  {
    icon: Heart,
    title: "Los Pilares de la Longevidad",
    description:
      "Entiende cómo los hábitos simples impactan tu salud a largo plazo.",
  },
  {
    icon: Leaf,
    title: "Alimentación Antiinflamatoria",
    description:
      "Menús y estrategias para reducir la inflamación y ganar energía.",
  },
  {
    icon: Clock,
    title: "Rutina de 10 Minutos al Día",
    description:
      "Ejercicios de movilidad y fuerza para cualquier edad y nivel.",
  },
  {
    icon: Sparkles,
    title: "Suplementación Inteligente",
    description:
      "Cómo leer etiquetas y elegir solo lo que tu cuerpo necesita.",
  },
];

const bonuses = [
  {
    title: "Guía Práctica de Etiquetas y Suplementación Vital",
    image: bonusRotulos,
    description:
      "Aprende a leer etiquetas y a elegir suplementos con seguridad.",
    value: "US$ 12",
  },
  {
    title: "Plan de Movilidad y Fuerza (10 Min/Día)",
    image: bonusMobilidade,
    description:
      "Serie de ejercicios cortos para articulaciones y músculos saludables.",
    value: "US$ 15",
  },
  {
    title: "Audiolibro El Código del Centenario (MP3)",
    image: bonusAudiolivro,
    description:
      "Escucha el contenido completo donde estés: caminata, auto o gimnasio.",
    value: "US$ 17",
  },
  {
    title: "Protocolo Nutricional Antiinflamatorio",
    image: bonusProtocolo,
    description:
      "Plan alimenticio práctico para reducir la inflamación y mejorar tu ánimo.",
    value: "US$ 15",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/venta" className="text-lg font-bold tracking-tight text-foreground">
          Código del Centenario
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
          <a href="#beneficios" className="hover:text-foreground">
            Beneficios
          </a>
          <a href="#contenido" className="hover:text-foreground">
            Contenido
          </a>
          <a href="#bonos" className="hover:text-foreground">
            Bonos
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>
        <a
          href={HOTMART_CHECKOUT_URL}
          className="hidden rounded-full bg-success px-4 py-2 text-sm font-semibold text-success-foreground shadow-sm transition hover:bg-success/90 sm:inline-block"
        >
          Quiero Acceder
        </a>
        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border px-4 py-4 sm:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium text-muted-foreground">
            <a href="#beneficios" onClick={() => setOpen(false)} className="hover:text-foreground">
              Beneficios
            </a>
            <a href="#contenido" onClick={() => setOpen(false)} className="hover:text-foreground">
              Contenido
            </a>
            <a href="#bonos" onClick={() => setOpen(false)} className="hover:text-foreground">
              Bonos
            </a>
            <a href="#faq" onClick={() => setOpen(false)} className="hover:text-foreground">
              FAQ
            </a>
            <a
              href={HOTMART_CHECKOUT_URL}
              className="mt-2 rounded-full bg-success px-4 py-2 text-center font-semibold text-success-foreground"
            >
              Quiero Acceder
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
              Oferta Especial de Lanzamiento
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Descubre el Código para Vivir Más y Mejor
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              El manual práctico de longevidad activa que une ciencia, nutrición,
              movimiento y hábitos para que tengas más energía, salud y vitalidad
              todos los días.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <a
                href={HOTMART_CHECKOUT_URL}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-success px-8 py-4 text-lg font-bold text-success-foreground shadow-lg transition hover:bg-success/90 hover:shadow-xl sm:w-auto"
              >
                Quiero Mi Acceso Ahora
                <CheckCircle2 className="h-5 w-5" />
              </a>
              <p className="text-sm text-muted-foreground">
                Acceso inmediato por solo{" "}
                <span className="font-bold text-success">US$ 9,90</span>
              </p>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Pago 100% seguro vía Hotmart • 7 días de garantía
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-full bg-success/10 blur-3xl" />
              <img
                src={ebookMockup}
                alt="Portada 3D del e-book El Código del Centenario"
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
          ¿Te sientes cansado, sin ánimo o preocupado por tu salud?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          La buena noticia es que pequeños cambios, aplicados con constancia,
          pueden transformar tu calidad de vida desde hoy.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { text: "Falta de energía en el día a día" },
            { text: "Dolores y rigidez en las articulaciones" },
            { text: "Confusión sobre qué comer y suplementar" },
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
              Te presentamos: El Código del Centenario
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Una guía completa para quien quiere vivir más, con más salud,
              movilidad y energía — sin métodos radicales ni promesas
              imposibles.
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
    <section id="bonos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-success">
            Bonos Exclusivos
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Además te llevas 4 materiales complementarios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Todos los bonos se entregan junto con el e-book principal.
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
  return (
    <section className="bg-gradient-to-br from-sage/30 via-background to-sky/30 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-success/30 bg-card p-8 text-center shadow-lg sm:p-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
            <Star className="h-3.5 w-3.5" />
            Oferta por tiempo limitado
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Invierte hoy en tu longevidad
          </h2>
          <p className="mt-4 text-muted-foreground">
            E-book principal + 4 bonos exclusivos por una única inversión.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <p className="text-lg text-muted-foreground line-through">
              Valor total: US$ 59
            </p>
            <p className="text-5xl font-bold text-success sm:text-6xl">
              US$ 9,90
            </p>
            <p className="text-sm text-muted-foreground">
              Pago único • Acceso de por vida
            </p>
          </div>
          <a
            href={HOTMART_CHECKOUT_URL}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-success px-8 py-4 text-lg font-bold text-success-foreground shadow-lg transition hover:bg-success/90 hover:shadow-xl sm:w-auto"
          >
            Quiero Comprar Ahora
            <CheckCircle2 className="h-5 w-5" />
          </a>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-success" />
            7 días de garantía incondicional
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
              Garantía de 7 Días
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tienes una semana completa para acceder a todo el material. Si por
              cualquier motivo sientes que no es para ti, te devolvemos el 100%
              de tu dinero. Sin preguntas y sin trámites.
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
          Preguntas Frecuentes
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
          Da el primer paso hacia una vida más larga y saludable
        </h2>
        <p className="mt-4 text-lg text-success-foreground/90">
          Únete a quienes ya están aplicando El Código del Centenario cada día.
        </p>
        <a
          href={HOTMART_CHECKOUT_URL}
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-lg font-bold text-foreground shadow-lg transition hover:bg-background/90"
        >
          Quiero Mi Acceso Ahora
          <CheckCircle2 className="h-5 w-5" />
        </a>
        <p className="mt-4 text-sm text-success-foreground/80">
          US$ 9,90 • Acceso inmediato • Garantía de 7 días
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
          ¿Dudas? Habla con soporte:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="hover:text-foreground">
            Términos de Uso
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="#" className="hover:text-foreground">
            Política de Privacidad
          </a>
        </div>
        <p className="mt-6">
          © {new Date().getFullYear()} Código del Centenario. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

function SalesPageES() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <section id="contenido" className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Lo que vas a recibir
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "E-book completo en PDF",
                "4 bonos en PDF/MP3",
                "Acceso de por vida",
                "Actualizaciones futuras",
                "Soporte por correo",
                "Garantía de 7 días",
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
