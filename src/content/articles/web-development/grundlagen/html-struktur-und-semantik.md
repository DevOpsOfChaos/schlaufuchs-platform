---
title: HTML-Struktur und Semantik
description: HTML gibt einer Webseite ihre Struktur und semantische Bedeutung, bevor Gestaltung und Verhalten hinzukommen.
subject: web-development
section: Grundlagen
level: einfach
tags:
  - HTML
  - Semantik
  - Struktur
  - Web Development
draft: false
---

## Überblick

HTML ist die strukturelle Grundlage fast jeder Webseite. Noch bevor Farben, Abstände oder Interaktionen ins Spiel kommen, legt HTML fest, welche Inhalte vorhanden sind und welche Bedeutung diese Inhalte haben. Gute HTML-Struktur macht Seiten verständlicher, zugänglicher und leichter wartbar.

## Was ist HTML?

HTML steht für **HyperText Markup Language**. Es ist keine Programmiersprache im klassischen Sinn, sondern eine Auszeichnungssprache. Das bedeutet:

- HTML beschreibt Inhalte,
- HTML ordnet Inhalte,
- HTML kennzeichnet die Rolle einzelner Elemente.

Beispiele für solche Rollen sind:

- Überschrift,
- Absatz,
- Liste,
- Navigation,
- Link,
- Bild.

## Grundstruktur eines HTML-Dokuments

Ein einfaches HTML-Dokument enthält typischerweise:

- `<!doctype html>`
- `<html>`
- `<head>`
- `<body>`

### `<!doctype html>`

Diese Zeile teilt dem Browser mit, dass das Dokument als modernes HTML interpretiert werden soll.

### `<html>`

Dieses Element umschließt das gesamte Dokument.

### `<head>`

Im Kopfbereich stehen Metadaten wie:

- Zeichencodierung,
- Seitentitel,
- Verweise auf Stylesheets,
- weitere technische Angaben.

### `<body>`

Im Body stehen die Inhalte, die auf der Seite sichtbar werden.

## Semantik: Warum die Bedeutung wichtig ist

Semantische HTML-Elemente beschreiben nicht nur, **wie** etwas aussieht, sondern **was** es ist.

Beispiele:

- `<h1>` für eine Hauptüberschrift,
- `<p>` für einen Absatz,
- `<nav>` für Navigation,
- `<main>` für den Hauptinhalt,
- `<section>` für einen inhaltlichen Abschnitt,
- `<article>` für einen eigenständigen Inhalt,
- `<footer>` für den Abschlussbereich.

Semantik hilft:

- dem Browser,
- Suchmaschinen,
- Screenreadern,
- und auch Menschen, die den Code lesen.

## Schlechte und gute Struktur

Schwaches HTML arbeitet oft mit vielen allgemeinen `div`-Elementen ohne klare Rollen. Das kann funktionieren, macht die Seite aber schwerer verständlich.

Besser ist eine Struktur, die den Inhalt klar gliedert.

Beispiel:

- Ein Seitenkopf gehört in `header`.
- Die Hauptnavigation gehört in `nav`.
- Der eigentliche Seiteninhalt gehört in `main`.
- Ein abgeschlossener Beitrag kann in `article` liegen.

## Überschriftenhierarchie

HTML kennt mehrere Überschriftenebenen:

- `h1`
- `h2`
- `h3`
- `h4`
- `h5`
- `h6`

Dabei geht es nicht nur um Größe, sondern um Struktur. Eine Seite sollte in der Regel eine klare Hauptüberschrift besitzen. Unterpunkte folgen dann logisch auf tieferen Ebenen.

## Links und Bilder

### Links

Links werden mit `<a>` ausgezeichnet.

Wichtig ist dabei:

- ein sinnvoller Linktext,
- ein korrekter Pfad,
- eine verständliche Funktion.

### Bilder

Bilder werden mit `<img>` eingebunden.

Besonders wichtig ist das `alt`-Attribut, damit Bilder beschrieben werden können, wenn sie nicht sichtbar sind oder von Hilfstechnologien gelesen werden.

## Warum gute HTML-Struktur wichtig ist

Sauberes HTML ist nicht nur ein Schönheitsideal. Es verbessert:

- Lesbarkeit des Codes,
- Wartbarkeit,
- Barrierefreiheit,
- Suchmaschinenverständnis,
- spätere CSS- und JavaScript-Arbeit.

## Typische Fehler

- Überschriften nur wegen der Optik statt wegen ihrer Rolle einsetzen.
- Für alles nur `div` verwenden.
- Listen, Navigationen oder Hauptinhalte nicht semantisch kennzeichnen.
- Bilder ohne sinnvollen Alternativtext einbauen.
- HTML als bloße Hülle für CSS missverstehen.

## Merksätze

- HTML gibt einer Seite Struktur.
- Semantik beschreibt die Bedeutung eines Elements.
- Gute HTML-Struktur hilft Browsern, Suchmaschinen und Menschen.
- Erst die Struktur, dann das Styling.
