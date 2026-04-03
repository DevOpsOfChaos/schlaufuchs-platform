# Elektrotechnik – Zielseite `arduino-einstieg`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `elektrotechnik/arduino-einstieg` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Einstiegsseite zu Arduino als Lernplattform für Mikrocontroller.

Die Seite soll Arduino als einfachen, praxisnahen Zugang zu Mikrocontroller-Projekten erklären und erste Programm- und Hardwarelogik sichtbar machen.

## Rolle der Seite im neuen Elektrotechnik-Aufbau
Die Seite gehört in den Abschnitt:
- Elektrotechnik
- Mikrocontroller

Sie kommt sinnvoll **nach** `mikrocontroller-grundlagen` und **vor** konkreteren Arduino-Aufbau- oder GPIO-/PWM-Seiten.

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was Arduino als Plattform ist
- warum Arduino für den Einstieg so beliebt ist
- wie Programmcode, Board und einfache Schaltung zusammenhängen
- wie der grundlegende Ablauf von Setup, Loop und Upload gedacht werden kann

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- komplette IDE-Schritt-für-Schritt-Vollanleitung
- alle Boardvarianten im Detail
- tiefe Bibliotheks- oder Speicherverwaltung
- komplexe Hardwareprojekte
- ESP32-spezifische WLAN-Themen

## Altquellen, die nur als Inhaltsbasis dienen
- `mikrocontroller_lernmaterial/arduino/*`
- Einführungsseiten aus dem Altbestand
- erste Blink-/Grundlagenaufgaben und Lösungen

## Zielcharakter der neuen Seite
Die Seite soll:
- Arduino als zugänglichen Lernweg erklären
- mit sehr kleinen Praxisbeispielen arbeiten
- Code und Hardware gemeinsam denken
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
- Titel: `Arduino als Einstieg in Mikrocontroller`
- kurzer Einleitungssatz
- 2–3 Lernziele

## 2) Abschnitt: Was ist Arduino?
- Board + Entwicklungsumgebung + Lernökosystem
- einfacher Zugang zu Mikrocontroller-Projekten
- gut für Sensoren, LEDs und kleine Steueraufgaben

## 3) Abschnitt: Wie arbeitet man mit Arduino?
- Code schreiben
- auf das Board übertragen
- Hardware reagiert auf das Programm

## 4) Abschnitt: Die Grundidee von `setup()` und `loop()`
- `setup()` für einmalige Initialisierung
- `loop()` für wiederholte Abläufe
- klarer Vergleich statt Theorieblock

## 5) Abschnitt: Das kleinste erste Programm
- Blink-Idee oder sehr kleines Ausgabe-/Steuerbeispiel
- keine Codewüste
- Verbindung von Code und sichtbarem Verhalten

## 6) Abschnitt: Warum Arduino didaktisch gut funktioniert
- direkter Praxisbezug
- sichtbare Ergebnisse
- gute Brücke zwischen Software und Elektronik

## 7) Lernmodus / interaktive Module
- `setup()` oder `loop()` zuordnen
- Codebaustein und Hardwarewirkung koppeln
- Arduino oder allgemeiner Mikrocontroller-Begriff unterscheiden
- erstes Mini-Programm lesen

## 8) Merksatz
> Arduino macht Mikrocontroller-Projekte leicht zugänglich, weil Programmcode und sichtbare Hardware-Reaktion direkt zusammenkommen.

## Bild- und Grafikentscheidung
### fachlich prüfbar, aber meist besser neu bauen
- Boarddarstellungen, Pinbilder und IDE-Screenshots aus dem Altbestand nur als fachliche Vorlage prüfen
- neue reduzierte Komponenten und kleine Code-/Hardware-Demos bevorzugen

## Aufgabenintegration
Arduino-Aufgaben aus dem Altbestand sind ausdrücklich relevant.

### Früh sinnvoll
- Blink-Aufgaben
- einfache digitale Ausgänge
- Grundlogik von `setup()` und `loop()`

### Übernahmeform
- wichtige Einstiegsaufgaben zunächst leicht bereinigt übernehmen
- später in neue Challenge- oder Lernmodus-Blöcke überführen

## Warum diese Seite wichtig ist
Sie macht den Mikrocontroller-Bereich niedrigschwellig und motivierend zugänglich und bereitet die konkreteren Arduino- und ESP32-Seiten fachlich sauber vor.
