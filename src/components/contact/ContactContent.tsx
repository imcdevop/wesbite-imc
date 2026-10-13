"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, MessageSquare, ArrowRight, ShieldCheck } from "lucide-react";

type IntentType = "etudiant" | "entreprise" | "partenariat";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Quelles sont les conditions et délais d'admission à l'IMC ?",
    answer: "Les admissions pour les bacheliers et étudiants en reconversion s'effectuent sur étude de dossier académique suivie d'un entretien d'orientation individuel. Les candidatures pour les sessions de l'année 2026 sont ouvertes en continu avec des rentrées en octobre et février.",
  },
  {
    question: "Comment organiser une formation sur-mesure (Intra) pour nos collaborateurs ?",
    answer: "Notre pôle Relations Entreprises conçoit des programmes sur-mesure adaptés à vos contraintes sectorielles. Nos consultants interviennent directement dans vos locaux à travers toute l'Algérie ou au sein de nos salles équipées à Alger. Une convention de formation agréée vous est remise.",
  },
  {
    question: "Les formations sont-elles reconnues par l'État algérien ?",
    answer: "Oui, l'IMC (Institut de Management et de Communication) est un établissement d'enseignement supérieur privé officiellement agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (MESRS) de la République Algérienne Démocratique et Populaire.",
  },
  {
    question: "Où se situe exactement le campus et comment s'y rendre ?",
    answer: "Le campus de l'IMC est idéalement situé au cœur d'Alger (11, Rue Mohamed Khemisti, Alger Centre), à proximité immédiate des transports en commun (Métro et lignes de bus). Un accueil physique est assuré du dimanche au jeudi de 08h30 à 16h30.",
  },
];

export function ContactContent() {
  const [intent, setIntent] = useState<IntentType>("etudiant");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    fonction: "",
    domaine: "tech",
    niveau: "bac3",
    effectif: "1-5",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 2. EN-TÊTE DE SCÈNE (STYLE BRUTALISTE PRESTIGE) */}
      <section className="py-14 sm:py-20 border-b-2 border-slate-900 bg-[#f0f7fc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-head text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 uppercase leading-[1.04] mb-4">
              Parlons de votre projet d&apos;avenir
            </h1>
            <p className="text-slate-700 text-base sm:text-lg max-w-2xl font-medium leading-relaxed">
              Admissions d&apos;étudiants, sessions intra-entreprises ou partenariats académiques : nos conseillers pédagogiques vous accueillent et vous répondent sous 24h ouvrées.
            </p>

            {/* Pastilles de contact rapide */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="tel:+21320338181"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 hover:text-white text-slate-900 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 border-2 border-slate-900 shadow-[3px_3px_0_#004b88] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600" />
                <span>Standard : 020 33 81 81</span>
              </a>
              <a
                href="https://wa.me/213560939414"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 hover:text-white text-slate-900 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 border-2 border-slate-900 shadow-[3px_3px_0_#004b88] transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp Admissions : 0560 93 94 14</span>
              </a>
              <a
                href="mailto:contact@imc-alger.com"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-900 hover:text-white text-slate-900 font-mono text-xs font-bold uppercase tracking-wider px-4 py-2.5 border-2 border-slate-900 shadow-[3px_3px_0_#004b88] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                <span>contact@imc-alger.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION FORMULAIRE INTERACTIF + COORDONNÉES */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SÉLECTEUR DE PROFIL / INTENTION (STYLE WEB ROCKET OPTIONS) */}
        <div className="mb-10">
          <label className="block font-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">
            Sélectionnez votre profil :
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: "etudiant", label: "Étudiant & Candidat", sub: "Inscription & Orientation" },
              { id: "entreprise", label: "Entreprise & DRH", sub: "Formation Intra & Convention" },
              { id: "partenariat", label: "Institution & Recherche", sub: "Partenariat & Colloques" },
            ].map((tab) => {
              const active = intent === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setIntent(tab.id as IntentType)}
                  className={`p-4 text-left border-2 transition-all ${
                    active
                      ? "bg-slate-900 text-white border-slate-900 shadow-[5px_5px_0_#004b88] -translate-y-0.5"
                      : "bg-white text-slate-800 border-slate-900/30 hover:border-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="block font-head text-base sm:text-lg font-bold uppercase tracking-wider leading-tight">
                    {tab.label}
                  </span>
                  <span className={`block text-xs mt-1 font-sans ${active ? "text-sky-300" : "text-slate-500"}`}>
                    {tab.sub}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLONNE GAUCHE : FORMULAIRE NÉO-BRUTALISTE */}
          <div className="lg:col-span-7 border-2 border-slate-900 bg-white p-6 sm:p-10 shadow-[10px_10px_0_#004b88]">
            
            {isSubmitted ? (
              <div className="text-center py-12 px-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-brand-50 border-2 border-brand-600 rounded-full flex items-center justify-center text-brand-600 shadow-[4px_4px_0_#0f172a]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-head text-3xl font-bold uppercase text-slate-900 mb-3">
                  Message Reçu avec Succès !
                </h3>
                <p className="text-slate-600 text-base max-w-md mx-auto mb-6">
                  Merci <strong>{formData.nom || "cher candidat"}</strong>. Notre équipe d&apos;orientation a bien enregistré votre demande et vous recontactera sous 24 heures ouvrées.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center justify-center font-head text-sm font-bold uppercase tracking-wider px-6 py-3 border-2 border-slate-900 bg-white hover:bg-slate-50"
                  >
                    Envoyer un autre message
                  </button>
                  <a
                    href="https://wa.me/213560939414"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 font-head text-sm font-bold uppercase tracking-wider px-6 py-3 border-2 border-slate-900 bg-emerald-600 text-white hover:bg-emerald-500 shadow-[3px_3px_0_#0f172a]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Contacter sur WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b-2 border-slate-900 pb-4 mb-6">
                  <span className="font-mono text-xs font-bold text-brand-600 uppercase tracking-wider block">
                    Formulaire officiel 2026
                  </span>
                  <h2 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 leading-tight">
                    {intent === "etudiant" && "Dossier de candidature & Orientation"}
                    {intent === "entreprise" && "Demande de formation Intra & Convention"}
                    {intent === "partenariat" && "Partenariat académique & Recherche"}
                  </h2>
                </div>

                {/* Nom & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      required
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Ex: Karim Benali"
                      className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="k.benali@exemple.com"
                      className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Téléphone & Organisation selon l'intention */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                      Numéro de téléphone *
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="05XX XX XX XX"
                      className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                    />
                  </div>

                  {intent === "entreprise" ? (
                    <div>
                      <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                        Entreprise / Organisme *
                      </label>
                      <input
                        type="text"
                        name="entreprise"
                        required
                        value={formData.entreprise}
                        onChange={handleChange}
                        placeholder="Ex: Sonatrach, Djezzy, PME..."
                        className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                        Domaine d&apos;intérêt *
                      </label>
                      <select
                        name="domaine"
                        value={formData.domaine}
                        onChange={handleChange}
                        className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                      >
                        <option value="tech">Tech & Intelligence Artificielle (12)</option>
                        <option value="marketing">Marketing Digital & Marque (9)</option>
                        <option value="management">Management & Gestion de Projet (7)</option>
                        <option value="finance">Finance, Audit & Contrôle (8)</option>
                        <option value="supply-chain">Supply Chain & Logistique (4)</option>
                        <option value="rh">Ressources Humaines (2)</option>
                        <option value="droit">Droit des Affaires (1)</option>
                        <option value="catalogue">Catalogue complet (44 formations)</option>
                      </select>
                    </div>
                  )}
                </div>

                {/* Champs spécifiques entreprise */}
                {intent === "entreprise" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                        Votre Fonction
                      </label>
                      <input
                        type="text"
                        name="fonction"
                        value={formData.fonction}
                        onChange={handleChange}
                        placeholder="DRH, Responsable Formation, DG..."
                        className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                        Effectif à former
                      </label>
                      <select
                        name="effectif"
                        value={formData.effectif}
                        onChange={handleChange}
                        className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                      >
                        <option value="1-5">1 à 5 collaborateurs</option>
                        <option value="6-15">6 à 15 collaborateurs</option>
                        <option value="16-50">16 à 50 collaborateurs</option>
                        <option value="50+">Plus de 50 collaborateurs (Programme Global)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block font-head font-bold uppercase text-xs tracking-wider text-slate-900 mb-2">
                    Votre message ou précisions *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={
                      intent === "entreprise"
                        ? "Détaillez vos besoins : thématiques visées, dates souhaitées, lieu (intra ou campus IMC)..."
                        : "Précisez votre parcours actuel, vos objectifs ou vos interrogations sur le programme..."
                    }
                    className="w-full border-2 border-slate-900 bg-slate-50 px-4 py-3 text-sm font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-600/30 transition-colors"
                  />
                </div>

                {/* Mention légale & ANDPD */}
                <div className="flex items-start gap-3 text-xs text-slate-600">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    defaultChecked
                    className="mt-0.5 w-4 h-4 rounded-none border-2 border-slate-900 accent-[#004b88]"
                  />
                  <label htmlFor="consent" className="cursor-pointer font-sans leading-normal">
                    J&apos;accepte d&apos;être recontacté(e) par les conseillers de l&apos;IMC dans le cadre de ma demande. Mes informations restent strictement confidentielles.
                  </label>
                </div>

                {/* Bouton de soumission néo-brutaliste */}
                <div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white font-head font-bold uppercase text-sm sm:text-base tracking-wider px-8 py-4 border-2 border-slate-900 shadow-[4px_4px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0f172a] transition-all"
                  >
                    <span>Transmettre ma demande d&apos;admission</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* COLONNE DROITE : COORDONNÉES, ACCÈS CAMPUS & SCEAU D'AGRÉMENT */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CARTE 1 : COORDONNÉES & STANDARD */}
            <div className="border-2 border-slate-900 bg-white p-7 shadow-[8px_8px_0_#004b88]">
              <div className="border-b-2 border-slate-900 pb-3 mb-5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600 block">
                  Campus Central
                </span>
                <h3 className="font-head text-2xl font-bold uppercase text-slate-900">
                  Coordonnées Officielles
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 border-2 border-slate-900 bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block font-head uppercase text-xs tracking-wider">
                      Adresse du Campus
                    </span>
                    <span className="text-slate-600 text-sm">
                      11, Rue Mohamed Khemisti, Alger Centre, Algérie
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 border-2 border-slate-900 bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block font-head uppercase text-xs tracking-wider">
                      Standard Téléphonique
                    </span>
                    <a href="tel:+21320338181" className="text-brand-600 font-semibold hover:underline block">
                      020 33 81 81
                    </a>
                    <a href="tel:+213560939414" className="text-slate-600 hover:text-brand-600 text-xs block">
                      Ligne directe mobile : 0560 93 94 14
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 border-2 border-slate-900 bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block font-head uppercase text-xs tracking-wider">
                      Email Admissions
                    </span>
                    <a href="mailto:contact@imc-alger.com" className="text-brand-600 font-semibold hover:underline">
                      contact@imc-alger.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-9 h-9 border-2 border-slate-900 bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-brand-600" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block font-head uppercase text-xs tracking-wider">
                      Accueil & Réception
                    </span>
                    <span className="text-slate-600 text-sm block">
                      Dimanche au Jeudi : 08h30 — 16h30
                    </span>
                    <span className="text-slate-400 text-xs block">
                      Samedi : Permanence admissions sur rendez-vous
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-5 border-t border-slate-200">
                <a
                  href="https://maps.google.com/?q=IMC+Alger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full font-head text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-brand-600 py-2 group"
                >
                  <span>Ouvrir l&apos;itinéraire sur Google Maps</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* CARTE 2 : ACCRÉDITATION MESRS ÉPURÉE ET DIRECTE */}
            <div className="border-2 border-slate-900 bg-[#f0f7fc] p-6 shadow-[6px_6px_0_#0f172a]">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <h4 className="font-head text-base font-bold text-slate-900 uppercase tracking-wide">
                  Accréditation Officielle
                </h4>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-sans font-medium">
                Établissement privé d&apos;enseignement supérieur agréé par le Ministère de l&apos;Enseignement Supérieur et de la Recherche Scientifique (MESRS). Diplômes et certificats officiellement reconnus.
              </p>
            </div>

          </div>

        </div>

        {/* 4. ACCORDÉON FAQ (STYLE WEB ROCKET ACCORDION) */}
        <div className="mt-24 pt-16 border-t-2 border-slate-900">
          <div className="max-w-3xl mb-10">
            <h2 className="font-head text-3xl sm:text-4xl font-bold uppercase text-slate-900 tracking-tight">
              Tout ce que vous devez savoir avant de postuler
            </h2>
          </div>

          <div className="border-t-2 border-slate-900 divide-y-2 divide-slate-900">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between py-6 text-left group gap-4"
                  >
                    <span className="font-head text-lg sm:text-xl font-bold uppercase text-slate-900 group-hover:text-brand-600 transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 border-2 border-slate-900 flex items-center justify-center flex-shrink-0 font-mono font-bold text-base transition-transform ${
                        isOpen ? "bg-slate-900 text-white rotate-45" : "bg-white text-slate-900 group-hover:bg-slate-100"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-6 pr-8 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>

    </div>
  );
}
