import { createFileRoute } from "@tanstack/react-router";

import CountdownBar from "../components/sales-es/CountdownBar";
import Simulator from "../components/sales-es/Simulator";
import Hero from "../components/sales-es/Hero";
import Pain from "../components/sales-es/Pain";
import ProductPresentation from "../components/sales-es/ProductPresentation";
import Chapters from "../components/sales-es/Chapters";
import Testimonials from "../components/sales-es/Testimonials";
import Bonuses from "../components/sales-es/Bonuses";
import Offer from "../components/sales-es/Offer";
import OrderBump from "../components/sales-es/OrderBump";
import Guarantee from "../components/sales-es/Guarantee";
import FAQ from "../components/sales-es/FAQ";
import FinalCTA from "../components/sales-es/FinalCTA";
import Footer from "../components/sales-es/Footer";

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
          "Guía práctica de longevidad activa: 7 capítulos y 30 páginas para recuperar energía, fortalecer el cuerpo y rescatar tu autoestima a cualquier edad.",
      },
      {
        property: "og:title",
        content: "El Código del Centenario — Manual de Longevidad Activa",
      },
      {
        property: "og:description",
        content:
          "Descubre los secretos de la longevidad activa: más energía, más vitalidad y autoestima renovada, con acceso inmediato y garantía de 7 días.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:url",
        content: "https://label-guide-mockup.lovable.app/venta",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://label-guide-mockup.lovable.app/venta",
      },
    ],
  }),
  component: SalesPageES,
});

function SalesPageES() {
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
