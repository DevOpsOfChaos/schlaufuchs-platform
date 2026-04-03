# HTML/CSS – Zielseite `html-links-bilder-pfade`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `html-css/html-links-bilder-pfade` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine praxisnahe Wissensseite zu Links, Bildern und Dateipfaden in HTML.

Die Seite soll zeigen, wie Webseiten miteinander verbunden werden, wie Bilder eingebunden werden und warum Pfade dabei eine zentrale Rolle spielen.

## Rolle der Seite im neuen HTML/CSS-Aufbau
Die Seite gehört in den Abschnitt:
- HTML/CSS
- HTML-Einstieg

Sie kommt sinnvoll **nach**:
- `html-css/html-grundlagen`
- `html-css/html-semantik-und-struktur`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- wie Hyperlinks mit `<a>` funktionieren
- wie Bilder mit `<img>` eingebunden werden
- was relative und absolute Pfade grob bedeuten
- warum Verzeichnisstruktur und Dateinamen wichtig sind
- wie typische Anfängerfehler bei Links und Bildern entstehen

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- komplette SEO- oder Accessibility-Vertiefung
- komplexe Routing-/Framework-Themen
- responsive Bilder im Vollausbau
- Dateimanagement im Serverbetrieb
- CSS-Bildstyling als Hauptthema

## Altquellen, die nur als Inhaltsbasis dienen
- `html_grundstruktur/html_hyperlinks.html`
- `html_grundstruktur/html_bilder.html`
- `html_grundstruktur/html_verzeichnisstruktur.html`
- `aufgaben_html/Seiten- und Verzeichnisstruktur.html`
- passende Altaufgaben aus `aufgaben_html/*`

## Zielcharakter der neuen Seite
Die Seite soll:
- Links, Bilder und Pfade als zusammenhängendes Praxis-Thema erklären
- mit sehr kleinen echten Codebeispielen arbeiten
- sofort sichtbare Vorschau-/Fehlerfälle zeigen
- nicht in Referenzlisten oder Theorieballast abrutschen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, warum dieses Thema für echte Webseiten wichtig ist.

### Inhalt
- Titel: `Links, Bilder und Pfade in HTML`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Webseiten bestehen nicht nur aus Text. Links verbinden Seiten miteinander, Bilder ergänzen Inhalte, und Pfade sorgen dafür, dass Dateien am richtigen Ort gefunden werden.

## 2) Abschnitt: Hyperlinks mit `<a>`
### Ziel
Den wichtigsten Verbindungs-Tag erklären.

### Beispiel
```html
<a href="kontakt.html">Zur Kontaktseite</a>
```

### Erklärung
- `<a>` erzeugt einen Link
- `href` enthält das Ziel
- der sichtbare Text steht zwischen öffnendem und schließendem Tag

## 3) Abschnitt: Bilder mit `<img>`
### Ziel
Die Einbindung von Bildern knapp und sauber erklären.

### Beispiel
```html
<img src="bilder/logo.png" alt="Logo der Seite" />
```

### Erklärung
- `src` zeigt auf die Bilddatei
- `alt` beschreibt den Bildinhalt
- `<img>` ist ein leeres Element ohne separaten Schlusstag im üblichen Gebrauch

## 4) Abschnitt: Was ist ein Pfad?
### Ziel
Die zugrunde liegende Dateilogik verständlich machen.

### Inhalt
- ein Pfad beschreibt, wo eine Datei liegt
- HTML-Dateien und Bilder müssen über diese Struktur gefunden werden
- Verzeichnisnamen und Dateinamen müssen zusammenpassen

## 5) Abschnitt: Relative und absolute Pfade grob einordnen
### Ziel
Nur die alltagsrelevante Grundidee erklären.

### Inhalt
- relative Pfade beziehen sich auf den aktuellen Ort der Datei
- absolute Pfade sind vollständiger oder vom festen Startpunkt aus gedacht
- für Einsteiger sind relative Pfade im Projektalltag oft der wichtigere Einstieg

### Beispiele
```html
<a href="seiten/kontakt.html">Kontakt</a>
<img src="bilder/foto.jpg" alt="Beispielfoto" />
```

## 6) Abschnitt: Verzeichnisstruktur praktisch denken
### Ziel
Die Verbindung zwischen Ordnerstruktur und HTML klar machen.

### Inhalt
- Dateien sinnvoll organisieren
- Bilder nicht irgendwo verteilen
- Links und Bilder hängen direkt von der Projektstruktur ab

### Form
kleines Projektbaum-Beispiel statt langer Theorie

## 7) Abschnitt: Typische Anfängerfehler
### Ziel
Die häufigsten realen Probleme früh auffangen.

### Beispiele
- Dateiname stimmt nicht exakt
- Pfad zeigt in den falschen Ordner
- Linktext und Linkziel werden verwechselt
- Bild wird nicht angezeigt, weil der Pfad falsch ist
- `alt` wird weggelassen

## 8) Lernmodus / interaktive Module
### Modul A: Link oder Bild?
Beispiele zuordnen:
- `<a href="...">`
- `<img src="..." alt="..." />`

### Modul B: Welcher Pfad passt?
Kleine Ordnerstruktur zeigen und passendes Ziel wählen.

### Modul C: Fehler finden
Kurze HTML-Beispiele mit absichtlich falschem Bild- oder Linkpfad.

### Modul D: Code → Vorschau
Vorhersagen:
- Wo führt der Link hin?
- Wird das Bild angezeigt?

## 9) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Links, Bilder und Pfade verbinden Inhalte miteinander – nur mit der richtigen Dateistruktur funktioniert eine Webseite zuverlässig.

## 10) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie CSS aus dieser strukturierten HTML-Seite ein gestaltetes Layout macht.“

## Visuelle Regeln
- kleine Code-/Vorschau-Paare
- einfache Ordnerbaum-Komponente
- klare Fehler-vs.-korrekt-Darstellungen
- gute Lesbarkeit in Light/Dark Mode

## Bild- und Grafikentscheidung
Alte Bildbeispiele und Aufgabenscreenshots werden **nicht direkt übernommen**.

### Stattdessen neu bauen
Empfohlen sind:
- kleine Ordnerstruktur-Komponente
- echte Code-/Preview-Demos
- Pfad-Zuordnungsmodul

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- direkt sichtbaren Praxisnutzen hat
- viele Altaufgaben in gute Mini-Module übersetzen kann
- fast keine Altbilder braucht
