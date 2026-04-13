# Repo Fachseiten Architecture Block 25

Dieser Block schärft nicht nur das Layout der Fachseiten, sondern die eigentliche Themenhierarchie.

## Kernidee

Die Fachseiten arbeiten jetzt mit kuratierten Themenblöcken pro Fach statt nur mit technisch entstehenden topicPath-Ebenen.

## Auswirkungen

- Mathematik und Informatik zeigen auf der Fachseite direkt tragende Fachblöcke.
- Elektrotechnik und Linux werden auf der Fachseite nicht mehr auf einen einzigen Roh-Block reduziert.
  Stattdessen wird die einzige Wurzel intern aufgefächert und direkt in sinnvolle Themenblöcke übersetzt.
- Web Development bleibt in HTML/CSS gegliedert, kann innerhalb von HTML aber in ruhigere Unterblöcke zerfallen.

## Neu

- `src/data/areaStructure.ts` definiert jetzt kuratierte Bereichsblöcke mit
  - Titel
  - Beschreibung
  - Icon
  - Suchaliasen
  - Inhaltszuordnung über Prefix-Matches
- `src/pages/fachbereiche/[slug].astro` nutzt diese Blöcke für die sichtbare erste Ebene.
- `src/pages/fachbereiche/[subject]/[...parts].astro` zeigt entweder
  - weitere kuratierte Unterblöcke
  - oder direkt Wissensseiten und Aufgaben.

## Ziel

Die Fachseiten wirken dadurch weniger wie ein technisches Pfad-Dashboard und mehr wie ruhige, fachlich verständliche Start- und Themenseiten.
