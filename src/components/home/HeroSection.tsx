import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-center bg-slate-950 overflow-hidden -mt-[108px] pt-[108px]">
      <Image
        src="/hero-bg.jpg"
        alt="Formation IMC Alger"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            L'excellence passionnement
          </h1>

          <p className="font-sans text-base sm:text-lg text-white/80 font-normal leading-relaxed mb-10 max-w-xl">
            Centre de formation pour etudiants et cadres en management, technologie et business en Algerie.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/formations"
              className="inline-flex items-center bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-7 py-3.5 tracking-wide transition-colors"
            >
              Nos formations
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-white/30 text-white hover:bg-white hover:text-slate-900 font-medium text-sm px-7 py-3.5 tracking-wide transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
