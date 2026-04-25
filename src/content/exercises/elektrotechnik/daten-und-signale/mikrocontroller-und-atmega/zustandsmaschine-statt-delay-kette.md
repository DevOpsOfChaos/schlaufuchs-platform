---
title: "Delay-Ablauf in eine Zustandsmaschine übersetzen"
description: "Übe, einen blockierenden Ablauf als Zustände, Ereignisse und Übergänge zu formulieren."
subject: elektrotechnik
section: "Mikrocontroller und ATmega"
topicPath:
  - daten-und-signale
  - mikrocontroller-und-atmega
  - zustandsmaschine-statt-delay-kette
selfCheckPoints:
  - "Habe ich Beobachtung, Ursache und Lösung sauber getrennt?"
  - "Habe ich mindestens einen typischen Denkfehler vermieden?"
  - "Kann ich meine Antwort ohne reine Schlagwörter begründen?"
taskId: "et-mc-zustandsmaschine-delay"
tags:
  - elektrotechnik
  - mikrocontroller
  - zustandsmaschine
  - softtimer
  - delay
hintPoints:
  - "Benenne zuerst die Zustände, bevor du über Code nachdenkst."
  - "Ein Übergang braucht ein klares Ereignis."
  - "Die Hauptschleife soll weiter prüfen können, statt lange festzustecken."
transferIdeas:
  - "Übertrage die Idee auf ein zweites Bauteil oder einen anderen Sensor."
  - "Formuliere eine kurze Checkliste, die du bei echter Fehlersuche nutzen würdest."
reflectionPrompt: "Welche Stelle war eher ein Verständnisproblem als ein reines Codeproblem?"
level: mittel
draft: false
---


## Aufgabe 1: Zustände finden

Ein Programm soll warten, nach Tastendruck eine LED einschalten, nach zwei Sekunden blinken und nach erneutem Tastendruck alles ausschalten. Benenne passende Zustände.

## Aufgabe 2: Übergänge formulieren

Formuliere für jeden Zustandswechsel das Ereignis, das den Wechsel auslöst.

## Aufgabe 3: Delay-Kette bewerten

Erkläre, warum lange <code>delay()</code>-Aufrufe problematisch werden, wenn während des Ablaufs ein neuer Tastendruck erkannt werden soll.
