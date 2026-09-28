import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[760px] flex items-center bg-slate-950 overflow-hidden">
      {/* Image de fond pleine largeur */}
      <Image
        src="/hero-bg.jpg"
        alt="Promotion des diplômés IMC"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Voile sombre pour lisibilite editoriale immediate */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35" />

      {/* Contenu textuel principal aligne a gauche */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-2xl text-left">
          {/* Titre d'impact */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            L'excellence passionnément
          </h1>

          {/* Sous-titre institutionnel */}
          <p className="font-sans text-base sm:text-xl text-slate-200 font-normal leading-relaxed mb-8 max-w-xl">
            Le premier établissement privé de formation supérieure de management en Algérie!
          </p>

          {/* Action principale */}
          <div>
            <Link
              href="#formations"
              className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm sm:text-base px-7 py-3.5 transition-colors border border-brand-500 shadow-sm"
            >
              <span>Nos formations</span>
              <GraduationCap className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
