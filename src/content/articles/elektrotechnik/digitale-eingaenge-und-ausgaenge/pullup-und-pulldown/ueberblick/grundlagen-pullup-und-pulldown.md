---
title: "Grundlagen: Pull-up und Pull-down"
description: "Allgemeiner Überblick über Pull-up- und Pull-down-Widerstände als definierte Ruhelage digitaler Eingänge."
subject: "elektrotechnik"
section: "Digitale Eingänge und Ausgänge"
topicPath: ["digitale-eingaenge-und-ausgaenge", "pullup-und-pulldown", "ueberblick", "grundlagen-pullup-und-pulldown"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["elektrotechnik", "Digitale Eingänge und Ausgänge"]
draft: false
---
## Begriff

**Pull-up** und **Pull-down** bezeichnen Widerstände, die einen digitalen Eingang im Ruhezustand auf einen definierten Pegel ziehen. Ohne solche Maßnahme kann ein Eingang offen oder schwebend sein und zufällige Werte liefern.

## Warum eine Ruhelage nötig ist

Ein Mikrocontrollerpin misst keine Absicht, sondern Spannung. Wenn ein Taster nicht gedrückt ist, darf der Eingang nicht unbestimmt bleiben. Pull-up und Pull-down sorgen dafür, dass auch ohne aktives Ereignis ein klarer Pegel anliegt.

## Pull-up und Pull-down

Ein Pull-up-Widerstand verbindet den Eingang schwach mit der positiven Versorgung. Der Ruhezustand wird dadurch logisch High. Ein Pull-down-Widerstand verbindet den Eingang schwach mit Masse. Der Ruhezustand wird dadurch logisch Low.

## Bedeutung für Taster

Erst die Schaltung legt fest, ob ein gedrückter Taster logisch `0` oder logisch `1` bedeutet. Deshalb sollten Ruhezustand, Ereigniszustand und Codeauswertung immer gemeinsam betrachtet werden.

<div class="note-panel">
  <p><strong>Merke:</strong> Pull-up und Pull-down legen fest, was ein Eingang ohne Ereignis liest. Erst danach wird entschieden, was ein Tastendruck im Programm bedeutet.</p>
</div>
