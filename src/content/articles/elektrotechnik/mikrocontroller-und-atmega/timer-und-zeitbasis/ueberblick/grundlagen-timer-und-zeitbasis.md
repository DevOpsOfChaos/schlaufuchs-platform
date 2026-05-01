---
title: "Timer und Zeitbasis bei AVR-Mikrocontrollern"
description: "Technische Referenz zu AVR-Timern: Takt, Prescaler, Zählbereich, Overflow, Compare Match, CTC-Modus und typische Fehler."
subject: "elektrotechnik"
section: "Mikrocontroller und ATmega"
topicPath: ["mikrocontroller-und-atmega", "timer-und-zeitbasis", "ueberblick", "grundlagen-timer-und-zeitbasis"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["elektrotechnik", "Mikrocontroller", "ATmega", "Timer", "Prescaler", "Compare Match", "CTC"]
draft: false
---
Ein Timer im Mikrocontroller ist ein digitales Zählwerk. Er zählt Taktimpulse und macht daraus eine nutzbare Zeitbasis für periodische Abläufe, Messungen, PWM oder Ereignisse.

![AVR-Timer mit Prescaler und Compare Match](/schlaufuchs-platform/illustrations/elektrotechnik/avr-timer-prescaler-compare.svg)

## Definition und Grundidee

Ein AVR-Timer zählt nicht direkt Sekunden. Er zählt elektrische Takte. Erst über Systemtakt, Prescaler und Zählerbereich entsteht daraus eine Zeit.

Wenn ein Mikrocontroller zum Beispiel mit `16 MHz` arbeitet, kommen pro Sekunde 16 Millionen Taktimpulse an. Ein Prescaler kann diesen Takt teilen, damit der Timer langsamer zählt. Der Timerstand läuft dann durch einen begrenzten Bereich, etwa bei einem 8-Bit-Timer von `0` bis `255`.

## Einordnung

Timer sind die Grundlage für viele Mikrocontroller-Aufgaben:

- periodisches Blinken ohne blockierende Warteschleife,
- Abtastraten für Messwerte,
- Zeitmessung zwischen Ereignissen,
- PWM-Signale,
- Compare-Match-Ereignisse,
- Überlaufereignisse,
- Software-Zeitgeber.

Timer stehen zwischen Hardware und Programmablauf. Sie zählen unabhängig vom normalen C-Code weiter, solange Taktquelle und Timerkonfiguration aktiv sind.

## Zentrale Begriffe

- **Systemtakt:** Grundtakt des Controllers, etwa `16 MHz` beim Arduino Uno mit ATmega328P.
- **Timer-Takt:** Takt, den der Timer nach dem Prescaler erhält.
- **Prescaler:** Teiler zwischen Systemtakt und Timer, etwa `1`, `8`, `64`, `256` oder `1024`.
- **Zählerstand:** aktueller Wert im Timerregister.
- **Zählbereich:** Anzahl möglicher Timerwerte. Ein 8-Bit-Timer hat `256` Zustände.
- **Overflow:** Ereignis, wenn der Timer über seinen höchsten Wert hinausläuft und wieder bei `0` beginnt.
- **Compare Match:** Ereignis, wenn der Timerstand einen eingestellten Vergleichswert erreicht.
- **CTC-Modus:** Betriebsart, bei der der Timer bei Compare Match zurückgesetzt wird.

## Prescaler und Timer-Takt

Der Timer-Takt entsteht aus dem Systemtakt:

```text
f_timer = f_cpu / prescaler
```

Die Zeit für einen Timer-Schritt ist:

```text
T_tick = 1 / f_timer
```

Bei `f_cpu = 16 MHz` und Prescaler `64` gilt:

```text
f_timer = 16 000 000 Hz / 64 = 250 000 Hz
T_tick = 1 / 250 000 Hz = 4 µs
```

Der Timer erhöht seinen Wert dann alle `4 µs` um eins.

## Overflow

Ein 8-Bit-Timer läuft von `0` bis `255`. Danach folgt wieder `0`. Ein kompletter Durchlauf umfasst deshalb `256` Zählschritte.

```text
T_overflow = 256 * T_tick
```

Bei `T_tick = 4 µs` ergibt sich:

```text
T_overflow = 256 * 4 µs = 1024 µs = 1,024 ms
```

Overflow eignet sich für einfache periodische Basistakte, aber der konkrete Zeitraum hängt immer von Takt, Prescaler und Zählerbreite ab.

## Compare Match und CTC

Beim Compare Match wird ein Vergleichswert gesetzt. Erreicht der Timer diesen Wert, entsteht ein Ereignis. Im CTC-Modus kann der Timer an dieser Stelle automatisch auf `0` zurückgesetzt werden.

Für einen Zielzeitraum gilt näherungsweise:

```text
compare_value = gewünschte_Zeit / T_tick - 1
```

Das `-1` entsteht, weil der Zähler bei `0` beginnt. Ein Compare-Wert von `249` umfasst also `250` Zählschritte.

## Timer statt blockierender Warteschleife

Eine Warteschleife oder ein blockierendes Delay hält den Programmablauf an. Ein Timer kann dagegen ein Zeitereignis erzeugen, während das Hauptprogramm weiter Zustände prüfen oder Eingaben verarbeiten kann.

Deshalb sind Timer besonders wichtig, sobald mehrere Dinge gleichzeitig beobachtet werden müssen: Taster, LED-Ausgabe, serielle Kommunikation, Messwerte oder Zustandsautomaten.

## Typische Fehler

- **Zählerbereich falsch zählen:** Ein 8-Bit-Timer hat `256` Zustände, nicht `255`.
- **Prescaler vergessen:** Der Timer zählt meist nicht mit dem vollen Systemtakt.
- **Compare-Wert um eins daneben:** Weil bei `0` begonnen wird, entspricht `OCR = 249` genau `250` Schritten.
- **Overflow und Compare Match verwechseln:** Overflow entsteht am Ende des Zählbereichs; Compare Match entsteht bei einem frei gewählten Vergleichswert.
- **Delay und Timer gleichsetzen:** Ein Delay blockiert den Programmablauf, ein Timer liefert ein Ereignis oder eine Zeitbasis.
- **Interrupt automatisch voraussetzen:** Ein Timer kann auch ohne Interrupt abgefragt werden. Interrupts sind eine mögliche Reaktion, nicht der Timer selbst.
- **Einheiten nicht mitführen:** `Hz`, `s`, `ms` und `µs` müssen sauber umgerechnet werden.

## Abgrenzung

Diese Seite behandelt Timer als Zeitbasis. PWM nutzt Timer ebenfalls, hat aber eigene Regeln zu Tastverhältnis, Frequenz und Ausgangsmodus. Interrupts beschreiben eine Reaktionsform auf Timerereignisse. Ereigniszähler zählen externe oder programmatische Ereignisse und sind nicht automatisch dasselbe wie Zeitmessung.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/elektrotechnik/elektrotechnik-avr-timer/avr_timer.html` erweitert. Die Quelle ist als CC BY-NC-SA 4.0 beobachtet, mit Autorenkürzel JW. Text, Struktur und Diagramm wurden für die aktuelle Plattform neu geschrieben und adaptiert; altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
