# Systeme de Design et Directives Visuelles

## 1. Principes Directeurs (Swiss Design et Approche Anti-AI)

Le design vise un niveau institutionnel d'excellence, inspiré du style international suisse, rejetant les clichés visuels des interfaces générées par IA (cartes standardisées aux ombres floues, gradients saturés sans intention, compositions centrées génériques).

Fondements stylistiques :
- Asymétrie maîtrisée : rupture des alignements monolithiques au profit de compositions éditoriales dynamiques (ratios 5/7, 4/8, décalages verticaux mesurés).
- Grille rigoureuse : structure sous-jacente en 12 colonnes avec repères visuels nets et filets techniques fins.
- Espace négatif actif : utilisation stratégique du vide pour valoriser les contenus textuels et la structure pédagogique.
- Typographie expressive : la typographie constitue l'élément graphique principal, sans artifice d'illustration superflu.

## 2. Typographie

### 2.1. Titrage et Hero
- Famille : Bricolage Grotesk
- Usages : Titres de niveau 1 a 3, chiffres d'impact, accroches de sections.
- Graisses : SemiBold (600), Bold (700), ExtraBold (800).
- Caractéristiques : Interlettrage resserré (tracking -0.02em a -0.04em), contrastes d'échelle marqués.

### 2.2. Corps de Texte et Donnees
- Famille : Inter
- Usages : Paragraphes, navigation, tableaux de syllabus, métadonnées, formulaires.
- Graisses : Regular (400), Medium (500), SemiBold (600).
- Caractéristiques : Hauteur de ligne généreuse (1.6 a 1.7) pour le confort de lecture, chiffres tabulaires activés sur les données numériques et durées de formation.

## 3. Tokens de Couleur (Receptacle pour la Charte Graphique)

Ce schéma de variables CSS sera alimenté par la charte graphique définitive.

```css
:root {
  /* Nuances de base */
  --color-surface-primary: #ffffff;
  --color-surface-secondary: #f8fafc;
  --color-surface-elevated: #f1f5f9;
  
  /* Textes et contrastes */
  --color-text-primary: #0f172a;
  --color-text-secondary: #475569;
  --color-text-muted: #94a3b8;
  
  /* Palette de marque (valeurs par defaut a calibrer selon la charte) */
  --color-brand-primary: #004b88;
  --color-brand-secondary: #00629b;
  --color-brand-accent: #5a86b6;
  
  /* Lignes et separations techniques */
  --color-border-subtle: #e2e8f0;
  --color-border-strong: #cbd5e1;
  
  /* Retours d'etat formulaires */
  --color-status-success: #059669;
  --color-status-error: #dc2626;
  --color-status-warning: #d97706;
}
```

## 4. Composants et Grille d'Interface

### 4.1. Structure de Grille
- Conteneur standard : `max-w-7xl` avec marges adaptatives (`px-4 sm:px-6 lg:px-8`).
- Colonnes : Grille CSS 12 colonnes.
- Filets de délimitation : Bordures nettes de 1px (`border-slate-200`) pour marquer les sections et les cellules de contenu, inspirées des publications imprimées suisses.

### 4.2. Programmes de Formation
- Format tabulaire strict : Tableaux HTML à bordures fines, typographie alignée à gauche pour les intitulés, à droite pour les volumes horaires et tarifs.
- Pas de blocs d'accordéon opaques : lecture séquentielle et indexable sans masquage d'information.

### 4.3. Formulaires de Capture de Leads
- Champs textuels ancrés sur ligne de base, bordures nettes, états focus marqués par un anneau sans dégradé flou.
- Hiérarchie d'action explicite : bouton primaire à fort contraste, sans surcharge d'effets visuels.

## 5. Mouvements et Interactions

- Défilement continu : Intégration de Lenis pour un scroll organique unifié sans à-coups.
- Micro-interactions : Gérées via Framer Motion avec des courbes d'atténuation physiques (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Animations d'apparition : Révélations progressives avec translation verticale subtile (12px à 16px maximum), temps d'exécution courts (300ms à 450ms).
- Aucune animation rebondissante ou ornementale non fonctionnelle.
