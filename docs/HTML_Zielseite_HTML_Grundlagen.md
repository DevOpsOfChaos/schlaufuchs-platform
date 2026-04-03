# HTML/CSS – Zielseite `html-grundlagen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `html-css/html-grundlagen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einsteigerseite zu HTML.

Die Seite soll erklären, was HTML ist, wie eine einfache HTML-Datei aufgebaut ist und welche Grundelemente Lernende zuerst sicher beherrschen sollten.

## Rolle der Seite im neuen HTML/CSS-Aufbau
Die Seite gehört in den Abschnitt:
- HTML/CSS
- HTML-Einstieg

Sie kommt sinnvoll **vor**:
- `html-css/html-semantik-und-struktur`
- `html-css/html-links-bilder-pfade`
- `html-css/css-grundlagen`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was HTML ist
- dass HTML die Struktur einer Webseite beschreibt
- wie ein einfaches HTML-Dokument aufgebaut ist
- wofür grundlegende Elemente wie Überschrift, Absatz und Kommentar da sind
- dass Tags und Attribute zusammenarbeiten

Die Seite soll **noch nicht** zu einer kompletten Referenz oder Tag-Liste werden.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- ausführliche Link- und Bildlogik
- Pfadlogik im Detail
- semantische HTML5-Vertiefung als Hauptfokus
- komplette Tag-Referenzen
- CSS im Detail
- veraltete HTML-Denke als Schwerpunkt

## Altquellen, die nur als Inhaltsbasis dienen
- `html_grundstruktur/html_grundstruktur.html`
- `html_grundstruktur/html_tags.html`
- `html_grundstruktur/html_attribute.html`
- `html_grundstruktur/kommentar01.html`
- `html_tags/html_h.html`
- `html_tags/html_p.html`
- `html_tags/html_b.html`
- `html_tags/html_i.html`
- `html_tags/html_referenz.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- HTML als Struktur- und Inhaltssprache verständlich machen
- mit kleinen echten Codebeispielen arbeiten
- sofort eine sichtbare Vorschau mitdenken
- keine Tag-Sammlung, sondern eine klare Lernseite sein
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was HTML eigentlich ist.

### Inhalt
- Titel: `HTML-Grundlagen verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> HTML beschreibt die Struktur einer Webseite. Überschriften, Absätze, Bilder und Links werden nicht „einfach angezeigt“, sondern über HTML-Elemente aufgebaut.

## 2) Abschnitt: Was ist HTML?
### Ziel
Die Grundidee kurz und verständlich erklären.

### Kernpunkte
- HTML steht für HyperText Markup Language
- HTML beschreibt Inhalte und Struktur
- HTML ist keine Programmiersprache im klassischen Sinn
- Browser lesen HTML und stellen die Inhalte dar

## 3) Abschnitt: Wie ist eine HTML-Datei aufgebaut?
### Ziel
Die Grundstruktur früh sichtbar machen.

### Minimalbeispiel
```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <title>Meine erste Seite</title>
  </head>
  <body>
    <h1>Hallo Welt</h1>
    <p>Das ist mein erster Absatz.</p>
  </body>
</html>
```

### Erklärung
- `<!DOCTYPE html>`
- `<html>` als Dokumentrahmen
- `<head>` für Metadaten
- `<body>` für sichtbare Inhalte

## 4) Abschnitt: Was sind Tags und Elemente?
### Ziel
Die Grundbegriffe sauber einführen.

### Inhalt
- Tags markieren Anfang und Ende
- Elemente bestehen aus Inhalt und Markup
- nicht jedes Detail sofort technisch ausrollen

### Beispiele
- `<h1>...</h1>`
- `<p>...</p>`
- HTML-Kommentar

## 5) Abschnitt: Erste wichtige Elemente
### Ziel
Nur die wirklich zentralen Einstiegselemente erklären.

### Sinnvolle Auswahl
- Überschriften
- Absätze
- Kommentare
- kurze Erwähnung von Hervorhebungen, aber nicht als Referenzwüste

### Beispiele
```html
<h1>Überschrift</h1>
<p>Ein Absatz mit Inhalt.</p>
<!-- Ein Kommentar -->
```

## 6) Abschnitt: Was sind Attribute?
### Ziel
Tag und Attribut früh verbinden.

### Beispiel
```html
<html lang="de">
```

### Erklärung
- Attribute geben zusätzliche Informationen
- sie stehen im öffnenden Tag
- später folgen weitere wichtige Beispiele bei Links und Bildern

## 7) Abschnitt: Code und Vorschau zusammen denken
### Ziel
Die Stärke von HTML für Lernende sofort sichtbar machen.

### Inhalt
- HTML schreiben
- Browser zeigt Ergebnis
- Struktur im Code erzeugt sichtbare Veränderung

## 8) Abschnitt: Typische Anfängerfehler
### Ziel
Die ersten Stolperfallen entschärfen.

### Beispiele
- öffnende und schließende Tags verwechseln
- `<head>` und `<body>` nicht unterscheiden
- HTML mit CSS verwechseln
- zu viele einzelne Tags lernen wollen, bevor die Grundstruktur sitzt

## 9) Lernmodus / interaktive Module
### Modul A: HTML-Struktur sortieren
Bausteine:
- `<!DOCTYPE html>`
- `<html>`
- `<head>`
- `<body>`

### Modul B: Tag oder Attribut?
Beispiele zuordnen:
- `<p>`
- `lang="de"`
- `<title>`

### Modul C: Code → Vorschau
Kleines HTML-Snippet sehen und Ausgabe vorhersagen.

### Modul D: Fehler finden
Minibeispiele mit fehlendem Tag-Ende oder falscher Struktur.

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> HTML beschreibt die Struktur einer Webseite – der Browser macht diese Struktur sichtbar.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie semantische HTML-Struktur Seiten verständlicher und sauberer macht.“

## Visuelle Regeln
- kleine Codeblöcke
- direkte Code-/Vorschau-Paare
- keine Referenzwand
- gute Lesbarkeit in Light/Dark Mode

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen sind:
- kleine Code-/Preview-Komponente
- Struktur-Baustein-Modul für HTML-Dokumente

### Warum
- HTML lernt man besser über echte Codebeispiele als über Screenshots
- Altbilder würden hier fast nur Code ersetzen

## Verbindung zu anderen Zielseiten
### Direkt danach
- `html-css/html-semantik-und-struktur`
- `html-css/html-links-bilder-pfade`
- `html-css/css-grundlagen`

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- den kompletten Fachbereich sauber eröffnet
- ohne Altbilder auskommt
- direkt mit Live-Demos und Lernmodus funktioniert
