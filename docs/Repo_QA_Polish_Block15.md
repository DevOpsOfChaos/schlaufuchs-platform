# Repo QA Polish Block 15

Dieser Block erweitert `repo_polish_step14.zip` zu einem ruhigeren, direkteren Gesamtstand.

## Enthalten

- `src/pages/wissen/index.astro`
- `src/pages/aufgaben/index.astro`
- `src/pages/fachbereiche/[slug].astro`
- `src/pages/fachbereiche/[subject]/[...parts].astro`
- `src/components/interactive/LinuxLearningShell.astro`
- `docs/Repo_QA_Polish_Block14.md`
- `docs/Repo_QA_Polish_Block15.md`

## Ziel

- Übersichtsseiten geben schneller Orientierung über Fachbereiche und Umfang.
- Themenpfadseiten bieten einen klareren ersten nächsten Schritt.
- Fachbereichsseiten führen direkter zu Wissen, Aufgaben und Schwerpunktpfaden.
- Die Linux-Lernshell erklärt ihre Tastenkürzel sichtbar im UI.

## Konkrete Änderungen

### Wissen
- Hero mit Kennzahlen bleibt erhalten.
- Zusätzlich gibt es jetzt eine schnelle Fachbereichs-Sprungzeile.
- Karten-Meta bleibt thematisch präzise und direkt auf `/wissen`.

### Aufgaben
- Hero mit Kennzahlen bleibt erhalten.
- Zusätzlich gibt es jetzt eine schnelle Fachbereichs-Sprungzeile.
- Aufgabenkarten behalten den direkten Themenpfad-Link unter der Karte.

### Fachbereiche
- Der direkte Einstieg enthält jetzt Wissen, Aufgabe und stärksten Themenpfad.
- Wissens- und Aufgabenkarten bleiben direkte Endziele statt Fachbereichs-Umwege.

### Themenpfade
- Themenpfadseiten zeigen jetzt Kennzahlen im Hero.
- Zusätzlich gibt es eine Schnelleinstieg-Zeile:
  - erste Wissensseite
  - erste Aufgabe
  - stärkstes Unterthema

### Linux-Lernshell
- Sichtbare Kurz-Hilfe direkt unter der Eingabe:
  - Enter
  - Esc
  - Ctrl + L
  - Verlauf mit Pfeiltasten
