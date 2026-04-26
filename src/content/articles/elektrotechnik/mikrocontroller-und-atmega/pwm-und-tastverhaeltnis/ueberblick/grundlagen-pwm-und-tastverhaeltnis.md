---
title: "Grundlagen: PWM und Tastverhältnis"
description: "Allgemeiner Überblick über Pulsweitenmodulation, Tastverhältnis und scheinbar analoge Wirkung digitaler Signale."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - mikrocontroller-und-atmega
  - pwm-und-tastverhaeltnis
  - grundlagen-pwm-und-tastverhaeltnis
learningGoals:
  - "Du erklärst PWM als schnelles Umschalten zwischen Ein und Aus."
  - "Du beschreibst das Tastverhältnis als Anteil der Einschaltzeit."
  - "Du unterscheidest digitales Signal und gemittelte Wirkung."
practiceIdeas: []
commonMistakes:
  - "PWM für eine echte analoge Ausgangsspannung zu halten."
  - "Frequenz und Tastverhältnis zu verwechseln."
  - "Eine LED-Helligkeit ohne Trägheit oder Mittelung zu erklären."
keyTakeaways:
  - "PWM nutzt digitale Pegel, erzeugt aber eine gemittelte Wirkung."
  - "Das Tastverhältnis bestimmt den Anteil der Einschaltzeit."
  - "Frequenz und Tastverhältnis beschreiben unterschiedliche Eigenschaften."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - elektrotechnik
  - mikrocontroller
  - pwm
  - tastverhaeltnis
draft: false
---
## Begriff

**Pulsweitenmodulation** oder **PWM** ist ein Verfahren, bei dem ein digitales Signal sehr schnell zwischen Ein und Aus wechselt. Die Wirkung entsteht nicht durch Zwischenpegel, sondern durch das Verhältnis von Einschaltzeit zu Ausschaltzeit.

## Tastverhältnis

Das **Tastverhältnis** beschreibt, welcher Anteil einer Periode eingeschaltet ist. Bei `50 %` ist das Signal ungefähr genauso lange ein wie aus. Bei `25 %` ist es nur ein Viertel der Zeit ein.

## Digitale Grundlage, analoge Wirkung

Ein PWM-Ausgang ist weiterhin digital: Er liefert Low oder High. Eine LED, ein Motor oder ein Filter kann daraus aber eine gemittelte Wirkung machen. Deshalb wirkt PWM oft wie eine analoge Steuerung, obwohl der Ausgang selbst digital arbeitet.

## Frequenz und Tastverhältnis

Die Frequenz sagt, wie oft sich das Muster pro Sekunde wiederholt. Das Tastverhältnis sagt, wie groß der eingeschaltete Anteil innerhalb eines Musters ist. Beide Größen beeinflussen die Anwendung, aber auf unterschiedliche Weise.

<div class="note-panel">
  <p><strong>Merke:</strong> PWM macht aus schnellem digitalen Schalten eine steuerbare mittlere Wirkung. Entscheidend ist das Tastverhältnis.</p>
</div>
