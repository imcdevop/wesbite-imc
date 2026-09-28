import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "IMC Alger | Institut de Management et de Communication",
  description:
    "Centre de formation supérieure et pôle d'excellence managériale et technologique à Alger. Cursus certifiants, Licences et Masters spécialisés.",
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
    "Etablissement de formation superieure et de perfectionnement professionnel en Algerie.",
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
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
