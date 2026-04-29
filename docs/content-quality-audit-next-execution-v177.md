# Content Quality Audit – Nächste Ausführung ab v177

## Ziel ab jetzt

Nicht weiter Meta-Zeilen aufblasen. Die Audit-Dateien sind groß genug, um Arbeit zu steuern.

Ab v177 wird sinnvollerweise in echten Qualitätsblöcken gearbeitet:

- 20 bis 50 konkrete Seiten pro Block prüfen,
- Artikelqualität bewerten,
- fehlende Aufgaben/Lösungen gezielt ergänzen,
- Bilder nur dann ergänzen, wenn sie didaktisch wirklich helfen,
- Audit-Zeilen nach der Bearbeitung aktualisieren.

## Empfohlener erster echter Arbeitsblock

Priorität 1: Aufgaben mit fehlender Lösung.

Warum:

- Der Bestand enthält viele Aufgaben, aber sehr wenige Lösungen.
- Fehlende Lösungen sind für Lernplattform-Nutzer direkt spürbar.
- Lösungspakete lassen sich gezielt und testbar ergänzen.

Vorschlag für den nächsten Content-Block:

1. 15 bis 25 Aufgaben mit hoher Priorität auswählen.
2. Pro Aufgabe eine passende Lösung ergänzen.
3. Audit-Zeilen aktualisieren:
   - `has_solutions = yes`
   - `solution_link_ok = yes`
   - `checked = partial` oder `yes`, je nach Prüftiefe
   - `quality_status = improve` oder `ok`
   - `next_action = review` oder `none`

## Danach

Priorität 2: Artikel ohne Aufgabe.

Vorgehen:

1. Artikel prüfen, ob er didaktisch stabil genug ist.
2. Nur dann Aufgabe ergänzen.
3. Bei schwachen Artikeln zuerst Text verbessern, nicht sofort Aufgaben erzeugen.

Priorität 3: Bildnutzen prüfen.

Nicht jede Seite braucht ein Bild. Ziel ist nicht Bildpflicht, sondern didaktischer Nutzen.
