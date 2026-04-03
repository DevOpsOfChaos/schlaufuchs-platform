# Plattform – Abgleich von Startseite, Fachseiten und Navigation

## Zweck dieser Datei
Diese Datei bündelt die wichtigsten **Abgleichspunkte zwischen Startseite, Fachbereichsübersicht, Fach-Landingpages und globaler Navigation**.

Sie soll verhindern, dass die Plattform in der nächsten Phase an drei Stellen unterschiedliche Fachlogiken zeigt:
- Startseite
- Fachbereichsübersicht
- Topbar / Navigation

## Ausgangslage
Im Repo existieren bereits:
- Startseite
- Fachbereichsübersicht
- Hauptnavigation
- Suche
- News
- collections-basierte Fachstruktur

Parallel dazu ist in `docs/` inzwischen eine deutlich klarere Fach- und Aufgabenplanung entstanden.

## Problem
Wenn diese Ebenen nicht bewusst aufeinander abgestimmt werden, entstehen leicht:
- doppelte Fachwelten
- konkurrierende Fachnamen
- Aufgaben unsichtbar im Produktfluss
- inkonsistente Slugs und Nutzerwege

## Ziel des Abgleichs
Die Plattform soll überall dieselben fachlichen Wahrheiten kommunizieren.

Das betrifft besonders:
- Hauptfächer
- Fachbezeichnungen
- Aufgaben-Sichtbarkeit
- Rollen von Startseite und Fachübersicht

## Zentrale Soll-Logik
## 1) Hauptfächer
Die Plattform soll überall konsistent mit diesen Hauptfächern arbeiten:
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

## 2) Unterthemen sind keine konkurrierenden Hauptfächer
### Wichtig
- `Daten & Signale` gehört als Themenblock zu Elektrotechnik
- `HTML/CSS` gehört als Themenblock zu Web Development

### Das gilt auf allen Ebenen
- Startseite
- Fachbereichsübersicht
- Navigation
- Suche
- spätere Landingpages

## 3) Aufgaben als sichtbare zweite Lernachse
Die Plattform soll nicht nur Fachbereiche und Artikel sichtbar machen, sondern auch Aufgaben.

### Das muss später überall andocken
- Hero / Startseite
- Fach-Landingpages
- Suche
- globale Aufgaben-Seite
- Navigation oder mindestens sichtbarer CTA

## Rollen der drei zentralen Meta-Ebenen
## A. Startseite
### Rolle
- schnellster Einstieg
- emotionaler / visueller Start
- drei Hauptwege sichtbar machen:
  - Fachbereich
  - Aufgabe
  - Suche

### Darf nicht sein
- vollständige Fachsystematik
- konkurrierende Fachwelt zur Fachbereichsübersicht

## B. Fachbereichsübersicht
### Rolle
- vollständige, geordnete Übersicht aller Hauptfächer
- saubere Brücke zu den Fach-Landingpages

### Darf nicht sein
- zweite Startseite mit identischen Produktzielen
- ungeordnete Kachelwand mit konkurrierenden Unterfächern

## C. Hauptnavigation
### Rolle
- schneller globaler Zugriff
- keine komplette Fachdidaktik
- klare IA-Signale

### Darf nicht sein
- überladene Vollübersicht aller Unterthemen
- Fachbenennungen, die im Rest der Plattform anders erscheinen

## Konkrete Abgleichspunkte
## 1) Fachbezeichnungen überall vereinheitlichen
### Zielbild
- `Web Development`
- nicht zusätzlich global `HTML/CSS`

- `Elektrotechnik`
- nicht zusätzlich global `Daten & Signale`

## 2) Aufgaben global sichtbarer machen
### Zielbild
- Startseite enthält direkten Aufgaben-Einstieg
- Fachseiten haben klaren Aufgabenblock
- globale Aufgaben-Seite `/aufgaben` existiert
- Navigation oder CTA weist darauf hin

## 3) Startseite und Fachübersicht unterschiedlich, aber kompatibel halten
### Startseite zeigt
- ausgewählte Fachkarten
- Such-Einstieg
- Aufgaben-Einstieg
- kuratierte Wege

### Fachübersicht zeigt
- alle Hauptfächer in konsistenter Form
- Fachbeschreibungen
- Übergang zu Fach-Landingpages

## 4) Navigation nicht gegen die Landingpage-Logik laufen lassen
Wenn Fachseiten mit:
- Einstieg
- Wissensseiten
- Aufgaben
- Vertiefungen

arbeiten, dann darf die Navigation nicht so tun, als gäbe es nur flache Fachlinks und News.

## Praktische Empfehlung für die nächste Umsetzungsphase
## Kurzfristig
- Startseite fachlich bereinigen
- Fachbereichsübersicht auf die fünf Hauptfächer festziehen
- Aufgaben-Hub als globales Ziel vorbereiten

## Mittelfristig
- Navigation verschlanken oder strukturieren
- Suchindex mit denselben Fachbezeichnungen und Slugs synchronisieren
- Fachseiten konkret aus `subjects`, `articles` und `exercises` speisen

## Wichtigste Konsistenzregeln
1. Ein Hauptfach darf nicht gleichzeitig als Unterthema und als eigene Fachwelt konkurrieren.
2. Aufgaben müssen produktseitig sichtbar werden.
3. Fachseiten müssen zur Navigation passen.
4. Suche darf nicht mit alten oder gedachten Fachpfaden vom restlichen System abweichen.
5. Startseite und Fachübersicht brauchen unterschiedliche Rollen.

## Zusammenfassung
Die Plattform ist inzwischen weit genug geplant, dass nicht mehr die Einzelideen fehlen, sondern vor allem die **saubere Synchronisierung zwischen den Meta-Ebenen**.

Genau dafür dient dieser Abgleich:
- eine Fachwelt
- eine Begriffslogik
- eine Aufgabenlogik
- und ein konsistenter Nutzerweg durch Startseite, Navigation und Fachseiten.
