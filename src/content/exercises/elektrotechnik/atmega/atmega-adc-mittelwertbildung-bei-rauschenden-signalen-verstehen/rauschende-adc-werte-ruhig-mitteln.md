---
title: Rauschende ADC-Werte ruhig mitteln
description: Begründe an kleinen Messfällen, wann Mittelwertbildung am ADC hilft und wann sie eine echte Signaländerung nur unnötig träge macht.
subject: elektrotechnik
section: mikrocontroller-und-atmega
topicPath:
  - mikrocontroller-und-atmega
  - adc-und-messung
  - atmega-adc-mittelwertbildung-bei-rauschenden-signalen-verstehen
  - rauschende-adc-werte-ruhig-mitteln
taskId: ET-ATMEGA-ADC-209
level: mittel
draft: false
tags:
  - elektrotechnik
  - atmega
  - adc
  - aufgabe
hintPoints:
  - Frage zuerst, ob du eher Messruhe oder schnelle Reaktion brauchst.
  - Trenne zufällige Schwankung und echte Signaländerung bewusst.
selfCheckPoints:
  - Kannst du erklären, warum Mittelwertbildung nicht immer die beste Lösung ist?
  - Kannst du den Preis der Glättung in Worten beschreiben?
transferIdeas:
  - Übertrage die Logik auf Potis, Temperatursensoren oder Batteriespannungsmessung.
reflectionPrompt: "Welche ruhigere Leitfrage hilft hier: „Wie glatt will ich den Wert?“ oder „Wie schnell muss ich auf Änderungen reagieren?“"
---

## Aufgabe 1

Erkläre in 3 bis 5 Sätzen, warum ein ADC-Wert trotz ungefähr konstantem Eingang leicht schwanken kann.

## Aufgabe 2

Warum kann Mittelwertbildung für eine Anzeige hilfreich sein, für eine schnelle Regelreaktion aber zu träge wirken?

## Aufgabe 3

Formuliere einen kurzen Merksatz, der den Nutzen und den Preis der Mittelwertbildung zusammenfasst.

## Aufgabe 4

Nenne zwei Fälle, in denen du eher mitteln würdest, und zwei Fälle, in denen du eher direkt auf Einzelwerte schauen würdest.
