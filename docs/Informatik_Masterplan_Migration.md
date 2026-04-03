# Informatik – Masterplan Migration und Neuaufbau

## Zweck dieser Datei
Diese Datei bündelt den Neuaufbau des Fachbereichs **Informatik** als zentrale Arbeitsgrundlage.

Sie fasst zusammen:
- welche Altseiten nur noch als Inhaltsquelle dienen
- welche neuen Zielseiten entstehen sollen
- welche Bilder eher neu gebaut oder geprüft werden
- welche Inhalte zusammengeführt werden
- in welcher Reihenfolge der Fachbereich sinnvoll aufgebaut wird
- wie Aufgaben und Übungen mitgeplant werden

## Grundsatz für Informatik
Die alte Informatik-Seite dient nur noch als Quelle für:
- Themenstruktur
- mögliche Inhalte
- Beispiele
- einzelne eventuell brauchbare Fachgrafiken

Sie wird **nicht technisch übernommen**.
Alle Seiten werden neu geschrieben, neu strukturiert und an die neue Schlaufuchs-Logik angepasst.

## Ergebnis der Altanalyse
### Umfang
Der Informatik-Bereich ist klein und überschaubar.

Relevante Altseiten:
- `informatik/informatik_start.html`
- `informatik/informatik_einfuehrung/informatik_einfuehrung.html`
- `informatik/informatik_einfuehrung/informatik_einstieg.html`
- `informatik/informatik_einfuehrung/C_Grundlagen.html`
- `informatik/informatik_einfuehrung/C_Programmierung.html`

### Inhaltliche Schwerpunkte im Altbestand
- Einführung in Informatik
- Computeraufbau und Grundfunktionen
- Programme und Daten
- Programmierparadigmen
- Compiler vs. Interpreter
- Einstieg in C und Python
- C-Grundlagen
- Kontrollstrukturen und Eingaben in C

### Was bewusst nicht übernommen wird
- alte Seitenstruktur
- alte Navigation
- Code- oder Erklärbilder als 1:1-Ersatz für gute neue Komponenten
- C als zu große Materialwüste ohne saubere Lernstufen
- verstreute Mini-Beispiele ohne moderne Einordnung

## Bildregel für Informatik
Grundsätzlich gilt:
- Codebilder: **raus**
- Screenshots: **raus**
- Diagramme nur prüfen, wenn sie fachlich stark und optisch brauchbar sind
- viele Erklärgrafiken lassen sich besser als neue UI-/SVG-Komponenten bauen

### Besonders prüfbare Altgrafiken
- `Aufbau_computer_02.png`
- `interpreter_vs_compiler.drawio.png`
- `programmierparadigmen_farbig.drawio.png`
- `Bestandteile_Programm.png`

### Tendenz
- fachlich gute Diagramme eher **neu bauen** statt direkt übernehmen
- nur im Ausnahmefall vorläufig übernehmen

## Zielstruktur für Informatik im Relaunch
## A. Informatik-Einstieg
### Neue Zielseiten
- `informatik/informatik-einstieg`
- `informatik/computer-und-programmiergrundlagen`

### Zweck
- Informatik als Fach verständlich erklären
- Computer-Grundidee und Programm-Grundidee einführen
- Grundlagen vor Programmiersprachen und Syntax setzen

## B. Einstieg in Programmierung
### Neue Zielseiten
- `informatik/programmieren-mit-c-und-python`
- `informatik/compiler-interpreter-und-programmierparadigmen`

### Zweck
- Gemeinsamkeiten und Unterschiede zwischen C und Python erklären
- prozedural vs. objektorientiert grob einordnen
- Compiler- und Interpreter-Grundidee sauber erklären

## C. C-Grundlagen
### Neue Zielseiten
- `informatik/c-grundlagen`
- `informatik/c-kontrollstrukturen-und-eingaben`

### Zweck
- C als konkrete Einstiegssprache in klaren Lernblöcken aufbauen
- Grundsyntax, Variablen, main, Präprozessor, Ausgabe
- danach Bedingungen, Schleifen und `scanf`

## D. Spätere Vertiefungen
Sinnvoll, aber nicht erste Priorität:
- größere C-Projekte
- Funktionen als eigener Vertiefungsblock
- tieferer Computerarchitektur-Bezug
- Python als später eigener Fachblock oder Teilbereich

## Empfohlene Gesamt-Reihenfolge
1. `informatik-einstieg`
2. `computer-und-programmiergrundlagen`
3. `programmieren-mit-c-und-python`
4. `compiler-interpreter-und-programmierparadigmen`
5. `c-grundlagen`
6. `c-kontrollstrukturen-und-eingaben`

## Interaktive Standards für Informatik
### 1) Konzept-Zuordnung
Für:
- Hardware / Software
- Daten / Anweisungen
- Compiler / Interpreter
- prozedural / objektorientiert

### 2) Ablauf- und Strukturmodule
Für:
- Programmaufbau
- `main()`
- Kontrollstrukturen
- Eingabe → Verarbeitung → Ausgabe

### 3) Code-vs.-Ergebnis-Module
Für:
- kleine C-Beispiele
- Ausgabe mit `printf`
- Eingabe mit `scanf`
- Schleifen und Bedingungen

### 4) Mini-Aufgaben im Lernmodus
Für:
- Syntax erkennen
- Programmteile zuordnen
- Ausgabe vorhersagen
- C-Beispiel lesen

## Informatik-spezifische Qualitätsregeln
- zu Beginn nicht zu viele Sprachen gleichzeitig überfrachten
- Fachbegriffe früh erklären
- C didaktisch sauber staffeln
- keine Codebilder übernehmen
- Diagramme nur dann nutzen, wenn sie wirklich fachlich helfen
- Merksatz auf jeder Seite

## Aufgabenlogik für Informatik
Im Altbestand gibt es kaum klassische eigenständige Aufgabenseiten.

Trotzdem sollen Aufgaben und Übungen im neuen Bereich ausdrücklich mitgeplant werden.
Die Aufgabenbasis kommt hier vor allem aus:
- eingebetteten Beispielen
- Vergleichsblöcken
- Code-Snippets
- erklärenden Abschnitten

Diese werden später in:
- Übungsblöcke auf den Seiten
- Lernmodus-Elemente
- kleine Zuordnungs- und Code-Aufgaben

überführt.

## Empfehlenswerte erste echte Build-Kandidaten
- `informatik-einstieg`
- `c-grundlagen`
- `c-kontrollstrukturen-und-eingaben`

Diese drei sind besonders sinnvoll, weil sie:
- den Altbestand gut abdecken
- ohne großen Bildbedarf auskommen
- gute Aufgaben und Lernmodule tragen können
