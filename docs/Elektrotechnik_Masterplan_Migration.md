# Elektrotechnik – Masterplan Migration und Neuaufbau

## Zweck dieser Datei
Diese Datei bündelt den Neuaufbau des Fachbereichs **Elektrotechnik** als zentrale Arbeitsgrundlage.

Sie fasst zusammen:
- welche Altbereiche nur noch als Inhaltsquelle dienen
- welche neuen Themenblöcke für die Plattform entstehen sollen
- wie der sehr große Altbestand sinnvoll priorisiert wird
- welche Bilder eher geprüft, neu gebaut oder verworfen werden
- wie Aufgaben und Lösungen im neuen System mitgeplant werden

## Grundsatz für Elektrotechnik
Der alte Elektrotechnik-Bereich dient nur noch als Quelle für:
- Themenstruktur
- Inhalte und Beispiele
- Aufgaben und Lösungen
- einzelne eventuell fachlich brauchbare Grafiken

Er wird **nicht technisch übernommen**.
Alle Seiten werden neu strukturiert, sprachlich modernisiert und in die neue Schlaufuchs-Logik übersetzt.

## Ergebnis der Altanalyse
Elektrotechnik ist einer der größten Altbereiche.

### Große Themenblöcke im Altbestand
- Computergrundlagen / CPU
- Daten, Signale und Codierung
- Netzwerke und Protokolle
- Netzwerksicherheit
- Digitalelektronik / Logikgatter
- Halbleiter / Dioden / MOSFETs / Transistoren
- Elektrische Netzwerke / Netzwerkanalyse
- Wechselstrom-Aufgaben
- Mikrocontroller / Arduino / AVR / ESP32

### Strukturelles Problem des Altbestands
- sehr viele Aufgaben- und Lösungsseiten
- thematisch stark gemischt
- viele Bild- und Unterseiten-Fragmente
- teils gute Fachsubstanzen, aber keine moderne Seitenlogik

## Bildregel für Elektrotechnik
Grundsätzlich gilt:
- Code- und Screenshotbilder: **raus**
- kleine Deko- oder Hilfsbilder: **raus**
- fachliche Diagramme: **prüfen**
- Schaltbilder und Ablaufgrafiken: oft besser **neu bauen**
- Signalcodierungs-, CPU- oder Protokollgrafiken: eher **neu im neuen Stil aufbauen**

## Aufgabenregel für Elektrotechnik
Anders als bei kleineren Fachbereichen sind Aufgaben hier ein zentraler Altbestand.
Deshalb gilt:
- Aufgaben **nicht verwerfen**
- Aufgaben und Lösungen als eigener Migrationsstrang mitplanen
- Aufgaben zunächst je nach Qualität:
  - direkt übernehmen
  - leicht bereinigt übernehmen
  - didaktisch neu formulieren
  - interaktiv umbauen

## Neue Zielstruktur für Elektrotechnik
## A. Computer und digitale Grundlagen
### Zielseiten
- `elektrotechnik/computer-und-cpu-grundlagen`
- `elektrotechnik/daten-signale-und-codierung`
- `elektrotechnik/netzwerke-und-protokolle`
- später `elektrotechnik/netzwerksicherheit-grundlagen`

### Zweck
- sehr gute Einstiegsachse für moderne Technikthemen
- logisch und visuell gut strukturierbar
- wenig Alttechnik-Zwang

## B. Digitaltechnik und Halbleiter
### Zielseiten
- `elektrotechnik/logikgatter-und-digitale-schaltungen`
- `elektrotechnik/halbleiter-und-dioden`
- `elektrotechnik/mosfets-und-transistoren`

### Zweck
- klare Verbindung von Grundlagen und Bauelementen
- viele Aufgaben im Altbestand nutzbar

## C. Elektrische Netzwerke und Wechselstrom
### Zielseiten
- `elektrotechnik/elektrische-netzwerke-grundlagen`
- `elektrotechnik/netzwerkanalyse-aufgaben`
- `elektrotechnik/wechselstrom-grundlagen-und-aufgaben`

### Zweck
- klassische Rechen- und Übungsstrecken bündeln
- Aufgaben/Lösungen ausdrücklich erhalten

## D. Mikrocontroller
### Zielseiten
- `elektrotechnik/mikrocontroller-grundlagen`
- `elektrotechnik/arduino-einstieg`
- `elektrotechnik/arduino-gpio-pwm-und-taster`
- `elektrotechnik/esp32-wifi-webserver-und-mqtt`

### Zweck
- sehr großer Altbestand mit hohem Praxiswert
- Aufgaben und Codebeispiele zentral

## Priorisierte Migrationsreihenfolge
### Phase 1 – sauberer Theoriestart
1. `computer-und-cpu-grundlagen`
2. `daten-signale-und-codierung`
3. `netzwerke-und-protokolle`

### Phase 2 – Schaltungs- und Bauelementlogik
4. `logikgatter-und-digitale-schaltungen`
5. `halbleiter-und-dioden`
6. `mosfets-und-transistoren`

### Phase 3 – starker Aufgabenblock
7. `elektrische-netzwerke-grundlagen`
8. `netzwerkanalyse-aufgaben`
9. `wechselstrom-grundlagen-und-aufgaben`

### Phase 4 – Mikrocontroller
10. `mikrocontroller-grundlagen`
11. `arduino-einstieg`
12. `arduino-gpio-pwm-und-taster`
13. `esp32-wifi-webserver-und-mqtt`

## Interaktive Standards für Elektrotechnik
### 1) Diagramm- und Signalmodule
Für:
- CPU-Funktionsblöcke
- Signalcodierungen
- Datenübertragungsketten
- OSI-/Protokoll-Grundlagen

### 2) Zuordnungs- und Diagnosemodule
Für:
- Protokolle
- Netzwerkebenen
- Halbleiterbauteile
- Logikgatter

### 3) Aufgaben-/Lösungsblöcke
Für:
- Netzwerkanalyse
- Dioden
- MOSFETs
- Wechselstrom
- Arduino/AVR-Aufgaben

### 4) Code- und Hardware-Demos
Für:
- Arduino
- ESP32
- einfache Mikrocontroller-Beispiele

## Elektrotechnik-spezifische Qualitätsregeln
- Aufgabenbestand ausdrücklich erhalten
- Lösungen nicht unkontrolliert mit Wissensseiten vermischen
- Schaltbilder und Signalverläufe eher neu bauen als als alte Bilder übernehmen
- komplexe Rechenblätter klar strukturieren
- Mikrocontroller-Code nicht als Bild übernehmen
- Merksatz auf jeder Seite

## Erstes Themenpaket für den Relaunch
Für den ersten strukturierten Einstieg in Elektrotechnik wird zuerst geplant:
- `computer-und-cpu-grundlagen`
- `daten-signale-und-codierung`
- `netzwerke-und-protokolle`

Diese drei sind als erste Phase besonders gut geeignet, weil sie:
- fachlich sauber zusammenhängen
- den Altbestand gut abdecken
- ohne große Alttechnikübernahme neu aufgebaut werden können
- später eine gute Brücke zu Mikrocontroller und Kommunikation schaffen
