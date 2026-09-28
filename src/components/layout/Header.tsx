import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Barre superieure institutionnelle */}
      <div className="bg-brand-600 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact direct rapide */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+213560939414"
              aria-label="Telephone"
              className="text-white/90 hover:text-white transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:contact@imc-alger.com"
              aria-label="Email"
              className="text-white/90 hover:text-white transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localisation"
              className="text-white/90 hover:text-white transition-opacity"
            >
              <MapPin className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mention d'agrement officiel sans aucun point ou badge */}
          <div className="text-center font-medium tracking-wide text-white">
            Agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique
          </div>

          {/* Liens reseaux institutionnels */}
          <div className="flex items-center gap-4 text-white/90">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo officiel */}
            <Link href="/" className="flex items-center" aria-label="Accueil IMC">
              <div className="relative h-12 w-48">
                <Image
                  src="/logo-imc-full.svg"
                  alt="IMC"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Menu principal */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wider text-slate-800 uppercase">
              <Link
                href="#formations"
                className="hover:text-brand-600 transition-colors py-2"
              >
                Formations
              </Link>
              <Link
                href="#institut"
                className="hover:text-brand-600 transition-colors py-2"
              >
                L'Institut
              </Link>
              <Link
                href="#recherche"
                className="hover:text-brand-600 transition-colors py-2"
              >
                Recherche
              </Link>
              <Link
                href="#actualites"
                className="hover:text-brand-600 transition-colors py-2"
              >
                News
              </Link>
            </nav>

            {/* Bouton d'action */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 transition-colors"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
