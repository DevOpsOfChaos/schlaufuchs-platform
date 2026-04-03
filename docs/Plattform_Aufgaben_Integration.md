# Plattform – Aufgaben-Integration

## Zweck dieser Datei
Diese Datei beschreibt, wie **Aufgaben (`exercises`) sichtbar und sinnvoll in die Plattform integriert** werden sollen.

Sie baut ausdrücklich auf dem Repo-Iststand auf:
- vorhandene `exercises`-Collection
- vorhandene Fachbereichslogik
- vorhandene Suche
- vorhandene Start- und Übersichtsseiten

## Ausgangslage im Repo
Im Content-Modell existiert bereits eine Collection für:
- `exercises`

Gleichzeitig sind Aufgaben in der Plattform aktuell noch nicht so sichtbar wie:
- Fachbereiche
- Wissensseiten
- News

### Konsequenz
Die nächste Meta-Stufe muss Aufgaben **nicht erst erfinden**, sondern sichtbar in die Plattformarchitektur einbauen.

## Neuer Grundsatz
Aufgaben sind kein bloßes Anhängsel von Wissensseiten.

Aufgaben sind auf Schlaufuchs eine eigene Lernform mit eigenem Nutzen:
- Verständnis prüfen
- Wissen anwenden
- Rechnen üben
- Strukturen erkennen
- Transfer leisten

Deshalb sollen Aufgaben künftig auf drei Ebenen sichtbar werden:
1. **fachbereichsbezogen**
2. **themenbezogen**
3. **global auffindbar**

## Zielbild für Aufgaben in der Plattform
## 1) Aufgaben unter Wissensseiten
### Zweck
Direktes Üben nach dem Lesen.

### Empfehlung
Jede wichtige Wissensseite sollte mittelfristig mindestens einen passenden Aufgabenblock haben:
- `Direkt üben`
- `Passende Aufgaben`
- `Zum Wiederholen`

### Geeignet für
- kleinere Checks
- Einstiegsaufgaben
- kurze Transferfragen

## 2) Aufgaben in Fachbereichs-Landingpages
### Zweck
Aufgaben schon auf Fach-Ebene sichtbar machen.

### Empfehlung
Jede Fachbereichsseite sollte einen eigenen Aufgabenabschnitt haben:
- Einstiegsaufgaben
- typische Aufgabenserien
- weiterführende Übungsblöcke

Das ist besonders wichtig für:
- Mathematik
- Elektrotechnik
- Linux

## 3) Globale Aufgabenübersicht
### Zweck
Aufgaben als eigene Plattform-Ebene sichtbar machen.

### Empfehlung
Es sollte eine eigene globale Aufgaben-Seite geben, zum Beispiel:
- `/aufgaben`

### Inhalt
- Filter nach Fachbereich
- Filter nach Schwierigkeit
- evtl. Filter nach Typ
- Karten oder Listenansicht

### Warum
Weil Lernende oft nicht nur "lesen", sondern gezielt "üben" wollen.

## 4) Aufgaben in der Suche
### Zweck
Aufgaben genauso gut auffindbar machen wie Artikel.

### Konsequenz
Die Suche sollte Aufgaben sichtbar unterscheiden können:
- `Infoseite`
- `Aufgabe`
- `Fachbereich`
- `News`

## Empfohlene Aufgaben-Typen auf der Plattform
## A. Klassische Aufgabenblöcke
- Rechenaufgaben
- Analyseaufgaben
- Standardaufgaben mit Lösung

Besonders wichtig für:
- Mathematik
- Elektrotechnik

## B. Mini-Checks
- kurze Verständnistests
- kleine Transferfragen
- Zuordnungsaufgaben

Besonders geeignet für:
- Informatik
- Linux
- Web Development

## C. Interaktive Aufgaben
- Zuordnen
- Sortieren
- Diagramme lesen
- Parameter verändern
- Code-/Vorschau-Module

Besonders geeignet für:
- HTML/CSS
- Linux
- Elektrotechnik
- Mathematik

## D. Praxis-/Challenge-Aufgaben
- Arduino-Projekte
- ESP32-Projekte
- Shellskripte
- HTML/CSS-Kleinstprojekte

## Empfohlene Metadaten für `exercises`
Aktuell enthält die Collection bereits:
- `title`
- `description`
- `subject`
- `level`
- `draft`

### Später sinnvoll ergänzbar
- `section`
- `tags`
- `exerciseType`
- `relatedArticle`
- `estimatedTime`
- `hasSolution`
- `order`

### Warum
Damit Aufgaben später:
- sauber gefiltert,
- auf Landingpages angezeigt,
- und mit Wissensseiten verbunden werden können.

## Empfohlene Plattformlogik für Aufgaben
## 1) Globaler Aufgaben-Hub
### Seite
- `/aufgaben`

### Funktion
- alle Übungen sammeln
- Fachfilter
- Schwierigkeitsfilter
- ggf. Formatfilter

## 2) Fachbezogene Aufgaben-Hubs
### Beispiel
- `/fachbereiche/mathematik#aufgaben`
- `/fachbereiche/linux#aufgaben`

Oder als eigene Unterseite je Fachbereich:
- `/fachbereiche/mathematik/aufgaben`

### Empfehlung
Kurzfristig reicht ein Aufgabenabschnitt auf der Fach-Landingpage.
Später kann daraus ein eigener Fach-Aufgabenhub werden.

## 3) Aufgaben unter Artikeln
### Empfehlung
Nicht jede Aufgabe braucht eine globale eigene Prominenz.
Kleine Übungen können direkt unter passenden Artikeln liegen.

### Unterscheidung
- kleine Übungen → direkt beim Artikel
- große Aufgabenserien → Fachbereich oder globaler Aufgabenhub

## Repo-basierte Auffälligkeiten aus dem Iststand
## 1) `exercises` ist schon modelliert, aber noch nicht prominent sichtbar
Das Repo ist also strukturell schon vorbereitet, aber produktseitig noch nicht ausgebaut.

## 2) Die Suche arbeitet aktuell noch mit einem statischen Suchindex
### Konsequenz
Später müssen Aufgaben aus `exercises` dort systematisch auftauchen.
Nicht nur Artikel und Fachpfade.

## 3) Die Hauptnavigation zeigt aktuell keinen globalen Aufgabenpunkt
### Konsequenz
Die Informationsarchitektur muss entscheiden, ob Aufgaben:
- direkt in die Hauptnavigation kommen,
- über Fachbereiche laufen,
- oder beides bekommen.

## Fachspezifische Priorität für Aufgaben
## Sehr hohe Priorität
- Mathematik
- Elektrotechnik
- Linux

## Mittlere Priorität
- Web Development
- Informatik

## Warum
Weil Mathe und ET stark aufgabengetrieben sind und Linux viele gute Übungsformate bietet.

## Stufenmodell für die Aufgabenintegration
## Stufe 1 – Sichtbarkeit herstellen
- Aufgaben auf Fachbereichsseiten zeigen
- Aufgaben in Suche aufnehmen
- globale Aufgaben-Seite planen oder anlegen

## Stufe 2 – Verknüpfung verbessern
- Aufgaben mit Artikeln verknüpfen
- Einstiegs- vs. Vertiefungsaufgaben trennen
- Schwierigkeitsstufen sichtbar machen

## Stufe 3 – Interaktivität ausbauen
- Zuordnungsaufgaben
- Diagnosemodule
- Code-/Graph-/Signal-Interaktionen
- Challenge-Formate

## Was vermieden werden sollte
- Aufgaben nur tief in Fachseiten verstecken
- große Alt-Aufgabenbestände ohne Filter oder Struktur sammeln
- kleine Übungen und große Aufgabenserien gleich behandeln
- News sichtbarer machen als Aufgaben, obwohl Übungen zentraler Lernnutzen sind

## Konkrete Empfehlung
Der sinnvollste nächste Plattformschritt wäre:
1. Aufgaben global sichtbar machen
2. Aufgabenblöcke in Fach-Landingpages einbauen
3. später Suchindex und Content-Collections sauber darauf ausrichten

## Zusammenfassung
Die Plattform ist strukturell bereits bereit für Aufgaben:
- `exercises` existiert
- Fachbereiche existieren
- Suche existiert

Was fehlt, ist vor allem die **sichtbare Produktlogik** für Aufgaben.

Genau diese Lücke soll die nächste Meta- und Umsetzungsphase schließen.
