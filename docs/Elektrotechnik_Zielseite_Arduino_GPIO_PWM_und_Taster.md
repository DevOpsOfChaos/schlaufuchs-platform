# Elektrotechnik – Zielseite `arduino-gpio-pwm-und-taster`

## Zweck dieser Datei
Diese Datei beschreibt die konkrete Zielseite `elektrotechnik/arduino-gpio-pwm-und-taster` für den Relaunch.

Sie ist **kein Altseiten-Import**, sondern eine neue Produktspezifikation für eine praxisnahe Wissens- und Aufgabenseite zu digitalen Ein- und Ausgängen, PWM und Tasterlogik mit Arduino.

## Rolle der Seite im neuen Elektrotechnik-Aufbau
Die Seite gehört in den Abschnitt:
- Elektrotechnik
- Mikrocontroller

Sie kommt sinnvoll **nach**:
- `mikrocontroller-grundlagen`
- `arduino-einstieg`

## Lernziel der Seite
Nach bzw. mit dieser Seite sollen Lernende verstehen:
- was GPIO grundsätzlich bedeutet
- wie digitale Ausgänge genutzt werden
- wie Taster als Eingaben verarbeitet werden
- was PWM grob leistet
- wie typische Arduino-Grundaufgaben mit LED, Taster und PWM funktionieren

## Was diese Seite bewusst NICHT leisten soll
Diese Inhalte gehören **nicht** auf diese Zielseite:
- tiefe Registerprogrammierung
- fortgeschrittene Timer-Theorie
- komplexe Entprellalgorithmen im Vollausbau
- große Hardwareprojekte mit vielen Peripherien

## Altquellen, die nur als Inhaltsbasis dienen
- `mikrocontroller_lernmaterial/arduino/*`
- `mikrocontroller_aufgaben/*`
- `mikrocontroller_loesungen/*`
- Aufgaben zu LED, PWM, Taster, Eingängen und Ausgängen

## Zielcharakter der neuen Seite
Die Seite soll:
- klassische Arduino-Basisexperimente modern bündeln
- Aufgaben ausdrücklich erhalten
- Hardware und Code zusammen denken
- mit einem verpflichtenden Merksatz enden

## Empfohlener Seitenaufbau
## 1) Hero / Einstieg
- Titel: `GPIO, PWM und Taster mit Arduino`
- kurzer Einleitungssatz
- 2–3 Lernziele

## 2) Abschnitt: Was ist GPIO?
- digitale Ein-/Ausgänge
- Eingang oder Ausgang konfigurieren
- direkte Hardware-Nähe einfach erklären

## 3) Abschnitt: LED als Ausgang
- `pinMode()`
- `digitalWrite()`
- LED ein- und ausschalten als Grundfall

## 4) Abschnitt: Taster als Eingang
- `digitalRead()`
- Tasterstatus auswerten
- einfache Reaktion auf Tastendruck

## 5) Abschnitt: PWM grob verstehen
- kein echtes analoges Signal, sondern schnelle Pulssteuerung
- Helligkeit oder Drehzahl grob beeinflussen
- Verbindung zu `analogWrite()` bzw. PWM-Logik erklären

## 6) Abschnitt: Typische Grundprojekte
- LED blinken
- Taster steuert LED
- PWM dimmt LED
- kleine Kombinationen

## 7) Lernmodus / interaktive Module
- Eingang oder Ausgang zuordnen
- Codezeile und Hardwarewirkung koppeln
- PWM oder digitales Schalten unterscheiden
- einfache Taster-/LED-Aufgaben lesen

## 8) Aufgabenintegration
Für diesen Themenblock ist der Alt-Aufgabenbestand besonders wertvoll.

### Früh übernehmen
- Blink- und LED-Aufgaben
- Taster-Grundaufgaben
- PWM-Basisaufgaben

### Übernahmeform
- wichtige Aufgaben zunächst leicht bereinigt übernehmen
- Lösungen klar staffeln
- später in neue Challenge- und Lernmodus-Module überführen

## 9) Merksatz
> Mit GPIO liest ein Arduino Signale ein oder schaltet Ausgänge, und mit PWM können Zustände zeitlich so gesteuert werden, dass z. B. eine LED heller oder dunkler wirkt.

## Bild- und Grafikentscheidung
### fachlich relevant, aber oft besser neu bauen
- Breadboard-, LED- und Tasterbilder aus dem Altbestand nur als Vorlage prüfen
- Pin- und Verdrahtungslogik lieber neu und sauber darstellen
- Code niemals als Bild übernehmen

## Warum diese Seite wichtig ist
Sie bündelt die wichtigsten Arduino-Einstiegsaufgaben des Altbestands in einen starken Praxisblock und schafft sofort sichtbaren Mehrwert für Lernende.
