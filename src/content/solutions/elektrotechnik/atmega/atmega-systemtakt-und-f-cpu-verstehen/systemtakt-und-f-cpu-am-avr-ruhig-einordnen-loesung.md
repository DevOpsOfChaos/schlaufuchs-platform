---
title: "Musterlösung – Systemtakt und F_CPU am AVR ruhig einordnen"
description: "Musterlösung zur Aufgabe ET-ATMEGA-CLK-207."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-systemtakt-und-f-cpu-verstehen", "systemtakt-und-f-cpu-am-avr-ruhig-einordnen"]
taskId: "ET-ATMEGA-CLK-207"
relatedExercise: "src/content/exercises/elektrotechnik/atmega/atmega-systemtakt-und-f-cpu-verstehen/systemtakt-und-f-cpu-am-avr-ruhig-einordnen.md"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

Der Code kann anders wirken, weil seine Zeitrechnungen auf einer anderen Taktbasis aufbauen. Wenn statt 16&nbsp;MHz nur 8&nbsp;MHz angenommen oder genutzt werden, laufen viele zeitbezogene Abläufe langsamer oder anders skaliert. Gleicher Code bedeutet also nicht automatisch gleiche Zeitwirkung.

### Aufgabe 2

`F_CPU` beschreibt die angenommene Taktfrequenz des Systems in Hertz. Sie ist die Grundlage dafür, wie Bibliotheken, Delays oder Registerrechnungen Zeit und Frequenz ableiten.

### Aufgabe 3

Bei 16&nbsp;MHz gilt grob:

```text
1 / 16 000 000 s = 62,5 ns
```

Bei 8&nbsp;MHz gilt grob:

```text
1 / 8 000 000 s = 125 ns
```

### Aufgabe 4

Zum Beispiel hängen auch **Timer** und **UART** an derselben Taktbasis. Ebenso lassen sich **PWM** oder andere zeitabhängige Registerkonfigurationen darauf zurückführen.

### Aufgabe 5

Die Aussage ist zu grob, weil Zeitwirkungen nicht nur vom Programmtext, sondern auch von der zugrunde liegenden Taktbasis abhängen. Wenn sich die Taktrate ändert, ändern sich oft auch Delays, Timerzeiten oder Baudraten, obwohl der Code oberflächlich gleich aussieht.
