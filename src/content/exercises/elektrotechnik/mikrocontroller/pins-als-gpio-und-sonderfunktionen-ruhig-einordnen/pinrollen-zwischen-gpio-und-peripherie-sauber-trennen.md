---
title: Pinrollen zwischen GPIO und Peripherie sauber trennen
description: Ordne Mikrocontroller-Pins als allgemeine Ein-/Ausgänge oder als Sonderfunktionen ein und begründe ihre jeweilige Rolle.
subject: elektrotechnik
section: mikrocontroller
topicPath:
  - mikrocontroller
  - grundlagen
  - pins-als-gpio-und-sonderfunktionen-ruhig-einordnen
  - pinrollen-zwischen-gpio-und-peripherie-sauber-trennen
taskId: ELE-MCU-GEN-104
level: einfach
draft: false
tags:
  - elektrotechnik
  - mikrocontroller
  - gpio
hintPoints:
  - Frage zuerst, wer den Pin gerade steuert.
  - Trenne physische Leitung und interne Funktionszuweisung bewusst.
selfCheckPoints:
  - Kannst du GPIO und Sonderfunktion sauber unterscheiden?
  - Kannst du erklären, warum ein normaler Portzugriff nicht immer den erwarteten Effekt hat?
transferIdeas:
  - Übertrage die Logik auf UART-, SPI-, PWM- oder ADC-Pins.
reflectionPrompt: "Welche Leitfrage hilft dir bei Pinproblemen mehr als bloß \"da kommt nichts raus\"?"
---

## Aufgabe 1: Zwei Rollen erklären

Erkläre in 3 bis 5 Sätzen den Unterschied zwischen einem Pin als GPIO und einem Pin als Sonderfunktion.

## Aufgabe 2: Fehlersuche einordnen

Eine LED reagiert nicht auf einen normalen Portzugriff. Nenne eine plausible Erklärung, die nichts mit einem kaputten Kabel zu tun hat.

## Aufgabe 3: Leitfrage formulieren

Schreibe eine kurze Prüffrage auf, mit der du vor jeder Pin-Diagnose zuerst die Funktionsrolle des Pins klärst.

## Aufgabe 4: Beispiel übertragen

Nenne zwei typische Sonderfunktionen eines Pins und erkläre kurz, warum dann nicht mehr dieselbe ruhige GPIO-Logik gilt wie bei einem normalen Ausgang.
