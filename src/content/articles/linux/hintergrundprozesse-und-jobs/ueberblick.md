---
title: "Hintergrundprozesse und Jobs"
description: "Allgemeiner Überblick über Hintergrundprozesse, Jobs und einfache Prozesssteuerung in der Shell."
subject: "linux"
section: "Prozesse"
topicPath: ["hintergrundprozesse-und-jobs", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Prozesse"]
draft: false
---
# Hintergrundprozesse und Jobs

Ein Hintergrundprozess läuft weiter, während die Shell wieder Eingaben annimmt. Jobs sind Prozesse, die von der aktuellen Shell verwaltet und in den Vorder- oder Hintergrund geschaltet werden können.

Hintergrundjobs sind nützlich, wenn längere Befehle laufen sollen, ohne das Terminal vollständig zu blockieren.

## Einordnung

Das Thema ist vor allem dann hilfreich, wenn einzelne Spezialfälle nicht isoliert betrachtet werden sollen. Es liefert eine gemeinsame Sprache, um Beobachtungen, Regeln und Entscheidungen zusammenhängend zu beschreiben.

## Wichtige Teilaspekte

- Das Zeichen `&` startet einen Befehl im Hintergrund.
- Job-Control-Befehle zeigen und steuern laufende Jobs.
- Ein Hintergrundprozess kann trotzdem Ausgaben ins Terminal schreiben.

## Abgrenzung

Ein Hintergrundjob ist nicht automatisch ein Dienst. Er hängt oft noch an der Sitzung, Umgebung und Ausgabe des aktuellen Terminals.

## Beispiele

- Ein langer Kopiervorgang kann im Hintergrund laufen.
- Ein angehaltener Editorprozess kann mit Job-Control wieder in den Vordergrund geholt werden.

## Häufiges Missverständnis

Häufig wird angenommen, ein Hintergrundprozess überlebe immer das Schließen des Terminals. Ohne passende Entkopplung kann er beendet werden.

## Kurz zusammengefasst

Hintergrundprozesse machen die Shell flexibler. Für dauerhafte Aufgaben sind jedoch Dienste, Timer oder entkoppelte Prozesse besser geeignet.
