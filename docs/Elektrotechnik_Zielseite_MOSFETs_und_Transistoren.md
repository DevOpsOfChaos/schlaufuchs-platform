# Elektrotechnik – Zielseite `mosfets-und-transistoren`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `elektrotechnik/mosfets-und-transistoren` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu MOSFETs und grundlegenden Transistorkonzepten.

## Rolle der Seite im neuen Elektrotechnik-Aufbau
Die Seite gehört in den Abschnitt:
- Elektrotechnik
- Digitaltechnik und Halbleiter

Sie kommt sinnvoll **nach**:
- `halbleiter-und-dioden`

Und **vor**:
- Mikrocontroller-Hardwarepraxis
- spätere leistungselektronische oder anwendungsspezifische Vertiefungen

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was ein Transistor grundsätzlich macht
- wie ein MOSFET grob funktioniert
- was Gate, Drain und Source sind
- warum MOSFETs als Schalter in elektronischen Schaltungen wichtig sind
- wie typische Grundschaltungen und Aufgabenfälle gelesen werden können

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe Halbleiterphysik
- vollständige Kennlinien- und Ersatzmodellanalyse
- komplexe Leistungselektronik
- BJT-/FET-Vollvergleich im Hochschulstil
- komplexe Treiberschaltungen als Einstieg

## Altquellen, die nur als Inhaltsbasis dienen
- `halbleiter_lernmaterial/*`
- MOSFET- und Transistorseiten im Altbestand
- `halbleiter_aufgaben/*`
- `halbleiter_loesungen/*`

## Zielcharakter der neuen Seite
Die Seite soll:
- Transistoren funktional statt rein formelgetrieben erklären
- MOSFETs als wichtigen Praxisfall sichtbar machen
- mit einfachen Schaltszenarien arbeiten
- Aufgaben ausdrücklich mitdenken
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
- Titel: `MOSFETs und Transistoren verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele

## 2) Abschnitt: Was macht ein Transistor grundsätzlich?
- Schalten oder Steuern
- kleines Signal beeinflusst größeren Stromfluss
- praktische Einordnung ohne Formelmauer

## 3) Abschnitt: MOSFET-Grundidee
- steuerbarer Halbleiterschalter
- Gate als Steuereingang
- Drain und Source als Lastpfad

## 4) Abschnitt: Wichtige Anschlüsse und Einbaulogik
- Gate
- Drain
- Source
- Symbol und Grundrichtung lesen

## 5) Abschnitt: MOSFET als Schalter
- Last schalten
- Mikrocontroller-Bezug andeuten
- Verbindung zu späteren Arduino-/ESP32-Themen

## 6) Abschnitt: Typische Aufgaben- und Schaltungsfälle
- Schaltung lesen
- Leitend oder sperrend grob einordnen
- Bauteilrolle im einfachen Beispiel verstehen

## 7) Lernmodus / interaktive Module
- Gate/Drain/Source zuordnen
- Schaltzustand grob beurteilen
- Symbol richtig lesen
- einfache Anwendungsfälle bewerten

## 8) Merksatz
> Ein MOSFET ist ein steuerbarer Halbleiterschalter, mit dem elektrische Lasten kontrolliert ein- und ausgeschaltet werden können.

## Bild- und Grafikentscheidung
### fachlich relevant, aber meist besser neu bauen
- MOSFET-Symbole, Pin-Belegungen und Schaltungsbilder aus dem Altbestand nur als fachliche Vorlage nutzen
- Aufgaben- und Lösungsbilder eher neu strukturieren

## Aufgabenintegration
Für diesen Themenblock sind Altaufgaben ausdrücklich relevant.

### Früh sinnvoll
- Grundaufgaben zu Symbolen und Anschlussnamen
- einfache Schalt- und Zustandsaufgaben
- erste Anwendungsszenarien

### Übernahmeform
- wichtige Aufgaben zunächst **leicht bereinigt übernehmen**
- später in neue Aufgaben- und Lösungsblöcke oder Diagnosemodule überführen

## Warum diese Seite wichtig ist
Sie schafft eine starke Brücke zwischen Halbleitergrundlagen und realer Steuer-/Schaltungspraxis und ist besonders wertvoll für spätere Mikrocontroller-Hardwarethemen.
