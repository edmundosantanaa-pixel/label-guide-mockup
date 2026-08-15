import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, Search, Download, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "¡Gracias! Tu compra fue confirmada | Código del Centenario" },
      {
        name: "description",
        content:
          "Tu compra del e-book El Código del Centenario fue confirmada. Revisa tu correo para descargar el PDF y los materiales complementarios.",
      },
      {
        property: "og:title",
        content: "¡Gracias! Tu compra fue confirmada | Código del Centenario",
      },
      {
        property: "og:description",
        content:
          "Tu compra del e-book El Código del Centenario fue confirmada. Revisa tu correo para descargar el material.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://label-guide-mockup.lovable.app/gracias" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://label-guide-mockup.lovable.app/gracias" },
    ],
  }),
  component: ThankYouPageES,
});

// IMPORTANTE: reemplaza por el número real de WhatsApp de soporte antes de publicar.
const WHATSAPP_SUPPORT_NUMBER = "5511963098559";
const SUPPORT_EMAIL = "edmundodossantossantana27@gmail.com";

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

function StepNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-success text-sm font-bold text-success-foreground shadow-sm">
      {children}
    </span>
  );
}

function Step({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <StepNumber>{number}</StepNumber>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-success" />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}

function ThankYouPageES() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-sage/20 to-sky/20 text-foreground">
      <main className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-success/10 shadow-sm ring-1 ring-success/20">
            <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={2} />
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            ¡Felicitaciones por tu decisión!
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Éxito en tu camino hacia la longevidad.
          </p>
          <p className="mt-4 max-w-lg text-balance text-base text-muted-foreground">
            Tu compra de{" "}
            <span className="font-semibold text-foreground">
              El Código del Centenario: Vive Más, Vive Mejor
            </span>{" "}
            fue confirmada con éxito.
          </p>
        </div>

        <section className="mt-10 w-full rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Instrucciones importantes
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Sigue este paso a paso para acceder a tu e-book y materiales:
            </p>
          </div>

          <ol className="space-y-6">
            <Step
              number={1}
              icon={Mail}
              title="Revisa tu correo"
              description='Entra al correo registrado en Hotmart. Te enviamos un mensaje con el asunto "Acceso a El Código del Centenario".'
            />
            <Step
              number={2}
              icon={Search}
              title="Revisa otras carpetas"
              description="Si no lo encuentras en la bandeja de entrada, revisa las carpetas de Spam, Correo no deseado o Promociones."
            />
            <Step
              number={3}
              icon={Download}
              title="Haz clic y descarga tu material"
              description="En el correo, haz clic en el enlace para descargar tu e-book en PDF y todos los materiales complementarios."
            />
          </ol>
        </section>

        <section className="mt-8 w-full rounded-3xl border border-border bg-sky/30 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-sky-foreground" />
            <h2 className="text-xl font-bold text-foreground">
              ¿Necesitas ayuda con tu pedido o acceso?
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Nuestro equipo está listo para ayudarte a comenzar tu camino.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_SUPPORT_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-whatsapp/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Hablar con Soporte por WhatsApp
            </a>

            <p className="text-sm text-muted-foreground">
              o escríbenos a:{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </section>

        <section className="mt-12 max-w-xl text-center">
          <blockquote className="relative">
            <span className="absolute -left-2 -top-2 text-5xl leading-none text-success/20">
              "
            </span>
            <p className="text-lg italic leading-relaxed text-muted-foreground">
              Acabas de dar el primer paso para vivir más, con más salud,
              energía y vitalidad. Estamos a tu lado en cada etapa de este
              camino.
            </p>
          </blockquote>
          <p className="mt-5 font-semibold text-foreground">
            Equipo de El Código del Centenario
          </p>
        </section>

        <footer className="mt-16 flex w-full flex-col items-center gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-5">
          <a href="#" className="hover:text-foreground">
            Términos de Uso
          </a>
          <span className="hidden text-border sm:inline">•</span>
          <a href="#" className="hover:text-foreground">
            Política de Privacidad
          </a>
          <span className="hidden text-border sm:inline">•</span>
          <span>
            © {new Date().getFullYear()} Código del Centenario. Todos los
            derechos reservados.
          </span>
        </footer>
      </main>
    </div>
  );
}
