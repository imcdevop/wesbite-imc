# Architecture Technique et Strategie d'Ingenierie

## 1. Stack Technique et Standards de Qualite

- Framework Principal : Next.js 15 (App Router), React 19, TypeScript 5.x (Strict Mode actif sans compromis).
- Moteur CMS : Payload CMS v3 (headless, embarque nativement dans l'arborescence Next.js via l'App Router).
- Style et Design System : Tailwind CSS, Framer Motion (micro-interactions ciblees), Lenis (defilement physique continu).
- Validation et Typage : Zod (schemas de validation formulaires et payloads), schema-dts (validation statique JSON-LD).
- Base de Donnees : PostgreSQL ou SQLite via adaptateur Payload Drizzle / Prisma selon l'environnement cible.

References architecturales appliquees :
- Pattern `blazity/next-enterprise` pour l'organisation des modules, la configuration TypeScript stricte et la politique de securite.
- Pattern `payloadcms/next-payload` pour l'isolation des routes CMS et la cohabitation App Router frontend / admin.
- Pattern `darkroomengineering/satus` pour l'integration de Lenis et la gestion des micro-transitions.

## 2. Arborescence du Projet

```
.
|-- .cursor/
|   `-- rules/
|       `-- core-directives.mdc
|-- docs/
|   |-- architecture.md
|   `-- design-system.md
|-- src/
|   |-- app/
|   |   |-- (frontend)/
|   |   |   |-- layout.tsx
|   |   |   |-- page.tsx
|   |   |   |-- a-propos/
|   |   |   |-- formations/
|   |   |   |   |-- page.tsx
|   |   |   |   `-- [slug]/
|   |   |   |       `-- page.tsx
|   |   |   |-- actualites/
|   |   |   |   |-- page.tsx
|   |   |   |   `-- [slug]/
|   |   |   |       `-- page.tsx
|   |   |   `-- contact/
|   |   |-- (payload)/
|   |   |   |-- admin/
|   |   |   |   `-- [[...segments]]/
|   |   |   `-- api/
|   |   |       `-- [[...segments]]/
|   |   `-- robots.ts
|   |   `-- sitemap.ts
|   |-- collections/
|   |   |-- Courses.ts
|   |   |-- Categories.ts
|   |   |-- Registrations.ts
|   |   |-- Posts.ts
|   |   |-- Media.ts
|   |   `-- Users.ts
|   |-- components/
|   |   |-- core/
|   |   |-- layout/
|   |   |-- modules/
|   |   `-- seo/
|   |-- lib/
|   |   |-- payload.ts
|   |   |-- schema-ld.ts
|   |   `-- validators/
|   |-- payload.config.ts
|   `-- styles/
|       `-- globals.css
|-- tailwind.config.ts
|-- tsconfig.json
`-- package.json
```

## 3. Flux de Donnees pour la Capture de Leads

Le site n'embarque pas d'authentification pour les apprenants. La conversion repose sur la collecte directe d'inscriptions qualifiees reliees a chaque formation.

### Schema du flux d'inscription

1. Client (Navigateur) :
   - L'utilisateur remplit le formulaire de candidature ou de contact contextuel lie a une formation specifique (`courseId` ou `courseSlug`).
   - Validation cote client immediate via React Hook Form et schema Zod pour le retour utilisateur.

2. Envoi et Securisation :
   - Soumission via Server Action Next.js (`submitRegistrationAction`) ou route API dediee (`/api/registrations`).
   - Verification d'un champ honeypot pour eliminer les spams automatises.
   - Rate limiting applique par IP pour bloquer les attaques par saturation.
   - Validation stricte cote serveur avec le schema Zod identique.

3. Persistance dans Payload CMS v3 :
   - Appel direct a l'instance locale de Payload (`getPayload({ config })`).
   - Insertion dans la collection `Registrations` avec statut initial `nouveau` :
     - Identite (nom, prenom, email, telephone).
     - Formation ciblee (relation One-to-One avec `Courses`).
     - Metadonnees (date, UTM source, statut de traitement, notes internes).
   - Accus de reception securise renvoye au client sans exposer d'informations systeme.

4. Declencheurs de notification :
   - Hook Payload `afterChange` sur la collection `Registrations`.
   - Dispatch d'un email de confirmation a l'apprenant (service transactionnel type Resend).
   - Notification immediate a l'equipe d'admission du centre.
   - Extension prete pour synchronisation CRM tiers (HubSpot, Salesforce, webhook webhook generique).

## 4. Strategie Semantique pour le GEO (Generative Engine Optimization)

L'indexation par les moteurs d'intelligence artificielle (Perplexity, SearchGPT, Claude, Google AI Overviews) necessite une clarte structurelle et lexicale superieure a celle des moteurs traditionnels.

### 4.1. Structure HTML Semantique
- Exclusivite des balises standardisees : `<main>`, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`, `<nav>`.
- Aucun empilement aveugle de `<div>`. Chaque bloc d'information possede une intention de document explicite.
- Titrage hierarchique strict : un seul `<h1>` contextuel par page, suivi de sous-sections `<h2>` et `<h3>` sans saut de niveau.
- Programmes et syllabus de formation structures dans des tableaux natifs (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`). Cette syntaxe permet aux robots d'extraire fidelement les modules, objectifs et volumes horaires sans distorsion textuelle.

### 4.2. Donnees Structurees JSON-LD via schema-dts
L'ensemble des objets schematises est type a l'aide du paquet `schema-dts` pour garantir la conformite formelle avec schema.org sans ecart de typage.

- Page d'accueil :
  - Type : `EducationalOrganization`
  - Proprietes requises : `name`, `url`, `logo`, `description`, `address`, `contactPoint`, `hasOfferCatalog`, `sameAs`.
  - Inclusion des certifications professionnelles et accreditations du centre.

- Pages de formations (`/formations/[slug]`) :
  - Type : `Course`
  - Proprietes requises :
    - `name` : intitule exact de la certification.
    - `description` : resume pedagogique complet.
    - `courseCode` : code de reference de la formation.
    - `provider` : reference vers `EducationalOrganization`.
    - `educationalCredentialAwarded` : diplome ou certification visee.
    - `hasCourseInstance` : modalites (presentiel, distanciel, calendrier, lieu).
    - `offers` : modalites financieres et financements possibles (CPF, OPCO, etc.).
    - `syllabusSections` : decomposition des modules d'apprentissage.

- Pages d'actualites (`/actualites/[slug]`) :
  - Type : `NewsArticle` ou `BlogPosting`
  - Proprietes requises : `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `mainEntityOfPage`.
