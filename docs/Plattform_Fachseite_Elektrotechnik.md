# Plattform – konkrete Fach-Landingpage `elektrotechnik`

## Zweck dieser Datei
Diese Datei beschreibt die **konkrete repo-nahe Zielstruktur** für die Fachbereichs-Landingpage `elektrotechnik`.

Sie baut auf drei Ebenen auf:
- bestehender Repo-Iststand mit Fachnavigation und Collections
- bereits geplante Elektrotechnik-Fachstruktur in `docs/`
- geplante Aufgabenintegration über `exercises`

## Warum Elektrotechnik als konkrete Fach-Landingpage?
Elektrotechnik braucht besonders dringend eine klare Landingpage, weil:
- der Fachbereich inhaltlich breit ist
- Theorie, Rechnen, Bauelemente und Mikrocontroller zusammenlaufen
- der Aufgabenbestand besonders groß und wertvoll ist
- Daten/Signale aktuell im Repo noch nicht sauber genug unter Elektrotechnik eingebunden sind

## Repo-Anschluss
### Subject-Slug
- `elektrotechnik`

### Andockpunkte
- `subjects`
- `articles`
- `exercises`

## Wichtige repo-basierte Festlegung
`Daten & Signale` soll **nicht** als konkurrierender Hauptfachbereich neben Elektrotechnik erscheinen, sondern als wichtiger Themenblock **innerhalb** von Elektrotechnik.

## Rolle der Fachseite
Die Elektrotechnik-Fachseite soll vier Nutzertypen gleichzeitig abholen:
- Lernende, die Theoriegrundlagen suchen
- Lernende, die gezielt Aufgaben rechnen wollen
- Lernende, die Bauelemente verstehen möchten
- Lernende, die in Mikrocontroller- und Praxisprojekte einsteigen möchten

## Ziel der Fachseite
Die Seite soll:
1. Elektrotechnik als Fach verständlich eröffnen
2. Theorie, Kommunikation, Bauelemente und Praxis sichtbar gliedern
3. Wissensseiten und Aufgaben gleichwertig darstellen
4. Rechen- und Praxisblöcke klar sichtbar machen
5. Mikrocontroller als starkes Praxisfeld sinnvoll integrieren

## Empfohlener Aufbau
## 1) Hero-Bereich
### Inhalt
- Titel: `Elektrotechnik`
- kurze Fachbeschreibung
- ein Satz zum Nutzen des Bereichs
- 2 primäre Einstiege

### Beispiel-CTA
- `Mit den Grundlagen starten`
- `Direkt Aufgaben üben`

### Kernaussage im Hero
Elektrotechnik auf Schlaufuchs verbindet:
- technische Grundlagen
- Schaltungs- und Rechenverständnis
- Kommunikationstechnik
- Mikrocontroller-Praxis

## 2) Einstiegsblock
### Ziel
Neue Nutzer in die klarsten Grundlagenthemen führen.

### Empfohlene Kacheln
- Computer und CPU-Grundlagen
- Daten, Signale und Codierung
- Netzwerke und Protokolle

### Inhaltlich passend zu bisherigen Planungen
- `computer-und-cpu-grundlagen`
- `daten-signale-und-codierung`
- `netzwerke-und-protokolle`

## 3) Große Themenblöcke
Die Elektrotechnik-Landingpage sollte die Fachstruktur sichtbar in Hauptsektionen gliedern:

### A. Computer und digitale Grundlagen
- Computer und CPU-Grundlagen
- Daten, Signale und Codierung
- Netzwerke und Protokolle

### B. Digitaltechnik und Halbleiter
- Logikgatter und digitale Schaltungen
- Halbleiter und Dioden
- MOSFETs und Transistoren

### C. Elektrische Netzwerke und Rechnen
- elektrische Netzwerke Grundlagen
- Netzwerkanalyse-Aufgaben
- Wechselstrom Grundlagen und Aufgaben

### D. Mikrocontroller und Praxis
- Mikrocontroller-Grundlagen
- Arduino-Einstieg
- Arduino GPIO/PWM/Taster
- ESP32 mit WiFi, Webserver und MQTT

## 4) Wissensseiten-Bereich
### Ziel
Die wichtigsten `articles` des Fachbereichs sichtbar machen.

### Empfehlung
Keine Vollauflistung, sondern:
- 6–8 kuratierte Kernseiten
- sichtbar nach Theorie / Rechnen / Praxis gegliedert

### Kartenelemente
- Titel
- Kurzbeschreibung
- Lernstufe
- Sektion

## 5) Aufgaben-Bereich
### Ziel
Der Aufgabenbereich muss auf der Elektrotechnik-Seite besonders deutlich sichtbar sein.

### Empfohlene Sektionen
- `Rechenaufgaben`
- `Bauelemente verstehen`
- `Netzwerkanalyse`
- `Wechselstrom üben`
- `Mikrocontroller-Projekte`

### Inhalt pro Karte
- Aufgabentitel
- Kurzbeschreibung
- Schwierigkeit
- optional Typ: Rechnen / Diagnose / Hardware / Praxis

## 6) Einstieg vs. Vertiefung
### Ziel
Den sehr breiten Fachbereich besser beherrschbar machen.

### Empfehlung
Sichtbare Zweiteilung:
- `Zum Einstieg`
- `Zum Vertiefen und Anwenden`

#### Zum Einstieg
- Computer/CPU
- Daten und Signale
- Logikgatter
- Dioden-Grundlagen

#### Zum Vertiefen und Anwenden
- MOSFETs
- Netzwerkanalyse
- Wechselstrom
- Arduino- und ESP32-Projekte

## 7) Aufgaben-Hub-Verknüpfung
### Ziel
Elektrotechnik-Fachseite und globaler Aufgaben-Hub sollen sich gegenseitig verstärken.

### Empfehlung
Auf der Fachseite sichtbar:
- `Alle Elektrotechnik-Aufgaben ansehen`
- Link zum globalen `/aufgaben`-Hub mit Fachfilter Elektrotechnik

## 8) Such- und Filterlogik im Fach
### Später sinnvoll
- nur Elektrotechnik-Inhalte durchsuchen
- Filter nach Sektion
- Filter nach Level
- Filter nach Typ: Wissen / Aufgabe

## Empfohlene inhaltliche Sektionen für Collection-Mapping
### Für `articles`
- `computer-und-cpu`
- `daten-und-kommunikation`
- `halbleiter`
- `netzwerke-und-rechnen`
- `mikrocontroller`

### Für `exercises`
- `daten-und-signale`
- `halbleiter`
- `netzwerkanalyse`
- `wechselstrom`
- `mikrocontroller`

## Priorisierte Inhalte für erste echte Befüllung
### Wissensseiten zuerst
- Computer und CPU-Grundlagen
- Daten, Signale und Codierung
- Netzwerke und Protokolle
- Logikgatter und digitale Schaltungen
- Mikrocontroller-Grundlagen

### Aufgaben zuerst
- Netzwerkanalyse-Aufgaben
- Wechselstrom-Aufgaben
- Dioden-Grundaufgaben
- Arduino-Basisaufgaben

## Was vermieden werden sollte
- Elektrotechnik nur als Rechenfach zeigen
- Daten & Signale parallel als konkurrierenden Bereich sichtbar machen
- Mikrocontroller zu früh vom restlichen Fach abkoppeln
- Aufgaben tief verstecken
- Fachbereich ohne klare Einstiegslogik überfrachten

## Zusammenfassung
Die Fach-Landingpage `elektrotechnik` sollte Elektrotechnik als klar gegliederten Lernraum zeigen:
- verstehen
- analysieren
- rechnen
- Hardware anwenden
- Projekte umsetzen

Damit wird aus einem sehr breiten Altbestand ein strukturierter Fachbereich mit sichtbarer Theorie-, Aufgaben- und Praxislogik.
