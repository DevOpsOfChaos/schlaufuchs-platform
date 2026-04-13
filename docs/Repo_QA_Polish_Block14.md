# Repo QA Polish Block 14

Dieser Block bündelt ruhige UX- und QA-Verbesserungen auf dem echten bereinigten Repo-Stand.

## Enthalten

- `src/pages/wissen/index.astro`
- `src/pages/aufgaben/index.astro`
- `src/pages/fachbereiche/[slug].astro`
- `src/components/interactive/LinuxLearningShell.astro`

## Ziel

- Übersichtsseiten wirken ruhiger und geben schneller Orientierung.
- Wissens- und Aufgabenkarten zeigen konsistentere Meta-Informationen.
- Der direkte Einstieg im Fachbereich bietet jetzt zusätzlich den schnellsten Sprung in eine passende Aufgabe.
- Die Linux-Lernshell reagiert unmittelbarer auf Klicks auf Beispielbefehle.

## Konkrete Änderungen

### Wissen
- Hero bekommt Kennzahlen für Wissensseiten, aktive Fachbereiche und Schwerpunktpfade.
- Karten-Meta zeigt jetzt konsistent das Themenlabel statt gemischter Einzelformate.

### Aufgaben
- Hero bekommt dieselben Kennzahlen für Aufgaben.
- Themenpfad-Hotspots bleiben sichtbar und die Kartengruppen werden konsistenter.

### Fachbereiche
- Direkter Einstieg verlinkt weiter direkt auf die Wissensseite.
- Wenn vorhanden, wird zusätzlich eine passende Aufgabe im Hero angeboten.
- Meta-Angaben in Wissens- und Aufgabenkarten sind thematisch präziser.

### Linux-Lernshell
- Klick auf einen vorgeschlagenen Befehl führt ihn jetzt direkt aus.
- `Esc` leert die Eingabe.
- `Ctrl + L` leert die Ausgabe.
- Der Hinweistext erklärt die schnellsten Interaktionen.

## Erwartung nach dem Einspielen

- keine Build-Auswirkung negativ
- keine neue Routing-Änderung
- spürbar weniger unnötige Zwischenschritte in Übersichten
- Linux-Shell direkter bedienbar
