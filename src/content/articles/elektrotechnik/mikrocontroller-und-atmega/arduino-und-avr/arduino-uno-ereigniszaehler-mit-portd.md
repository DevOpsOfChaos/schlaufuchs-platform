---
title: "Arduino UNO: Ereigniszähler mit Port D"
description: "Technische Referenz zu einem 8-Bit-Ereigniszähler am Arduino UNO mit ATmega328P, Port D, Registerzugriff, Bitmasken, Entprellung und typischen Fehlerquellen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "arduino-und-avr", "arduino-uno-ereigniszaehler-mit-portd"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "arduino", "avr", "atmega328p", "register", "ereigniszaehler"]
draft: false
---
Ein Ereigniszähler auf dem Arduino UNO zählt einzelne Zustandswechsel an einem Eingang und stellt den Zählerstand auf Ausgängen dar. Beim direkten AVR-Registerzugriff ist dabei nicht die Arduino-Pinnummer entscheidend, sondern der Port und das zugehörige Bit im ATmega328P.

## Definition und Grundidee

Ein digitaler Ereigniszähler erhöht einen Zahlenwert genau dann, wenn ein definiertes Ereignis erkannt wird. Bei einem Taster ist das Ereignis typischerweise nicht der dauerhaft anliegende Pegel, sondern eine Flanke: Der Eingang wechselt von Ruhezustand zu aktivem Zustand.

Im klassischen Arduino-UNO-Aufbau mit acht LEDs an `D0` bis `D7` lässt sich der Zählerstand direkt auf `PORTD` ausgeben. Ein `uint8_t` passt fachlich zu diesem Aufbau, weil Port D acht Bits besitzt und die Anzeige acht LED-Kanäle hat.

```c
uint8_t zaehler = 0;
PORTD = zaehler;
```

Der Wert `0` entspricht `00000000`, der Wert `255` entspricht `11111111`. Nach `255` läuft ein unsigned 8-Bit-Wert beim nächsten Inkrement wieder auf `0` über.

## Einordnung: Arduino UNO, ATmega328P und Port D

Der Arduino UNO ist das Entwicklungsboard. Der ATmega328P ist der Mikrocontroller auf dem Board. Die Beschriftung `D0` bis `D13` gehört zur Arduino-Boardebene; Bezeichnungen wie `PD0`, `PB2`, `DDRD`, `PORTD` und `PINB` gehören zur AVR-Registerebene.

Für den Ereigniszähler mit acht LEDs auf `D0` bis `D7` gilt auf dem Arduino UNO:

| Arduino-Pin | ATmega328P-Portpin | Registerbezug | Typische Rolle im Zähleraufbau |
| --- | --- | --- | --- |
| `D0` | `PD0` | `DDRD`, `PORTD`, `PIND` | Bit 0, niederwertigstes LED-Bit |
| `D1` | `PD1` | `DDRD`, `PORTD`, `PIND` | Bit 1 |
| `D2` | `PD2` | `DDRD`, `PORTD`, `PIND` | Bit 2 |
| `D3` | `PD3` | `DDRD`, `PORTD`, `PIND` | Bit 3 |
| `D4` | `PD4` | `DDRD`, `PORTD`, `PIND` | Bit 4 |
| `D5` | `PD5` | `DDRD`, `PORTD`, `PIND` | Bit 5 |
| `D6` | `PD6` | `DDRD`, `PORTD`, `PIND` | Bit 6 |
| `D7` | `PD7` | `DDRD`, `PORTD`, `PIND` | Bit 7, höchstwertiges LED-Bit |
| `D10` | `PB2` | `DDRB`, `PORTB`, `PINB` | Tastereingang, oft mit internem Pull-up |

`D0` und `D1` sind auf dem Arduino UNO zugleich die UART-Leitungen `RXD` und `TXD`. In einem reinen Port-D-Zähler können sie als normale Ausgänge verwendet werden, solange `Serial`, Upload-Kommunikation und externe Beschaltung nicht dagegen arbeiten.

## Zentrale Begriffe

- **Port:** Gruppe von bis zu acht digitalen Leitungen, die über gemeinsame Register angesprochen werden, etwa Port D.
- **Pin:** Physischer Anschluss oder Boardanschluss. Ein Arduino-Pinname ist nicht automatisch identisch mit dem AVR-Portbit.
- **`DDRx`:** Data Direction Register. Ein gesetztes Bit konfiguriert den zugehörigen Pin als Ausgang; ein gelöschtes Bit als Eingang.
- **`PORTx`:** Bei Ausgängen bestimmt das Bit den ausgegebenen Pegel. Bei Eingängen kann ein gesetztes Bit den internen Pull-up aktivieren.
- **`PINx`:** Leseregister für den aktuell anliegenden logischen Zustand am Pin.
- **Bitmaske:** Wert, mit dem ein einzelnes Bit gezielt gesetzt, gelöscht oder geprüft wird, ohne die Nachbarbits zu verändern.
- **Ereigniszähler:** Zähler, der nicht bei jeder Schleifenrunde zählt, sondern nur bei einem erkannten Ereignis.

## Arduino-Pinbezeichnung und AVR-Portregister

Die Arduino-Nummer ist eine Boardabstraktion. Das AVR-Register arbeitet mit Portbuchstaben und Bitpositionen. `D10` bedeutet deshalb im Registercode nicht Bit 10. Beim Arduino UNO liegt `D10` auf `PB2`.

```c
DDRB &= ~(1 << PB2);  // PB2 als Eingang
PORTB |= (1 << PB2);  // interner Pull-up an PB2

if (!(PINB & (1 << PB2))) {
    // Taster ist bei Pull-up-Beschaltung aktiv low
}
```

Für die acht LED-Ausgänge ist eine ganze Portzuweisung fachlich vertretbar, weil alle acht Bits von Port D gemeinsam dieselbe Rolle haben:

```c
DDRD = 0xFF;      // PD0 bis PD7 als Ausgänge
PORTD = zaehler;  // 8-Bit-Zählerstand ausgeben
```

Bei gemischten Ports ist dagegen eine Bitmaske die sichere Form, weil ein vollständiges Registerschreiben andere Pins überschreiben kann.

## Eingänge, Ausgänge und sichere Verdrahtung

LED-Ausgänge brauchen jeweils einen eigenen Vorwiderstand. Ein Mikrocontrollerpin darf nicht direkt eine LED ohne Strombegrenzung treiben. Ebenso darf ein als Ausgang konfigurierter Pin nicht hart gegen einen gegensätzlichen Pegel kurzgeschlossen werden.

Für den Tastereingang ist ein definierter Ruhezustand Pflicht. Mit internem Pull-up liegt der Eingang ohne Tastendruck logisch `1`; beim Tastendruck wird er gegen `GND` gezogen und logisch `0` gelesen. Ohne Pull-up oder Pull-down bleibt der Eingang hochohmig und kann zufällige Pegel annehmen.

Bei externer Beschaltung zählen außerdem gemeinsame Masse, zulässige Logikpegel und die Stromgrenzen des ATmega328P. Der Arduino UNO arbeitet typischerweise mit 5-V-Logik; externe 3,3-V- oder höhere Spannungsquellen müssen passend bewertet werden.

## Ereignisse zählen

Ein Zähler darf nicht nur den aktuellen Tastenzustand auswerten. Wird während eines gedrückten Tasters in jeder Schleifenrunde inkrementiert, entstehen viele Zählimpulse aus einem einzigen Tastendruck.

Robuste Ereignislogik trennt vier Punkte:

- **Zustand:** Was liegt jetzt am Eingang an?
- **Flanke:** Hat der Eingang gerade von alt nach neu gewechselt?
- **Entprellung:** Ist der neue Zustand stabil genug, um als echtes Ereignis zu gelten?
- **Überlauf:** Was passiert an der oberen Grenze des Zählbereichs?

Bei Pull-up-Beschaltung ist ein Tastendruck meist eine fallende Flanke: vorher `1`, jetzt `0`. Das Loslassen ist die steigende Flanke: vorher `0`, jetzt `1`.

Eine einfache Lösung kann nach erkannter Betätigung kurz warten und anschließend das Loslassen abwarten. Technisch sauberer ist eine nicht-blockierende Entprelllogik mit gespeicherten Zuständen und Zeitstempeln, besonders wenn parallel weitere Aufgaben laufen müssen.

## 8-Bit-Grenze: 0 bis 255

Ein `uint8_t` hat 256 verschiedene Zustände. Der Wertebereich reicht von `0` bis `255`.

```text
0   -> 00000000
1   -> 00000001
2   -> 00000010
255 -> 11111111
256 -> 00000000  // bei uint8_t wieder 0
```

Dieser Überlauf ist bei einem 8-Bit-Anzeigeport kein Sonderfehler, sondern das normale Verhalten eines unsigned 8-Bit-Zählers. Er muss aber bewusst eingeplant werden, damit die Anzeige nach `255` nicht als unerklärlicher Sprung gelesen wird.

## Typische Fehler

- **`D0` und `D1` unkritisch verwenden:** Diese Pins sind beim Arduino UNO mit UART/Serial verbunden. Für die reine Port-D-Aufgabe ist das zulässig; für Debugausgaben, Uploads oder serielle Kommunikation ist es ein Konflikt.
- **Pull-up oder Pull-down vergessen:** Ein Eingang ohne definierten Ruhezustand ist kein verlässliches digitales Signal.
- **Floating Input als Logikfehler behandeln:** Zufällige Zählerstände kommen oft von einem offenen Eingang, nicht von falscher Arithmetik.
- **Arduino-Nummern und Portbits verwechseln:** `D10` ist beim UNO `PB2`, nicht Bit 10 in einem Register.
- **`PORTx` bei Eingängen falsch lesen:** Bei Eingängen setzt `PORTx` nicht den Ausgangspegel, sondern aktiviert oder deaktiviert den internen Pull-up.
- **Ganze Register überschreiben:** `DDRB = 0` oder `PORTB = ...` kann andere Port-B-Funktionen verändern. Bitmasken begrenzen die Änderung auf das gemeinte Bit.
- **Blocking Delay als Ereignislogik verkaufen:** Eine Wartezeit kann Prellen im einfachen Einzelzweckprogramm entschärfen. Sie ersetzt keine saubere Zustands- und Flankenerkennung, wenn das Programm parallel reagieren soll.
- **Überlauf ignorieren:** Nach `255` folgt bei `uint8_t` wieder `0`. Das ist definiertes Verhalten, aber nur dann fachlich richtig, wenn der Zähler zyklisch arbeiten soll.

## Abgrenzung zu Timern und Interrupts

Der beschriebene Aufbau ist ein softwareseitiger Ereigniszähler in der Hauptschleife. Er nutzt Portregister, Polling, Zustandsvergleich und Entprellung.

Timer und Interrupts lösen andere Probleme. Ein Timer erzeugt eine Zeitbasis oder zählt hardwaregestützt Takte. Ein externer Interrupt oder Pin-Change-Interrupt kann auf schnelle oder asynchrone Signalwechsel reagieren. Für einen langsam betätigten Taster ist Polling oft ausreichend; bei schnellen Impulsen, enger Latenz oder parallelen Aufgaben werden Interrupts oder Hardwarezähler relevant.

## Zugehörige Aufgabe

Die passende Übung ist [Arduino-UNO-Ereigniszähler mit Port D](/schlaufuchs-platform/aufgaben/elektrotechnik/mikrocontroller-und-atmega/arduino-und-avr/arduino-uno-ereigniszaehler-mit-portd). Sie verwendet acht LEDs an `D0` bis `D7`, einen Taster an `D10`, Registerzugriff auf `PORTD` und einen `uint8_t`-Zähler mit Überlauf von `255` auf `0`.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/elektrotechnik/tasks/arduino_zaehler_03/aufgabe/arduino_zaehler_03.html`, `legacy/selected/elektrotechnik/tasks/arduino_zaehler_03/loesung/arduino_zaehler_03_lsg.264.delaye` und `legacy/selected/elektrotechnik/tasks/arduino_zaehler_03/loesung/c_quellcode/main.cpp` erweitert. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW und Datumsangaben 24.10.2020 sowie 13.11.2021. Text, Struktur, technische Einordnung und Codeausschnitte wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
