# IMC Alger — Logo Motion Specification (Pixel2Motion v2)

## 1. Brand Identity & Motion Personality

- **Brand**: Institut de Management et de Communication (IMC Alger)
- **Sector**: Enseignement Supérieur Privé Agréé par l'État (Business, Management, Tech, Finance)
- **Core Values**: Rigueur académique, Charisme, Élite, Confiance institutionnelle, Innovation.
- **3 Motion Personality Words**:
  1. **Architectural** (sharp orthogonal grid, structured vertical pillars, foundation strength)
  2. **Prestigious** (slow in/slow out, zero cheap bounce, majestic light sheen)
  3. **Confident** (decisive vertical emergence, harmonic golden-ratio staggering)

---

## 2. Geometry Breakdown (7 Actors)

Derived strictly from [assets/IMC logo word mark.svg](file:///e:/IMC%20WEBSITE%20V2/assets/IMC%20logo%20word%20mark.svg) (`viewBox="0 0 1632 1216"`):

| Actor ID | Role | Dimensions (px) | Motion Pattern |
|---|---|---|---|
| `#i-dot` | Point sur le "I" | 202.63 × 202.63 | Descente zénithale avec micro-stabilisation élastique (`translateY(-80px) → 0`) |
| `#i-stem` | Fût du "I" | 202.91 × 913.92 | Éclosion verticale descendante (`scaleY(0) → 1`, origin: top) |
| `#m-left` | Pilier gauche du "M" | 202.63 × 1215.75 | Érection architecturale ascendante (`scaleY(0) → 1`, origin: bottom) |
| `#m-mid` | Colonne centrale du "M" | 202.63 × 593.69 | Descente zénithale suspendue (`scaleY(0) → 1`, origin: top) |
| `#m-right` | Pilier droit du "M" / Dos du "C" | 202.62 × 1215.75 | Érection architecturale ascendante (`scaleY(0) → 1`, origin: bottom) |
| `#c-top` | Branche supérieure du "C" | 405.25 × 202.63 | Projection horizontale vers la droite (`scaleX(0) → 1`, origin: left) |
| `#c-bottom` | Branche inférieure du "C" | 405.25 × 202.63 | Projection horizontale vers la droite (`scaleX(0) → 1`, origin: left) |

---

## 3. Choreography Timeline & Golden Ratio Structure

**Total Sequence Duration**: `2200ms` (Preloader exit at ~2400ms)

```
0ms --------- 300ms ---------- 1000ms --------- 1500ms --------- 2200ms
[Anticipation]    [Action Phase - Golden Ratio]     [Settle & Light Sweep]   [Curtain Lift]
Blueprint Trace   Pillars Rise & Fall in Cascade   Glint 45° + Typography  Smooth Dissolve
```

- **Anticipation (0 – 300ms)**: Tracé laser blueprint cyan (`#00d2ff`) des 7 piliers.
- **Action (80ms – 1100ms)**: Cascade des piliers décalée de 60ms à 80ms par élément.
- **Specular Sweep (900ms – 1750ms)**: Balayage lumineux diagonal 45° sur le dégradé bleu royal IMC (`#5a86b6` → `#00629b` → `#004b88`).
- **Typography Cascade (700ms – 1500ms)**: Révélation typographique avec expansion de tracking:
  - `INSTITUT DE MANAGEMENT ET DE COMMUNICATION` (0.28em letter-spacing)
  - `EXCELLENCE • LEADERSHIP • AVENIR`
- **Follow-Through & Exit (2000ms – 2500ms)**: Déverrouillage fluide de l'écran avec fondu ascendant cinématique.

---

## 4. Easing Tokens Applied

```css
--p2m-duration: 2200ms;
--p2m-ease-out-universal: cubic-bezier(0.16, 1, 0.3, 1); /* Settle noble */
--p2m-ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);          /* Transitions fluides */
--p2m-ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);      /* Point sur le i */
```
