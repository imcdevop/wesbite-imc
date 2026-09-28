import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Barre superieure d'accreditation et de contact direct */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="font-medium tracking-wide text-slate-200">
              Agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+213560939414"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>020 33 81 81 / 0560 93 94 14</span>
            </a>
            <a
              href="mailto:contact@imc-alger.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>contact@imc-alger.com</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Ouled Fayet, Alger</span>
            </span>
          </div>
        </div>
      </div>

      {/* Navigation institutionnelle principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo officiel */}
          <Link href="/" className="flex items-center" aria-label="IMC Accueil">
            <div className="relative h-12 w-48">
              <Image
                src="/logo-imc-full.svg"
                alt="Institut de Management et de Communication"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Liens de navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            <Link
              href="#formations"
              className="hover:text-brand-600 transition-colors py-2 border-b-2 border-transparent hover:border-brand-600"
            >
              Formations
            </Link>
            <Link
              href="#institut"
              className="hover:text-brand-600 transition-colors py-2 border-b-2 border-transparent hover:border-brand-600"
            >
              L'Institut
            </Link>
            <Link
              href="#recherche"
              className="hover:text-brand-600 transition-colors py-2 border-b-2 border-transparent hover:border-brand-600"
            >
              Recherche & Pratiques
            </Link>
            <Link
              href="#actualites"
              className="hover:text-brand-600 transition-colors py-2 border-b-2 border-transparent hover:border-brand-600"
            >
              Actualités
            </Link>
            <Link
              href="#contact"
              className="hover:text-brand-600 transition-colors py-2 border-b-2 border-transparent hover:border-brand-600"
            >
              Contact
            </Link>
          </nav>

          {/* Action primaire */}
          <div className="flex items-center gap-3">
            <Link
              href="#candidature"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-none transition-colors border border-brand-700"
            >
              <span>Candidater</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
