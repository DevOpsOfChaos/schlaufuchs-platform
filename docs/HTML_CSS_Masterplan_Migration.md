# HTML/CSS – Masterplan Migration und Neuaufbau

## Zweck dieser Datei
Diese Datei bündelt den Neuaufbau des Fachbereichs **HTML/CSS** als zentrale Arbeitsgrundlage.

Sie fasst zusammen:
- welche Altseiten nur noch als Inhaltsquelle dienen
- welche neuen Zielseiten entstehen sollen
- welche alten Bilder und Aufgaben entfallen
- welche Themen zusammengeführt werden
- in welcher Reihenfolge HTML/CSS sinnvoll neu aufgebaut wird

## Grundsatz für HTML/CSS
Die alte HTML/CSS-Seite dient nur noch als Quelle für:
- Themenstruktur
- mögliche Inhalte
- alte Beispiele
- einzelne eventuell brauchbare Fachgrafiken

Sie wird **nicht technisch übernommen**.
Alle Seiten werden neu geschrieben, neu strukturiert und an die neue Schlaufuchs-Optik angepasst.

## Ergebnis der Altanalyse
### Umfang
- 34 HTML-Seiten im Altbereich
- davon ein überschaubarer Kernbereich zu:
  - HTML-Grundlagen
  - HTML-Tags/Attribute
  - Hyperlinks, Bilder und Pfade
  - HTML5-Semantik
  - CSS-Grundlagen und Syntax
  - Box-Modell
  - externe Stylesheets
  - Layouts wie Grid oder zweispaltige Strukturen

### Altbestand, der bewusst nicht übernommen wird
- Aufgabenblätter als eigene Seiten
- alte HTML-Referenzseiten in ihrer bisherigen Struktur
- Kleinstseiten zu einzelnen Tags ohne neue didaktische Einordnung
- Code- oder Layoutdarstellungen als Bildersatz
- alte Navigations- und CSS-Struktur

## Bildregel für HTML/CSS
Grundsätzlich gilt:
- Codebilder: **raus**
- Browser-/UI-Screenshots: **raus**, außer absolut notwendig
- Box-Modell-/Layoutgrafiken: meist **neu bauen**
- kleine Dekografiken: **raus**
- HTML-/CSS-Beispiele möglichst als echte Codeblöcke und Live-Demos zeigen

## Alte Kernquellen nach Themen
### HTML-Grundlagen
- `html_grundstruktur/html_grundstruktur.html`
- `html_grundstruktur/html_tags.html`
- `html_grundstruktur/html_attribute.html`
- `html_grundstruktur/kommentar01.html`
- `html_tags/html_h.html`
- `html_tags/html_p.html`
- `html_tags/html_b.html`
- `html_tags/html_i.html`
- `html_tags/html_figure.html`
- `html_tags/html_referenz.html`

### HTML-Struktur, Links, Bilder, Pfade
- `html_grundstruktur/html_hyperlinks.html`
- `html_grundstruktur/html_bilder.html`
- `html_grundstruktur/html_verzeichnisstruktur.html`
- `aufgaben_html/Seiten- und Verzeichnisstruktur.html`

### HTML5-Semantik
- `html_grundstruktur/html5_semantik.html`
- `html_grundstruktur/html_element_kategorien.html`

### CSS-Grundlagen
- `css_grundstruktur/css_grundstruktur.html`
- `css_grundstruktur/css_syntax.html`
- `css_grundstruktur/externe_stylesheet_datei.html`

### CSS-Box-Modell und Layout
- `css_grundstruktur/CSS_box_modell.html`
- `css_grundstruktur/Das W3C Box-Modell.html`
- `css_grundstruktur/Das Border-Box-Modell.html`
- `css_grundstruktur/css_grid_layout.html`
- `css_grundstruktur/css_zentrierte_ausgabe.html`
- `css_grundstruktur/css_zweispaltiges_layout.html`

### Aufgabenblöcke
- `aufgaben_html/*`
- `aufgaben_css/*`

Diese werden später als:
- Lernmodus-Module
- Mini-Übungen
- Live-Demos
- kleine Challenge-Blöcke

neu eingebaut, aber **nicht** als Altseiten übernommen.

## Zielstruktur für HTML/CSS im Relaunch
## A. HTML-Einstieg
### Neue Zielseiten
- `html-css/html-grundlagen`
- `html-css/html-semantik-und-struktur`
- `html-css/html-links-bilder-pfade`

### Zweck
- HTML als Sprache für Seitenstruktur erklären
- grundlegende Elemente sauber einführen
- moderne, klare Beispiele statt Tag-Flickenteppich nutzen

## B. CSS-Einstieg
### Neue Zielseiten
- `html-css/css-grundlagen`
- `html-css/css-box-modell-und-layouts`

### Zweck
- CSS als Gestaltungs- und Layoutsprache erklären
- Syntax, Selektoren und Stylesheet-Grundidee einführen
- Box-Modell, Zentrierung, Grid und einfache Layoutlogik modern zusammenziehen

## C. Spätere Vertiefungen
Sinnvoll, aber nicht erste Priorität:
- CSS-Spezialthemen
- responsive Vertiefung
- größere HTML-Referenzen
- Komponenten-/Projektseiten
- fortgeschrittene Layoutsysteme

## Empfohlene Gesamt-Reihenfolge
1. `html-grundlagen`
2. `html-semantik-und-struktur`
3. `html-links-bilder-pfade`
4. `css-grundlagen`
5. `css-box-modell-und-layouts`

## Interaktive Standards für HTML/CSS
### 1) Code-vs.-Vorschau-Module
Für:
- HTML-Grundstruktur
- Links
- Bilder
- kleine CSS-Regeln

### 2) Baustein-Sortierer
Für:
- HTML-Dokumentstruktur
- semantische Elemente
- Tag-/Attribut-Zuordnung

### 3) Live-Einstellmodule
Für:
- Margin / Padding / Border
- Zentrierung
- Grid-Grundlagen

### 4) Mini-Checks im Lernmodus
Für:
- korrekter HTML-Aufbau
- Linkziel erkennen
- Pfade richtig zuordnen
- CSS-Syntax verstehen

## HTML/CSS-spezifische Qualitätsregeln
- Code nie als Bild übernehmen
- Beispiele klein und lesbar halten
- Vorschau immer klar von Code trennen
- Light/Dark gut lesbar
- keine veralteten Layouttechniken als Hauptweg darstellen
- alte Referenzseiten nicht blind in neue Unterseiten zerlegen
- Merksatz auf jeder Seite

## Empfehlenswerte erste echte Build-Kandidaten
- `html-grundlagen`
- `css-grundlagen`
- `css-box-modell-und-layouts`

Diese drei sind besonders stark, weil sie:
- viel Altmaterial fachlich nutzen können
- fast keine Altbilder brauchen
- sehr gut als neue Demo-/Preview-Seiten funktionieren
