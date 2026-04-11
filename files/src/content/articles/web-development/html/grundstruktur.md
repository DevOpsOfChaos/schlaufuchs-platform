---
title: HTML-Grundstruktur – Grundlagen
description: Verstehe, wie eine HTML-Seite aufgebaut ist und warum html, head und body unterschiedliche Aufgaben haben.
subject: web-development
section: html
level: einfach
tags: [html, grundstruktur, head, body, web-development]
draft: false
---

Bevor eine Webseite gestaltet oder mit Inhalten gefüllt wird, braucht sie einen sauberen Grundaufbau. Genau dieser Aufbau macht HTML berechenbar und verständlich.

## Überblick

Eine einfache HTML-Seite besteht nicht nur aus sichtbarem Inhalt. Sie hat mehrere Ebenen mit unterschiedlichen Aufgaben.

Für den Einstieg solltest du vor allem diese drei Bereiche unterscheiden:

- `html`
- `head`
- `body`

## Worum geht es bei der Grundstruktur?

HTML beschreibt die Struktur einer Seite. Das heißt:

- Welche Teile gehören zum Dokument?
- Welche Informationen sind für den Browser wichtig?
- Was soll für Nutzer tatsächlich sichtbar sein?

Ohne diese Grundstruktur wäre eine Seite nicht sauber aufgebaut.

## Ein einfaches Beispiel

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <title>Meine erste Seite</title>
  </head>
  <body>
    <h1>Hallo Welt</h1>
    <p>Das ist meine erste HTML-Seite.</p>
  </body>
</html>
```

Dieses Beispiel zeigt schon die wichtigsten Bausteine einer kleinen Seite.

## `html` – das gesamte Dokument

Das `html`-Element umfasst das ganze Dokument. Es bildet den äußeren Rahmen der Seite.

Darunter liegen dann die zwei großen Hauptbereiche:

- `head`
- `body`

## `head` – Informationen über die Seite

Im `head` stehen Informationen, die für Browser, Suchmaschinen oder technische Einstellungen wichtig sind.

Dazu gehören zum Beispiel:

- Zeichencodierung
- Seitentitel
- Meta-Angaben
- Verknüpfungen zu CSS-Dateien

Wichtig:
Der `head` ist wichtig, aber sein Inhalt ist meistens **nicht direkt sichtbar**.

## `body` – der sichtbare Bereich

Im `body` steht der Inhalt, den Nutzer auf der Seite sehen.

Dort liegen typischerweise:

- Überschriften
- Absätze
- Bilder
- Listen
- Links
- weitere Layout- und Inhaltsbereiche

Kurz gesagt:
Der `body` ist der Arbeitsbereich für sichtbare Inhalte.

## Warum diese Trennung wichtig ist

Ein häufiger Anfängerfehler ist, alles als „einfach HTML“ zu sehen, ohne zwischen technischen Dokumentinformationen und sichtbarem Inhalt zu unterscheiden.

Die Trennung hilft dabei,

- Seiten sauber zu strukturieren,
- Fehler schneller zu erkennen,
- CSS und andere Dateien sinnvoll einzubinden,
- und HTML verständlicher zu lesen.

## Typische Fragen am Anfang

Gerade beim Einstieg tauchen oft diese Fragen auf:

- Was kommt in den `head`?
- Was gehört in den `body`?
- Warum ist der Titel nicht als sichtbare Überschrift auf der Seite zu sehen?
- Wieso gibt es überhaupt mehrere Bereiche?

Diese Fragen sind normal, weil HTML nicht nur sichtbaren Inhalt, sondern auch Dokumentstruktur beschreibt.

## Gute Denkweise

Für den Einstieg hilft diese klare Sicht:

- `html` = das gesamte Dokument
- `head` = Informationen über das Dokument
- `body` = sichtbarer Inhalt des Dokuments

Wer das sicher versteht, kommt später mit weiteren HTML-Elementen deutlich leichter zurecht.

## Merksätze

- Eine HTML-Seite hat einen klaren Grundaufbau.
- `html` umfasst das gesamte Dokument.
- `head` enthält Informationen über die Seite.
- `body` enthält den sichtbaren Inhalt.
- Eine saubere Grundstruktur ist die Basis für jede weitere Webentwicklung.
