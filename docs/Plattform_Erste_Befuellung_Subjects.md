# Plattform – erste Befüllung der `subjects`

## Zweck dieser Datei
Diese Datei legt fest, **welche Fachbereiche (`subjects`) zuerst im echten Repo-Modell sauber befüllt und vereinheitlicht** werden sollen.

Sie ist der erste Schritt von der Planungsphase in die konkrete Content-Befüllung.

## Ausgangslage
Die Plattform arbeitet bereits mit einer `subjects`-Collection.

Die Fachplanung ist inzwischen fachlich weitgehend vollständig. Jetzt geht es darum, diese Fachstruktur in der Plattform zuerst **stabil und konsistent** abzubilden.

## Ziel der ersten Subject-Befüllung
Die erste Welle soll nicht alles auf einmal perfekt machen, sondern:
- die Hauptfächer sauber festziehen
- Namen, Slugs und Beschreibungen stabilisieren
- die Basis für Fach-Landingpages schaffen
- die spätere Andockung von `articles` und `exercises` vorbereiten

## Soll-Fächer der ersten Welle
Die Plattform soll in der ersten Befüllungswelle genau diese Hauptfächer klar tragen:
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

## Wichtige Konsistenzregeln
## 1) Keine konkurrierenden Zusatz-Hauptfächer
### Gilt besonders für
- `Daten & Signale`
- `HTML/CSS`

### Zielbild
- `Daten & Signale` bleibt ein Themenblock innerhalb von `elektrotechnik`
- `HTML/CSS` bleibt ein Themenblock innerhalb von `web-development`

## 2) Jeder Subject-Eintrag braucht eine klare Produktrolle
Ein Fachbereichs-Eintrag soll nicht nur ein Titel sein, sondern eine echte Plattformbeschreibung tragen.

## Empfohlene Minimalfelder für die erste Subject-Welle
Die erste Befüllung sollte pro Fachbereich mindestens enthalten:
- `title`
- `slug`
- `description`
- `order`
- `accent`

### Zusätzlich sehr sinnvoll
- `heroTitle`
- `heroText`
- `intro`
- `highlights`
- `entryPath`

## Empfohlene Reihenfolge für die erste Subject-Befüllung
## 1) Mathematik
### Warum zuerst?
- stärkster Aufgabenbereich
- klare Fachidentität
- viele spätere `articles` und `exercises`

### Rolle auf der Plattform
- großer Übungs- und Wissensbereich
- Einstieg über Funktionen, Graphen und Analysis

## 2) Linux
### Warum früh?
- sehr klare Lernpfadlogik
- starker Mix aus Wissen und Praxis
- gute spätere Aufgabenintegration

### Rolle auf der Plattform
- Systemverständnis + Shell + Rechte + SSH + Skripte

## 3) Web Development
### Warum früh?
- übersichtlicher Einstieg
- direkt sichtbare Ergebnisse
- gute Demo-/Preview-Logik

### Rolle auf der Plattform
- HTML/CSS als klarer Einstieg in Web-Grundlagen

## 4) Informatik
### Warum direkt danach?
- kompakter Fachbereich
- gute Verbindung von Grundideen und Programmierung

### Rolle auf der Plattform
- Einstieg in Informatik und C-basierte Programmierlogik

## 5) Elektrotechnik
### Warum in derselben Welle, aber potenziell nachgezogen?
- inhaltlich am breitesten
- viele Unterblöcke
- braucht besonders klare Description- und Highlight-Logik

### Rolle auf der Plattform
- Theorie, Rechnen, Bauelemente, Kommunikation, Mikrocontroller

## Empfohlene Inhalte pro Subject
## Mathematik
### Entry Path
- Funktionen und Graphen

### Highlights
- Funktionen
- Analysis
- Vektorgeometrie
- Aufgaben

## Linux
### Entry Path
- Shell und Prompt

### Highlights
- Shell
- Rechte
- Shellskripte
- SSH

## Web Development
### Entry Path
- HTML-Grundlagen

### Highlights
- HTML
- CSS
- Layout
- Praxisübungen

## Informatik
### Entry Path
- Informatik-Einstieg

### Highlights
- Informatik-Grundlagen
- Programmierung
- C
- Code-Aufgaben

## Elektrotechnik
### Entry Path
- Computer und CPU-Grundlagen

### Highlights
- Daten und Kommunikation
- Halbleiter
- Netzwerke und Aufgaben
- Mikrocontroller

## Empfohlene erste Umsetzungsreihenfolge im Repo
### Welle A – zuerst stabil machen
- Mathematik
- Linux
- Web Development

### Welle B – direkt danach
- Informatik
- Elektrotechnik

## Warum diese Reihenfolge sinnvoll ist
- Mathematik und Linux haben die klarste fachliche und didaktische Struktur
- Web Development ist klein genug, um schnell sauber zu werden
- Informatik ist kompakt und gut anschließbar
- Elektrotechnik profitiert davon, wenn die Plattformlogik bis dahin schon sauber sitzt

## Ergebnis der ersten Subject-Welle
Nach dieser Welle soll im Repo klar und konsistent feststehen:
- welche Hauptfächer die Plattform trägt
- wie die Fächer beschrieben werden
- wie Nutzer in einen Fachbereich einsteigen
- wie spätere `articles` und `exercises` an die Fachseiten andocken

## Zusammenfassung
Die erste Befüllung der `subjects` soll nicht bloß Titel eintragen, sondern die **Fachidentität der Plattform festziehen**.

Dafür werden zuerst die fünf Hauptfächer sauber und konsistent modelliert – mit besonders frühem Fokus auf:
- Mathematik
- Linux
- Web Development
