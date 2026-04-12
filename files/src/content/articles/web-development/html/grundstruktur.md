---
title: HTML-Grundstruktur – Grundlagen
description: Verstehe, wie eine HTML-Seite aufgebaut ist und warum html, head und body unterschiedliche Aufgaben haben.
subject: web-development
section: html
topicPath:
  - html
  - grundstruktur
learningGoals:
  - Du erklärst die Rolle von html, head und body.
  - Du erkennst den Unterschied zwischen Dokumentinformationen und sichtbarem Inhalt.
  - Du liest eine kleine HTML-Grundstruktur sicher.
level: einfach
tags: [html, grundstruktur, head, body, web-development]
draft: false
---

<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Bevor eine Webseite gestaltet wird, braucht sie einen sauberen Grundaufbau. Genau dieser Aufbau macht HTML für Browser und Menschen lesbar.</p>
  <ul>
    <li>Du unterscheidest <code>html</code>, <code>head</code> und <code>body</code>.</li>
    <li>Du verstehst, welche Informationen sichtbar sind und welche nicht.</li>
    <li>Du liest eine einfache HTML-Seite als klar strukturierte Einheit.</li>
  </ul>
</div>

## Grundidee

HTML beschreibt die Struktur einer Webseite. Das bedeutet nicht nur sichtbaren Inhalt, sondern das ganze Dokument.

Deshalb ist eine HTML-Seite mehr als nur Text im Browser. Sie besteht aus mehreren Ebenen mit unterschiedlichen Aufgaben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine einfache HTML-Seite</h3>
  <div class="wide-example">

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

  </div>
</div>

## Die drei Hauptbereiche

### <code>html</code>

Das `html`-Element ist der äußere Rahmen des Dokuments. Es umfasst die gesamte Seite.

### <code>head</code>

Im `head` stehen Informationen über das Dokument:

- Zeichencodierung
- Seitentitel
- Meta-Angaben
- Verknüpfungen zu CSS-Dateien

Diese Informationen sind wichtig, aber meistens nicht direkt sichtbar.

### <code>body</code>

Im `body` steht der Inhalt, den Nutzer wirklich sehen:

- Überschriften
- Absätze
- Bilder
- Listen
- Links

## Warum die Trennung so wichtig ist

Gerade am Anfang wirkt alles wie „einfach HTML“. Aber die Unterscheidung ist wichtig:

- Der `head` beschreibt das Dokument technisch.
- Der `body` enthält den sichtbaren Inhalt.

Wer das sauber trennt, versteht später auch CSS, Semantik und Seitenaufbau leichter.

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Lies eine kleine HTML-Datei bewusst</h3>
  <ul>
    <li>Markiere den äußeren Dokumentrahmen.</li>
    <li>Suche alle Informationen, die im Browserfenster wichtig sind, aber nicht direkt im Inhalt stehen.</li>
    <li>Trenne danach klar zwischen technischem Kopfbereich und sichtbarem Inhalt.</li>
  </ul>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Den <code>title</code> mit einer sichtbaren Überschrift zu verwechseln.</li>
    <li>Inhalte in den <code>head</code> zu schreiben, die eigentlich in den <code>body</code> gehören.</li>
    <li>Zu denken, HTML bestehe nur aus sichtbaren Elementen.</li>
    <li>Die Grundstruktur wegzulassen, weil kleine Beispiele scheinbar auch ohne sie „gehen“.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li><code>html</code> umfasst das gesamte Dokument.</li>
    <li><code>head</code> enthält Informationen über die Seite.</li>
    <li><code>body</code> enthält den sichtbaren Inhalt.</li>
    <li>Eine saubere HTML-Grundstruktur macht spätere Entwicklung deutlich leichter.</li>
  </ul>
</div>
