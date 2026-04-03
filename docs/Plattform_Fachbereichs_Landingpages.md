# Plattform – Fachbereichs-Landingpages

## Zweck dieser Datei
Diese Datei definiert die **einheitliche Zielstruktur für Fachbereichs-Landingpages** auf der neuen Plattform.

Sie baut ausdrücklich auf dem vorhandenen Repo-Iststand auf:
- Astro-Projektstruktur
- `subjects`-Collection
- vorhandene Startseite
- vorhandene Fachbereichsübersicht
- bestehende Navigation

## Ausgangslage im Repo
Es gibt bereits:
- eine Startseite mit Fachbereichskarten
- eine Fachbereichsübersicht
- eine `subjects`-Collection in `astro:content`
- Slugs für Fachbereiche in Navigation und Startseite

### Konsequenz
Fachbereiche sollen **nicht als lose Einzel-Seiten** geplant werden, sondern als konsistente Landingpage-Typen, die später aus `subjects` gespeist oder an diese angedockt werden.

## Ziel der Fachbereichs-Landingpages
Eine Fachbereichs-Landingpage soll nicht einfach nur eine Übersichtsseite sein, sondern vier Dinge gleichzeitig leisten:

1. **Fachbereich verständlich eröffnen**
2. **Themenblöcke sichtbar strukturieren**
3. **Wissensseiten und Aufgaben gleichwertig andocken**
4. **Einstieg und Vertiefung klar voneinander trennen**

## Einheitlicher Aufbau für alle Fachbereiche
## 1) Hero-Bereich
### Zweck
- Fachbereich klar benennen
- Nutzen und Charakter des Fachs erklären
- ersten Einstieg bieten

### Inhalt
- Fachbereichstitel
- kurze Fachbeschreibung
- 2–3 typische Lernziele oder Schwerpunkte
- optional ein prägnantes Fachmotiv / Maskottchen / Icon

### CTA-Logik
Im Hero sollte mindestens ein klarer Einstieg sichtbar sein:
- `Jetzt einsteigen`
- `Zu den Grundlagen`
- `Aufgaben ansehen`

## 2) Themenblöcke / Lernpfade
### Zweck
Die Fachlogik sichtbar machen, ohne sofort alle Unterseiten zu erschlagen.

### Aufbau
Pro Fachbereich 3–6 größere Karten oder Sektionen:
- Einstieg / Grundlagen
- zentrale Unterbereiche
- spätere Vertiefungen

### Beispiele
#### Linux
- Einstieg / Terminal-Grundlagen
- Rechte und Benutzer
- Shellskripte
- SSH

#### Mathematik
- Funktionen und Graphen
- Analysis
- lineare Algebra und Zahlbereiche
- Vektorgeometrie
- Vertiefungen

#### Elektrotechnik
- Computer und digitale Grundlagen
- Daten und Kommunikation
- Halbleiter und Digitaltechnik
- Netzwerke / Aufgaben
- Mikrocontroller

## 3) Wissensseiten-Bereich
### Zweck
Die wichtigsten `articles` eines Fachbereichs sichtbar machen.

### Empfehlung
Nicht sofort alle Artikel zeigen, sondern:
- 4–8 kuratierte Kernseiten
- nach Relevanz oder Einstieg sortiert
- mit Schwierigkeitsgrad oder Lernstufe

### Inhalt pro Karte
- Titel
- Kurzbeschreibung
- Lernstufe
- optional Tags

## 4) Aufgaben-Bereich
### Zweck
Aufgaben sichtbar als gleichwertige Lernform positionieren.

### Wichtig
Aufgaben dürfen auf Fachbereichs-Landingpages **nicht nur ein Nebenthema** sein.

### Empfehlung
Jede Landingpage soll einen klaren Aufgabenblock haben:
- `Üben im Fachbereich`
- `Wichtige Aufgaben`
- `Einstiegsaufgaben`
- `Weiterführende Übungsblöcke`

### Inhalt pro Karte
- Aufgabentitel
- Kurzbeschreibung
- Schwierigkeitsgrad
- evtl. Typ: Rechnen / Zuordnen / Challenge / Praxis

## 5) Einstieg vs. Vertiefung
### Zweck
Lernende nicht direkt in zu komplexe Blöcke schicken.

### Empfehlung
Jede Landingpage sollte sichtbar trennen:
- **Zum Einstieg**
- **Zum Vertiefen**

Das kann als zwei Sektionen oder als Filterlogik geschehen.

## 6) Optionaler News-/Update-Bezug
### Zweck
Nur dort, wo sinnvoll, aktuelle Änderungen oder neue Inhalte andocken.

### Empfehlung
Nicht jede Fach-Landingpage braucht News prominent.
Wenn überhaupt, dann klein und am Ende:
- `Neu im Fachbereich`
- `Zuletzt ergänzt`

## Repo-basierte Ableitung aus dem Iststand
## 1) Slugs und Benennungen angleichen
Die vorhandene Plattform nutzt aktuell u. a.:
- `mathematik`
- `informatik`
- `elektrotechnik`
- `linux`
- `web-development`

### Konsequenz
Die bisherige Doku-Planung muss mit diesen Slugs synchronisiert werden.

Besonders wichtig:
- `HTML/CSS` soll im Plattformmodell als Teil von `web-development` gedacht werden
- Elektrotechnik und `Daten & Signale` dürfen nicht als doppelte Fachwelt auf Landingpage-Ebene konkurrieren

## 2) Landingpages müssen mit `subjects` andocken
Die `subjects`-Collection ist bereits vorgesehen.

### Empfehlung
Jeder Fachbereich sollte in `subjects` mindestens enthalten:
- `title`
- `slug`
- `description`
- `order`
- `accent`
- zusätzlich später sinnvoll:
  - Hero-Text
  - Fachbereichs-Tags
  - Icon/Visual
  - Einstiegspfad
  - Highlight-Themen

## 3) Landingpages sollen Artikel und Aufgaben zusammenführen
Da bereits `articles` und `exercises` existieren, sollten Fach-Landingpages später aus beiden Collections gespeist werden:
- Einstiegsthemen aus `articles`
- Übungsblöcke aus `exercises`

### Konsequenz
Landingpages sind keine statischen Wandschirme, sondern kuratierte Kombinationen aus:
- Fachbereichsdaten
- Wissensseiten
- Aufgaben

## Empfohlene Mindeststruktur pro Fach-Landingpage
Jede Fachbereichsseite sollte mindestens diese Blöcke haben:
1. Hero
2. Themenblöcke
3. Einstieg in Wissensseiten
4. Einstieg in Aufgaben
5. optional Vertiefungen / neu hinzugefügt

## Fachspezifische Besonderheiten
## Mathematik
- Aufgaben besonders sichtbar
- Graph-/Analysis-Kernblock vorne
- Rechenintensive Themen gestuft zeigen

## Linux
- starke Lernpfadlogik
- Grundlagen und Praxis klar trennen
- Shell, Rechte, Skripte, SSH als große Sektionen

## Web Development
- HTML/CSS als sauberer Einstieg
- Praxisprojekte später ergänzend
- Code-/Preview-Themen besonders hervorheben

## Informatik
- Einstieg, Programmieren, C, Vertiefungen
- C und Python sauber einordnen

## Elektrotechnik
- Theorie und Aufgaben sichtbar koppeln
- Mikrocontroller als eigener großer Praxisblock

## Was vermieden werden sollte
- Landingpages nur als Linkliste
- Aufgaben erst tief verstecken
- zu viele Karten ohne Einstiegshilfe
- Fachbereiche ohne erkennbare innere Logik
- doppelte Fachidentitäten in Startseite und Landingpage

## Sinnvolle nächste Umsetzung nach dieser Planung
Nach dieser Landingpage-Planung wäre der sinnvollste nächste Schritt:
- pro Fachbereich ein konkretes Landingpage-Schema festlegen
- anschließend `subjects`-Inhalte und spätere `articles`/`exercises` daran andocken

## Zusammenfassung
Fachbereichs-Landingpages sind im neuen Schlaufuchs nicht bloß Übersichten.

Sie sind die zentrale Brücke zwischen:
- Fachidentität,
- Wissensseiten,
- Aufgaben,
- Einstieg,
- und Vertiefung.

Weil das Repo bereits mit `subjects`, `articles` und `exercises` arbeitet, müssen diese Landingpages jetzt **genau auf dieses Modell** aufbauen.
