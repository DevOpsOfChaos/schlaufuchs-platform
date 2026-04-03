# Elektrotechnik – Zielseite `mikrocontroller-grundlagen`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `elektrotechnik/mikrocontroller-grundlagen` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine verständliche Wissensseite zu Mikrocontrollern als technische Systembasis.

Die Seite soll erklären, was ein Mikrocontroller ist, wie er sich grob von einem allgemeinen Computersystem unterscheidet und warum er für eingebettete Systeme so wichtig ist.

## Rolle der Seite im neuen Elektrotechnik-Aufbau
Die Seite gehört in den Abschnitt:
- Elektrotechnik
- Mikrocontroller

Sie kommt sinnvoll **vor**:
- `arduino-einstieg`
- `arduino-gpio-pwm-und-taster`
- `esp32-wifi-webserver-und-mqtt`

## Lernziel der Seite
Nach der Seite sollen Lernende verstehen:
- was ein Mikrocontroller ist
- welche Grundbausteine typischerweise integriert sind
- wofür Mikrocontroller in der Praxis eingesetzt werden
- wie Mikrocontroller mit Sensoren, Aktoren und Signalen zusammenarbeiten
- warum dieses Thema eine Brücke zwischen Elektronik, Programmierung und Kommunikation bildet

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe Prozessorarchitektur
- vollständige AVR- oder ESP32-Datenblatt-Erklärung
- Pinout-Vollreferenzen
- Hardwareentwurf im Detail
- direkte IDE- oder Toolkettenschritte als Hauptthema

## Altquellen, die nur als Inhaltsbasis dienen
- `mikrocontroller_lernmaterial/*`
- Grundlagen zu AVR, Arduino, ESP32 und eingebetteten Systemen
- allgemeine Einführungsblöcke aus dem Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- Mikrocontroller als Systemidee verständlich machen
- alltagsnahe Technikbeispiele nutzen
- nicht sofort in Board-spezifische Details springen
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
- Titel: `Mikrocontroller verstehen`
- kurzer Einleitungssatz
- 2–3 Lernziele

## 2) Abschnitt: Was ist ein Mikrocontroller?
- kleines eingebettetes Rechnersystem
- CPU, Speicher und Ein-/Ausgänge auf engem Raum
- für konkrete Steuer- und Messaufgaben gedacht

## 3) Abschnitt: Wofür werden Mikrocontroller eingesetzt?
- Sensoren auslesen
- LEDs, Motoren oder Displays steuern
- Kommunikation mit anderen Geräten
- Heimautomation, IoT und Messsysteme

## 4) Abschnitt: Welche Grundbausteine sind wichtig?
- Recheneinheit
- Speicher
- digitale Ein-/Ausgänge
- analoge Eingänge je nach System
- Timer, PWM, Kommunikationsschnittstellen grob andeuten

## 5) Abschnitt: Warum Mikrocontroller mehr als kleine Computer sind
- direkte Hardware-Nähe
- feste Aufgaben statt allgemeiner Desktop-Nutzung
- enge Verbindung von Elektronik und Software

## 6) Abschnitt: Brücke zu Arduino und ESP32
- Arduino als einfacher Einstieg
- ESP32 als moderner, kommunikationsstarker Mikrocontroller
- beide später in eigenen Zielseiten vertiefen

## 7) Lernmodus / interaktive Module
- Mikrocontroller oder allgemeiner Computer?
- Bausteine eines Mikrocontrollers zuordnen
- Sensor, Eingang, Verarbeitung, Aktor sortieren
- typische Einsatzfälle erkennen

## 8) Merksatz
> Ein Mikrocontroller ist ein kompaktes eingebettetes System, das Eingaben verarbeitet und gezielt Hardware steuert.

## Bild- und Grafikentscheidung
### fachlich prüfbar, aber meist besser neu bauen
- Board-Übersichten, Funktionsskizzen und Blockdiagramme aus dem Altbestand nur als Vorlage nutzen
- neue reduzierte Systemgrafiken im Schlaufuchs-Stil bevorzugen

## Aufgabenintegration
Für diesen Block sollen Altaufgaben und Praxisbeispiele ausdrücklich erhalten bleiben.

### Früh sinnvoll
- Grundbegriffe zuordnen
- Sensor/Aktor/Ausgang erkennen
- Mikrocontroller-Bausteine grob verstehen

### Später
- Übergang in Arduino- und ESP32-Projektaufgaben

## Warum diese Seite wichtig ist
Sie schafft die gemeinsame Grundlage für den gesamten Mikrocontroller-Bereich und verhindert, dass Arduino oder ESP32 nur als Einzelprodukte statt als Systemthema verstanden werden.
