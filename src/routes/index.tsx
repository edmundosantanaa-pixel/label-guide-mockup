import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Mail, Search, Download, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Obrigado! Sua compra foi confirmada | Código do Centenário",
      },
      {
        name: "description",
        content:
          "Sua compra do e-book O Código do Centenário foi confirmada. Acesse seu e-mail para baixar o PDF e os materiais complementares.",
      },
      {
        property: "og:title",
        content:
          "Obrigado! Sua compra foi confirmada | Código do Centenário",
      },
      {
        property: "og:description",
        content:
          "Sua compra do e-book O Código do Centenário foi confirmada. Acesse seu e-mail para baixar o material.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ThankYouPage,
});

// IMPORTANT: substitua pelo número de WhatsApp real do suporte antes de publicar.
const WHATSAPP_SUPPORT_NUMBER = "5511999999999";
const SUPPORT_EMAIL = "suporte@codigodocentenario.com";

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

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-sage/20 to-sky/20 text-foreground">
      <main className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Cabeçalho / Ícone de Sucesso */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-success/10 shadow-sm ring-1 ring-success/20">
            <CheckCircle2 className="h-12 w-12 text-success" strokeWidth={2} />
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Parabéns pela sua decisão!
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Sucesso na sua jornada de longevidade.
          </p>
          <p className="mt-4 max-w-lg text-balance text-base text-muted-foreground">
            Sua compra do{" "}
            <span className="font-semibold text-foreground">
              Código do Centenário: Viva Mais, Viva Melhor
            </span>{" "}
            foi confirmada com sucesso.
          </p>
        </div>

        {/* Caixa de Instruções Importantes */}
        <section className="mt-10 w-full rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground">
              Instruções importantes
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Siga o passo a passo para acessar seu e-book e materiais:
            </p>
          </div>

          <ol className="space-y-6">
            <Step
              number={1}
              icon={Mail}
              title="Verifique seu e-mail"
              description={`Acesse o e-mail cadastrado na Hotmart. Enviamos uma mensagem com o assunto "Acesso ao Código do Centenário"."`}
            />
            <Step
              number={2}
              icon={Search}
              title="Confira outras pastas"
              description="Caso não encontre na caixa de entrada, verifique as pastas de Spam, Lixo Eletrônico ou Promoções."
            />
            <Step
              number={3}
              icon={Download}
              title="Clique e baixe seu material"
              description="No e-mail, clique no link para baixar seu e-book em PDF e todos os materiais complementares."
            />
          </ol>
        </section>

        {/* Seção de Suporte ao Cliente */}
        <section className="mt-8 w-full rounded-3xl border border-border bg-sky/30 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-sky-foreground" />
            <h2 className="text-xl font-bold text-foreground">
              Precisa de ajuda com o seu pedido ou acesso?
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Nossa equipe está pronta para te ajudar a começar sua jornada.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_SUPPORT_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-whatsapp px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-whatsapp/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar com o Suporte no WhatsApp
            </a>

            <p className="text-sm text-muted-foreground">
              ou envie um e-mail para:{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
              >
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        </section>

        {/* Mensagem Final Inspiradora */}
        <section className="mt-12 max-w-xl text-center">
          <blockquote className="relative">
            <span className="absolute -left-2 -top-2 text-5xl leading-none text-success/20">
              "
            </span>
            <p className="text-lg italic leading-relaxed text-muted-foreground">
              Você acaba de dar o primeiro passo para viver mais, com mais
              saúde, energia e vitalidade. Estamos ao seu lado em cada etapa
              desta jornada.
            </p>
          </blockquote>
          <p className="mt-5 font-semibold text-foreground">
            Equipe do Código do Centenário
          </p>
        </section>

        {/* Rodapé */}
        <footer className="mt-16 flex w-full flex-col items-center gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-5">
          <a href="#" className="hover:text-foreground">
            Termos de Uso
          </a>
          <span className="hidden text-border sm:inline">•</span>
          <a href="#" className="hover:text-foreground">
            Política de Privacidade
          </a>
          <span className="hidden text-border sm:inline">•</span>
          <span>© {new Date().getFullYear()} Código do Centenário. Todos os direitos reservados.</span>
        </footer>
      </main>
    </div>
  );
}
