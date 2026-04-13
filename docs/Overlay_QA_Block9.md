# Overlay QA – Block 9

## Schwerpunkt dieses Blocks

Dieser Block standardisiert die letzten inhaltlichen Pflichtbausteine der Wissens- und Aufgabenseiten:

- Wissensseiten haben jetzt konsistent nutzbare Felder für
  - `recognizeSignals`
  - `selfCheckPoints`
- Aufgabenseiten haben jetzt konsistent nutzbare Felder für
  - `transferIdeas`
  - `reflectionPrompt`
- doppelte Standardabschnitte wurden aus den Markdown-Bodies entfernt und in die UI-Komponenten überführt

## Geprüft

- keine verbleibenden doppelten Artikel-Überschriften
  - `## Was du hier lernst`
  - `## Woran du das Thema erkennst`
  - `## Mini-Check für dich`
  - `## Typische Fehler`
  - `## Merksätze`
- vollständige Abdeckung der neuen Frontmatter-Felder im Overlay-Stand
  - Artikel: 30/30 mit `recognizeSignals` und `selfCheckPoints`
  - Aufgaben: 30/30 mit `transferIdeas` und `reflectionPrompt`
- neue Komponenten ergänzt
  - `RecognizeSignals.astro`
  - `SelfCheckChecklist.astro`
  - `TransferIdeas.astro`
  - `ReflectionPrompt.astro`
- Seitenlogik ergänzt
  - `src/pages/wissen/[...slug].astro`
  - `src/pages/aufgaben/[...slug].astro`
- Schema erweitert
  - `src/content.config.ts`

## Wichtige Wirkung

Die Seiten sind jetzt deutlich ruhiger:

- kein doppelter Standardblock mehr im Markdown **und** in der UI
- Wissensseiten zeigen Standardbereiche konsistent über wiederverwendbare Komponenten
- Aufgabenseiten haben jetzt den fehlenden Transfer-/Reflexionsabschluss als feste Struktur

## Noch offen vor echtem Repo-Check

Dieser Overlay-Stand wurde weiterhin ohne echten lokalen Astro-Build gegen das vollständige Repo erzeugt.
Vor dem finalen Merge in `main` sollte nach dem Einspielen geprüft werden:

1. `astro check`
2. `astro build`
3. Leaf-Redirects und Catch-all live anklicken
4. Stichprobe auf 8–10 Wissensseiten und 8–10 Aufgabenseiten
