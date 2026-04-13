# Fachseiten-Architektur Block 23

Dieser Block stellt die Fachseiten und Fachthemenseiten auf eine ruhigere Navigationslogik um.

## Kernänderungen

- Fachseiten und Fachthemenseiten nutzen jetzt denselben Hero-Typ:
  - nur Titel
  - Suche im aktuellen Bereich
  - Bereichs-Fuchsbild
- Zähler, direkter Einstieg, stärkste Themenpfade, wichtige Wissensseiten und andere kuratierende Blöcke wurden aus den Fachseiten entfernt.
- Wenn ein Bereich weitere sinnvolle Unterthemen hat, werden zuerst diese Themenkarten gezeigt.
- Wenn keine weitere sinnvolle Hierarchie nötig ist, folgen zuerst Wissensseiten und darunter in einem separaten Block passende Aufgaben.
- Die Suche läuft gemeinsam über Wissen und Aufgaben, die Anzeige bleibt aber in getrennten Blöcken.
- Auf Wissensseiten entfällt der starke Einstiegsblock "Was du hier lernst" vollständig.

## Neue Dateien

- `src/components/content/AreaSearchHero.astro`

## Geänderte Dateien

- `src/pages/fachbereiche/[slug].astro`
- `src/pages/fachbereiche/[subject]/[...parts].astro`
- `src/pages/wissen/[...slug].astro`

## Offene nächste Schritte

- Nach Einspielen sollte einmal geprüft werden, ob die Suche auf Fach- und Fachthemenseiten im echten Repo sauber mit dem kompletten Bestand arbeitet.
- Danach kann die Fachseiten-Hierarchie je Bereich inhaltlich gezielt verfeinert werden.
