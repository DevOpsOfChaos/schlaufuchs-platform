# Elektrotechnik – Zielseite `esp32-wifi-webserver-und-mqtt`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `elektrotechnik/esp32-wifi-webserver-und-mqtt` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine praxisnahe Wissens- und Aufgabenseite zu ESP32, WLAN, Webserver-Grundlogik und MQTT.

## Rolle der Seite im neuen Elektrotechnik-Aufbau
Die Seite gehört in den Abschnitt:
- Elektrotechnik
- Mikrocontroller

Sie kommt sinnvoll **nach**:
- `mikrocontroller-grundlagen`
- `netzwerke-und-protokolle`
- `arduino-einstieg`

Sie verbindet Mikrocontroller-Themen mit moderner Kommunikation.

## Lernziel der Seite
Nach bzw. mit dieser Seite sollen Lernende verstehen:
- warum der ESP32 für vernetzte Projekte interessant ist
- wie WLAN-Funktionalität Mikrocontroller-Projekte erweitert
- was ein kleiner Webserver auf dem ESP32 grob tut
- wie MQTT in IoT-Szenarien eingeordnet werden kann
- wie typische Altprojekte aus diesem Bereich erhalten und modernisiert werden können

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- vollständige WLAN-Stack-Erklärung
- tiefe Netzwerkdebugging- oder Security-Themen
- komplexe Async-Frameworks oder große Architekturvergleiche
- vollwertige IoT-Plattform-Integrationen im Detail

## Altquellen, die nur als Inhaltsbasis dienen
- `mikrocontroller_lernmaterial/esp32/*`
- `mqtt_protokoll/*`
- `http_protokoll/*`
- `mikrocontroller_aufgaben/*`
- `mikrocontroller_loesungen/*`
- ESP32-Webserver- und WLAN-Aufgaben im Altbestand

## Zielcharakter der neuen Seite
Die Seite soll:
- ESP32-Projekte verständlich und praxisnah einordnen
- Netzwerkthemen und Hardware sauber verbinden
- wichtige Altaufgaben ausdrücklich erhalten
- nicht in eine große IoT-Systemtheorie abgleiten
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
- Titel: `ESP32 mit WLAN, Webserver und MQTT`
- kurzer Einleitungssatz
- 2–3 Lernziele

## 2) Abschnitt: Warum ESP32?
- Mikrocontroller mit starker Kommunikationsfähigkeit
- WLAN und Bluetooth je nach Kontext
- besonders spannend für vernetzte Projekte

## 3) Abschnitt: ESP32 im WLAN
- Verbindung zum Netzwerk als Grundidee
- Mikrocontroller wird Teil eines Kommunikationssystems
- Basis statt Detailkonfiguration

## 4) Abschnitt: Kleiner Webserver auf dem ESP32
- Gerät liefert einfache Webseiten oder Zustände aus
- Browser und Mikrocontroller treffen direkt aufeinander
- starke Brücke zu HTML/CSS und Weblogik

## 5) Abschnitt: MQTT grob im ESP32-Kontext
- leichtgewichtiges Publish-/Subscribe-Prinzip
- sinnvoll für IoT und verteilte Kommunikation
- Verbindung zu bereits geplanter Netzwerk-/Protokollseite

## 6) Abschnitt: Typische Praxisprojekte
- Statusseite im Browser
- LED oder Relais übers Netzwerk steuern
- Sensordaten per MQTT senden
- kleine Heimautomationsbeispiele

## 7) Lernmodus / interaktive Module
- HTTP oder MQTT zuordnen
- ESP32-Projekt und Kommunikationsweg koppeln
- Webserver oder Sensor-Client grob unterscheiden
- kleine Ablaufkette sortieren: Sensor → ESP32 → WLAN → Browser/Broker

## 8) Aufgabenintegration
Für diesen Themenblock ist der Alt-Aufgabenbestand ausdrücklich wichtig.

### Früh übernehmen
- WLAN-Grundprojekte
- einfache Webserver-Aufgaben
- MQTT-Basisprojekte

### Übernahmeform
- wichtige Projekte zunächst leicht bereinigt übernehmen
- Code und Hardwarekontext sauber trennen
- später als neue Challenge-/Projektseiten modernisieren

## 9) Merksatz
> Der ESP32 verbindet Mikrocontroller-Projekte mit moderner Kommunikation, weil er Hardwaresteuerung direkt mit WLAN, Webservern und MQTT verknüpfen kann.

## Bild- und Grafikentscheidung
### fachlich relevant, aber meist besser neu bauen
- WLAN-, Webserver- und MQTT-Ablaufbilder nur als fachliche Vorlage nutzen
- neue saubere Kommunikations- und Systemgrafiken im Schlaufuchs-Stil bevorzugen
- Code nicht als Bild übernehmen

## Warum diese Seite wichtig ist
Sie ist die stärkste Brücke zwischen Elektrotechnik, Mikrocontroller-Praxis, Netzwerken und moderner Web-/IoT-Kommunikation und kann viele hochwertige Altprojekte sinnvoll retten.
