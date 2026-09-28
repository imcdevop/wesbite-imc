import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/common/SmoothScroll";
import { Preloader } from "@/components/common/Preloader";

export const metadata: Metadata = {
  title: "IMC Alger | Institut de Management et de Communication",
  description:
    "Centre de formation en management et technologie a Alger. Formations pour etudiants et cadres, 7 domaines, 44 programmes professionnels.",
  metadataBase: new URL("https://imc-alger.com"),
  openGraph: {
    title: "IMC Alger | Institut de Management et de Communication",
    description:
      "Centre de formation supérieure et pôle d'excellence managériale et technologique à Alger.",
    locale: "fr_FR",
    type: "website",
  },
};

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "IMC Alger, Institut de Management et de Communication",
  description:
    "Centre de formation en management et perfectionnement professionnel en Algerie.",
  url: "https://imc-alger.com",
  logo: "https://imc-alger.com/logo-imc-full.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boulevard El Moudjahed Assad Fodile, Route de Ouled Fayet",
    addressLocality: "Alger",
    addressCountry: "DZ",
  },
  telephone: "+213-560-939-414",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white antialiased">
        <Preloader />
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
