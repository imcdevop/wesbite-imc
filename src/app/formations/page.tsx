"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Search, BookOpen, CheckCircle2, ArrowRight, Layers, Users } from "lucide-react";
import { DOMAINS, FORMATIONS, FormationItem } from "@/data/catalogue";

function FormationsContent() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get("domaine") || "all";

  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomain);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFormations = useMemo(() => {
    return FORMATIONS.filter((item) => {
      const matchDomain = selectedDomain === "all" || item.domainId === selectedDomain;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        item.domainName.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchDomain && matchSearch;
    });
  }, [selectedDomain, searchQuery]);

  return (
    <div className="w-full bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Catalogue des Formations</span>
        </div>
      </div>

      {/* En-tête */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Centre de Formation IMC Alger
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Catalogue des Formations
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Consultez l'ensemble de nos formations certifiantes dispensées par l'IMC. Nos programmes
              s'adressent exclusivement aux <strong>étudiants</strong> et aux <strong>cadres d'entreprise</strong>,
              répartis en 7 domaines d'expertise sectorielle.
            </p>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-brand-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Synthèse du Catalogue
              </span>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center justify-between py-1 border-b border-slate-200">
                <span>Domaines couverts :</span>
                <span className="font-bold text-slate-900">7 Domaines</span>
              </li>
              <li className="flex items-center justify-between py-1 border-b border-slate-200">
                <span>Formations au catalogue :</span>
                <span className="font-bold text-slate-900">44 Programmes</span>
              </li>
              <li className="flex items-center justify-between py-1">
                <span>Publics éligibles :</span>
                <span className="font-bold text-slate-900">Étudiants & Cadres</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 7 Domaines Couverts - Visuel fidèle au livret */}
        <div className="mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Domaines couverts au catalogue
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {DOMAINS.map((dom) => (
              <button
                key={dom.id}
                type="button"
                onClick={() => setSelectedDomain(selectedDomain === dom.id ? "all" : dom.id)}
                className={`p-4 border text-left transition-all ${
                  selectedDomain === dom.id
                    ? "border-brand-600 bg-brand-50/50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: dom.color }}
                  />
                  <span className="text-[11px] font-mono text-slate-400">{dom.count}</span>
                </div>
                <div className="font-bold text-sm text-slate-900 leading-tight">
                  {dom.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Barre de Recherche et Filtres */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
          {/* Recherche textuelle */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une formation, un mot-clé..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 focus:outline-none focus:border-brand-600 bg-white"
            />
          </div>

          {/* Bouton reset filtre si actif */}
          {(selectedDomain !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedDomain("all");
                setSearchQuery("");
              }}
              className="text-xs text-brand-600 hover:text-brand-700 font-semibold self-start sm:self-center"
            >
              Réinitialiser les filtres (Afficher les 44 formations)
            </button>
          )}

          <div className="text-xs text-slate-500 font-medium">
            {filteredFormations.length} formation{filteredFormations.length > 1 ? "s" : ""}{" "}
            affichée{filteredFormations.length > 1 ? "s" : ""}
          </div>
        </div>

        {/* Grille des Formations */}
        {filteredFormations.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 border border-slate-200 p-8">
            <p className="text-base text-slate-600 mb-2">
              Aucune formation ne correspond à votre recherche "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedDomain("all");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-600 hover:text-brand-700"
            >
              Afficher toutes les formations
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormations.map((item) => (
              <Link
                key={item.slug}
                href={`/formations/${item.slug}`}
                className="group flex flex-col justify-between border border-slate-200 bg-white p-7 hover:border-brand-600 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      {item.domainName}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      N° {String(item.id).padStart(2, "0")} • p.{item.pageNumber}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mb-4 line-clamp-2">
                    {item.subtitle}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-600 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    Étudiants & Cadres
                  </span>
                  <span className="inline-flex items-center gap-1 text-brand-600 font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span>Fiche</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Section Accompagnement & Inscription */}
        <div className="mt-20 border border-slate-200 bg-slate-50 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2 block">
                Session inter & intra-entreprises
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Vous souhaitez inscrire vos équipes ou rejoindre une session ?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Toutes nos formations sont modulables en présentiel à Alger ou en format hybride.
                Nos conseillers pédagogiques vous orientent vers le cursus le plus adapté à votre projet.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider transition-colors text-center"
              >
                Demander un devis / S'inscrire
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors text-center"
              >
                Découvrir l'Institut IMC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function FormationsIndexPage() {
  return (
    <Suspense fallback={<div className="w-full py-20 text-center text-sm text-slate-500">Chargement du catalogue des formations...</div>}>
      <FormationsContent />
    </Suspense>
  );
}
