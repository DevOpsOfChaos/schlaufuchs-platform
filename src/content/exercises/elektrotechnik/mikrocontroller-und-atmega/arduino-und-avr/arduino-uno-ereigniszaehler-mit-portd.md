---
title: "Arduino-UNO-Ereigniszähler mit Port D"
description: "Entwirf einen 8-Bit-Zähler am Arduino UNO und ordne die Arduino-Pins den ATmega328P-Registern zu."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "arduino-und-avr", "arduino-uno-ereigniszaehler-mit-portd"]
taskId: "ET-MCU-ARDUINO-COUNTER-03"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "arduino", "avr", "register", "aufgabe"]
hintPoints: ["D0 bis D7 liegen beim Arduino UNO auf Port D des ATmega328P.", "D10 liegt auf PB2.", "Ein Eingang mit internem Pull-up ist im Ruhezustand logisch 1 und beim Tastendruck gegen Masse logisch 0."]
selfCheckPoints: ["Sind alle acht LED-Ausgänge einem Portregister zugeordnet?", "Wird der Taster als Eingang mit Pull-up behandelt?", "Ist klar, wann der 8-Bit-Zähler überläuft?"]
transferIdeas: []
level: "mittel"
draft: false
---
Ein Arduino UNO soll als einfacher 8-Bit-Ereigniszähler arbeiten. Acht LEDs sind an den digitalen Pins `D0` bis `D7` angeschlossen. Jede LED liegt mit eigenem Vorwiderstand gegen `GND`, sodass ein gesetztes Ausgangsbit die zugehörige LED einschaltet.

Der Taster `S1` liegt an `D10` und schaltet den Eingang beim Drücken gegen `GND`. Der interne Pull-up-Widerstand des ATmega328P soll verwendet werden.

![Verdrahtung des Arduino-UNO-Ereigniszählers](/schlaufuchs-platform/illustrations/elektrotechnik/arduino-uno-ereigniszaehler-verdrahtung.svg)

## Aufgaben

1. Ordne die Arduino-Pins `D0` bis `D7` und `D10` den ATmega328P-Portpins zu.
2. Gib an, welche Registerbits für LED-Ausgänge, Tastereingang und Pull-up gesetzt werden müssen.
3. Entwirf einen einfachen Programmablaufplan für den Zähler.
4. Schreibe ein C-Programm für den AVR, das einen `uint8_t zaehler` verwendet.
5. Lege fest, was auf den LEDs bei den Zählerständen `0`, `1`, `2`, `255` und nach dem nächsten Tastendruck sichtbar ist.

## Anforderungen

- Die LEDs geben immer den aktuellen 8-Bit-Zählerstand binär aus.
- Ein bestätigter Tastendruck auf `S1` erhöht den Zähler um `1`.
- Der Zähler ist ein unsigned 8-Bit-Wert und läuft nach `255` wieder auf `0`.
- Das Programm arbeitet mit den AVR-Registern und nicht nur mit `digitalWrite()`.
- `D0` und `D1` werden hier bewusst als normale Port-D-Ausgänge verwendet; die serielle Arduino-Schnittstelle ist in diesem Aufbau nicht Teil der Aufgabe.

## Quellenhinweis

Fachliche Ausgangsdaten und Aufgabenstruktur basieren auf dem legacy Schlaufuchs-Material `elektrotechnik/mikrocontroller_aufgaben/avr_aufgaben/arduino_zaehler_03` und `elektrotechnik/mikrocontroller_loesungen/avr_loesungen/arduino_zaehler_03_lsg`, insbesondere `aufgabe/arduino_zaehler_03.html`, `loesung/arduino_zaehler_03_lsg.264.delaye`, `loesung/c_quellcode/main.cpp` und den zugehörigen Bildquellen. Quell-URL: `https://c-arts-modelle.de/schlaufuchs_web/elektrotechnik/mikrocontroller_aufgaben/avr_aufgaben/arduino_zaehler_03/arduino_zaehler_03.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; als ursprünglicher Autorenmarker ist `JW` mit Datumsangaben 24.10.2020 und 13.11.2021 angegeben. Text und SVG-Diagramme wurden für diese Plattform neu erstellt, neu gezeichnet bzw. adaptiert; legacy HTML, alte Bilddateien und altes Layout wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
