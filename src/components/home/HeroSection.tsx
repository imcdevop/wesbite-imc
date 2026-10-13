import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FLAGSHIP_PICTURES } from "@/data/pictures";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[100dvh] h-[100dvh] flex items-center bg-slate-950 overflow-hidden -mt-[108px] pt-[108px]">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image
          src={FLAGSHIP_PICTURES.heroCampus}
          alt="Campus IMC Alger - Institut de Management et de Communication"
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

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
