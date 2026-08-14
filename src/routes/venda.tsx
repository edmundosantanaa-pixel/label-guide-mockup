import { createFileRoute } from "@tanstack/react-router";

import CountdownBar from "../components/sales/CountdownBar";
import Simulator from "../components/sales/Simulator";
import Hero from "../components/sales/Hero";
import Pain from "../components/sales/Pain";
import ProductPresentation from "../components/sales/ProductPresentation";
import Chapters from "../components/sales/Chapters";
import Testimonials from "../components/sales/Testimonials";
import Bonuses from "../components/sales/Bonuses";
import Offer from "../components/sales/Offer";
import OrderBump from "../components/sales/OrderBump";
import Guarantee from "../components/sales/Guarantee";
import FAQ from "../components/sales/FAQ";
import FinalCTA from "../components/sales/FinalCTA";
import Footer from "../components/sales/Footer";

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
          "Guia prático de longevidade ativa: 7 capítulos e 30 páginas para recuperar energia, fortalecer o corpo e resgatar a autoestima em qualquer idade.",
      },
      {
        property: "og:title",
        content: "O Código do Centenário — Manual de Longevidade Ativa",
      },
      {
        property: "og:description",
        content:
          "Descubra os segredos da longevidade ativa: mais energia, mais disposição e autoestima renovada, com acesso imediato e garantia de 7 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <div className="sales-root min-h-screen bg-forest-950">
      <CountdownBar />
      <Simulator />
      <Hero />
      <Pain />
      <ProductPresentation />
      <Chapters />
      <Testimonials />
      <Bonuses />
      <Offer />
      <OrderBump />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
