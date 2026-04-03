# Plattform – Suche und Content-Synchronisierung

## Zweck dieser Datei
Diese Datei beschreibt, wie die bestehende Suche später sauber mit dem echten Content-Modell der Plattform synchronisiert werden soll.

Sie baut ausdrücklich auf dem Repo-Iststand auf:
- vorhandene Suchseite
- statischer `searchIndex`
- vorhandene Collections für `subjects`, `articles`, `exercises`, `news`

## Ausgangslage im Repo
Es gibt bereits:
- eine Suchseite unter `/suchen`
- einen statischen `searchIndex`
- Filterchips auf der Suchseite

### Wichtig
Der aktuelle Suchindex ist nützlich als UI-Vorstufe, enthält aber teils:
- Platzhalterpfade
- tiefere Fachpfade, die noch nicht mit der neuen Fachplanung synchron sind
- nur teilweise die neue Produktlogik für Aufgaben

Das ist kein Fehler, aber es bedeutet:

**Die Suche ist schon da – ihre Datengrundlage muss später sauber modernisiert werden.**

## Repo-basierte Beobachtungen
## 1) Die Suchseite ist produktseitig schon brauchbar
Sie hat bereits:
- Suchfeld
- Bereichsfilter
- Ergebniskarten
- leere Trefferlogik

### Konsequenz
Die Suche muss nicht neu erfunden werden.

## 2) Die Datengrundlage ist aktuell noch statisch
Der `searchIndex` ist derzeit eine manuelle Liste und bildet das spätere System nur teilweise ab.

### Beispiele für Spannungen
- tiefere Mathematik- und Linux-Pfade wirken noch wie frühere oder gedachte Strukturen
- `Web Development` und HTML/CSS-Planung müssen später sauber zusammenlaufen
- Aufgaben sind noch nicht als gleichwertige Produkt-Ebene sichtbar genug

## 3) Aufgaben sind noch nicht sauber in der Suche repräsentiert
Die Suche spricht im Hero zwar schon von „Themen, Aufgaben und Lernseiten durchsuchen“, aber die Produktlogik dafür ist noch nicht sauber mit `exercises` verknüpft. fileciteturn100file0turn95file0

## Zielbild für die Suche
Die Suche soll später Inhalte aus diesen Ebenen erfassen:
- `subjects`
- `articles`
- `exercises`
- `news`
- optionale Meta-Seiten wie Impressum/Kontakt nur nachrangig

## Gewünschte Ergebnis-Typen
Suche soll später mindestens unterscheiden zwischen:
- Fachbereich
- Wissensseite / Artikel
- Aufgabe
- News
- Systemseite

## Empfohlene Datenlogik
## 1) `subjects`
Verwendung in der Suche:
- Fachbereich als Einstieg
- Landingpages auffindbar machen

## 2) `articles`
Verwendung in der Suche:
- konkrete Wissensseiten
- Themen und Unterthemen
- wichtigste Suchmasse der Plattform

## 3) `exercises`
Verwendung in der Suche:
- Aufgaben und Übungen
- explizit eigener Ergebnistyp
- nach Fach, Schwierigkeit und Typ filterbar

## 4) `news`
Verwendung in der Suche:
- Änderungen, Plattformupdates, neue Inhalte
- eher nachrangig gegenüber Fach- und Lerninhalten

## Empfohlene Suchebenen
## Ebene A – globaler Schnellzugriff
- Volltextsuche über Titel und Beschreibungen
- Bereichsfilter
- Ergebnis-Typen sichtbar markieren

## Ebene B – fachliche Filterung
Zusätzlich später sinnvoll:
- Fachbereich
- Sektion
- Schwierigkeitsgrad
- Inhaltstyp

## Ebene C – kontextuelle Suche
Später optional:
- in Fachbereichsseiten eingebettete Suche
- auf Artikel bezogene Aufgabenempfehlungen

## Empfohlene Weiterentwicklung des Suchindex
## Stufe 1 – statischen Index bereinigen
- alte/gedachte Pfade entfernen
- Fachnamen und Slugs mit der echten Collection-Logik angleichen
- Aufgaben als echte Trefferklasse sichtbar machen

## Stufe 2 – Collections einbeziehen
Der Suchindex sollte später aus echten Content-Daten aufgebaut werden:
- `subjects`
- `articles`
- `exercises`
- `news`

### Vorteil
- weniger doppelte Pflege
- weniger Drift zwischen Planung und Suchergebnis
- neue Inhalte erscheinen konsistenter

## Stufe 3 – Filterlogik erweitern
- `area`
- `kind`
- `level`
- ggf. `section`
- später evtl. `tags`

## Wichtigste inhaltliche Korrekturen für die Suchlogik
## A. Fachnamen angleichen
Die Suche muss mit den tatsächlich verwendeten Fachbezeichnungen arbeiten:
- `web-development` statt losgelöstem HTML/CSS-Hauptbereich
- `elektrotechnik` statt konkurrierender Hauptbezeichnung `daten-und-signale`

## B. Aufgaben sichtbar machen
Da `exercises` bereits im Datenmodell existiert, müssen Aufgaben später in der Suche klar als Übungsformat erscheinen.

## C. Platzhalterpfade abbauen
Der aktuelle Suchindex enthält tiefe Pfade, die nicht zwingend mit der neuen Fach- und Zielseitenplanung übereinstimmen.
Diese müssen später an echte Inhalte gekoppelt oder ersetzt werden.

## D. News nicht mit Lerninhalten vermischen
News darf in der Suche bleiben, sollte aber klar als eigener Typ gekennzeichnet bleiben.

## Empfohlene UI-Signale pro Ergebnis
Jede Suchkarte sollte später klar erkennbar machen:
- Ergebnis-Typ
- Fachbereich
- Kurzbeschreibung
- Schwierigkeitsgrad (falls sinnvoll)
- ggf. Sektion oder Thema

## Rolle der Suche in der Gesamtplattform
Die Suche ist nicht nur Komfortfunktion, sondern eine zweite IA-Achse neben:
- Navigation
- Fachbereichs-Landingpages
- Aufgabenhubs

Deshalb muss die Suche später denselben Content-Wahrheiten folgen wie:
- Navigation
- Landingpages
- Collections

## Zusammenfassung
Die Suche ist im Repo bereits produktseitig angelegt.

Die nächste wichtige Weiterentwicklung besteht nicht im Neuaufbau der Such-UI, sondern in der **sauberen Synchronisierung mit dem echten Content-Modell**:
- echte Fachnamen
- echte Slugs
- echte Artikel
- echte Aufgaben
- echte News

Damit wird aus der jetzigen guten UI-Vorstufe später eine belastbare Suchfunktion für die gesamte Plattform.
