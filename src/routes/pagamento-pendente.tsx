import { createFileRoute } from "@tanstack/react-router";
import {
  Hourglass,
  Mail,
  Zap,
  Barcode,
  CreditCard,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/pagamento-pendente")({
  head: () => ({
    meta: [
      {
        title:
          "Pagamento em análise | O Código do Centenário: Viva Mais, Viva Melhor",
      },
      {
        name: "description",
        content:
          "Seu pedido foi registrado e estamos aguardando a confirmação do pagamento. Assim que ele for aprovado, o acesso ao e-book e ao audiolivro chega sozinho no seu e-mail.",
      },
      { name: "robots", content: "noindex" },
      {
        property: "og:title",
        content: "Pagamento em análise | O Código do Centenário",
      },
      {
        property: "og:description",
        content:
          "Seu pedido foi registrado e estamos aguardando a confirmação do pagamento. O acesso chega automaticamente no seu e-mail assim que for aprovado.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://label-guide-mockup.lovable.app/pagamento-pendente",
      },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://label-guide-mockup.lovable.app/pagamento-pendente",
      },
    ],
  }),
  component: PendingPaymentPage,
});

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
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky text-sm font-bold text-sky-foreground shadow-sm">
        {number}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-sky-foreground" />
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </li>
  );
}

function PendingPaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-sage/20 to-sky/20 text-foreground">
      <main className="mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-sky/40 shadow-sm ring-1 ring-sky-foreground/20">
            <Hourglass
              className="h-12 w-12 text-sky-foreground"
              strokeWidth={2}
            />
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Seu pedido foi registrado
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Estamos apenas aguardando a confirmação do pagamento.
          </p>
          <p className="mt-4 max-w-lg text-balance text-base text-muted-foreground">
            Não precisa fazer nada agora e não precisa pagar de novo. Assim que
            a confirmação chegar, o seu acesso é liberado automaticamente.
          </p>
        </div>

        <section className="mt-10 w-full rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground">
              O que acontece agora
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              O tempo de confirmação depende só da forma de pagamento que você
              escolheu:
            </p>
          </div>

          <ol className="space-y-6">
            <Step
              number={1}
              icon={Zap}
              title="Se você pagou com Pix"
              description="A confirmação costuma vir em poucos minutos. Assim que ela chegar, o e-mail de acesso é enviado na hora."
            />
            <Step
              number={2}
              icon={Barcode}
              title="Se você pagou com boleto"
              description="O banco pode levar até 2 dias úteis para processar o pagamento. O acesso chega automaticamente depois disso."
            />
            <Step
              number={3}
              icon={CreditCard}
              title="Se o seu cartão está em análise de crédito"
              description="Às vezes a operadora demora alguns minutos ou algumas horas para aprovar. Se for recusado, nada é cobrado de você."
            />
          </ol>
        </section>

        <section className="mt-8 w-full rounded-3xl border border-border bg-success/10 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-success" />
            <h2 className="text-xl font-bold text-foreground">
              Fique tranquilo com estas três coisas
            </h2>
          </div>

          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-0.5 text-success">•</span>
              <span>
                <span className="font-semibold text-foreground">
                  O acesso chega sozinho no seu e-mail.
                </span>{" "}
                O e-mail tem o assunto "Acesso ao Código do Centenário" e traz o
                PDF e o audiolivro completo.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-success">•</span>
              <span>
                <span className="font-semibold text-foreground">
                  Não é preciso pagar duas vezes.
                </span>{" "}
                Se você fizer outro pagamento sem precisar, vai receber duas
                cópias e não há cobrança extra.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 text-success">•</span>
              <span>
                <span className="font-semibold text-foreground">
                  Vale olhar as outras pastas do e-mail.
                </span>{" "}
                Às vezes a mensagem vai para Spam, Lixo Eletrônico ou
                Promoções.
              </span>
            </li>
          </ul>
        </section>

        <section className="mt-8 w-full rounded-3xl border border-border bg-sky/30 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-sky-foreground" />
            <h2 className="text-xl font-bold text-foreground">
              Já passou do tempo e nada chegou?
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Fale com a gente agora: a gente verifica o seu pedido e te ajuda a
            entrar.
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

        <section className="mt-12 max-w-xl text-center">
          <blockquote className="relative">
            <span className="absolute -left-2 -top-2 text-5xl leading-none text-success/20">
              "
            </span>
            <p className="text-lg italic leading-relaxed text-muted-foreground">
              Daqui a pouquinho você já vai estar com o material em mãos.
              Estamos esperando você do lado de cá para começar esta jornada.
            </p>
          </blockquote>
          <p className="mt-5 font-semibold text-foreground">
            Equipe do Código do Centenário
          </p>
        </section>

        <footer className="mt-16 flex w-full flex-col items-center gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:justify-center sm:gap-5">
          <a href="#" className="hover:text-foreground">
            Termos de Uso
          </a>
          <span className="hidden text-border sm:inline">•</span>
          <a href="#" className="hover:text-foreground">
            Política de Privacidade
          </a>
          <span className="hidden text-border sm:inline">•</span>
          <span>
            © {new Date().getFullYear()} Código do Centenário. Todos os direitos
            reservados.
          </span>
        </footer>
      </main>
    </div>
  );
}
