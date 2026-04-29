---
title: "Lösung – ISR, Flag und volatile sauber zuordnen"
description: "Musterlösung zur sauberen Trennung von ISR-Arbeit, Hauptschleife und volatile-Variablen."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["daten-und-signale", "mikrocontroller-und-atmega", "isr-kurz-halten-und-volatile-verstehen"]
taskId: "et-mc-isr-flag-volatile"
relatedExercise: "elektrotechnik/daten-und-signale/mikrocontroller-und-atmega/isr-kurz-halten-und-volatile-verstehen"
tags: ["elektrotechnik", "Mikrocontroller und ATmega", "loesung"]
draft: false
---
## Lösung zu Aufgabe 1

Der Code ist problematisch, weil die ISR sehr lange beschäftigt wäre. Dadurch kann das Hauptprogramm nicht normal weiterlaufen. Außerdem können andere zeitkritische Ereignisse verzögert werden.

Besonders ungünstig sind:

- lange Debug-Ausgaben,
- künstliche Wartezeiten,
- umfangreiche Funktionen mit schwer abschätzbarer Laufzeit.

Eine ISR sollte möglichst kurz und übersichtlich sein.

## Lösung zu Aufgabe 2

Eine bessere Struktur ist zum Beispiel:

```c
volatile uint8_t timer_event = 0;

ISR(TIMER1_COMPA_vect) {
    timer_event = 1;
}

int main(void) {
    while (1) {
        if (timer_event) {
            timer_event = 0;
            blink_led_slowly();
            send_long_debug_text();
        }
    }
}
```

Die ISR merkt nur das Ereignis. Die eigentliche Verarbeitung läuft später in der Hauptschleife.

## Lösung zu Aufgabe 3

`timer_event` wird nicht nur im normalen sichtbaren Ablauf geändert, sondern auch in der ISR. Der Compiler soll deshalb nicht annehmen, dass der Wert in der Hauptschleife unverändert bleibt. Mit `volatile` wird ausgedrückt: Diese Variable kann sich außerhalb des sichtbaren Programmflusses ändern und muss bei Zugriffen wirklich gelesen werden.

`volatile` macht die Verarbeitung aber nicht automatisch in allen Fällen sicher. Bei größeren gemeinsam genutzten Daten können weitere Schutzmaßnahmen nötig sein.
