"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

const NAV_ITEMS = [
  { key: "imc", label: "L'Institut" },
  { key: "formations", label: "Formations" },
  { key: "recherche", label: "Recherche" },
] as const;

type MenuKey = (typeof NAV_ITEMS)[number]["key"];

export function Header() {
  const pathname = usePathname();
  const transparent = pathname === "/";
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const startCloseTimer = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 200);
  }, [clearCloseTimer]);

  const close = useCallback(() => {
    clearCloseTimer();
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileSection(null);
  }, [clearCloseTimer]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      clearCloseTimer();
    };
  }, [close, clearCloseTimer]);

  useEffect(() => {
    if (!transparent) return;
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isTransparent = transparent && !scrolled && !activeMenu && !mobileOpen;

  return (
    <header
      ref={headerRef}
      className={`${transparent ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
      onMouseLeave={startCloseTimer}
    >
      {/* Barre utilitaire */}
      <div className={`${isTransparent ? "bg-white/10" : "bg-brand-600"} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-5">
            <a
              href="tel:+21320338181"
              aria-label="Telephone"
              className="text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="mailto:contact@imc-alger.com"
              aria-label="Email"
              className="text-white/90 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
            <a
              href="https://maps.google.com/?q=IMC+Alger"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Localisation"
              className="text-white/90 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <nav
        className={`${isTransparent ? "border-b border-white/10" : "border-b border-slate-200"} transition-colors duration-300`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" onClick={close} aria-label="Accueil IMC" className="shrink-0">
              <div className="relative h-11 w-44">
                <Image
                  src="/logo-imc-full.svg"
                  alt="IMC - Institut de Management et de Communication"
                  fill
                  priority
                  className={`object-contain object-left transition-all duration-300 ${isTransparent ? "brightness-0 invert" : ""}`}
                />
              </div>
            </Link>

            {/* Liens desktop */}
            <div className="hidden lg:flex items-center h-full">
              <ul className="flex items-center h-full gap-0">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key} className="h-full">
                    <button
                      type="button"
                      onClick={() => setActiveMenu(activeMenu === item.key ? null : item.key)}
                      onMouseEnter={() => {
                        clearCloseTimer();
                        setActiveMenu(item.key);
                      }}
                      className={`h-full px-5 flex items-center text-[13px] font-medium tracking-wide uppercase transition-colors relative ${
                        activeMenu === item.key
                          ? "text-brand-600"
                          : isTransparent
                            ? "text-white/90 hover:text-white"
                            : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-5 right-5 h-[2px] ${isTransparent ? "bg-white" : "bg-brand-600"} transition-transform origin-left ${
                          activeMenu === item.key ? "scale-x-100" : "scale-x-0"
                        }`}
                        style={{ transitionDuration: "250ms" }}
                      />
                    </button>
                  </li>
                ))}
                <li className="h-full">
                  <Link
                    href="/actualites"
                    onClick={close}
                    onMouseEnter={() => {
                      clearCloseTimer();
                      setActiveMenu(null);
                    }}
                    className={`h-full px-5 flex items-center text-[13px] font-medium tracking-wide uppercase transition-colors ${
                      isTransparent
                        ? "text-white/90 hover:text-white"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    Actualites
                  </Link>
                </li>
              </ul>

              <div className={`ml-8 pl-8 border-l ${isTransparent ? "border-white/20" : "border-slate-200"} h-8 flex items-center`}>
                <Link
                  href="/contact"
                  onClick={close}
                  className={`text-[12px] font-semibold tracking-widest uppercase px-5 py-2 transition-colors ${
                    isTransparent
                      ? "text-white border border-white/40 hover:bg-white hover:text-slate-900"
                      : "text-white bg-brand-600 hover:bg-brand-700"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Hamburger mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-[5px]"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-5 h-[1.5px] ${isTransparent ? "bg-white" : "bg-slate-800"} transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] ${isTransparent ? "bg-white" : "bg-slate-800"} transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] ${isTransparent ? "bg-white" : "bg-slate-800"} transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Panneaux mega menu */}

        {activeMenu === "imc" && (
          <div
            onMouseEnter={clearCloseTimer}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-slate-100 z-50"
            style={{
              boxShadow: "0 8px 24px -4px rgba(15, 23, 42, 0.06)",
              animation: "menuReveal 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-12 gap-x-8">
                <div className="col-span-4">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
                    Institution
                  </p>
                  <ul className="space-y-0">
                    <li>
                      <Link href="/a-propos" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        A Propos
                      </Link>
                    </li>
                    <li>
                      <Link href="/le-mot-du-directeur" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        Le mot du directeur
                      </Link>
                    </li>
                    <li>
                      <Link href="/vision-missions-et-valeurs" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        Vision, missions et valeurs
                      </Link>
                    </li>
                    <li>
                      <Link href="/politique-qualite" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 transition-colors">
                        Politique Qualite
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
                    Gouvernance
                  </p>
                  <ul className="space-y-0">
                    <li>
                      <Link href="/le-conseil-scientifique" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        Le conseil scientifique
                      </Link>
                    </li>
                    <li>
                      <Link href="/le-conseil-dorientation" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        Le conseil d'orientation
                      </Link>
                    </li>
                    <li>
                      <Link href="/nos-partenaires-internationaux" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 transition-colors">
                        Partenaires internationaux
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
                    Services
                  </p>
                  <ul className="space-y-0">
                    <li>
                      <Link href="/incubateur" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        Incubateur IMC-Start
                      </Link>
                    </li>
                    <li>
                      <Link href="/bibliotheque" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">
                        Bibliotheque
                      </Link>
                    </li>
                    <li>
                      <Link href="/alumnis" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 transition-colors">
                        Alumnis
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "formations" && (
          <div
            onMouseEnter={clearCloseTimer}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-slate-100 border-b-4 border-brand-600 z-50 shadow-xl"
            style={{
              boxShadow: "0 8px 24px -4px rgba(15, 23, 42, 0.06)",
              animation: "menuReveal 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-12 gap-x-8">
                <div className="col-span-4">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-600 mb-5">
                    Tech & Marketing
                  </p>
                  <ul className="space-y-0">
                    <li><Link href="/formations/big-data-analytics" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Big Data & Analytics</Link></li>
                    <li><Link href="/formations/cybersecurite" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Cybersécurité & Réseaux</Link></li>
                    <li><Link href="/formations/developpement-web-mobile" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Développement Web & Mobile</Link></li>
                    <li><Link href="/formations/ia-pour-tous-appliquer" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Intelligence Artificielle & IA au Quotidien</Link></li>
                    <li><Link href="/formations/marketing-digital" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Marketing Digital & Stratégies</Link></li>
                    <li><Link href="/formations/communication-numerique-reseaux-sociaux" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 transition-colors">Communication & Réseaux Sociaux</Link></li>
                  </ul>
                </div>
                <div className="col-span-4">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-600 mb-5">
                    Management & Finance
                  </p>
                  <ul className="space-y-0">
                    <li><Link href="/formations/management-de-projet" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Management de Projet</Link></li>
                    <li><Link href="/formations/strategie-entreprise" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Stratégie d'Entreprise & Décisions</Link></li>
                    <li><Link href="/formations/leadership-strategique-communication" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Leadership & Méthodes Agiles</Link></li>
                    <li><Link href="/formations/audit-controle-gestion" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Contrôle de Gestion & Audit</Link></li>
                    <li><Link href="/formations/analyse-reporting-financier" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Analyse Financière & Reporting</Link></li>
                    <li><Link href="/formations/fintech" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 transition-colors">Fintech & Finance Numérique</Link></li>
                  </ul>
                </div>
                <div className="col-span-4 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-600 mb-5">
                      Supply Chain, RH & Droit
                    </p>
                    <ul className="space-y-0 mb-6">
                      <li><Link href="/formations/introduction-supply-chain" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Supply Chain & Logistique</Link></li>
                      <li><Link href="/formations/gestion-ressources-humaines" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Gestion des RH & Négociation</Link></li>
                      <li><Link href="/formations/droit-des-affaires" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Droit des Affaires</Link></li>
                    </ul>
                  </div>

                  <div className="border-2 border-slate-900 bg-white p-5 shadow-[5px_5px_0_#004b88] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 border border-brand-200">
                        Catalogue 2026
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-900">44 Formations</span>
                    </div>
                    <p className="text-[14px] font-bold text-slate-900 leading-snug mb-1">
                      7 Domaines Couverts
                    </p>
                    <p className="text-[12px] text-slate-600 leading-relaxed mb-4">
                      Formations certifiantes pour étudiants et cadres d'entreprise.
                    </p>
                    <Link
                      href="/formations"
                      onClick={close}
                      className="btn-imc-primary w-full py-2.5 px-3 text-[11px] text-center"
                    >
                      <span>Consulter les 44 formations</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeMenu === "recherche" && (
          <div
            onMouseEnter={clearCloseTimer}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-slate-100 z-50"
            style={{
              boxShadow: "0 8px 24px -4px rgba(15, 23, 42, 0.06)",
              animation: "menuReveal 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-12 gap-x-8">
                <div className="col-span-4">
                  <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
                    Activites scientifiques
                  </p>
                  <ul className="space-y-0">
                    <li><Link href="/recherche/colloques" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Colloques</Link></li>
                    <li><Link href="/recherche/ateliers" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors">Ateliers</Link></li>
                    <li><Link href="/recherche/revue" onClick={close} className="block py-2.5 text-[15px] text-slate-800 hover:text-brand-600 transition-colors">Revue</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Menu mobile */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[108px] bg-white z-40 overflow-y-auto">
          <div className="px-5 py-8 space-y-6">
            <div>
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "imc" ? null : "imc")}
                className="w-full flex items-center justify-between py-3 border-b border-slate-200"
              >
                <span className="text-[13px] font-semibold tracking-widest uppercase text-slate-900">L'Institut</span>
                <span className={`text-slate-400 text-lg transition-transform duration-200 ${mobileSection === "imc" ? "rotate-45" : ""}`}>+</span>
              </button>
              {mobileSection === "imc" && (
                <ul className="pt-2 pb-4 space-y-0">
                  {[
                    { href: "/a-propos", label: "A Propos" },
                    { href: "/le-mot-du-directeur", label: "Le mot du directeur" },
                    { href: "/vision-missions-et-valeurs", label: "Vision, missions et valeurs" },
                    { href: "/politique-qualite", label: "Politique Qualite" },
                    { href: "/le-conseil-scientifique", label: "Le conseil scientifique" },
                    { href: "/le-conseil-dorientation", label: "Le conseil d'orientation" },
                    { href: "/nos-partenaires-internationaux", label: "Partenaires internationaux" },
                    { href: "/incubateur", label: "Incubateur IMC-Start" },
                    { href: "/bibliotheque", label: "Bibliotheque" },
                    { href: "/alumnis", label: "Alumnis" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={close} className="block py-2.5 pl-4 text-[14px] text-slate-600 hover:text-brand-600 border-b border-slate-50 transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "formations" ? null : "formations")}
                className="w-full flex items-center justify-between py-3 border-b border-slate-200"
              >
                <span className="text-[13px] font-semibold tracking-widest uppercase text-slate-900">Formations</span>
                <span className={`text-slate-400 text-lg transition-transform duration-200 ${mobileSection === "formations" ? "rotate-45" : ""}`}>+</span>
              </button>
              {mobileSection === "formations" && (
                <ul className="pt-2 pb-4 space-y-0">
                  {[
                    { href: "/formations?domaine=tech", label: "Domaine Tech (12 formations)" },
                    { href: "/formations?domaine=marketing", label: "Domaine Marketing (9 formations)" },
                    { href: "/formations?domaine=management", label: "Domaine Management (7 formations)" },
                    { href: "/formations?domaine=finance", label: "Domaine Finance (8 formations)" },
                    { href: "/formations?domaine=supply-chain", label: "Domaine Supply Chain (4 formations)" },
                    { href: "/formations?domaine=rh", label: "Domaine RH (2 formations)" },
                    { href: "/formations?domaine=droit", label: "Domaine Droit (1 formation)" },
                    { href: "/formations", label: "Catalogue complet (44 formations)" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={close} className="block py-2.5 pl-4 text-[14px] text-slate-600 hover:text-brand-600 border-b border-slate-50 transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileSection(mobileSection === "recherche" ? null : "recherche")}
                className="w-full flex items-center justify-between py-3 border-b border-slate-200"
              >
                <span className="text-[13px] font-semibold tracking-widest uppercase text-slate-900">Recherche</span>
                <span className={`text-slate-400 text-lg transition-transform duration-200 ${mobileSection === "recherche" ? "rotate-45" : ""}`}>+</span>
              </button>
              {mobileSection === "recherche" && (
                <ul className="pt-2 pb-4 space-y-0">
                  {[
                    { href: "/recherche/colloques", label: "Colloques" },
                    { href: "/recherche/ateliers", label: "Ateliers" },
                    { href: "/recherche/revue", label: "Revue" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={close} className="block py-2.5 pl-4 text-[14px] text-slate-600 hover:text-brand-600 border-b border-slate-50 transition-colors">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-2">
              <Link href="/actualites" onClick={close} className="block py-3 border-b border-slate-200 text-[13px] font-semibold tracking-widest uppercase text-slate-900">
                Actualites
              </Link>
            </div>

            <div className="pt-4">
              <Link href="/contact" onClick={close} className="block text-center bg-brand-600 text-white py-3.5 text-[12px] font-semibold tracking-widest uppercase transition-colors hover:bg-brand-700">
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
