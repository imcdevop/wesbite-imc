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

      {/* Fil d'ariane */}
      <div className="border-b border-slate-200 bg-slate-50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Accueil
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/formations" className="hover:text-slate-900 transition-colors">
            Catalogue Formations
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-medium truncate max-w-xs sm:max-w-md">
            {course.title}
          </span>
        </div>
      </div>

      {/* En-tête du programme */}
      <section className="border-b border-slate-200 py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider bg-brand-50 text-brand-700 border border-brand-200">
              Domaine : {course.domainName}
            </span>
            <span className="text-xs font-mono text-slate-500">
              Programme N° {String(course.id).padStart(2, "0")} / Catalogue p.{course.pageNumber}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-3 max-w-4xl leading-tight">
            {course.title}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-slate-700 mb-6 max-w-3xl">
            {course.subtitle}
          </p>

          <p className="font-sans text-base text-slate-600 max-w-3xl leading-relaxed mb-8">
            {course.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl border-t border-slate-200 pt-6">
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <Users className="w-4 h-4 text-brand-600 shrink-0" />
              <span>
                <strong>Public :</strong> {course.targetAudience}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <Clock className="w-4 h-4 text-brand-600 shrink-0" />
              <span>
                <strong>Format :</strong> {course.duration}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <Award className="w-4 h-4 text-brand-600 shrink-0" />
              <span>
                <strong>Validation :</strong> Certificat IMC
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
              <div className="border-b border-slate-200 pb-3 mb-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Objectifs de la Formation
                </h2>
              </div>
              <ul className="space-y-3.5">
                {course.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="border-b border-slate-200 pb-3 mb-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Modules & Programme Pédagogique
                </h2>
              </div>

              <div className="border border-slate-200">
                <div className="bg-slate-100 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-800">
                    Structure des enseignements
                  </h3>
                  <span className="text-xs text-slate-500">
                    {course.modules.length} modules
                  </span>
                </div>
                <div className="divide-y divide-slate-200">
                  {course.modules.map((m, idx) => (
                    <div
                      key={idx}
                      className="px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-slate-400 w-6">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-slate-800">{m}</span>
                      </div>
                      <span className="text-xs font-semibold text-brand-600 shrink-0">
                        Inclus
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Note pédagogique */}
            <div className="border border-slate-200 p-6 bg-slate-50">
              <h3 className="text-sm font-bold text-slate-900 mb-2">
                Approche Pédagogique Axée sur la Pratique
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chaque session intègre des études de cas réels, des ateliers interactifs et des mises en
                situation concrètes issues du marché économique algérien. La formation est animée par des
                experts praticiens et consultants chevronnés.
              </p>
            </div>
          </div>

          {/* Formulaire de demande d'inscription / contact (4 colonnes) */}
          <div className="lg:col-span-4">
            <div className="border border-slate-200 p-6 bg-slate-50 sticky top-28">
              <div className="border-l-[3px] border-brand-600 pl-3 mb-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  S'inscrire à cette Formation
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Remplissez vos coordonnées pour recevoir le plan de cours détaillé et les prochaines dates de sessions.
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Nom et Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Votre nom complet"
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Profil *
                  </label>
                  <select
                    required
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  >
                    <option value="etudiant">Étudiant</option>
                    <option value="cadre">Cadre / Professionnel en activité</option>
                    <option value="entreprise">Entreprise (Inscription groupe)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Email Professionnel / Personnel *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemple@domaine.com"
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Numéro de Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="05XX XX XX XX"
                    className="w-full bg-white border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-brand-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 transition-colors"
                >
                  Envoyer la demande
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <Link
                  href="/formations"
                  className="text-xs text-brand-600 hover:text-brand-700 font-bold uppercase tracking-wider flex items-center gap-1.5"
                >
                  &larr; Retour aux 44 formations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
