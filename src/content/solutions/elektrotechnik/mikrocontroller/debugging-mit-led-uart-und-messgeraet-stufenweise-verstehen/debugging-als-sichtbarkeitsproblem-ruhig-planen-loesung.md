---
title: "Musterlösung – Debugging als Sichtbarkeitsproblem ruhig planen"
description: "Musterlösung zur Aufgabe ELE-MCU-GEN-106."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "debugging-mit-led-uart-und-messgeraet-stufenweise-verstehen", "debugging-als-sichtbarkeitsproblem-ruhig-planen"]
taskId: "ELE-MCU-GEN-106"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller/debugging-mit-led-uart-und-messgeraet-stufenweise-verstehen/debugging-als-sichtbarkeitsproblem-ruhig-planen.md"
tags: ["elektrotechnik", "mikrocontroller", "loesung"]
draft: false
---
## Aufgabe 1

- **LED** → beantwortet ruhig die Frage, ob ein Zustand oder Codepfad überhaupt erreicht wird.
- **UART** → macht interne Werte, Zähler oder Ablaufzustände lesbar.
- **Messgerät** → zeigt das reale elektrische Signal mit Pegeln und zeitlichem Verhalten.

## Aufgabe 2

Eine LED-Diagnose ist oft der ruhigere erste Schritt, weil sie sehr wenig Zusatzaufwand braucht und schnell zeigt, ob das System oder der erwartete Codepfad grundsätzlich lebt. Wenn diese grobe Sichtbarkeit schon fehlt, ist eine komplexe Signalmessung noch nicht die beste erste Stufe. Erst wenn klar ist, dass der Codepfad erreicht wird, lohnt sich die genauere Diagnose mit UART oder Messgerät zielgerichteter.

## Aufgabe 3

Ein möglicher Debug-Plan wäre:

1. **LED-Stufe:** Zuerst eine einfache Status-LED schalten, um zu prüfen, ob das Programm lebt oder der Tasterpfad überhaupt erreicht wird.
2. **UART-Stufe:** Danach per UART kurze Zustände oder Tasterwerte ausgeben, um die interne Logik sichtbar zu machen.
3. **Messstufe:** Falls weiter unklar bleibt, ob das Signal außen richtig anliegt, das reale elektrische Verhalten am Pin messen.

## Aufgabe 4

Die Aussage ist zu grob, weil das stärkste Werkzeug nicht automatisch die ruhigste erste Stufe ist. Gutes Debugging beginnt mit der fehlenden Beobachtung und wählt dann das einfachste Werkzeug, das genau diese Lücke schließt. Dadurch bleibt Ursache und Wirkung klarer getrennt.
