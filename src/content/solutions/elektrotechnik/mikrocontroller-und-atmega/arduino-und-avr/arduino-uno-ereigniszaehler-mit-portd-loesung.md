---
title: "Lösung: Arduino-UNO-Ereigniszähler mit Port D"
description: "Musterlösung mit Pinmapping, Registerkonfiguration, Ablaufplan und AVR-C-Code für den Arduino-UNO-Ereigniszähler."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "arduino-und-avr", "arduino-uno-ereigniszaehler-mit-portd"]
taskId: "ET-MCU-ARDUINO-COUNTER-03"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller-und-atmega/arduino-und-avr/arduino-uno-ereigniszaehler-mit-portd"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "arduino", "avr", "register", "loesung"]
draft: false
---
## Pin- und Registerzuordnung

Beim Arduino UNO steckt ein ATmega328P hinter den Arduino-Pinnamen. Für diese Aufgabe gilt:

| Arduino-Pin | ATmega328P-Pin | Registerbezug | Funktion |
| --- | --- | --- | --- |
| `D0` bis `D7` | `PD0` bis `PD7` | `DDRD`, `PORTD` | LED-Ausgänge für den 8-Bit-Zähler |
| `D10` | `PB2` | `DDRB`, `PORTB`, `PINB` | Tastereingang `S1` mit internem Pull-up |

Für die LEDs wird der ganze Port D als Ausgang gesetzt:

```c
DDRD = 0xFF;
```

Für den Taster bleibt `PB2` Eingang. Der interne Pull-up wird über `PORTB` aktiviert:

```c
DDRB &= ~(1 << PB2);
PORTB |= (1 << PB2);
```

Dadurch ist `PINB & (1 << PB2)` im Ruhezustand ungleich `0`. Beim Tastendruck zieht `S1` den Eingang auf `GND`, der Ausdruck wird `0`.

## Programmablauf

![Programmablauf des Arduino-UNO-Ereigniszählers](/schlaufuchs-platform/illustrations/elektrotechnik/arduino-uno-ereigniszaehler-programmablauf.svg)

Der Ablauf wartet auf einen bestätigten Low-Pegel am Taster, erhöht den 8-Bit-Zähler, schreibt den Wert auf `PORTD` und wartet danach auf das Loslassen des Tasters. Die kurze Wartezeit dient als einfache Entprellung.

## AVR-C-Code

```c
#include <avr/io.h>
#include <stdint.h>
#include <util/delay.h>

int main(void)
{
    DDRD = 0xFF;          // PD0 bis PD7 als LED-Ausgänge
    PORTD = 0x00;         // Startwert sichtbar: 00000000

    DDRB &= ~(1 << PB2);  // PB2 als Eingang
    PORTB |= (1 << PB2);  // interner Pull-up an PB2

    uint8_t zaehler = 0;

    while (1) {
        while (PINB & (1 << PB2)) {
            // warten, bis S1 gedrückt wird
        }

        _delay_ms(30);

        if (!(PINB & (1 << PB2))) {
            zaehler++;
            PORTD = zaehler;

            while (!(PINB & (1 << PB2))) {
                // warten, bis S1 wieder losgelassen wird
            }

            _delay_ms(30);
        }
    }
}
```

## Erwartete LED-Ausgabe

`PORTD` enthält direkt den Zählerstand. `PD0` ist das niederwertigste Bit, `PD7` das höchstwertige Bit.

| Zählerstand | Binärausgabe auf `PD7 ... PD0` | Sichtbares Muster |
| ---: | --- | --- |
| `0` | `00000000` | alle LEDs aus |
| `1` | `00000001` | nur LED an `D0` an |
| `2` | `00000010` | nur LED an `D1` an |
| `255` | `11111111` | alle LEDs an |
| nächster Tastendruck | `00000000` | Überlauf zurück auf `0` |

## Register- und Bitmaskenentscheidung

`DDRD = 0xFF` ist hier sinnvoll, weil alle acht Bits von Port D gemeinsam als LED-Ausgänge verwendet werden. Für `PB2` ist dagegen eine Bitmaske besser: `DDRB &= ~(1 << PB2)` und `PORTB |= (1 << PB2)` ändern nur das Tasterbit und lassen andere Port-B-Bits unverändert.

Die Quelle arbeitete mit einer einfachen Verzögerung nach dem Tastendruck. Die hier gezeigte Fassung ist daran angelehnt, trennt aber zusätzlich Tastendruck und Loslassen, damit ein lange gedrückter Taster nicht nach jeder Wartezeit erneut zählt.

## Quellenhinweis

Fachliche Ausgangsdaten, Pinmapping und Lösungsstruktur basieren auf dem legacy Schlaufuchs-Material `elektrotechnik/mikrocontroller_aufgaben/avr_aufgaben/arduino_zaehler_03` und `elektrotechnik/mikrocontroller_loesungen/avr_loesungen/arduino_zaehler_03_lsg`, insbesondere `aufgabe/arduino_zaehler_03.html`, `loesung/arduino_zaehler_03_lsg.264.delaye`, `loesung/c_quellcode/main.cpp` und den zugehörigen Bildquellen. Quell-URL: `https://c-arts-modelle.de/schlaufuchs_web/elektrotechnik/mikrocontroller_aufgaben/avr_aufgaben/arduino_zaehler_03/arduino_zaehler_03.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; als ursprünglicher Autorenmarker ist `JW` mit Datumsangaben 24.10.2020 und 13.11.2021 angegeben. Text, Ablaufdarstellung und C-Code wurden für diese Plattform neu erstellt, neu geschrieben bzw. adaptiert; legacy HTML, alte Bilddateien und altes Layout wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
