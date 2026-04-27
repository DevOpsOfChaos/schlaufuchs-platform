---
title: "Timer und Zeitbasis"
description: "Allgemeiner Überblick über Timer im Mikrocontroller und die Bedeutung einer verlässlichen Zeitbasis."
subject: elektrotechnik
section: "Mikrocontroller"
topicPath:
  - "timer-und-zeitbasis"
  - "ueberblick"
learningGoals:
  - "Du kannst Timer als Hardware-Zähler einordnen."
  - "Du kennst die Bedeutung von Takt, Prescaler und Überlauf."
  - "Du verstehst, warum Timer für genaue Abläufe wichtig sind."
practiceIdeas: []
commonMistakes:
  - "Timer mit einer reinen Warteschleife zu verwechseln."
  - "Den Prescaler zu ändern, ohne die Zeitwirkung neu zu berechnen."
keyTakeaways:
  - "Timer zählen Takte und erzeugen daraus Zeitpunkte oder periodische Ereignisse."
  - "Eine stabile Zeitbasis ist Voraussetzung für sauberes Messen, Warten und Regeln."
recognizeSignals:
  - "Es geht um Millisekunden, Überlauf, PWM, periodische Interrupts oder Messzeiten."
selfCheckPoints:
  - "Kann ich erklären, aus welchen Größen eine Timerperiode entsteht?"
level: einfach
tags:
  - "elektrotechnik"
  - "mikrocontroller"
  - "timer"
  - "zeitbasis"
draft: false
---

# Timer und Zeitbasis

![Schaubild zu Takt, Prescaler und Zeitbasis.](/schlaufuchs-platform/images/overviews/v148/timer-und-zeitbasis.svg)

*Das Schaubild zeigt, wie aus dem Takt über den Prescaler eine nutzbare Zeitbasis entsteht.*


Timer sind Hardware-Zähler in einem Mikrocontroller. Sie zählen Takte, vergleichen Zählwerte oder lösen bei bestimmten Ereignissen Aktionen aus. Dadurch entsteht eine Zeitbasis, die genauer und zuverlässiger ist als eine einfache Warteschleife im Programm.

Ein Timer arbeitet meist mit dem Systemtakt oder einem abgeleiteten Takt. Ein Prescaler teilt diesen Takt herunter, damit der Zähler langsamer läuft. Je nach Breite des Timers kann der Zähler nur bis zu einem bestimmten Maximalwert zählen. Danach läuft er über oder wird zurückgesetzt.

## Zweck

Timer werden verwendet, um Zeit zu messen, periodische Aufgaben auszulösen, Signale zu erzeugen oder Eingangssignale zu vermessen. Viele scheinbar einfache Funktionen hängen davon ab: Blinken ohne blockierende Wartezeit, Entprellung, PWM, Messung einer Impulsdauer oder regelmäßige Sensorabfrage.

## Zentrale Begriffe

Der Takt bestimmt, wie schnell gezählt wird. Der Prescaler legt fest, wie viele Takte zu einem Timer-Schritt zusammengefasst werden. Der Zählbereich hängt von der Bitbreite ab, etwa 8 Bit oder 16 Bit. Ein Vergleichswert kann festlegen, wann ein Ereignis ausgelöst wird. Ein Überlauf tritt ein, wenn der Zähler über seinen Maximalwert hinausläuft.

## Abgrenzung zur Warteschleife

Eine Warteschleife blockiert den Programmablauf. Während sie läuft, kann das Programm oft nichts anderes tun. Ein Timer dagegen kann im Hintergrund zählen. Das Programm kann andere Aufgaben erledigen und später auf ein Timerereignis reagieren. Dadurch werden Programme reaktionsfähiger und besser strukturierbar.

## Beispiele

Eine LED kann mit einem Timer alle 500 Millisekunden umgeschaltet werden. Ein anderer Timer kann eine PWM erzeugen, deren Tastverhältnis die Helligkeit einer LED bestimmt. Bei einer Ultraschallmessung kann ein Timer die Dauer eines Echoimpulses messen.

## Häufige Missverständnisse

Timer sind nicht automatisch genau, wenn der zugrunde liegende Takt ungenau ist. Außerdem verändert jede Änderung am Prescaler oder Vergleichswert die resultierende Zeit. Auch Überläufe müssen berücksichtigt werden, sonst entstehen scheinbar zufällige Fehler bei längeren Messungen.

## Kurz zusammengefasst

Timer übersetzen Takte in nutzbare Zeit. Sie sind die Grundlage für nicht blockierende Abläufe, genaue Messungen, periodische Ereignisse und viele Signalformen im Mikrocontroller.
