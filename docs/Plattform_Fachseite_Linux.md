# Plattform – konkrete Fach-Landingpage `linux`

## Zweck dieser Datei
Diese Datei beschreibt die **konkrete repo-nahe Zielstruktur** für die Fachbereichs-Landingpage `linux`.

Sie baut auf drei Ebenen auf:
- bestehender Repo-Iststand mit Fachnavigation und Collections
- bereits geplante Linux-Fachstruktur in `docs/`
- geplante Aufgabenintegration über `exercises`

## Warum Linux als zweiter konkreter Fachbereich?
Linux eignet sich besonders gut als zweite konkrete Fach-Landingpage, weil:
- der Bereich bereits klar in Navigation und Startseite verankert ist
- die innere Struktur fachlich sehr sauber geworden ist
- Theorie und Praxis dort besonders gut zusammenpassen
- Übungen, Aufgaben und spätere Praxis-Challenges hier stark relevant sind

## Repo-Anschluss
### Subject-Slug
- `linux`

### Andockpunkte
- `subjects`
- `articles`
- `exercises`

## Rolle der Fachseite
Die Linux-Fachseite soll nicht nur Übersicht sein, sondern drei Einstiegsarten gleichzeitig unterstützen:
- Einsteiger, die Linux erst verstehen wollen
- Nutzer, die gezielt einen Befehl oder ein Thema suchen
- Nutzer, die direkt praktisch üben möchten

## Ziel der Fachseite
Die Seite soll:
1. Linux als verständlichen Fachbereich eröffnen
2. die großen Themenblöcke sichtbar machen
3. Wissensseiten und Aufgaben sinnvoll verzahnen
4. Einsteigerpfade und spätere Praxisblöcke trennen
5. Terminal-, Rechte- und Skriptaufgaben sichtbar machen

## Empfohlener Aufbau
## 1) Hero-Bereich
### Inhalt
- Titel: `Linux`
- kurze Fachbeschreibung
- ein Satz zum Nutzen des Bereichs
- 2 primäre Einstiege

### Beispiel-CTA
- `Mit den Grundlagen starten`
- `Direkt Aufgaben üben`

### Kernaussage im Hero
Linux auf Schlaufuchs verbindet:
- Systemverständnis
- Befehle und Struktur
- praktische Übung
- spätere Automatisierung

## 2) Einstiegsblock
### Ziel
Neue Nutzer nicht direkt in Spezialthemen wie Rechte oder SSH werfen.

### Empfohlene Kacheln
- Shell und Prompt verstehen
- Dateirechte-Grundlagen
- Shellskripte verstehen

### Inhaltlich passend zu bisherigen Planungen
- `shell-und-prompt`
- `dateirechte-grundlagen`
- `shellskripte-grundlagen`

## 3) Große Themenblöcke
Die Linux-Landingpage sollte die Fachstruktur sichtbar in Hauptsektionen gliedern:

### A. Einstieg und Shell
- Shell und Prompt
- Streams und Umleitungen
- Pipes und Befehle kombinieren

### B. Rechte, Benutzer und Besitz
- Dateirechte-Grundlagen
- `chmod`
- Benutzer und Gruppen
- Dateibesitz verstehen
- `chown`
- `chgrp`

### C. Shellskripte
- Grundlagen
- Ausgaben und Variablen
- Eingaben
- Bedingungen und Schleifen
- Dateien und Automation

### D. SSH und Fernzugriff
- SSH-Grundlagen
- erste Anmeldung
- SSH-Schlüssel
- Dateiübertragung und Tools
- Sicherheit und Admin-Hinweise

### E. Vertiefungen
- Besitz- und Admin-Workflows
- spätere Praxis- und Troubleshooting-Strecken

## 4) Wissensseiten-Bereich
### Ziel
Die wichtigsten `articles` des Fachbereichs sichtbar machen.

### Empfehlung
Keine Vollauflistung, sondern:
- 6–8 kuratierte Kernseiten
- nach Einstieg / Praxis / Vertiefung gegliedert

### Kartenelemente
- Titel
- Kurzbeschreibung
- Lernstufe
- Sektion

## 5) Aufgaben-Bereich
### Ziel
Linux-Aufgaben müssen sichtbar als Praxis-Ebene erscheinen.

### Empfohlene Sektionen
- `Erste Linux-Aufgaben`
- `Dateirechte und Besitz üben`
- `Shell und Befehle trainieren`
- `Shellskripte anwenden`
- `SSH und Fernzugriff`

### Inhalt pro Karte
- Aufgabentitel
- Kurzbeschreibung
- Schwierigkeit
- optional Typ: Terminal / Diagnose / Skript / Praxis

## 6) Einstieg vs. Vertiefung
### Ziel
Linux soll nicht wie eine ungeordnete Befehlsliste wirken.

### Empfehlung
Sichtbare Zweiteilung:
- `Zum Einstieg`
- `Für Fortgeschrittene`

#### Zum Einstieg
- Shell und Prompt
- erste Dateirechte
- Benutzer und Gruppen
- Shellskript-Grundlagen

#### Für Fortgeschrittene
- rekursive Rechte- und Besitzlogik
- SSH-Schlüssel
- Dateiübertragung
- Admin-Workflows

## 7) Aufgaben-Hub-Verknüpfung
### Ziel
Linux-Fachseite und globaler Aufgaben-Hub sollen sich gegenseitig verstärken.

### Empfehlung
Auf der Linux-Seite sichtbar:
- `Alle Linux-Aufgaben ansehen`
- Link zum globalen `/aufgaben`-Hub mit Fachfilter Linux

## 8) Such- und Filterlogik im Fach
### Später sinnvoll
- nur Linux-Inhalte durchsuchen
- Filter nach Sektion
- Filter nach Level
- Filter nach Typ: Wissen / Aufgabe

## Empfohlene inhaltliche Sektionen für Collection-Mapping
### Für `articles`
- `einstieg`
- `shell`
- `rechte-und-benutzer`
- `shellskripte`
- `ssh`
- `vertiefungen`

### Für `exercises`
- `shell`
- `rechte`
- `benutzer-und-besitz`
- `shellskripte`
- `ssh`

## Priorisierte Inhalte für erste echte Befüllung
### Wissensseiten zuerst
- Shell und Prompt
- Dateirechte-Grundlagen
- `chmod`
- Shellskripte-Grundlagen
- SSH-Grundlagen

### Aufgaben zuerst
- Shell-/Befehlsaufgaben
- Rechte-/Besitz-Aufgaben
- erste Shellskript-Aufgaben
- SSH-Einstiegsaufgaben

## Was vermieden werden sollte
- Linux als reine Befehlsliste darstellen
- zu schnell in Admin-Spezialwissen kippen
- Aufgaben hinter Wissensseiten verstecken
- alle Unterthemen gleichrangig und unstrukturiert zeigen

## Zusammenfassung
Die Fach-Landingpage `linux` sollte Linux als klaren Lernraum strukturieren:
- erst verstehen
- dann anwenden
- dann automatisieren
- dann vertiefen

Damit wird Linux nicht nur ein Themenbaum, sondern ein gut navigierbarer Praxisbereich.
