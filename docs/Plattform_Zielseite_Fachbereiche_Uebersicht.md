# Plattform – Zielseite `fachbereiche-uebersicht`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete repo-nahe Zielrichtung für die **Fachbereichsübersicht** der Plattform.

Sie baut ausdrücklich auf dem vorhandenen Astro-Iststand auf:
- bestehende Fachbereichsseite
- `subjects`-Collection
- geplante Fach-Landingpages
- neue Fach- und Aufgabenlogik

Die Seite soll künftig die systematische Übersicht aller Fächer sein – klarer, konsistenter und stärker an den Fach-Landingpages ausgerichtet.

## Rolle der Fachbereichsübersicht
Die Fachbereichsübersicht ist nicht dasselbe wie die Startseite.

### Startseite
- schneller Einstieg
- visuell und emotional
- Suche, Aufgaben und Fachzugriff

### Fachbereichsübersicht
- vollständige systematische Übersicht
- alle Fächer gleichwertig sichtbar
- sauberer Zugang zu den einzelnen Fach-Landingpages

## Repo-basierte Ausgangslage
Es gibt bereits eine Fachbereichsübersicht, die auf `subjects` basiert.

### Konsequenz
Die Seite ist strukturell schon vorhanden. Die weitere Planung muss deshalb vor allem fachlich präzisieren:
- welche Fachbereiche dort sichtbar sind
- welche Bezeichnungen und Beschreibungen passen
- wie stark Aufgaben dort schon angedeutet werden

## Ziel der Fachbereichsübersicht
Die Seite soll:
- alle Hauptfächer sichtbar und konsistent aufführen
- jedem Fach eine klare Identität geben
- von dort in die Fach-Landingpages führen
- Aufgaben als Teil der Fächer andeuten, ohne die Seite zu überladen

## Soll-Fachbereiche
Die Übersicht soll diese Hauptfächer enthalten:
- Mathematik
- Informatik
- Elektrotechnik
- Linux
- Web Development

## Wichtige Korrekturen zur aktuellen Produktlogik
## 1) Kein separater Hauptfachbereich `Daten & Signale`
Diese Logik soll nicht neben Elektrotechnik konkurrieren.

### Stattdessen
- `Elektrotechnik` bleibt das Hauptfach
- Daten & Signale erscheint innerhalb der Fach-Landingpage Elektrotechnik als Themenblock

## 2) Kein separater Hauptfachbereich `HTML/CSS`
### Stattdessen
- `Web Development` bleibt das Hauptfach
- HTML und CSS erscheinen als Einstiegssektionen innerhalb dieser Fachseite

## Empfohlener Aufbau
## 1) Seitenkopf
### Inhalt
- Titel: `Fachbereiche`
- kurze Beschreibung
- Hinweis, dass jedes Fach sowohl Wissen als auch Aufgaben bietet

### Beispiel-Satz
> Entdecke alle Fachbereiche und steige über Grundlagen, Wissensseiten und Übungen direkt ein.

## 2) Fachkarten-Raster
### Ziel
Alle Hauptfächer gleichwertig sichtbar machen.

### Inhalt pro Karte
- Fachname
- kurze Fachbeschreibung
- 2–4 sichtbare Themenschwerpunkte
- optional Hinweis auf Übungsfokus
- CTA zur Fach-Landingpage

### Beispielhafte Schwerpunkte
#### Mathematik
- Funktionen
- Analysis
- Vektorgeometrie
- Aufgabenrechnen

#### Linux
- Shell
- Rechte und Benutzer
- Shellskripte
- SSH

#### Elektrotechnik
- Signale und Kommunikation
- Halbleiter
- Netzwerke / Aufgaben
- Mikrocontroller

#### Web Development
- HTML
- CSS
- Struktur und Layout
- Praxisaufgaben

#### Informatik
- Einstieg
- Programmieren
- C-Grundlagen
- Code-Aufgaben

## 3) Orientierung nach Lerninteresse
### Optionaler Zusatzblock
Zusätzlich zum Fachraster könnte die Übersicht eine sekundäre Orientierung bieten:
- `eher rechnen`
- `eher programmieren`
- `eher praktisch anwenden`

### Warum
Das kann besonders neuen Nutzern helfen, ohne gleich alle Fachdetails zu kennen.

## 4) Verbindung zum Aufgaben-Hub
### Ziel
Schon auf Fach-Ebene sichtbar machen, dass es nicht nur Wissensseiten gibt.

### Empfehlung
Kleine globale Verknüpfung unter dem Fachraster:
- `Alle Aufgaben ansehen`
- `Zum globalen Aufgaben-Hub`

## 5) Optionaler Suchbezug
### Ziel
Wer kein Fach wählen will, soll direkt weiterkommen.

### Empfehlung
Kleiner Zusatzlink oder Sekundär-CTA:
- `Thema suchen`

## Rolle der Seite im Collection-Modell
Die Fachbereichsübersicht ist die globale Einstiegsebene zu `subjects`.

### Das bedeutet
- Karten sollen auf Fach-Landingpages verlinken
- Fachtexte müssen mit den späteren Landingpages konsistent sein
- die Fachbereichsübersicht darf nicht stärker improvisieren als die `subjects` selbst

## Was vermieden werden sollte
- doppelte oder konkurrierende Hauptfächer
- Fachkarten ohne klaren thematischen Fokus
- Überladung mit zu vielen Details
- eine reine alphabetische Liste ohne Nutzungslogik

## Unterschied zur Navigation
Die Fachbereichsübersicht ersetzt nicht die globale Navigation.

### Navigation
- schneller Zugriff

### Fachbereichsübersicht
- systematische, ruhigere Orientierung

## Zusammenfassung
Die Fachbereichsübersicht soll die vorhandene `subjects`-Logik sichtbar und konsistent nach außen tragen.

Sie ist die geordnete Brücke zwischen:
- Startseite,
- Hauptnavigation,
- Fach-Landingpages,
- und später dem globalen Aufgaben-Hub.
