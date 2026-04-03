# HTML/CSS – Zielseite `html-semantik-und-struktur`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `html-css/html-semantik-und-struktur` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu semantischer HTML-Struktur.

Die Seite soll zeigen, warum HTML nicht nur aus beliebigen Tags besteht, sondern warum die Bedeutung von Elementen für Lesbarkeit, Struktur und Wartbarkeit wichtig ist.

## Rolle der Seite im neuen HTML/CSS-Aufbau
Die Seite gehört in den Abschnitt:
- HTML/CSS
- HTML-Einstieg

Sie kommt sinnvoll **nach**:
- `html-css/html-grundlagen`

Und **vor oder parallel zu**:
- `html-css/html-links-bilder-pfade`
- spätere Projekt- und Komponentenbeispiele

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was semantisches HTML bedeutet
- warum `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` und `<figure>` nützlich sind
- warum eine saubere Struktur wichtiger ist als reine Optik
- wie semantische Elemente eine Seite lesbarer machen

Die Seite soll **nicht** zu einer Vollreferenz aller HTML5-Elemente werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- komplette HTML-Referenz
- CSS-Layout-Erklärung als Hauptthema
- ARIA-/Accessibility-Vertiefung im Vollausbau
- Spezialfälle jeder Elementkategorie
- Tag-Fetischismus ohne Strukturbezug

## Altquellen, die nur als Inhaltsbasis dienen
- `html_grundstruktur/html5_semantik.html`
- `html_grundstruktur/html_element_kategorien.html`
- `html_tags/html_figure.html`
- `html_grundstruktur/html_tags.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- Struktur und Bedeutung zusammen erklären
- mit wenigen, starken Beispielen arbeiten
- Alt-Tag-Splitter in einer klaren Seite bündeln
- mit Code-/Vorschau-Logik arbeiten
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was „semantisch“ in HTML bedeutet.

### Inhalt
- Titel: `Semantische HTML-Struktur`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Gutes HTML beschreibt nicht nur, wie Inhalte aussehen, sondern auch, welche Aufgabe sie auf der Seite haben.

## 2) Abschnitt: Was bedeutet semantisches HTML?
### Ziel
Den Begriff verständlich und unverkopft erklären.

### Kernpunkte
- Elemente tragen Bedeutung
- Struktur wird lesbarer
- Code bleibt leichter wartbar
- dieselbe Seite ist besser verständlich aufgebaut

## 3) Abschnitt: Wichtige semantische Bereiche
### Ziel
Die zentralen HTML5-Strukturelemente einführen.

### Sinnvolle Auswahl
- `<header>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- optional kurze Einordnung von `<nav>`

### Mini-Beispiel
```html
<header>...</header>
<main>
  <section>...</section>
</main>
<footer>...</footer>
```

## 4) Abschnitt: Inhalte sinnvoll gruppieren
### Ziel
Nicht nur einzelne Tags, sondern Seitenlogik erklären.

### Inhalt
- Hauptbereich vs. Randbereich
- zusammengehörige Inhalte in Sektionen
- eigenständige Inhalte als Artikel denken

## 5) Abschnitt: `figure` und beschreibende Inhalte
### Ziel
Ein häufig isoliert erklärtes Element sauber einordnen.

### Beispiel
```html
<figure>
  <img src="diagramm.png" alt="Ein einfaches Diagramm" />
  <figcaption>Beispiel für eine beschriftete Grafik</figcaption>
</figure>
```

### Erklärung
- Bild und Beschreibung gehören logisch zusammen

## 6) Abschnitt: Semantik ist nicht Styling
### Ziel
Einen zentralen Denkfehler verhindern.

### Inhalt
- HTML sagt, was etwas ist
- CSS sagt später, wie es aussieht
- gleiche Optik kann mit besserer oder schlechterer HTML-Struktur gebaut werden

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Strukturelle Stolperfallen entschärfen.

### Beispiele
- nur generische Container verwenden, ohne Grundidee zu verstehen
- Semantik mit Design verwechseln
- Struktur willkürlich statt logisch aufbauen
- zu viele Einzel-Tags auswendig lernen statt ihre Rolle zu verstehen

## 8) Lernmodus / interaktive Module
### Modul A: Welches Element passt?
Situationen zuordnen:
- Seitenkopf
- Hauptinhalt
- einzelner Artikel
- Fußbereich

### Modul B: Code → Seitenstruktur
Kurzes HTML-Snippet lesen und Bereiche erkennen.

### Modul C: Semantik oder nur Optik?
Aussagen bewerten:
- HTML beschreibt Struktur
- CSS beschreibt Layout

### Modul D: `figure` richtig einsetzen
Bild + Beschreibung als Bausteine zusammensetzen.

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Semantisches HTML beschreibt nicht nur Inhalt, sondern auch die Aufgabe und Struktur dieses Inhalts auf der Seite.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie Links, Bilder und Pfade in echten Seiten zusammenspielen.“

## Visuelle Regeln
- kleine Strukturdiagramme
- Code-/Vorschau-Paare
- keine riesige Elementliste
- gute Lesbarkeit in Light/Dark Mode

## Bild- und Grafikentscheidung
Alte Semantik- oder Tag-Bilder werden **nicht direkt übernommen**.

### Stattdessen neu bauen
Empfohlen sind:
- Seitenstruktur-Komponente
- `figure`-Beispiel als echte Demo

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- viele alte Mini-Tagseiten sauber bündelt
- ohne Altbilder auskommt
- HTML fachlich deutlich professioneller macht
