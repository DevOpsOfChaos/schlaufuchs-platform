# Plattform – erste Befüllung der `exercises`

## Zweck dieser Datei
Diese Datei legt fest, **welche Übungen und Aufgaben (`exercises`) in der ersten echten Befüllungswelle** des Repo-Modells priorisiert angelegt oder vorbereitet werden sollen.

Sie ergänzt die Planungen für:
- `subjects`
- `articles`
- globalen Aufgaben-Hub
- Fach-Landingpages

## Grundsatz
Die erste Aufgaben-Welle soll nicht sofort den gesamten Alt-Aufgabenbestand abbilden.

Sie soll stattdessen:
- die Plattform sichtbar übbar machen
- pro Fachbereich mindestens einen klaren Übungseinstieg schaffen
- besonders starke Alt-Aufgabentypen früh sichern
- die neue Aufgabenlogik in der Oberfläche testbar machen

## Ziel der ersten Aufgaben-Welle
Die erste Welle soll möglichst schnell diese Produktwirkung erzeugen:
- Aufgaben sind global sichtbar
- Fachseiten haben echte Übungsblöcke
- Aufgaben sind nach Fach und Schwierigkeitsgrad unterscheidbar
- Artikel können auf echte Übungen verweisen

## Priorisierungslogik
### Sehr hoch priorisieren
- Standardaufgaben mit hohem didaktischem Nutzen
- Aufgaben mit klarem Lösungsweg
- Aufgaben, die direkt an Einstiegsartikel andocken
- Aufgabenformate, die ohne große technische Zusatzlogik bereits sinnvoll sind

### Später nachziehen
- sehr große Serien
- stark bildlastige Altaufgaben
- aufwendige Praxis-/Challenge-Formate
- komplexe Vertiefungsaufgaben

## Erste Aufgaben-Welle nach Fachbereichen
## A. Mathematik
### Warum besonders früh?
- aufgabenstärkster Fachbereich
- besonders gut für den globalen Aufgaben-Hub

### Priorisierte erste `exercises`
- lineare Funktionen – Grundaufgaben
- quadratische Funktionen – Grundaufgaben
- Differentialrechnung – Standardableitungen
- Integralrechnung – Standardintegrale

### optionale frühe Ergänzung
- Potenz-/Exponentialfunktions-Grundaufgaben

## B. Linux
### Priorisierte erste `exercises`
- Shell-Befehle erkennen und zuordnen
- Dateirechte-Grundaufgaben
- `chmod`-Grundaufgaben
- Shellskript-Einstiegsaufgaben
- SSH-Einstiegsaufgaben

### Warum
Linux profitiert stark von direkt sichtbarer Praxis und Diagnose-Logik.

## C. Web Development
### Priorisierte erste `exercises`
- HTML-Dokumentstruktur
- HTML-Links/Bilder/Pfade
- CSS-Syntax-Grundlagen
- Box-Modell-Grundaufgaben

### Warum
Diese Aufgaben sind klein, klar und passen direkt zu den ersten Artikeln.

## D. Informatik
### Priorisierte erste `exercises`
- Daten / Anweisungen / Ablauf zuordnen
- Aufbau eines C-Programms erkennen
- `printf()`-Ausgabe lesen
- Kontrollstrukturen in C erkennen

### Warum
Der Informatik-Bereich hat weniger klassische Altaufgabenseiten, aber sehr gute Beispiel- und Codeaufgaben.

## E. Elektrotechnik
### Priorisierte erste `exercises`
- Netzwerkanalyse-Grundaufgaben
- Wechselstrom-Grundaufgaben
- Dioden-Grundaufgaben
- Arduino-Basisaufgaben

### Warum
Diese Aufgaben sichern besonders wertvolle Altbestände früh und geben dem Fach sofort Praxisgewicht.

## Empfohlene Reihenfolge der ersten echten Repo-Befüllung
## Welle A – global sichtbarer Aufgabenstart
- Mathematik: lineare / quadratische Funktionen
- Linux: Shell / Rechte
- Web Development: HTML-Struktur / CSS-Syntax

## Welle B – Plattform glaubwürdig machen
- Mathematik: Differentialrechnung / Integralrechnung
- Linux: Shellskripte / SSH
- Informatik: C-Einstiegsaufgaben
- Elektrotechnik: Dioden / Netzwerkanalyse / Arduino

## Welle C – Ausbau und Vertiefung
- komplexere Rechenblöcke
- Praxis-Challenges
- interaktive Spezialformate

## Empfohlene Mindestzahl pro Fach für die erste Welle
### Mathematik
- 4 Übungen

### Linux
- 4 Übungen

### Web Development
- 4 Übungen

### Informatik
- 3–4 Übungen

### Elektrotechnik
- 4 Übungen

## Warum diese Mindestzahl sinnvoll ist
Damit:
- der globale Aufgaben-Hub nicht leer wirkt
- jeder große Fachbereich direkt sichtbar vertreten ist
- Fachseiten echte Aufgabenblöcke zeigen können

## Verknüpfungslogik zu `articles`
Die erste Aufgaben-Welle soll möglichst eng an die erste Artikel-Welle gekoppelt werden.

### Beispiele
#### Mathematik
- Funktionen-Artikel → Funktionsaufgaben
- Analysis-Artikel → Ableitungs-/Integralaufgaben

#### Linux
- Shell-Artikel → Shell-Aufgaben
- Rechte-Artikel → Rechteaufgaben
- SSH-Artikel → SSH-Einstiegsaufgaben

#### Web Development
- HTML-Artikel → Struktur- und Pfadaufgaben
- CSS-Artikel → Syntax- und Box-Modell-Aufgaben

#### Informatik
- C-Grundlagen → C-Code-Leseaufgaben

#### Elektrotechnik
- Halbleiter / Netzwerke / Mikrocontroller → passende Grundaufgaben

## Empfohlene erste Metadaten-Nutzung in `exercises`
Bereits in der ersten Befüllungswelle sollten Übungen möglichst konsistent diese Logik bekommen:
- `subject`
- `section`
- `level`
- `exerciseType`
- `hasSolution`
- `order`

## Empfohlene erste `exerciseType`-Verteilung
### Mathematik
- `rechnen`

### Linux
- `diagnose`
- `praxis`
- `code`

### Web Development
- `code`
- `zuordnen`
- `challenge`

### Informatik
- `zuordnen`
- `code`
- `diagnose`

### Elektrotechnik
- `rechnen`
- `diagnose`
- `praxis`

## Was vermieden werden sollte
- alle Fachbereiche gleich tief sofort befüllen wollen
- riesige Alt-Aufgabenserien ungefiltert importieren
- Aufgaben ohne direkte Andockung an Fachseiten oder Artikel anlegen
- zu früh zu komplexe Challenge-Formate priorisieren

## Zusammenfassung
Die erste Aufgaben-Welle soll die Plattform **sichtbar übbar** machen.

Dafür werden zuerst die Aufgaben priorisiert, die:
- direkt an Einstiegsartikel andocken
- fachlich stark sind
- schnell produktiv nützlich werden
- den globalen Aufgaben-Hub glaubwürdig tragen.
