---
title: "HTML5-Semantik"
description: "Technische Referenz zu semantischen HTML5-Elementen: header, nav, main, article, section, aside, footer, figure und deren Abgrenzung."
subject: "web-development"
section: "HTML"
topicPath: ["html", "semantische-elemente"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["web-development", "HTML5", "Semantik", "Accessibility", "Dokumentstruktur"]
draft: false
---

Semantische HTML-Elemente beschreiben die inhaltliche Rolle eines Dokumentbereichs. Sie ersetzen nicht CSS und erzeugen nicht automatisch ein gutes Layout. Ihr Zweck ist eine klarere Dokumentstruktur.

## Definition und Grundidee

Ein semantisches Element trägt eine Bedeutung im Namen. `nav` steht für Navigation, `main` für Hauptinhalt, `article` für einen eigenständig verständlichen Inhalt. Ein `div` ist dagegen nur ein neutraler Container.

Semantik beantwortet die Frage:

```text
Welche Rolle hat dieser Bereich im Dokument?
```

Nicht:

```text
Wie soll dieser Bereich aussehen?
```

## Warum Semantik wichtig ist

Semantische Struktur hilft mehreren Systemen:

- Browser und Entwicklerwerkzeuge können Bereiche besser einordnen.
- Screenreader und andere assistive Technologien erhalten Orientierung.
- Suchmaschinen können Hauptinhalt, Navigation und Randbereiche besser unterscheiden.
- Entwickler erkennen beim Lesen des Quelltexts schneller die Dokumentlogik.

Semantik ist deshalb ein technisches Strukturmittel, kein reines SEO-Dekor.

## Zentrale Elemente

### `header`

`header` enthält einleitende Inhalte für eine Seite oder einen Abschnitt. Typisch sind Logo, Titel, kurze Einleitung oder Navigationsbezug.

```html
<header>
  <h1>HTML5-Semantik</h1>
</header>
```

Eine Seite kann mehrere `header`-Bereiche haben, etwa innerhalb einzelner Artikel. Sie dürfen aber nicht als beliebiger Abstandhalter missbraucht werden.

### `nav`

`nav` markiert einen Bereich mit wichtigen Navigationslinks.

```html
<nav aria-label="Hauptnavigation">
  <a href="/html">HTML</a>
  <a href="/css">CSS</a>
</nav>
```

Nicht jede Linkliste ist automatisch eine Navigation. Ein einzelner Quellenlink im Fließtext braucht normalerweise kein `nav`.

### `main`

`main` enthält den Hauptinhalt einer Seite. Pro Dokument sollte es nur einen sichtbaren `main`-Bereich geben.

```html
<main>
  <h1>Artikelüberschrift</h1>
  <p>Hauptinhalt der Seite.</p>
</main>
```

Wiederkehrende Navigation, Header, Footer und Seitenleisten gehören nicht in `main`, wenn sie nicht Teil des eigentlichen Hauptinhalts sind.

### `article`

`article` kennzeichnet einen Inhalt, der für sich verständlich und wiederverwendbar ist. Beispiele sind Fachartikel, Blogbeiträge, News, Aufgaben oder Dokumentationsseiten.

```html
<article>
  <h2>Diodenkennlinie</h2>
  <p>Eine Diode besitzt kein lineares Strom-Spannungs-Verhalten.</p>
</article>
```

Ein `article` darf eigene Überschrift, Abschnitte und Fußinformationen enthalten.

### `section`

`section` gliedert einen zusammengehörigen Themenabschnitt. Eine `section` sollte normalerweise eine Überschrift besitzen.

```html
<section>
  <h2>Typische Fehler</h2>
  <p>Semantische Elemente werden oft nur nach dem Layout gewählt.</p>
</section>
```

Wenn ein Bereich nur für Styling oder Gruppierung gebraucht wird, ist `div` oft ehrlicher als `section`.

### `aside`

`aside` enthält ergänzende Informationen, die nicht zum Hauptfluss gehören. Beispiele sind weiterführende Links, Randnotizen oder Zusatzinformationen.

```html
<aside>
  <h2>Verwandte Themen</h2>
  <a href="/css/boxmodell">CSS-Boxmodell</a>
</aside>
```

Ein `aside` ist nicht automatisch eine rechte Spalte. Die Position ist CSS-Sache.

### `footer`

`footer` enthält abschließende Informationen zu einer Seite oder einem Abschnitt: Impressum, Kontakt, Quellen, Aktualisierungsdatum oder verwandte Links.

```html
<footer>
  <p>Quelle und Lizenzhinweise</p>
</footer>
```

Wie `header` kann auch `footer` innerhalb von Artikeln oder Abschnitten auftreten.

### `figure` und `figcaption`

`figure` gruppiert eine Abbildung, ein Diagramm, ein Codebeispiel oder eine andere eigenständige Illustration. `figcaption` beschreibt diese Einheit.

```html
<figure>
  <img src="/kennlinie.svg" alt="Diodenkennlinie mit Messpunkten">
  <figcaption>Diodenkennlinie aus Messwerten.</figcaption>
</figure>
```

`alt` ersetzt die Bildinformation; `figcaption` ist eine sichtbare Beschriftung. Beides ist nicht dasselbe.

## `div` bleibt erlaubt

Semantische Elemente machen `div` nicht überflüssig. `div` ist passend, wenn ein Container nur für Layout, Styling oder technische Gruppierung benötigt wird und keine eigene Bedeutung trägt.

Ein häufiger Fehler ist die Umkehrung: Entweder wird alles mit `div` gebaut, oder jedes Layout-Element bekommt willkürlich ein semantisches Element. Beides verschlechtert die Struktur.

## Typische Fehler

- **`section` ohne fachlichen Abschnitt:** Wenn keine Überschrift sinnvoll wäre, ist `section` meist falsch.
- **Mehrere sichtbare `main`-Bereiche:** Der Hauptinhalt sollte eindeutig bleiben.
- **`article` für beliebige Kacheln:** Eine Kachel ist nur dann ein Artikel, wenn ihr Inhalt eigenständig verständlich ist.
- **`aside` nach Layoutposition wählen:** Die Bedeutung ist ergänzend, nicht „rechts“.
- **`header` nur als Kopfzeilen-Styling verwenden:** Die semantische Rolle muss zum Inhalt passen.
- **`alt` und `figcaption` verwechseln:** Alternativtext und sichtbare Bildbeschriftung haben verschiedene Aufgaben.

## Abgrenzung

HTML5-Semantik legt die Dokumentstruktur fest. CSS bestimmt das Aussehen. ARIA kann Semantik ergänzen, sollte aber keine falsch gewählte oder fehlende HTML-Struktur kaschieren. Wenn ein passendes HTML-Element existiert, ist es meistens robuster als eine nachträgliche ARIA-Rolle.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/web-development/web-html5-semantik/html5_semantik.html` neu geschrieben und adaptiert. Die Quelle wurde im Legacy-Bestand als CC BY-NC-SA 4.0 geführt, mit Autorenkürzel JW und Datum 15.06.2020. Altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
