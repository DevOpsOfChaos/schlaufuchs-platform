# Content Governance

Dieses Dokument ist die verbindliche Inhaltsregel für Schlaufuchs. Es verhindert, dass der Content wieder in Richtung generischer Lernplattform, künstlicher Situationsseiten oder massenhaft erzeugter Mini-Inhalte driftet.

## Produktkern

Schlaufuchs ist primär eine strukturierte Informationsplattform für technische Fächer.

Der gewünschte Kern ist:

- fachlich klare, nachschlageartige Inhaltsseiten,
- übersichtliche Fachbereiche,
- große Themen mit sinnvoll gegliederten Unterthemen,
- optionale Aufgaben nur dort, wo sie fachlich und didaktisch Sinn ergeben,
- interaktive Lernmodule und Beispiele dort, wo sie einen konkreten Sachverhalt sichtbar oder ausprobierbar machen.

Schlaufuchs ist nicht als klassische Lernplattform mit künstlich erzählten Lernsituationen, Motivationsabsätzen und vielen kleinen Übungsseiten gedacht.

## Informationsarchitektur

Die Inhaltsstruktur folgt diesem Modell:

```text
Fachbereich
└── großes Thema
    ├── Überblick / Grundartikel
    ├── Unterthema A
    ├── Unterthema B
    ├── Unterthema C
    ├── Beispiele / interaktive Module
    └── optionale Aufgaben + Lösungen
```

### Fachbereichsseiten

Fachbereichsseiten dienen der Orientierung. Sie sollen kurz erklären, was der Fachbereich umfasst, und große Themenblöcke sichtbar machen.

Sie sollen nicht mit langen Lerntexten, künstlichen Einstiegssituationen oder vielen kleinen Einzelthemen überladen werden.

### Themenseiten

Themenseiten sind nachschlageartige Überblicksseiten. Sie erklären ein größeres Thema neutral und fachlich.

Eine gute Themenseite enthält typischerweise:

- Definition oder Grundidee,
- fachliche Einordnung,
- zentrale Begriffe,
- wichtige Teilbereiche,
- typische Anwendungen,
- Abgrenzung zu verwandten Themen,
- Links zu passenden Unterthemen,
- optional Beispiele oder interaktive Module.

### Unterthemenseiten

Unterthemenseiten erklären einen klaren fachlichen Ausschnitt. Sie sollen präzise, übersichtlich und nachschlageartig bleiben.

Sie sollen nicht versuchen, eine künstliche Situation zu erzählen. Der Inhalt steht im Vordergrund, nicht eine erfundene Lernhandlung.

### Beispiele und interaktive Module

Beispiele und Module sind nur sinnvoll, wenn sie einen konkreten Sachverhalt besser sichtbar machen.

Geeignete Module sind zum Beispiel:

- Linux: interaktive Konsole,
- HTML/CSS: Live-Beispiel mit Preview,
- JavaScript: DOM- oder Event-Beispiel,
- Mathematik: Graph, Formel, Rechner oder Visualisierung,
- Elektrotechnik: Messwertbeispiel, Rechenbeispiel, Schaltskizze oder Fehlerbild.

Module sind kein Dekorationsersatz für schwache Texte.

### Aufgaben

Aufgaben sind optional. Eine Aufgabe bleibt nur im Bestand, wenn sie fachlich prüfbar ist.

Eine gute Aufgabe braucht:

- konkrete Ausgangslage,
- klare Aufgabe,
- prüfbares Ergebnis,
- fachlichen Mehrwert,
- passende Lösung.

Keine neuen Aufgaben ohne Lösung. Fehlende Lösungen werden nicht massenhaft nachgefüllt. Stattdessen wird entschieden, ob die vorhandene Aufgabe fachlich stark genug ist, um eine Lösung zu rechtfertigen. Schwache Aufgaben werden gelöscht oder später bewusst neu konzipiert.

## Verbotene Content-Muster

Folgende Muster sollen nicht neu entstehen und bei Reviews entfernt oder umgeschrieben werden:

- künstliche Situationsrahmen ohne fachlichen Mehrwert,
- generische Motivationssätze,
- viele kleine Mini-Seiten ohne klare Funktion,
- Aufgaben ohne konkrete Ausgangsdaten oder prüfbares Ergebnis,
- Aufgaben ohne Lösung,
- generische SVGs oder Illustrationen ohne fachliche Aussage,
- Massen-Content-Erzeugung,
- automatische Backfills fehlender Lösungen,
- doppelte Themen unter unterschiedlichen Pfaden,
- Fachlogik, die mehrfach in verschiedenen Dateien neu erfunden wird.

Typische Formulierungen, die meist auf falschen Stil hinweisen:

- "Diese Seite hilft dir ...",
- "Stell dir vor ...",
- "Die wichtigste Denkfrage lautet ...",
- "Kann eine andere Person erkennen ...",
- "Vom Problem zur robusten Entscheidung",
- "kleines Unterthema, klare Entscheidung, passende Aufgabe",
- "Kontext / Trennkante / Prüfung / Gegenprobe" als generische SVG- oder Textstruktur.

Diese Formulierungen sind nicht automatisch verboten, aber sie sind ein Warnsignal. Sie müssen fachlich begründet sein. In der Regel ist eine neutralere Nachschlagewerksstruktur besser.

## Zielstil für Artikel

Artikel sollen eher so aufgebaut sein:

```text
# Thema

Kurze Definition oder Grundidee.

## Einordnung

Wo gehört das Thema fachlich hin?

## Zentrale Begriffe

Welche Begriffe muss man kennen?

## Funktionsweise / Struktur / Syntax

Wie funktioniert das Thema konkret?

## Beispiel

Ein konkretes, fachlich passendes Beispiel.

## Typische Fehler oder Missverständnisse

Was wird häufig verwechselt?

## Abgrenzung

Was gehört nicht zu diesem Thema?

## Verwandte Themen

Welche Unterthemen oder Nachbarseiten sind relevant?
```

Nicht jede Seite braucht jede Überschrift. Aber jede Seite braucht eine klare fachliche Funktion.

## Review-Regel

Content wird nicht mehr nach Dateianzahl oder reiner Vollständigkeit bewertet.

Jede Inhaltsseite muss einer dieser Rollen zugeordnet werden können:

- `FACHBEREICH`
- `THEMA`
- `UNTERTHEMA`
- `BEISPIEL_MODUL`
- `AUFGABE`
- `LOESUNG`
- `NEWS`

Wenn eine Seite keine klare Rolle hat, ist sie ein Kandidat für Löschen, Zusammenführen oder vollständiges Neuschreiben.

## Entscheidungsstatus bei Reviews

Für Reviews werden nur diese Status verwendet:

- `KEEP`: fachlich brauchbar und passend zur Plattform,
- `KEEP_CLEANUP`: brauchbar, aber Stil, Struktur oder Dopplung müssen bereinigt werden,
- `REWRITE`: fachlich wichtig, aber in aktueller Form nicht passend,
- `MERGE`: Thema doppelt oder zu kleinteilig, soll mit anderer Seite zusammengeführt werden,
- `DELETE`: kein ausreichender fachlicher oder struktureller Wert,
- `HOLD`: Entscheidung vertagen, weil Fachstruktur zuerst geklärt werden muss.

Automatische Heuristiken wie Wortzahl, leere Frontmatter-Arrays oder Suchworttreffer dürfen nur Hinweise liefern. Sie ersetzen keine direkte Inhaltsbewertung.

## Priorität für den Umbau

Die Reihenfolge für künftige Content-Arbeit ist:

1. Informationsarchitektur klären,
2. Fachbereiche und große Themen ordnen,
3. Duplikate und falsche Pfade bereinigen,
4. vorhandene Artikel in Nachschlagewerksstil bringen,
5. generische Aufgaben und Lösungen entfernen,
6. interaktive Module gezielt an fachlich passenden Stellen integrieren,
7. erst danach über neue Inhalte entscheiden.

Neue Inhalte sind nicht die Priorität. Der bestehende Inhalt muss zuerst strukturell und stilistisch auf das Zielmodell gebracht werden.

## Harte Arbeitsregeln

- Keine Massen-Content-Erzeugung.
- Keine neuen Übungen ohne Lösung.
- Keine automatischen Lösungs-Backfills.
- Keine generischen SVGs.
- Keine temporären Audit- oder Normalisierungsskripte committen.
- Vor jedem Commit `git status` prüfen.
- Für schnelle Content-Parse-Prüfung bevorzugt `npx astro sync` nutzen.
- `npm run quality` nur einsetzen, wenn der Änderungsumfang es rechtfertigt.

## Kurzform

Schlaufuchs soll ein übersichtliches technisches Nachschlagewerk mit optionalen Aufgaben und interaktiven Modulen sein.

Wenn eine Seite nur eine künstliche Lernsituation erzählt, generische Prüffragen stellt oder ein Thema ohne klare fachliche Struktur aufbläht, passt sie nicht zum Produktkern.
