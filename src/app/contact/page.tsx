import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contactez-nous | IMC Alger",
  description:
    "Coordonnées, formulaire de contact et plan d'accès de l'Institut de Management et de Communication d'Alger.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      {/* Fil d'Ariane */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium">Contactez-nous</span>
        </div>
      </div>

      {/* Contenu Principal */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="border-l-[3px] border-brand-600 pl-4 mb-4">
          <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
            Échange & Renseignements
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6">
          Contactez l'IMC Alger
        </h1>

        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-16">
          Notre équipe pédagogique et administrative se tient à votre entière disposition pour répondre
          à vos questions sur les admissions, les programmes et les partenariats.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Formulaire de Contact */}
          <div className="lg:col-span-7 border border-slate-200 p-8 sm:p-10 bg-white">
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">
              Envoyez-nous un message
            </h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    placeholder="Votre nom complet"
                    className="w-full border border-slate-300 px-4 py-3 text-sm focus:border-brand-600 focus:outline-none bg-slate-50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="exemple@domaine.com"
                    className="w-full border border-slate-300 px-4 py-3 text-sm focus:border-brand-600 focus:outline-none bg-slate-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telephone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    required
                    placeholder="05XX XX XX XX"
                    className="w-full border border-slate-300 px-4 py-3 text-sm focus:border-brand-600 focus:outline-none bg-slate-50"
                  />
                </div>
                <div>
                  <label htmlFor="sujet" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Objet de la demande *
                  </label>
                  <select
                    id="sujet"
                    name="sujet"
                    required
                    className="w-full border border-slate-300 px-4 py-3 text-sm focus:border-brand-600 focus:outline-none bg-slate-50"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="formation-etudiant">Inscription Formation - Profil Étudiant</option>
                    <option value="formation-cadre">Inscription Formation - Profil Cadre & Professionnel</option>
                    <option value="catalogue">Demande relative au Catalogue des 44 Formations</option>
                    <option value="intra-entreprise">Session Intra-Entreprise sur-mesure</option>
                    <option value="partenariat">Partenariat Entreprise / Institutionnel</option>
                    <option value="autre">Autre demande d'information</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Votre Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Précisez votre demande ou votre parcours..."
                  className="w-full border border-slate-300 px-4 py-3 text-sm focus:border-brand-600 focus:outline-none bg-slate-50"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-4 transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Coordonnées & Accès */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-slate-200 p-8 bg-slate-50">
              <div className="border-l-[3px] border-brand-600 pl-3 mb-6">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Coordonnées Officielles
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Adresse du Campus :</span>
                    <span>Alger, Algérie</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Téléphone :</span>
                    <span>020 33 81 81 / 0560 93 94 14</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Adresse Email :</span>
                    <span>contact@imc-alger.com</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Horaires de réception :</span>
                    <span>Du Dimanche au Jeudi : 08h30 - 16h30</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 bg-white">
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                Accréditation Officielle
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Institut agréé par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de la République Algérienne Démocratique et Populaire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
