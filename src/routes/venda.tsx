import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/venda")({
  // A página de vendas em português agora está na raiz (/).
  // /venda é mantida como redirecionamento permanente para preservar
  // links antigos (ex.: na Hotmart) já divulgados.
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
