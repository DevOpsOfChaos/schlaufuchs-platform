# Linux – Zielseite `streams-und-umleitungen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `linux/streams-und-umleitungen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu Standardkanälen und Umleitungen in der Linux-Shell.

Die Seite soll erklären, dass Programme in der Shell mit Eingaben, Ausgaben und Fehlermeldungen arbeiten – und dass sich diese gezielt umleiten lassen.

## Rolle der Seite im neuen Linux-Aufbau
Die Seite gehört in den Abschnitt:
- Linux
- Shell-Grundlagen

Sie kommt sinnvoll **nach**:
- `linux/shell-und-prompt`

Und **vor**:
- `linux/pipes-und-befehle-kombinieren`
- spätere Shell-Werkzeugseiten
- spätere Shellskript-Vertiefungen

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- dass es Standard-Eingabe, Standard-Ausgabe und Fehlerausgabe gibt
- dass normale Ausgaben und Fehlermeldungen getrennt sein können
- wie einfache Umleitungen mit `>`, `>>`, `2>` und `2>>` funktionieren
- wann eine Datei überschrieben und wann angehängt wird
- warum Umleitungen in der Shell praktisch sind

Die Seite soll **noch nicht** tief in komplexe Verkettungen oder Dateideskriptoren abgleiten.

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- Pipes im Detail
- komplexe Umleitungs-Kombinationen als Einstieg
- Shellskript-Fehlerbehandlung im Detail
- Prozesssteuerung
- lange Theorie zu Dateideskriptoren
- Spezialformen wie `2>&1` als Hauptfokus der Einstiegsseite

## Altquellen, die nur als Inhaltsbasis dienen
- `linux/linux_shell/linux_shell.html`
- `linux/linux_aufgaben/linux_aufgaben_shell.html`
- `linux/linux_shell/linux_shell_aufgabe_01.html`
- `linux/linux_shell/linux_shell_aufgabe_02.html`

## Zielcharakter der neuen Seite
Die Seite soll:
- Standardkanäle einfach und nützlich erklären
- Umleitungen immer mit sichtbarem Ergebnis zeigen
- kurze, echte Shell-Beispiele nutzen
- normale Ausgabe und Fehlerausgabe sauber trennen
- ruhig, klar und praxisnah formuliert sein
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
### Ziel
Sofort klar machen, was hier gelernt wird.

### Inhalt
- Titel: `Streams und Umleitungen verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele als kompakte Punkte

### Beispiel-Einstiegstext
> Programme schreiben in der Shell nicht einfach nur „irgendetwas“ ins Terminal. Sie arbeiten mit Eingaben, normalen Ausgaben und Fehlermeldungen – und genau diese kannst du gezielt steuern.

## 2) Abschnitt: Was sind Streams?
### Ziel
Die Grundidee ohne zu viel Technik erklären.

### Kernpunkte
- Programme bekommen Eingaben
- Programme erzeugen normale Ausgaben
- Programme erzeugen manchmal Fehlermeldungen
- diese drei Wege kann man getrennt betrachten

### Die drei Standardkanäle
- `stdin` – Standard-Eingabe
- `stdout` – Standard-Ausgabe
- `stderr` – Fehlerausgabe

### Wichtig
Die Begriffe einführen, aber nicht mit Technikdetails überladen.

## 3) Abschnitt: Warum ist die Trennung nützlich?
### Ziel
Den praktischen Wert erklären.

### Beispiele
- normale Ergebnisse in eine Datei schreiben
- Fehler separat protokollieren
- Ausgaben sammeln, ohne Fehlermeldungen zu verlieren

### Stil
- alltagsnah
- mit kleinen Fällen statt abstrakter Theorie

## 4) Abschnitt: Ausgabe umleiten mit `>`
### Ziel
Die erste und wichtigste Umleitung verständlich machen.

### Beispiel
```bash
ls > dateiliste.txt
```

### Erklärung
- die normale Ausgabe landet nicht im Terminal
- sie wird in die Datei geschrieben
- wenn die Datei existiert, wird sie überschrieben

### Wichtiger Punkt
Das Überschreiben muss klar erklärt werden.

## 5) Abschnitt: Ausgabe anhängen mit `>>`
### Ziel
Den Unterschied zu `>` sichtbar machen.

### Beispiel
```bash
echo "Neuer Eintrag" >> notizen.txt
```

### Erklärung
- Inhalt wird an das Ende angefügt
- bestehender Inhalt bleibt erhalten

## 6) Abschnitt: Fehler umleiten mit `2>` und `2>>`
### Ziel
Die Trennung zwischen `stdout` und `stderr` praktisch zeigen.

### Beispiel
```bash
rm datei_does_not_exist.txt 2> fehler.log
```

### Erklärung
- normale Ausgabe wäre `stdout`
- Fehler landen mit `2>` in einer Datei
- `2>>` hängt Fehlermeldungen an

### Wichtig
Noch nicht zu tief in Kombinationsformen abtauchen.

## 7) Abschnitt: Vorher-Nachher-Denken
### Ziel
Sichtbar machen, was mit der Ausgabe passiert.

### Beispiel
```bash
echo "Hallo" > test.txt
```
Danach steht der Text in der Datei.

### Zweites Beispiel
```bash
echo "Welt" >> test.txt
```
Danach enthält die Datei zwei Einträge.

## 8) Abschnitt: Typische Praxisfälle
### Ziel
Umleitungen alltagsnah machen.

### Praxisfall A – Befehlsergebnis speichern
Eine Liste von Dateien soll später nachlesbar sein.

### Praxisfall B – Fehler protokollieren
Eine Fehlermeldung soll nicht im Terminal verschwinden.

### Praxisfall C – Logdatei ergänzen
Neue Einträge sollen zu einer bestehenden Datei dazukommen.

### Form
3 kompakte Karten oder Mini-Szenarien

## 9) Lernmodus / interaktive Module
### Modul A: Überschreiben oder anhängen?
Befehle vergleichen:
```bash
ls > datei.txt
ls >> datei.txt
```

Fragen:
- Welche Variante überschreibt?
- Welche hängt an?

### Modul B: Normale Ausgabe oder Fehler?
Beispielbefehle bewerten:
- `ls`
- `rm nicht_da.txt`

Fragen:
- Wo entsteht normale Ausgabe?
- Wo entsteht eine Fehlermeldung?

### Modul C: Welche Umleitung passt?
Aufgabe:
- „Speichere die normale Ausgabe in einer Datei.“
- „Hänge eine Fehlermeldung an eine Logdatei an.“

Auswahl:
- `>`
- `>>`
- `2>`
- `2>>`

### Modul D: Dateiinhalt nach Befehl vorhersagen
Kurzes Vorhersage-Modul:
- Was steht nach `>` in der Datei?
- Was passiert nach `>>` zusätzlich?

## 10) Merksatz
Pflichtblock am Seitenende.

### Merksatz
> Mit Umleitungen steuerst du, wohin normale Ausgaben und Fehlermeldungen geschrieben werden.

## 11) Optionaler Ausblick am Ende
Kurzer Übergang:
- „Als Nächstes lernst du, wie du die Ausgabe eines Befehls direkt an einen anderen Befehl weitergeben kannst – mit Pipes.“

## Tonalität und Schreibregeln
Die Seite soll:
- praktisch und klar formuliert sein
- technische Begriffe sofort greifbar machen
- jedes Symbol mit einem sichtbaren Ergebnis verbinden
- Einsteiger nicht mit Spezialsyntax überfordern
- keine großen Konsolenwüsten erzeugen

## Visuelle Regeln
- kompakte Beispielblöcke
- klare Unterscheidung zwischen `stdout` und `stderr`
- kleine Flow-/Pfeil-Komponenten für „Ausgabe geht in Datei“
- Light/Dark gut lesbar
- mobil sauber umbrechbar

## Bild- und Grafikentscheidung
Für diese Zielseite wird **kein Altbild übernommen**.

### Stattdessen neu bauen
Empfohlen ist eine kleine Flow-Komponente:
- Befehl
- Ausgabeweg
- Ziel: Terminal oder Datei

Optional zusätzlich:
- kleines `stdout` / `stderr`-Vergleichsmodul

### Warum
- Umleitungen lassen sich als UI und Demo besser zeigen als mit Altgrafiken
- hohe Wiederverwendbarkeit
- besser mit Lernmodus kombinierbar

## Fachliche Stolperfallen, die sauber gelöst werden müssen
- `stdout` und `stderr` nicht vermischen
- `>` und `>>` klar unterscheiden
- `2>` und `2>>` verständlich erklären, ohne Spezialfälle zu überladen
- Umleitungen nicht schon mit Pipes vermischen

## Verbindung zu anderen Zielseiten
### Direkt davor
- `linux/shell-und-prompt`

### Direkt danach
- `linux/pipes-und-befehle-kombinieren`

### Später angrenzend
- `linux/shellskripte-ausgaben-und-variablen`
- spätere Shell-Werkzeugseiten

## Konkrete Umsetzungsnotizen für die spätere Code-Seite
Die Zielseite braucht voraussichtlich:
- einen kompakten Hero
- 5–7 Content-Abschnitte
- 1 Flow-/Stream-Komponente
- 3–4 Lernmodus-Elemente
- kurze Shell-Beispiele
- 1 Merksatz-Block
- 1 Übergang zu Pipes

## Warum diese Seite ein guter Build-Kandidat ist
Diese Zielseite eignet sich gut, weil sie:
- die Shell-Grundlagen praktisch erweitert
- stark mit kleinen Demos arbeiten kann
- ohne Altbilder auskommt
- später für Shellskripte und Werkzeuge viel Grundlage schafft
