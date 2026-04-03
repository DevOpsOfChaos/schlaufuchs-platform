# Plattform – Zielseite `startseite`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete repo-nahe Zielrichtung für die **Startseite** der Plattform.

Sie baut ausdrücklich auf dem vorhandenen Astro-Iststand auf:
- bestehende Startseite mit Hero, Sucheinstieg und Fachkarten
- vorhandene Fachnavigation
- geplante Fach-Landingpages
- geplanter Aufgaben-Hub

Die Startseite soll daher **nicht neu erfunden**, sondern an die inzwischen deutlich klarere Fach- und Plattformlogik angepasst werden.

## Rolle der Startseite in der Plattform
Die Startseite ist kein Fachbereich und keine reine Linkliste.

Sie ist die zentrale Einstiegsebene für drei Hauptwege:
1. Fachbereich entdecken
2. direkt suchen
3. Aufgaben und Übungen finden

## Repo-basierte Ausgangslage
Die bestehende Startseite enthält bereits:
- Hero mit Hauptbotschaft
- Such-Einstieg
- Fachkarten
- visuellen Maskottchen-/Brand-Bereich

### Konsequenz
Die bestehende Seite ist bereits ein guter Produktanfang. Die nächste Planung muss deshalb vor allem klären:
- welche Inhalte wirklich in den sichtbaren Einstieg gehören
- welche Fachkarten und Bezeichnungen konsistent sein müssen
- wie Aufgaben sichtbar ergänzt werden

## Ziel der Startseite
Die Startseite soll:
- die Plattform verständlich eröffnen
- die großen Fachbereiche sichtbar machen
- Suche und Aufgaben gleichwertig als Einstieg anbieten
- Neulinge nicht überfordern
- die Fach-Landingpages sinnvoll vorbereiten

## Empfohlener Aufbau
## 1) Hero-Bereich
### Ziel
Sofort klar machen, was Schlaufuchs ist.

### Inhalt
- klarer Haupttitel
- kurzer Untertitel mit Nutzenversprechen
- visuelle Unterstützung
- zwei oder drei primäre CTAs

### Empfohlene CTAs
- `Fachbereiche entdecken`
- `Aufgaben finden`
- `Suche öffnen`

### Wichtige Korrektur zur bisherigen Logik
Aktuell ist die Suche bereits sichtbar, Aufgaben aber noch nicht stark genug als globaler Einstieg verankert.

### Empfehlung
Im Hero sollten Aufgaben künftig direkt als gleichwertiger Einstieg auftauchen.

## 2) Schnellzugriff / Primäre Einstiege
### Ziel
Nicht nur einen großen Hero zeigen, sondern sofort in typische Nutzungswege leiten.

### Empfohlene drei Wege
- `Ich möchte ein Fach entdecken`
- `Ich möchte direkt üben`
- `Ich suche ein konkretes Thema`

### Warum
Damit die Startseite nicht nur schön aussieht, sondern sofort nutzbar wird.

## 3) Fachbereichskarten
### Ziel
Die großen Fachbereiche klar, konsistent und ohne Doppeldeutigkeiten zeigen.

### Soll-Fächer
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

### Wichtige repo-basierte Korrektur
`Daten & Signale` soll hier **nicht** als eigener konkurrierender Hauptfachbereich neben Elektrotechnik stehen.

### Stattdessen
- `Elektrotechnik` bleibt die globale Karte
- Daten & Signale erscheint später als Themenblock innerhalb der Elektrotechnik-Fachseite

### Zweite wichtige Korrektur
`HTML/CSS` soll auf Startseitenebene **nicht** separat als Hauptfach auftreten, sondern unter `Web Development` laufen.

## 4) Aufgaben-Einstieg
### Ziel
Aufgaben auf der Startseite endlich sichtbar machen.

### Empfehlung
Zusätzlicher Block unter oder zwischen Fachkarten:
- `Beliebte Aufgaben`
- `Zum Üben starten`
- `Neu hinzugefügte Übungen`

### Warum
Die Plattform ist nicht nur leseorientiert. Dieser Einstieg fehlt aktuell noch produktiv sichtbar.

## 5) Sucheinstieg
### Ziel
Die vorhandene Suche stärker als globales Werkzeug positionieren.

### Empfehlung
Die Suche bleibt wichtig, aber nicht allein.

Sie soll auf der Startseite als einer von drei Hauptwegen erscheinen:
- Fachbereich
- Aufgabe
- Suche

## 6) Optionaler News-/Update-Bereich
### Ziel
News sichtbar halten, aber nicht dominieren.

### Empfehlung
Falls News auf der Startseite auftaucht, dann:
- klein
- am unteren Bereich
- als ergänzende Plattforminformation

Nicht als Haupt-Einstieg.

## Empfohlene Prioritäten auf der Startseite
## Höchste Priorität
- Fachbereiche
- Aufgaben
- Suche

## Mittlere Priorität
- kuratierte Einstiege / Highlights

## Niedrigere Priorität
- News
- Plattformupdates

## Inhaltliche Korrekturen für die Startseite
## 1) Fachnamen und Slugs harmonisieren
### Zielbild
- `web-development` statt losem HTML/CSS-Hauptbereich
- `elektrotechnik` statt konkurrierendem `daten-und-signale`

## 2) Aufgaben sichtbar machen
### Zielbild
- Aufgaben nicht nur indirekt in Suche verstecken
- Startseite soll direkt zum späteren `/aufgaben`-Hub führen

## 3) Fachkarten auf Landingpage-Logik abstimmen
Die Fachkarten sollen künftig nicht nur Fachnamen zeigen, sondern klar andeuten:
- Einstiegsthemen
- Charakter des Fachs
- ggf. Wissen + Aufgaben

## 4) Startseite und Fachübersicht klar trennen
### Startseite
- emotionaler und schneller Einstieg
- Auswahl der wichtigsten Wege

### Fachbereichsübersicht
- vollständige systematische Übersicht aller Fächer
- gleichförmigere Fachdarstellung

## Was vermieden werden sollte
- doppelte Fachidentitäten auf Kartenebene
- Aufgaben weiter zu verstecken
- Startseite als bloßes Schaufenster ohne klare Nutzerwege
- News stärker als Üben oder Fachzugriff zu priorisieren

## Zusammenfassung
Die Startseite soll künftig nicht nur Einstieg in Inhalte sein, sondern ein klarer Produkt-Einstieg in drei Richtungen:
- Fachbereich
- Aufgabe
- Suche

Der vorhandene Astro-Iststand ist dafür bereits eine gute Basis – er muss jetzt vor allem fachlich und strukturell konsistent gemacht werden.
