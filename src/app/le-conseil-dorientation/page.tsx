import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Le Conseil d'Orientation | IMC Alger",
  description: "Orientation stratégique et articulation avec le monde de l'entreprise à l'IMC Alger.",
};

export default function ConseilOrientationPage() {
  return (
    <div className="w-full bg-white">
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900">Accueil</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Le conseil d'orientation</span>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Gouvernance Économique
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Le Conseil d'Orientation
        </h1>
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
          Composé de dirigeants d'entreprises publiques et privées, de représentants d'organisations
          patronales et d'experts sectoriels, le Conseil d'Orientation garantit l'alignement permanent
          des programmes de l'IMC avec les exigences d'employabilité et les mutations économiques.
        </p>
      </section>
    </div>
  );
}
