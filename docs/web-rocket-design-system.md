# Extraction du Design CSS — Web Rocket (https://web-rocket.dz/)

Le fichier CSS complet et brut extrait du site est disponible dans :
📁 [`docs/web-rocket-extracted.css`](file:///e:/IMC%20WEBSITE%20V2/docs/web-rocket-extracted.css) *(5 412 lignes de CSS, 268 Ko)*.

---

## 1. Philosophie & Style Visuel : Le Néo-Brutalisme Web

Le design de **Web Rocket** repose sur le **Néo-Brutalisme digital** (inspiré de tendances type Gumroad, Figma, Brutalist Websites) caractérisé par :
- **Des contrastes tranchés** : Noir intense (`#111111`) et Blanc pur (`#ffffff`), rehaussés par une couleur d'accent vive.
- **Des bordures nettes et franches** : bordures de 2px unies (`border: 2px solid var(--black)`), angles vifs (`border-radius: 0px`).
- **Des ombres portées solides (« Hard Shadows »)** : aucune diffusion/flou, décalage géométrique pur (`box-shadow: 6px 6px 0 ...` ou `10px 10px 0 ...`).
- **Des interactions tactiles de survol** : les boutons et cartes subissent une translation physique (`transform: translate(-3px, -3px)`) combinée à l'apparition de l'ombre dure.

---

## 2. Variables CSS & Tokens Essentiels

```css
:root {
  /* Palette de couleurs */
  --black: #111111;
  --white: #ffffff;
  --off: #f6f5f1;          /* Fond cassé doux */
  --gray: #ececec;         /* Séparateurs et lignes */
  --gray-text: #555555;    /* Texte secondaire */
  --gray-text-light: #b5b5b5;
  --yellow: #ffc700;       /* Couleur d'accentuation Web Rocket */

  /* Rayons et dimensions */
  --radius-scene: 0px;
  --radius-card: 0px;
  --nav-h: 72px;

  /* Typographie */
  --font-head: "Barlow Condensed", "Arial Narrow", sans-serif;
  --font-body: "Inter", -apple-system, sans-serif;

  /* Ombres néo-brutalistes */
  --shadow-hard: 10px 10px 0 rgba(17, 17, 17, 0.92);
}
```

---

## 3. Typographie

Le système combine deux familles complémentaires de Google Fonts :
1. **Titres, CTA, Badges et Numéros** : `Barlow Condensed` (graisses 700 à 900)
   - Style : Majuscules percutantes (`text-transform: uppercase`), typographie condensée, lettrage resserré (`letter-spacing: 0.015em`).
   - Tailles imposantes : `font-size: clamp(3rem, 6.5vw, 6rem)` pour le Hero.
2. **Textes courants & Paragraphes** : `Inter` (graisses 400, 500, 600)
   - Lisibilité maximale, interlignage aéré (`line-height: 1.65`).

---

## 4. Composants Clés Extraits

### A. Boutons Néo-Brutalistes
```css
.btn {
  display: inline-block;
  font-family: var(--font-head);
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 14px 30px;
  text-decoration: none;
  border: 2px solid var(--black);
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease, color 0.15s ease;
}

/* Effet d'élévation physique au survol */
.btn:hover {
  transform: translate(-3px, -3px);
  box-shadow: 6px 6px 0 var(--white);
}
.btn:active {
  transform: translate(0, 0);
  box-shadow: none;
}

.btn-accent {
  background: var(--yellow);
  color: var(--black);
}

.btn-black {
  background: var(--black);
  color: var(--white);
}
```

### B. Cartes & Effets de Fenêtre (« Browser Frame »)
Des encarts qui reproduisent la barre d'adresse d'un navigateur avec 3 points :
```css
.browser-frame {
  display: block;
  border: 2px solid var(--black);
  box-shadow: 6px 6px 0 rgba(17, 17, 17, 0.14);
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.browser-bar {
  padding: 6px 10px;
  display: flex;
  gap: 5px;
  background: var(--off);
  border-bottom: 2px solid var(--black);
}

.browser-frame:hover {
  box-shadow: 6px 6px 0 var(--yellow);
  transform: translate(-2px, -2px);
}
```

### C. Méga Menu à Onglets / Rails Horizontaux
- Structure à grille : `grid-template-columns: repeat(3, 1fr) 300px;`
- **Barre signature colorée** : bande d'accentuation de 5px collée sous le menu déroulant (`.mega::after`).
- **Pastilles défilantes (`.mega-real-rail`)** : boutons filtres horizontaux avec badge compteur carré (`.mrt-count`).
- **Effet de soulignement dynamique** : trait d'accentuation qui grandit de gauche à droite au hover (`background: linear-gradient(...) left bottom / 0 3px no-repeat`).

### D. Titre avec Curseur Clignotant « Terminal »
```css
.cur {
  animation: blink 1.1s steps(1) infinite;
}
@keyframes blink {
  0%, 50% { opacity: 1; }
  50.01%, 100% { opacity: 0; }
}
```

### E. Animations au Défilement (« Reveal Scroll »)
```css
.rv {
  opacity: 0;
  transform: translateY(34px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.rv.vis {
  opacity: 1;
  transform: none;
}
```

---

## 5. Comment l'adapter au site IMC en respectant notre Identité de Marque

> [!IMPORTANT]
> **Règle absolue d'identité de marque IMC** : Ne jamais recopier le jaune (`#ffc700`) de Web Rocket ! Pour l'IMC, on transpose les mécaniques CSS en appliquant exclusivement la **charte graphique IMC (Bleu `#004b88` / `#00629b`)**.

| Élément Web Rocket | Remplacement pour IMC |
|---|---|
| `--yellow: #ffc700;` | `--brand-primary: #004b88;` / `--brand-secondary: #00629b;` |
| Style de titre `Barlow Condensed` | Combinaison avec la typo actuelle IMC ou titres uppercase percutants |
| Hard Shadows : `6px 6px 0 #ffc700` | Hard Shadows : `5px 5px 0 #004b88` ou `5px 5px 0 #0f172a` |
| Hover `.btn:hover` | Étonnant et moderne : bouton bleu avec ombre portée décalée |
| Barre de méga-menu de 5px | Barre signature en **Bleu IMC** sous la navbar |
