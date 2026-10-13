import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('pictures');
const outputDir = path.resolve('public/pictures');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Categorization and descriptive metadata for the photos
const metadataMap = {
  '14.jpeg': {
    title: "Espace Vie Étudiante & Détente Incubateur",
    category: "incubateur",
    recommendedPage: "/incubateur",
    tags: ["incubateur", "coworking", "détente", "vie étudiante"]
  },
  '77.jpeg': {
    title: "Salle Informatique & Challenge Innov'HEC 2024",
    category: "incubateur",
    recommendedPage: "/incubateur",
    tags: ["informatique", "startups", "cevital", "bank abc", "challenge"]
  },
  '8568.jpeg': {
    title: "Espace Coworking Moderne & Hub Innovation",
    category: "incubateur",
    recommendedPage: "/incubateur",
    tags: ["coworking", "bureaux", "modernité", "incubateur"]
  },
  '888.jpeg': {
    title: "Salle de Conseil & Boardroom Exécutive",
    category: "gouvernance",
    recommendedPage: "/le-conseil-dorientation",
    tags: ["boardroom", "conseil", "gouvernance", "direction"]
  },
  'IMG_20251204_135558_135.jpg': {
    title: "Portail d'Entrée & Plaque Officielle du Campus",
    category: "campus",
    recommendedPage: "/contact",
    tags: ["campus", "entrée", "plaque", "accès"]
  },
  'IMG_6724.JPG': {
    title: "Conférence & Séminaire Samsung Smart School",
    category: "recherche",
    recommendedPage: "/actualites",
    tags: ["amphithéâtre", "séminaire", "conférence", "formation"]
  },
  'IMG_6821.JPG': {
    title: "Cérémonie de Remise d'Attestations - Journée d'Étude",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["laboratoire", "attestations", "gestion des déchets", "recherche"]
  },
  'IMG_6984.JPG': {
    title: "Grand Auditorium - Table Ronde & Panélistes Officiels",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["auditorium", "amphithéâtre", "table ronde", "prestige", "conférence"]
  },
  'IMG_7039.JPG': {
    title: "Intervenante au Pupitre Officiel HEC Alger",
    category: "recherche",
    recommendedPage: "/recherche/revue",
    tags: ["pupitre", "allocution", "recherche", "académique"]
  },
  'IMG_7066.JPG': {
    title: "Soutenance Colloque CNEM 2025 - Entrepreneuriat Féminin",
    category: "recherche",
    recommendedPage: "/recherche/revue",
    tags: ["soutenance", "cnem 2025", "jury", "doctorat"]
  },
  'IMG_7067.JPG': {
    title: "Salle de Soutenance Académique - Présentation des Travaux",
    category: "recherche",
    recommendedPage: "/recherche/revue",
    tags: ["soutenance", "commission", "recherche", "présentation"]
  },
  'IMG_7068.JPG': {
    title: "Présidence de Séance & Modératrices CNEM 2025",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["modération", "colloque", "enseignants", "jury"]
  },
  'IMG_7069.JPG': {
    title: "Session Scientifique CNEM 2025 - Écran Interactif",
    category: "recherche",
    recommendedPage: "/recherche/revue",
    tags: ["recherche", "colloque", "jury", "slide"]
  },
  'IMG_7071.JPG': {
    title: "Débat Académique & Soutenance de Thèse",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["débat", "recherche", "jury", "échange"]
  },
  'IMG_7072.JPG': {
    title: "Session Dirigeants & Cadres - Innover et Entreprendre",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["executive", "cadres", "management", "formation continue"]
  },
  'IMG_7081.JPG': {
    title: "Présentation Académique - Entrepreneuriat Durable",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["durabilité", "entrepreneuriat", "recherche", "soutenance"]
  },
  'IMG_7089.JPG': {
    title: "Comité d'Évaluation & Enseignants-Chercheurs",
    category: "gouvernance",
    recommendedPage: "/le-conseil-scientifique",
    tags: ["conseil scientifique", "jury", "professeurs", "évaluation"]
  },
  'IMG_7090.JPG': {
    title: "Clôture de Session Académique & Échanges",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["conclusion", "recherche", "séminaire"]
  },
  'IMG_7091.JPG': {
    title: "Questions-Réponses & Discussion Interactive",
    category: "recherche",
    recommendedPage: "/recherche",
    tags: ["questions", "débat", "académique", "auditoire"]
  },
  'IMG_7103.JPG': {
    title: "Cours Exécutif - Stratégie & Marketing par Enseignant",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["pédagogie", "cours", "stratégie", "enseignant", "dynamique"]
  },
  'IMG_7105.JPG': {
    title: "Salle de Séminaire - Professionnels et Cadres Attentifs",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["séminaire", "cadres", "formation continue", "salle"]
  },
  'IMG_7116.JPG': {
    title: "Module Décisionnel - Management Face à l'Incertitude",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["décision", "management", "cours", "executive"]
  },
  'IMG_7117.JPG': {
    title: "Réunion Hybride & Visioconférence sur Écran Tactile",
    category: "gouvernance",
    recommendedPage: "/le-conseil-scientifique",
    tags: ["visioconférence", "hybride", "google meet", "comité"]
  },
  'IMG_7120.JPG': {
    title: "Comité de Recherche Hybride avec Présidente et Experts",
    category: "gouvernance",
    recommendedPage: "/le-conseil-scientifique",
    tags: ["conseil", "hybride", "recherche", "comité"]
  },
  'IMG_7238.JPG': {
    title: "Boardroom Exécutive en U - Vue Globale",
    category: "gouvernance",
    recommendedPage: "/le-conseil-dorientation",
    tags: ["boardroom", "réunion", "gouvernance", "cuir"]
  },
  'IMG_7239.JPG': {
    title: "Salle de Conférence & Délibération",
    category: "gouvernance",
    recommendedPage: "/le-conseil-dorientation",
    tags: ["salle", "délibération", "conseil"]
  },
  'IMG_7242.JPG': {
    title: "Salle de Réunion Moderne Blanche & Écran Interactif",
    category: "gouvernance",
    recommendedPage: "/le-conseil-scientifique",
    tags: ["salle moderne", "tables blanches", "écran tactile", "infrastructures"]
  },
  'IMG_7243.JPG': {
    title: "Espace Institutionnel HEC Alger & Symboles Officiels",
    category: "gouvernance",
    recommendedPage: "/le-mot-du-directeur",
    tags: ["institutionnel", "drapeau", "roll-up", "prestige"]
  },
  'IMG_7244.JPG': {
    title: "Infrastructure de Réunion Haute Équipée",
    category: "campus",
    recommendedPage: "/a-propos",
    tags: ["infrastructure", "équipement", "salle", "climatisation"]
  },
  'IMG_7565.JPG': {
    title: "Enseignant-Chercheur & Partenaires Entreprises (BNP, CASH)",
    category: "partenaires",
    recommendedPage: "/nos-partenaires-internationaux",
    tags: ["professeur", "partenaires", "entreprises", "bnp paribas", "cash assurances"]
  },
  'IMG_7567.JPG': {
    title: "Intervention Académique & Conférence Magistrale",
    category: "recherche",
    recommendedPage: "/a-propos",
    tags: ["conférence", "enseignant", "estrade", "drapeau"]
  },
  'IMG_8189.JPG': {
    title: "Atelier Finance & Gestion - Prise de Notes des Cadres",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["finance", "gestion", "formation continue", "cadres"]
  },
  'IMG_8190.JPG': {
    title: "Formation Active - Formatrice au Tableau & Cadres en Salle",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["formation continue", "formatrice", "pédagogie active", "comptabilité"]
  },
  'IMG_8994.JPG': {
    title: "Façade Principale du Campus - Verrière & Architecture",
    category: "campus",
    recommendedPage: "/",
    tags: ["façade", "campus", "architecture", "bâtiment", "hero"]
  },
  'IMG_8997.JPG': {
    title: "Bâtiment d'Administration & Cour d'Honneur",
    category: "campus",
    recommendedPage: "/contact",
    tags: ["campus", "administration", "entrée", "contact"]
  },
  'IMG_9025.JPG': {
    title: "Vie de Campus Panoramique - Cour, Palmiers & Étudiants",
    category: "campus",
    recommendedPage: "/a-propos",
    tags: ["campus", "cour", "palmiers", "étudiants", "panoramique"]
  },
  '2.jpeg': {
    title: "Atelier Pédagogique - Communication Non-Violente & Assertivité",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["communication non-violente", "assertivité", "soft skills", "formation continue", "interactif"]
  },
  '3.jpeg': {
    title: "Travaux Pratiques en Sous-Groupe - Études de Cas & Exercices",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["cas pratiques", "travaux dirigés", "atelier", "dossiers", "imc alger"]
  },
  '4.jpeg': {
    title: "Concertation & Travail d'Équipe entre Professionnels",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["travail en groupe", "collaboration", "professionnels", "résolution de problèmes"]
  },
  '5.jpeg': {
    title: "Pause-Café & Échanges Conviviaux entre Participants",
    category: "formation-continue",
    recommendedPage: "/a-propos",
    tags: ["pause café", "convivialité", "networking", "vie étudiante", "partage"]
  },
  '6.jpeg': {
    title: "Networking & Esprit de Promotion en Formation Continue",
    category: "formation-continue",
    recommendedPage: "/alumni",
    tags: ["networking", "promotion", "alumni", "esprit d'équipe", "relation humaine"]
  },
  '7.jpeg': {
    title: "Expert-Formateur au Pupitre Officiel HEC Alger",
    category: "formation-continue",
    recommendedPage: "/a-propos",
    tags: ["formateur", "expert", "hec alger", "corps professoral", "drapeau"]
  },
  '8.jpeg': {
    title: "Vue Globale d'un Atelier Immersif & Kakemono IMC",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["atelier", "salle de formation", "kakemono imc", "innovation management center"]
  },
  '9.jpeg': {
    title: "Analyse Méthodologique & Étude Documentaire",
    category: "recherche",
    recommendedPage: "/recherche/ateliers",
    tags: ["méthodologie", "analyse documentaire", "recherche", "ateliers pratiques"]
  },
  '10.jpeg': {
    title: "Débat Technique & Confrontation des Résultats d'Exercices",
    category: "recherche",
    recommendedPage: "/recherche/ateliers",
    tags: ["débat", "analyse", "atelier de recherche", "travail collaboratif"]
  },
  '11.jpeg': {
    title: "Session Plénière Interactive - Salle de Séminaire en U",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["plénière", "salle en u", "séminaire", "formation continue", "interactivité"]
  },
  '12.jpeg': {
    title: "Démonstration Technologique - Modélisation des Flux sur FlexSim 3D",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["flexsim", "simulation 3d", "flux", "logistique", "technologie", "logiciel"]
  },
  '13.jpeg': {
    title: "Coaching Personnalisé & Accompagnement Individuel",
    category: "formation-continue",
    recommendedPage: "/politique-qualite",
    tags: ["coaching", "accompagnement personnalisé", "qualité", "pédagogie de proximité"]
  },
  '144.jpeg': {
    title: "Assistance Pédagogique Directe sur Cas Pratique",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["encadrement", "support technique", "pédagogie", "atelier"]
  },
  '15.jpeg': {
    title: "Intervention Dynamique & Transmission du Savoir-Faire",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["transmission", "dynamique", "formation continue", "savoir-faire"]
  },
  '16.jpeg': {
    title: "Travaux Pratiques sur Écran Tactile - Simulation FlexSim",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["flexsim", "tp ordinateur", "processus", "simulation", "industrie"]
  },
  '17.jpeg': {
    title: "Module Spécialisé - Logistique Hospitalière & Qualité de Service",
    category: "formation-continue",
    recommendedPage: "/actualites",
    tags: ["logistique hospitalière", "santé", "qualité de service", "supply chain", "hec alger"]
  },
  '18.jpeg': {
    title: "Espace Séminaire & Équipements Pédagogiques Prêts à l'Accueil",
    category: "campus",
    recommendedPage: "/a-propos",
    tags: ["salle moderne", "équipement", "infrastructures", "campus", "accueil"]
  },
  '19.jpeg': {
    title: "Perspective Lumineuse de la Salle de Conférence en U",
    category: "campus",
    recommendedPage: "/contact",
    tags: ["salle de conférence", "luminosité", "campus", "confort d'apprentissage"]
  },
  '20.jpeg': {
    title: "Session de Haut Niveau & Tables Blanches en U avec Drapeau Officiel",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["executive", "cadres", "drapeau algérie", "tables blanches", "prestige"]
  },
  '21.jpeg': {
    title: "Auditoire Attentif - Session de Perfectionnement Professionnel",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["concentration", "cadres", "management", "formation professionnelle"]
  },
  '22.jpeg': {
    title: "Prise de Notes & Participation Active des Cadres Stagiaires",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["prise de notes", "participation", "formation active", "pédagogie"]
  },
  '23.jpeg': {
    title: "Animation Multilingue & Pédagogie Interactive au Tableau Tactile",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["tableau interactif", "multilingue", "accueil", "formatrice", "innovation"]
  },
  '24.jpeg': {
    title: "Atelier Perception & Communication - Le Paradigme des Perspectives",
    category: "recherche",
    recommendedPage: "/recherche/ateliers",
    tags: ["perception", "communication", "paradigme", "atelier managérial", "psychologie du travail"]
  },
  '25.jpeg': {
    title: "Salle de Séminaire avec Roll-Up Innovation Management Center",
    category: "campus",
    recommendedPage: "/a-propos",
    tags: ["imc alger", "marque", "campus", "environnement de travail"]
  },
  '26.jpeg': {
    title: "Module Pratique - Accueil, Orientation & Relation Usagers",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["accueil", "orientation", "relation usager", "service public", "formation"]
  },
  '27.jpeg': {
    title: "Brainstorming Collaboratif & Travaux en Atelier Pratique",
    category: "formation-continue",
    recommendedPage: "/formations",
    tags: ["brainstorming", "collaboration", "atelier pratique", "intelligence collective"]
  },
  '28.jpeg': {
    title: "Phase de Restitution Individuelle & Rédaction des Synthèses",
    category: "formation-continue",
    recommendedPage: "/formation-continue",
    tags: ["restitution", "synthèse", "livret pédagogique", "évaluation"]
  },
  '29.jpeg': {
    title: "Formation Dirigeants & Cadres Supérieurs en Gestion des Marchés",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["executive education", "cadres supérieurs", "marchés publics", "dirigeants"]
  },
  '30.jpeg': {
    title: "Séminaire Spécialisé - Passation des Marchés & Cahier des Charges",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["cahier des charges", "دفتر الشروط", "marchés publics", "réglementation", "contrats"]
  },
  '31.jpeg': {
    title: "Cadre Réglementaire & Sécurisation Juridique des Opérations",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["droit des contrats", "sécurisation juridique", "cadres", "expertise"]
  },
  '32.jpeg': {
    title: "Débat Interactif entre Cadres et Expert-Formateur en Droit des Marchés",
    category: "formation-continue",
    recommendedPage: "/imc-executive",
    tags: ["débat", "cadres d'entreprise", "formation professionnelle", "consulting"]
  },
  '1111.jpeg': {
    title: "Immersion sur Cas Réels - Analyse Approfondie en Équipe Pluridisciplinaire",
    category: "recherche",
    recommendedPage: "/recherche/ateliers",
    tags: ["cas réels", "analyse poussée", "atelier", "immersion", "signature"]
  }
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

async function processImages() {
  const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  console.log(`Found ${files.length} images to optimize in ${inputDir}...`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  const manifest = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(inputDir, file);
    const baseName = path.parse(file).name;
    const outputFilename = `${baseName}.webp`;
    const outputPath = path.join(outputDir, outputFilename);

    const originalStats = fs.statSync(inputPath);
    totalOriginal += originalStats.size;

    try {
      // Rotate based on EXIF, resize max 1920 inside bounding box, convert to WebP
      const image = sharp(inputPath);
      const meta = await image.metadata();

      await image
        .rotate()
        .resize({
          width: 1920,
          height: 1920,
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({
          quality: 82,
          effort: 4
        })
        .toFile(outputPath);

      const optimizedStats = fs.statSync(outputPath);
      totalOptimized += optimizedStats.size;
      const optMeta = await sharp(outputPath).metadata();

      const savedPercent = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
      console.log(`[${i + 1}/${files.length}] ${file} -> ${outputFilename} | ${formatBytes(originalStats.size)} -> ${formatBytes(optimizedStats.size)} (-${savedPercent}%) [${optMeta.width}x${optMeta.height}]`);

      const extraMeta = metadataMap[file] || {
        title: baseName,
        category: "general",
        recommendedPage: "/",
        tags: []
      };

      manifest.push({
        id: baseName,
        originalFile: file,
        optimizedFile: outputFilename,
        src: `/pictures/${outputFilename}`,
        width: optMeta.width,
        height: optMeta.height,
        aspectRatio: (optMeta.width / optMeta.height).toFixed(2),
        originalSize: formatBytes(originalStats.size),
        optimizedSize: formatBytes(optimizedStats.size),
        originalSizeBytes: originalStats.size,
        optimizedSizeBytes: optimizedStats.size,
        savingsPercent: savedPercent + '%',
        ...extraMeta
      });
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  // Save manifest.json
  const manifestPath = path.join(outputDir, 'manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

  console.log('\n========================================');
  console.log(`Optimization Completed!`);
  console.log(`Total Original Size:  ${formatBytes(totalOriginal)}`);
  console.log(`Total Optimized Size: ${formatBytes(totalOptimized)}`);
  console.log(`Global Size Savings:  - ${((1 - totalOptimized / totalOriginal) * 100).toFixed(1)}%`);
  console.log(`Manifest saved to:   ${manifestPath}`);
  console.log('========================================\n');
}

processImages().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
