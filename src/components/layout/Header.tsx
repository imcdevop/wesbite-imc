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

const FORMATION_DOMAINS = [
  { id: "tech", name: "Tech & IA", count: 12, href: "/formations?domaine=tech" },
  { id: "marketing", name: "Marketing & Communication", count: 9, href: "/formations?domaine=marketing" },
  { id: "management", name: "Management & Stratégie", count: 7, href: "/formations?domaine=management" },
  { id: "finance", name: "Finance, Audit & Comptabilité", count: 8, href: "/formations?domaine=finance" },
  { id: "supply-chain", name: "Supply Chain & Logistique", count: 4, href: "/formations?domaine=supply-chain" },
  { id: "rh", name: "Ressources Humaines", count: 2, href: "/formations?domaine=rh" },
  { id: "droit", name: "Droit des Affaires", count: 1, href: "/formations?domaine=droit" },
];

const FORMATION_FLAGSHIPS = [
  { href: "/formations/big-data-analytics", name: "Big Data & Business Intelligence", domain: "Tech" },
  { href: "/formations/cybersecurite", name: "Cybersécurité des Systèmes", domain: "Tech" },
  { href: "/formations/ia-pour-tous-appliquer", name: "Intelligence Artificielle Appliquée", domain: "Tech" },
  { href: "/formations/management-de-projet", name: "Management de Projet & Méthodes Agiles", domain: "Management" },
  { href: "/formations/introduction-supply-chain", name: "Pilotage de la Supply Chain", domain: "Logistique" },
  { href: "/formations/droit-des-affaires-contrats", name: "Droit des Affaires & Pratique Contractuelle", domain: "Droit" },
];

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

              <div className={`ml-6 pl-6 border-l ${isTransparent ? "border-white/20" : "border-slate-200"} flex items-center`}>
                <Link
                  href="/contact"
                  onClick={close}
                  className={`inline-flex items-center justify-center font-head font-bold uppercase tracking-wider text-xs px-5 py-2 transition-all ${
                    isTransparent
                      ? "text-white bg-slate-900/60 backdrop-blur-sm border-2 border-white shadow-[3px_3px_0_#ffffff] hover:bg-white hover:text-slate-900 hover:shadow-[4px_4px_0_#004b88] hover:-translate-x-0.5 hover:-translate-y-0.5"
                      : "text-white bg-brand-600 hover:bg-brand-500 border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:shadow-[4px_4px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none"
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
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b-2 border-slate-900 shadow-[0_12px_0_#004b88] z-50"
            style={{
              animation: "menuReveal 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-x-8 items-start">
                
                {/* Colonne 1 : Présentation */}
                <div className="col-span-3 border-r border-slate-100 pr-6">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    Présentation
                  </span>
                  <ul className="space-y-0">
                    {[
                      { href: "/a-propos", label: "À Propos de l'IMC" },
                      { href: "/le-mot-du-directeur", label: "Le mot du directeur" },
                      { href: "/vision-missions-valeurs", label: "Vision, missions et valeurs" },
                      { href: "/politique-qualite", label: "Politique Qualité" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="group flex items-center justify-between py-2 text-[14px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors"
                        >
                          <span className="font-medium group-hover:translate-x-1 transition-transform">{item.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-brand-600 font-bold transition-opacity">&rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne 2 : Gouvernance */}
                <div className="col-span-3 border-r border-slate-100 pr-6">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    Gouvernance
                  </span>
                  <ul className="space-y-0">
                    {[
                      { href: "/le-conseil-scientifique", label: "Le conseil scientifique" },
                      { href: "/le-conseil-dorientation", label: "Le conseil d'orientation" },
                      { href: "/nos-partenaires-internationaux", label: "Partenaires internationaux" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="group flex items-center justify-between py-2 text-[14px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors"
                        >
                          <span className="font-medium group-hover:translate-x-1 transition-transform">{item.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-brand-600 font-bold transition-opacity">&rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne 3 : Campus & Services */}
                <div className="col-span-3 border-r border-slate-100 pr-6">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    Services
                  </span>
                  <ul className="space-y-0">
                    {[
                      { href: "/incubateur", label: "Incubateur IMC-Start" },
                      { href: "/bibliotheque", label: "Bibliothèque" },
                      { href: "/alumnis", label: "Réseau Alumnis" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="group flex items-center justify-between py-2 text-[14px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors"
                        >
                          <span className="font-medium group-hover:translate-x-1 transition-transform">{item.label}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-brand-600 font-bold transition-opacity">&rarr;</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne 4 : Encart Institutionnel Élite */}
                <div className="col-span-3">
                  <div className="border-2 border-slate-900 bg-slate-50 p-5 shadow-[4px_4px_0_#004b88]">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-600 text-white mb-2">
                      Agrément MESRS
                    </span>
                    <h4 className="font-head text-base font-bold uppercase text-slate-900 leading-tight mb-1.5">
                      Institut d'Excellence
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Établissement d'enseignement supérieur agréé, formant les futurs décideurs et cadres d'entreprise depuis plus de 15 ans.
                    </p>
                    <Link
                      href="/a-propos"
                      onClick={close}
                      className="inline-flex items-center gap-1.5 text-xs font-head font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
                    >
                      <span>Découvrir l'IMC</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {activeMenu === "formations" && (
          <div
            onMouseEnter={clearCloseTimer}
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b-2 border-slate-900 shadow-[0_12px_0_#004b88] z-50"
            style={{
              animation: "menuReveal 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-x-8 items-start">
                
                {/* Colonne 1 (col-span-4) : Domaines d'Enseignement */}
                <div className="col-span-4 border-r border-slate-100 pr-8">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    7 Domaines de Formation
                  </span>
                  <ul className="space-y-0">
                    {FORMATION_DOMAINS.map((domain) => (
                      <li key={domain.id}>
                        <Link
                          href={domain.href}
                          onClick={close}
                          className="flex items-center justify-between py-2 text-[14px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors group"
                        >
                          <span className="font-medium group-hover:translate-x-1 transition-transform">
                            {domain.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-600">
                            {domain.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-1">
                    <Link
                      href="/formations"
                      onClick={close}
                      className="section-link group text-xs sm:text-sm"
                    >
                      <span>Consulter les 44 formations</span>
                      <span className="arrow ml-1 inline-block">&rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Colonne 2 (col-span-4) : Programmes Phares */}
                <div className="col-span-4 border-r border-slate-100 pr-8">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    Programmes Phares 2026
                  </span>
                  <ul className="space-y-0">
                    {FORMATION_FLAGSHIPS.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="flex items-center justify-between py-2.5 text-[14px] text-slate-800 hover:text-brand-600 border-b border-slate-100 transition-colors group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform font-medium">
                            {item.name}
                          </span>
                          <span className="text-[11px] font-mono font-semibold text-slate-400">
                            {item.domain}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne 3 (col-span-4) : Solutions Entreprises & Accès Catalogue */}
                <div className="col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                      Entreprises & Certifications
                    </span>
                    
                    <div className="border-2 border-slate-900 bg-slate-50 p-4 shadow-[4px_4px_0_#0f172a] mb-4">
                      <h4 className="font-head text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                        Formations sur-mesure
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Programmes intra et inter-entreprises conçus pour les cadres et équipes dirigeantes en Algérie.
                      </p>
                      <Link
                        href="/contact"
                        onClick={close}
                        className="text-xs font-head font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                      >
                        <span>Demander une convention</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>

                    <div className="border-2 border-slate-900 bg-white p-4">
                      <h4 className="font-head text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">
                        Agrément Officiel MESRS
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Établissement agréé par le Ministère de l'Enseignement Supérieur. Diplômes et attestations officiellement reconnus.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3">
                    <Link
                      href="/formations"
                      onClick={close}
                      className="block w-full py-3 text-center bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
                    >
                      Catalogue complet (44 formations) &rarr;
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
            className="hidden lg:block absolute left-0 right-0 top-full bg-white border-b-2 border-slate-900 shadow-[0_12px_0_#004b88] z-50"
            style={{
              animation: "menuReveal 180ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-12 gap-x-8 items-start">
                
                {/* Colonne 1 : Activités Scientifiques */}
                <div className="col-span-4 border-r border-slate-100 pr-8">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    Activités Scientifiques
                  </span>
                  <ul className="space-y-0">
                    {[
                      { href: "/recherche/colloques", label: "Colloques Internationaux", desc: "Rencontres de chercheurs maghrébins et internationaux" },
                      { href: "/recherche/ateliers", label: "Ateliers & Workshops", desc: "Séminaires méthodologiques et pratiques de recherche" },
                      { href: "/recherche/revue", label: "Revue de Management", desc: "Publications scientifiques et études de cas sectorielles" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="group block py-2.5 border-b border-slate-100 hover:border-brand-600 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-head text-base font-bold uppercase text-slate-900 group-hover:text-brand-600 group-hover:translate-x-1 transition-all">
                              {item.label}
                            </span>
                            <span className="text-slate-400 group-hover:text-brand-600 font-bold">&rarr;</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne 2 : Innovation & Valorisation */}
                <div className="col-span-4 border-r border-slate-100 pr-8">
                  <span className="inline-block px-2.5 py-0.5 text-[11px] font-head font-bold tracking-widest uppercase text-slate-900 bg-slate-100 border border-slate-900 mb-4">
                    Innovation & Valorisation
                  </span>
                  <ul className="space-y-0">
                    {[
                      { href: "/incubateur", label: "Incubateur IMC-Start", desc: "Accompagnement de projets entrepreneuriaux innovants" },
                      { href: "/bibliotheque", label: "Bibliothèque & Ressources", desc: "Ouvrages spécialisés, revues et bases de données académiques" },
                      { href: "/recherche", label: "Pôle Recherche Général", desc: "Présentation des axes et orientations scientifiques" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={close}
                          className="group block py-2.5 border-b border-slate-100 hover:border-brand-600 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-head text-base font-bold uppercase text-slate-900 group-hover:text-brand-600 group-hover:translate-x-1 transition-all">
                              {item.label}
                            </span>
                            <span className="text-slate-400 group-hover:text-brand-600 font-bold">&rarr;</span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colonne 3 : Focus Événementiel Phare */}
                <div className="col-span-4">
                  <div className="border-2 border-slate-900 bg-slate-50 p-5 shadow-[4px_4px_0_#004b88]">
                    <span className="inline-block px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-600 text-white mb-2">
                      Colloque 2026
                    </span>
                    <h4 className="font-head text-lg font-bold uppercase text-slate-900 leading-snug mb-2">
                      Gouvernance & Transformation Numérique
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      Appel à communication ouvert pour les chercheurs et praticiens. 14 & 15 Novembre 2026 à Alger.
                    </p>
                    <Link
                      href="/recherche/colloques"
                      onClick={close}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-brand-600 text-white font-head font-bold uppercase text-xs tracking-wider px-4 py-2.5 transition-colors"
                    >
                      <span>Programme & Soumission</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
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
              <Link
                href="/contact"
                onClick={close}
                className="block text-center bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-xs tracking-wider py-3.5 border-2 border-slate-900 shadow-[3px_3px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
