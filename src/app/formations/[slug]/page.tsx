import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Clock, Award, CheckCircle2, ArrowRight, BookOpen, Users, PhoneCall } from "lucide-react";
import { FORMATIONS, getFormationBySlug } from "@/data/catalogue";

export async function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  FORMATIONS.forEach((f) => {
    slugs.push({ slug: f.slug });
    if (f.aliases) {
      f.aliases.forEach((alias) => slugs.push({ slug: alias }));
    }
  });
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getFormationBySlug(slug);

  if (!course) {
    return {
      title: "Formation | IMC Alger",
      description: "Formation professionnelle dispensée au Centre de Formation IMC Alger.",
    };
  }

  return {
    title: `${course.title} | Formation IMC Alger`,
    description: `${course.subtitle}. ${course.description}`,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getFormationBySlug(slug);

  if (!course) {
    notFound();
  }

  const jsonLdCourse = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.fullTitle,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "IMC Alger - Centre de Formation",
      sameAs: "https://imc-alger.com",
    },
    educationalCredentialAwarded: "Certificat de formation professionnelle IMC Alger",
    timeRequired: course.duration,
  };

  return (
    <div className="w-full bg-white">
      {/* Injection schema-dts Course */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCourse) }}
      />

      {/* En-tête exécutif du programme */}
      <section className="border-b-2 border-slate-900 py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white mb-3">
              DOMAINE : {course.domainName}
            </span>
            <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-600 text-white mb-3">
              PROGRAMME N° {String(course.id).padStart(2, "0")}
            </span>
          </div>

          <h1 className="font-head text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 max-w-4xl uppercase leading-[1.04]">
            {course.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-700 mb-6 max-w-3xl leading-relaxed">
            {course.subtitle}
          </p>

          <p className="font-sans text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed mb-8">
            {course.description}
          </p>

          {/* Métriques clés en cartes néo-brutalistes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl pt-4">
            <div className="border-2 border-slate-900 bg-white p-4 shadow-[4px_4px_0_#0f172a]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Public Cible
              </span>
              <span className="font-head text-lg font-bold uppercase text-slate-900 leading-tight block">
                {course.targetAudience}
              </span>
            </div>

            <div className="border-2 border-slate-900 bg-white p-4 shadow-[4px_4px_0_#004b88]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Rythme & Format
              </span>
              <span className="font-head text-lg font-bold uppercase text-brand-600 leading-tight block">
                {course.duration}
              </span>
            </div>

            <div className="border-2 border-slate-900 bg-white p-4 shadow-[4px_4px_0_#0f172a]">
              <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                Accréditation
              </span>
              <span className="font-head text-lg font-bold uppercase text-slate-900 leading-tight block">
                Certificat d'Excellence IMC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu et programme détaillé */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Objectifs & Modules (8 colonnes) */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 tracking-tight mb-6">
                Objectifs Opérationnels de la Formation
              </h2>
              <div className="border-2 border-slate-900 bg-white p-6 shadow-[5px_5px_0_#0f172a]">
                <ul className="space-y-4">
                  {course.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-800">
                      <span className="w-5 h-5 bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed font-medium">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-head text-2xl sm:text-3xl font-bold uppercase text-slate-900 tracking-tight mb-6">
                Structure des Modules Pédagogiques
              </h2>

              <div className="border-2 border-slate-900 shadow-[5px_5px_0_#004b88]">
                <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
                  <h3 className="font-head text-base font-bold uppercase tracking-wider">
                    Programme d'Enseignement
                  </h3>
                  <span className="text-xs font-mono font-bold text-slate-300">
                    {course.modules.length} Modules Certifiants
                  </span>
                </div>
                <div className="divide-y-2 divide-slate-200 bg-white">
                  {course.modules.map((m, idx) => (
                    <div
                      key={idx}
                      className="px-6 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-head text-lg font-bold text-brand-600 w-8 shrink-0">
                          M{String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-slate-900">{m}</span>
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-2 py-1 bg-brand-50 text-brand-700 border border-brand-200 shrink-0">
                        Inclus
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note pédagogique */}
            <div className="border-2 border-slate-900 p-6 sm:p-8 bg-[#f0f7fc] shadow-[6px_6px_0_#004b88]">
              <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-brand-600 text-white mb-3">
                Méthode Pratique
              </span>
              <h3 className="font-head text-xl sm:text-2xl font-bold uppercase text-slate-900 mb-2">
                Approche Pédagogique Orientée Marché
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                Chaque module alterne apports méthodologiques, études de cas réels d'entreprises algériennes et internationales, et simulations opérationnelles animées par des professionnels en activité.
              </p>
            </div>
          </div>

          {/* Formulaire de demande d'inscription / contact (4 colonnes) */}
          <div className="lg:col-span-4">
            <div className="border-2 border-slate-900 p-6 sm:p-8 bg-white shadow-[8px_8px_0_#004b88] sticky top-36">
              <span className="inline-block px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white mb-3">
                Candidature & Devis
              </span>
              <h3 className="font-head text-2xl font-bold uppercase text-slate-900 mb-2 leading-tight">
                S'inscrire à cette session
              </h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Remplissez vos coordonnées pour recevoir le syllabus complet et les dates de la prochaine rentrée.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block font-head text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Nom et Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    className="w-full bg-white border-2 border-slate-900 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <div>
                  <label className="block font-head text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Votre Profil *
                  </label>
                  <select
                    required
                    className="w-full bg-white border-2 border-slate-900 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  >
                    <option value="cadre">Cadre / Professionnel en activité</option>
                    <option value="etudiant">Étudiant / Diplômé universitaire</option>
                    <option value="entreprise">Entreprise (Convention groupe)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-head text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Email Professionnel / Personnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemple@domaine.com"
                    className="w-full bg-white border-2 border-slate-900 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <div>
                  <label className="block font-head text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XX XX XX"
                    className="w-full bg-white border-2 border-slate-900 px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-500 text-white font-head font-bold text-sm uppercase tracking-wider py-4 border-2 border-slate-900 shadow-[4px_4px_0_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0f172a] transition-all mt-2"
                >
                  Envoyer ma candidature &rarr;
                </button>
              </form>

              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <Link
                  href="/formations"
                  className="section-link group text-xs sm:text-sm"
                >
                  <span>&larr; Retour au catalogue</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
