# HTML/CSS – Zielseite `css-grundlagen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `html-css/css-grundlagen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zu CSS.

Die Seite soll erklären, was CSS ist, wie Regeln aufgebaut sind und wie HTML und CSS zusammenarbeiten.

## Rolle der Seite im neuen HTML/CSS-Aufbau
Die Seite gehört in den Abschnitt:
- HTML/CSS
- CSS-Einstieg

Sie kommt sinnvoll **nach**:
- `html-css/html-grundlagen`

Und **vor**:
- `html-css/css-box-modell-und-layouts`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was CSS ist
- dass CSS das Aussehen von HTML-Inhalten steuert
- wie eine einfache CSS-Regel aufgebaut ist
- was Selektor, Eigenschaft und Wert bedeuten
- warum externe Stylesheets nützlich sind

Die Seite soll **noch nicht** tief in Layoutsysteme oder Spezialselektoren abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- Box-Modell im Detail
- Grid/Flex als Schwerpunkt
- komplette Selektoren-Referenz
- responsive Vertiefung
- große Designsystem-Theorie

## Altquellen, die nur als Inhaltsbasis dienen
- `css_grundstruktur/css_grundstruktur.html`
- `css_grundstruktur/css_syntax.html`
- `css_grundstruktur/externe_stylesheet_datei.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- CSS als Gestaltungslogik verständlich machen
- mit kleinen HTML/CSS-Paaren arbeiten
- Code und sichtbare Veränderung direkt koppeln
- keine Regelwüste aufbauen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was CSS zur HTML-Seite ergänzt.

### Inhalt
- Titel: `CSS-Grundlagen verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> HTML beschreibt die Struktur einer Seite. CSS bestimmt, wie diese Inhalte aussehen und angeordnet werden.

## 2) Abschnitt: Was ist CSS?
### Ziel
Die Grundidee knapp und verständlich erklären.

### Kernpunkte
- CSS steht für Cascading Style Sheets
- CSS gestaltet HTML-Inhalte
- Farben, Abstände, Schriftgrößen und Layouts werden darüber gesteuert

## 3) Abschnitt: Wie ist eine CSS-Regel aufgebaut?
### Ziel
Die Syntax früh greifbar machen.

### Beispiel
```css
h1 {
  color: blue;
  font-size: 2rem;
}
```

### Erklärung
- `h1` = Selektor
- `color` und `font-size` = Eigenschaften
- `blue` und `2rem` = Werte

## 4) Abschnitt: HTML und CSS zusammen
### Ziel
Die Wirkung von CSS sofort sichtbar machen.

### Mini-Beispiel
HTML:
```html
<h1>Hallo Welt</h1>
```

CSS:
```css
h1 {
  color: blue;
}
```

### Aussage
CSS verändert nicht die Struktur, sondern die Darstellung.

## 5) Abschnitt: Externes Stylesheet verstehen
### Ziel
Die sinnvollste Grundform früh erklären.

### HTML-Beispiel
```html
<link rel="stylesheet" href="styles.css" />
```

### Erklärung
- CSS kann in einer eigenen Datei liegen
- das hält Projekte übersichtlicher
- mehrere HTML-Seiten können dasselbe Stylesheet nutzen

## 6) Abschnitt: Typische erste Eigenschaften
### Ziel
Nur wenige, nützliche Eigenschaften als Einstieg zeigen.

### Sinnvolle Auswahl
- `color`
- `background-color`
- `font-size`
- `text-align`

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Die häufigsten Probleme früh auffangen.

### Beispiele
- Semikolon vergessen
- Eigenschaft und Wert vertauschen
- HTML und CSS durcheinanderwerfen
- glauben, dass CSS Inhalt erzeugt statt Gestaltung steuert
- Datei falsch verknüpfen

## 8) Lernmodus / interaktive Module
### Modul A: Selektor, Eigenschaft oder Wert?
Beispiele zuordnen:
- `p`
- `color`
- `red`

### Modul B: Code → Vorschau
Kleine CSS-Regel sehen und Änderung vorhersagen.

### Modul C: Fehler finden
Mini-CSS mit fehlendem Doppelpunkt oder Semikolon.

### Modul D: HTML-Datei mit CSS verbinden
Bausteine zuordnen:
- `<link ...>`
- `styles.css`

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> CSS gestaltet HTML-Inhalte – der Selektor wählt aus, welche Elemente geändert werden, und Eigenschaften bestimmen, wie sie aussehen.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie Abstände, Rahmen und Layouts mit dem Box-Modell und modernen CSS-Strukturen funktionieren.“

## Visuelle Regeln
- kleine HTML/CSS-/Vorschau-Tripel
- keine riesigen Codeblöcke
- gute Lesbarkeit in Light/Dark Mode

## Bild- und Grafikentscheidung
Alte CSS-Screenshots und kleine Erklärbilder werden **nicht direkt übernommen**.

### Stattdessen neu bauen
Empfohlen sind:
- kleine Live-Vorschau-Module
- HTML/CSS-Vergleichs-Komponenten

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den CSS-Bereich sauber eröffnet
- fast keine Altbilder braucht
- sich perfekt für direkte Demo-Komponenten eignet
