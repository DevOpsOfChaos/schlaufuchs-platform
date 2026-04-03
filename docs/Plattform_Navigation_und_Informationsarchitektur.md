# Plattform – Navigation und Informationsarchitektur

## Zweck dieser Datei
Diese Datei beschreibt die repo-basierte Zielrichtung für **Navigation und Informationsarchitektur** der neuen Plattform.

Sie baut ausdrücklich auf dem vorhandenen Iststand im Repo auf:
- Startseite
- Topbar
- Fachbereichsübersicht
- Suche
- News
- `subjects` / `articles` / `exercises` / `news`

## Ziel der Informationsarchitektur
Die Plattform soll nicht wie ein alter Seitenbaum funktionieren, sondern wie ein klar navigierbares Wissenssystem.

Die Navigation muss vier Dinge gleichzeitig leisten:
1. Orientierung geben
2. Einstieg erleichtern
3. Aufgaben sichtbar machen
4. Themen später skalierbar halten

## Repo-Iststand der Navigation
Aktuell existiert bereits eine Hauptnavigation mit:
- Start
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development
- News

Zusätzlich:
- Suche als Action-Icon
- Learn-Mode-Toggle
- Präsentationsmodus-Platzhalter
- Theme-Toggle

### Konsequenz
Die Navigation ist bereits vorhanden und muss **nicht von null neu erfunden** werden.
Sie muss jetzt aber inhaltlich und strukturell geschärft werden.

## Grundstruktur der Plattform
## Ebene 1 – global
Diese Ebenen sollten global von überall aus erreichbar sein:
- Start
- Fachbereiche
- Suche
- Aufgaben
- News
- rechtliche / organisatorische Seiten über Footer

## Ebene 2 – fachbezogen
Innerhalb eines Fachbereichs sollen sichtbar sein:
- Fach-Hero
- Themenblöcke
- Wissensseiten
- Aufgaben
- Einstieg vs. Vertiefung

## Ebene 3 – inhaltlich tief
Auf Themen- und Unterthemenebene:
- Artikel / Wissensseiten
- passende Übungen
- zugehörige Nachbarseiten

## Zentrale IA-Entscheidung
Die Plattform ist nicht nur artikelzentriert, sondern mindestens **dreifach organisiert**:
- nach Fachbereichen
- nach Wissensseiten
- nach Aufgaben

Das muss die Navigation später sichtbar machen.

## Empfohlene globale Hauptnavigation
## Variante Zielbild
### Sichtbare Hauptpunkte
- Start
- Fachbereiche
- Aufgaben
- News

### Fachzugänge
Fachbereiche können zusätzlich:
- als eigene globale Punkte bleiben
- oder über die Fachbereichsübersicht gebündelt werden

## Bewertung des aktuellen Zustands
### Positiv
- Fachbereiche sind direkt zugänglich
- Start ist klar
- News ist sichtbar
- Suche ist schnell erreichbar

### Problematisch / zu prüfen
- kein globaler sichtbarer Aufgabenpunkt
- sehr viele Fachpunkte direkt in der Hauptnavigation
- News aktuell prominenter als Aufgaben
- Fachübersicht und Direktfachpunkte konkurrieren potenziell miteinander

## Empfohlene Richtungen für die Hauptnavigation
## Option A – fachstark
- Start
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development
- Aufgaben
- News

### Vorteil
- direkter Fachzugriff

### Nachteil
- Topbar wird sehr voll

## Option B – plattformklar
- Start
- Fachbereiche
- Aufgaben
- News

### plus
- Suche als Icon
- Learn Mode
- Theme

### Vorteil
- sauberer, skalierbarer Aufbau
- Fachbereiche werden über Übersicht und Landingpages erschlossen

### Nachteil
- ein Klick mehr bis zum Fachbereich

## Empfehlung
Mittelfristig ist **Option B** die sauberere Architektur.

Denn das Repo ist bereits stark collection-basiert gedacht, und mit wachsender Inhaltsmenge wird eine zu volle Fachnavigation schnell unruhig.

## Fachnavigation innerhalb eines Bereichs
Unabhängig von der globalen Topbar braucht jeder Fachbereich eine eigene innere Orientierung.

### Empfehlung
Jeder Fachbereich bekommt auf seiner Landingpage oder in einem sekundären Navigationsbereich:
- Einstieg
- Hauptthemenblöcke
- Aufgaben
- Vertiefungen

### Beispiele
#### Linux
- Einstieg
- Rechte und Benutzer
- Shell
- Shellskripte
- SSH
- Aufgaben

#### Mathematik
- Funktionen
- Analysis
- Algebra
- Vektorgeometrie
- Aufgaben

## Suche als zweite Hauptachse
Die Suche ist bereits vorhanden und sollte langfristig nicht nur ein Zusatz sein, sondern eine echte zweite Navigationsebene.

### Ziel
Suche über:
- Fachbereich
- Typ (Artikel, Aufgabe, News)
- Schwierigkeit
- Tags / Themen

### Repo-basierte Konsequenz
Der aktuelle statische Suchindex muss später mit den Collections synchronisiert werden.

## News in der IA
News existiert bereits als eigener Bereich.

### Empfehlung
News soll bleiben, aber nicht wichtiger sein als Aufgaben.

### Produktrolle von News
- Plattformänderungen
- neue Inhalte
- größere Strukturupdates

### Nicht die Rolle von News
- zentrale Lernnavigation
- Ersatz für Aufgaben oder Fachübersicht

## Footer-Navigation
Im Footer existieren bereits:
- Start
- News
- Kontakt
- Impressum
- Datenschutz

### Konsequenz
Rechtliche und organisatorische Seiten sind bereits sinnvoll im Footer verankert.
Sie müssen nicht zusätzlich prominent in die Hauptnavigation.

## Verhältnis von Startseite und Fachbereichsübersicht
Aktuell gibt es:
- Startseite mit Fachkarten
- separate Fachbereichsübersicht

### Empfehlung
Beides darf bleiben, aber mit klarer Rollenverteilung:

#### Startseite
- emotionaler und visueller Einstieg
- Such-Einstieg
- schnelle Fachzugänge

#### Fachbereichsseite
- vollständige systematische Übersicht
- alle Bereiche gleichartig strukturiert

## Verhältnis von Artikeln und Aufgaben
Die IA sollte künftig klar sichtbar machen:
- Artikel = verstehen
- Aufgaben = üben

### Empfehlung
Das muss auf allen Ebenen sichtbar sein:
- Fach-Landingpages
- Suche
- spätere Detailseiten
- globale Aufgabenübersicht

## Wichtigste Repo-basierte Korrekturpunkte
## 1) Suchindex ist inhaltlich teils noch Platzhalterlogik
Es gibt dort bereits tiefe Pfade und Themenannahmen, die nicht mit der neuen Fachplanung synchron sind.

### Konsequenz
Später muss der Suchindex oder seine Datenquelle an die tatsächlichen Collections und Fachstrukturen angepasst werden.

## 2) Aufgaben fehlen als globaler sichtbarer Navigationsanker
Die Plattformstruktur enthält sie bereits im Modell, aber nicht als klare IA-Ebene.

## 3) Web- und Elektrotechnik-Bezeichnungen müssen sauber harmonisiert werden
- `Web Development` vs. HTML/CSS-Denke
- `Elektrotechnik` vs. Daten & Signale als Unterlogik

## Empfohlene nächste konkrete Schritte
1. globale Aufgaben-Seite oder Aufgaben-Hub planen
2. Fachbereichs-Landingpages anhand der Collection-Logik konkretisieren
3. Hauptnavigation perspektivisch verschlanken
4. Suchindex und Collections später stärker synchronisieren

## Zusammenfassung
Die Plattform besitzt bereits eine funktionierende Grundnavigation.

Die nächste IA-Stufe besteht deshalb nicht darin, alles neu zu erfinden, sondern darin,
- Fachbereiche sauber zu strukturieren,
- Aufgaben sichtbar zu machen,
- Suche zu schärfen,
- und globale sowie fachbezogene Navigation klarer voneinander zu trennen.
