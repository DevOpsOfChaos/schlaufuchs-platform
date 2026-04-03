# HTML/CSS – Zielseite `css-box-modell-und-layouts`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `html-css/css-box-modell-und-layouts` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu Box-Modell, Abständen und ersten Layoutprinzipien mit CSS.

Die Seite soll Box-Modell, Zentrierung und moderne Einstiegs-Layouts in einem sauberen didaktischen Zusammenhang zeigen.

## Rolle der Seite im neuen HTML/CSS-Aufbau
Die Seite gehört in den Abschnitt:
- HTML/CSS
- CSS-Einstieg

Sie kommt sinnvoll **nach**:
- `html-css/css-grundlagen`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- wie das CSS-Box-Modell funktioniert
- was `content`, `padding`, `border` und `margin` bedeuten
- warum `box-sizing` wichtig ist
- wie einfache Layouts mit CSS strukturiert werden
- warum moderne Layouts besser erklärt werden sollten als alte Bastellösungen

Die Seite soll **nicht** zu einer kompletten Layout-Bibliothek oder Framework-Seite werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe responsive Strategien im Vollausbau
- komplette Grid-/Flex-Referenzen
- historische Layouttricks als Hauptweg
- Designsysteme und Komponentenarchitektur
- komplexe Produktionslayouts mit vielen Sonderfällen

## Altquellen, die nur als Inhaltsbasis dienen
- `css_grundstruktur/CSS_box_modell.html`
- `css_grundstruktur/Das W3C Box-Modell.html`
- `css_grundstruktur/Das Border-Box-Modell.html`
- `css_grundstruktur/css_grid_layout.html`
- `css_grundstruktur/css_zentrierte_ausgabe.html`
- `css_grundstruktur/css_zweispaltiges_layout.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- Box-Modell und Layout praxisnah zusammenführen
- statt alter Bildgrafiken mit echten Demo-Komponenten arbeiten
- alte Layout-Seiten in einer modernen Logik bündeln
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, warum Box-Modell und Layout zusammengehören.

### Inhalt
- Titel: `Box-Modell und Layouts mit CSS`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Damit HTML-Inhalte nicht nur farbig, sondern auch sauber angeordnet erscheinen, braucht man ein Verständnis für Abstände, Rahmen und Layoutstrukturen.

## 2) Abschnitt: Was ist das Box-Modell?
### Ziel
Die Grundidee verständlich erklären.

### Kernpunkte
- jedes Element kann als Box gedacht werden
- diese Box hat Inhalt, Innenabstand, Rahmen und Außenabstand

### Grundteile
- content
- padding
- border
- margin

## 3) Abschnitt: Box-Modell sichtbar machen
### Ziel
Die Bestandteile nicht nur nennen, sondern zeigen.

### Beispiel-CSS
```css
.box {
  padding: 16px;
  border: 2px solid #333;
  margin: 24px;
}
```

### Erklärung
- `padding` schafft Platz innen
- `border` zeichnet den Rahmen
- `margin` schafft Abstand nach außen

## 4) Abschnitt: `box-sizing` verständlich einordnen
### Ziel
Den wichtigen Unterschied früh erklären.

### Inhalt
- Standarddenken vs. `border-box`
- warum `box-sizing: border-box;` oft leichter planbar ist

### Beispiel
```css
* {
  box-sizing: border-box;
}
```

## 5) Abschnitt: Zentrierung und einfache Struktur
### Ziel
Direkt nützliche Layoutlogik zeigen.

### Inhalt
- Inhalte sinnvoll begrenzen
- zentrierte Bereiche als häufiges Grundmuster
- nicht in alte Hacks oder überholte Tricks abrutschen

## 6) Abschnitt: Erste Layoutideen
### Ziel
Moderne Layouts auf Einstiegsebene einführen.

### sinnvolle Themen
- einfacher zweispaltiger Aufbau als Konzept
- Grid-Grundidee als moderne Struktur
- Layout = Anordnung, nicht nur Farben und Schriften

### kleines Grid-Beispiel
```css
.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Praktische Stolperfallen entschärfen.

### Beispiele
- `margin` und `padding` verwechseln
- Box-Größe falsch einschätzen
- zu früh komplexe Layouts bauen wollen
- alte Layoutideen übernehmen, obwohl moderne Strukturen klarer sind
- Box-Modell nur auswendig lernen statt visuell verstehen

## 8) Lernmodus / interaktive Module
### Modul A: Was ist was?
Box-Modell-Bereiche zuordnen:
- content
- padding
- border
- margin

### Modul B: Live-Regler
Werte verändern:
- padding
- border
- margin

und visuell sehen, was passiert.

### Modul C: `box-sizing` vergleichen
Zwei Boxen vergleichen:
- Standardverhalten
- `border-box`

### Modul D: Einfaches Layout erkennen
Kleines CSS-Grid oder zweispaltige Struktur lesen und Wirkung vorhersagen.

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Das Box-Modell erklärt, wie Platz, Rahmen und Abstände eines Elements aufgebaut sind – und bildet damit die Grundlage für saubere CSS-Layouts.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Später kannst du darauf aufbauend komplexere Layouts und responsive Strukturen entwickeln.“

## Visuelle Regeln
- keine Altgrafiken direkt übernehmen
- Box-Modell als neue SVG-/UI-Komponente bauen
- kleine Live-Demos statt statischer Erklärbilder
- gute Lesbarkeit in Light/Dark Mode

## Bild- und Grafikentscheidung
### Alte Box-Modell-Grafiken
- `Boxmodell-detail_jw_web.png`
- `Border_Boxmodell_jw_web.png`

werden **nicht direkt übernommen**.

### Stattdessen neu bauen
Empfohlen sind:
- interaktive Box-Modell-Komponente
- kleine Layout-Demo mit Grid/Zentrierung

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- mehrere alte CSS-Seiten modern zusammenführt
- ohne Altbild-Übernahme auskommt
- mit Live-Komponenten besonders stark funktioniert
- den CSS-Bereich fachlich deutlich professioneller macht
