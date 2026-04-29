---
title: "Externe Interrupts und Pin-Change ruhig einordnen"
description: "Erkläre an kleinen AVR-Fällen, wann ein externer Interrupt und wann eher ein Pin-Change-Interrupt fachlich ruhiger passt."
subject: "elektrotechnik"
section: "mikrocontroller-und-atmega"
topicPath: ["atmega", "atmega-externe-interrupts-und-pin-change-verstehen", "externe-interrupts-und-pin-change-ruhig-einordnen"]
taskId: "ET-ATMEGA-INT-304"
tags: ["elektrotechnik", "mikrocontroller-und-atmega", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1

Erkläre in eigenen Worten den Unterschied zwischen diesen beiden Aussagen:

- „Reagiere auf eine genau definierte Flanke.“
- „Reagiere darauf, dass sich ein überwachten Pin irgendwie geändert hat.“

## Aufgabe 2

Ordne die beiden Fälle fachlich ruhiger zu:

- Ein Eingangssignal soll genau bei einer fallenden Flanke reagieren.
- Ein Programm soll nur mitbekommen, dass sich an einem überwachten Pin etwas geändert hat.

## Aufgabe 3

Beschreibe in 2 bis 4 Sätzen, warum es didaktisch zu grob wäre, beide Fälle einfach als „Pin-Interrupt“ zusammenzuwerfen.

## Aufgabe 4

Formuliere eine kurze Prüffrage, mit der du vor der Registerarbeit zuerst die Ereignisart klärst.
