---
title: "PWM-Tastverhältnis zeichnen und Wirkung erklären"
description: "Übe, PWM als schnelles digitales Schalten mit mittlerer Wirkung zu erklären."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - pwm-tastverhaeltnis-und-mittelwert
selfCheckPoints:
  - "Habe ich Beobachtung, Ursache und Lösung sauber getrennt?"
  - "Habe ich mindestens einen typischen Denkfehler vermieden?"
  - "Kann ich meine Antwort ohne reine Schlagwörter begründen?"
taskId: "et-mc-pwm-duty-cycle"
tags:
  - elektrotechnik
  - mikrocontroller
  - pwm
  - timer
  - led
hintPoints:
  - "Zeichne zuerst eine Periode und markiere den High-Anteil."
  - "Trenne den momentanen Pegel am Pin von der mittleren Wirkung an der Last."
  - "Frequenz und Tastverhältnis sind zwei verschiedene Größen."
transferIdeas:
  - "Übertrage die Idee auf ein zweites Bauteil oder einen anderen Sensor."
  - "Formuliere eine kurze Checkliste, die du bei echter Fehlersuche nutzen würdest."
reflectionPrompt: "Welche Stelle war eher ein Verständnisproblem als ein reines Codeproblem?"
level: mittel
draft: false
---


## Aufgabe 1: Zeitbild zeichnen

Zeichne drei PWM-Perioden als Textbild oder Skizze: 25 %, 50 % und 75 % Tastverhältnis.

## Aufgabe 2: LED-Helligkeit erklären

Eine LED wirkt bei 50 % PWM dunkler als bei 100 %. Erkläre, warum das nicht bedeutet, dass der Mikrocontroller-Pin dauerhaft eine „halbe Spannung“ ausgibt.

## Aufgabe 3: Frequenz und Tastverhältnis trennen

Erkläre den Unterschied zwischen höherem Tastverhältnis und höherer PWM-Frequenz.
