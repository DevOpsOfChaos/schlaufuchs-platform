---
title: "HTML-Grundstruktur"
description: "Technische Referenz zur Grundstruktur eines HTML-Dokuments: Dokumenttyp, html, head, body, Metadaten, Inhalte, Links und semantische Ordnung."
subject: "web-development"
section: "HTML"
topicPath: ["html", "html-grundstruktur"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML", "Dokumentstruktur", "Browser", "Semantik"]
draft: false
---

HTML ist eine textbasierte Auszeichnungssprache zur Strukturierung von Dokumenten im Web. Ein HTML-Dokument beschreibt nicht, wie eine Seite exakt aussieht, sondern welche Teile ein Dokument besitzt und welche Bedeutung diese Teile haben.

## Definition und Grundidee

HTML steht für **HyperText Markup Language**. Der Begriff enthält drei technische Kerne:

- **HyperText:** Dokumente können über Links miteinander verbunden werden.
- **Markup:** Text wird durch Elemente ausgezeichnet, etwa als Überschrift, Absatz, Liste, Link oder Bild.
- **Language:** HTML besitzt eine definierte Syntax, die Browser auswerten.

Ein Browser liest die HTML-Datei, erzeugt daraus ein Dokumentmodell und stellt die Inhalte dar. CSS und JavaScript können dieses Dokument anschließend gestalten oder dynamisch verändern. HTML bleibt dabei die strukturelle Grundlage.

## Minimale Dokumentstruktur

Ein modernes HTML-Dokument enthält üblicherweise diese Grundform:

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <title>Seitentitel</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>Hauptüberschrift</h1>
    <p>Ein Absatz mit Inhalt.</p>
  </body>
</html>
```

Die Struktur trennt Metadaten und sichtbaren Inhalt:

- `<!doctype html>` aktiviert den Standards-Modus des Browsers.
- `<html>` ist das Wurzelelement des Dokuments.
- `lang="de"` gibt die Sprache des Dokuments an.
- `<head>` enthält Metadaten, Titel, Zeichensatz, Stylesheet-Verweise und technische Hinweise.
- `<body>` enthält den sichtbaren Inhalt der Seite.

## Elemente, Tags und Attribute

HTML arbeitet mit Elementen. Ein Element besteht meistens aus Start-Tag, Inhalt und End-Tag:

```html
<p>Das ist ein Absatz.</p>
```

Attribute ergänzen ein Element um Eigenschaften:

```html
<a href="/themen">Zur Themenübersicht</a>
<img src="/bild.svg" alt="Beschreibung des Bildes">
```

Wichtige Unterscheidung:

- **Element:** fachlicher Baustein des Dokuments.
- **Tag:** syntaktische Schreibweise im Quelltext.
- **Attribut:** zusätzliche Information am Start-Tag.
- **Inhalt:** Text oder weitere verschachtelte Elemente.

## Head-Bereich

Der `head`-Bereich ist nicht für normalen Seitentext gedacht. Er enthält Informationen über das Dokument. Typische Einträge sind:

```html
<meta charset="utf-8">
<title>HTML-Grundstruktur</title>
<link rel="stylesheet" href="/styles.css">
```

Der Zeichensatz verhindert Darstellungsfehler bei Umlauten und Sonderzeichen. Der Titel erscheint im Browser-Tab und wird von Suchmaschinen ausgewertet. Stylesheets werden über `link` eingebunden.

## Body-Bereich

Der `body` enthält die sichtbaren Inhalte. Dort stehen Überschriften, Absätze, Listen, Tabellen, Formulare, Bilder, Navigation und weitere Elemente.

Ein einfacher Inhaltsbereich kann so aussehen:

```html
<body>
  <header>
    <h1>Schlaufuchs</h1>
  </header>

  <main>
    <h2>HTML</h2>
    <p>HTML beschreibt die Struktur einer Webseite.</p>
  </main>
</body>
```

Die HTML-Reihenfolge sollte die fachliche Lesereihenfolge abbilden. CSS darf später die Darstellung verändern, ersetzt aber keine sinnvolle Dokumentstruktur.

## Links und Pfade

Links verbinden Dokumente:

```html
<a href="kontakt.html">Kontakt</a>
<a href="/artikel/html">HTML-Artikel</a>
```

Der Wert von `href` ist ein Pfad oder eine URL. Relative Pfade werden vom aktuellen Dokument aus aufgelöst. Absolute Pfade beginnen am Wurzelpfad der Website. Viele Fehler entstehen nicht durch das `a`-Element selbst, sondern durch falsch verstandene Pfade.

## Bilder und Alternativtext

Bilder werden mit `img` eingebunden:

```html
<img src="/bilder/schaltung.svg" alt="Messschaltung mit Widerstand und Diode">
```

Das `alt`-Attribut beschreibt die Funktion oder Information des Bildes. Ein Alternativtext ist kein Dateiname und keine Bildunterschrift. Er muss das ersetzen, was Nutzende ohne Bild sonst verlieren würden.

## Semantische Struktur

HTML5 bietet Elemente, die die Bedeutung von Bereichen ausdrücken:

- `header` für einleitende Kopfbereiche,
- `nav` für Navigation,
- `main` für den Hauptinhalt,
- `section` für thematische Abschnitte,
- `article` für eigenständig verständliche Inhalte,
- `aside` für ergänzende Inhalte,
- `footer` für abschließende Informationen.

Semantik ist nicht Dekoration. Sie hilft Browsern, Suchmaschinen, Screenreadern und Entwicklerwerkzeugen, die Struktur eines Dokuments zu verstehen.

## Typische Fehler

- **Nur `div` verwenden:** `div` hat keine eigene Bedeutung. Für Navigation, Hauptinhalt oder Artikel gibt es passendere Elemente.
- **Überschriften nach Aussehen wählen:** `h1` bis `h6` beschreiben Struktur, nicht Schriftgröße.
- **`head` und `body` verwechseln:** Sichtbare Inhalte gehören in den `body`.
- **Pfade blind kopieren:** Relative Pfade hängen vom Speicherort der HTML-Datei ab.
- **CSS als Struktur-Ersatz benutzen:** Eine optisch passende Seite kann semantisch trotzdem falsch aufgebaut sein.
- **Fehlende Sprache:** Ohne `lang` können Screenreader Aussprache und Sprachregeln schlechter wählen.

## Abgrenzung

HTML beschreibt die Struktur. CSS gestaltet diese Struktur. JavaScript verändert Verhalten und Zustand. Ein robustes Webdokument beginnt daher nicht bei Animationen oder Frameworks, sondern bei einer sauberen HTML-Grundstruktur.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/web-development/web-html-grundstruktur/html_grundstruktur.html` neu geschrieben und adaptiert. Die Quelle wurde im Legacy-Bestand als CC BY-NC-SA 4.0 geführt. Altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
