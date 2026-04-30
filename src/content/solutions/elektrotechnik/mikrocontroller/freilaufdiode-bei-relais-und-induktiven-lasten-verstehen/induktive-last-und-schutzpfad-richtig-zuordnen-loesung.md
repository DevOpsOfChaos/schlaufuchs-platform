---
title: "Musterlösung – Induktive Last und Schutzpfad richtig zuordnen"
description: "Musterlösung zur Aufgabe ELE-MCU-GEN-108."
subject: "elektrotechnik"
section: "mikrocontroller"
topicPath: ["mikrocontroller", "freilaufdiode-bei-relais-und-induktiven-lasten-verstehen", "induktive-last-und-schutzpfad-richtig-zuordnen"]
taskId: "ELE-MCU-GEN-108"
relatedExercise: "src/content/exercises/elektrotechnik/mikrocontroller/freilaufdiode-bei-relais-und-induktiven-lasten-verstehen/induktive-last-und-schutzpfad-richtig-zuordnen"
tags: ["elektrotechnik", "mikrocontroller", "loesung"]
draft: false
---
## Aufgabe 1

Die Hauptfrage ist, wie eine induktive Last beim Abschalten kontrolliert behandelt wird. Eine Spule speichert Energie und braucht danach einen Strompfad. Die Freilaufdiode verhindert, dass daraus eine schädliche Spannungsspitze entsteht.

## Aufgabe 2

- **Ursache / Ausgangslage:** Eine Spule in Relais oder Ventil wird bestromt.
- **Kritischer Punkt:** Beim Abschalten will der Strom weiterfließen und erzeugt sonst eine hohe Spannungsspitze.
- **Passende Maßnahme:** Die Freilaufdiode bietet einen sicheren Umlaufpfad für den abklingenden Strom.

## Aufgabe 3

Ein typischer Denkfehler lautet: „Die Diode ist nur optionaler Schutz, wenn man besonders vorsichtig sein will.“ Fachlich ruhiger ist: Bei induktiven Lasten gehört sie zum vollständigen Schutzkonzept der Ansteuerung.

## Aufgabe 4

Dasselbe gilt auch für Motoren, Magnetventile oder andere Spulenlasten. Immer wenn magnetische Energie beim Abschalten im Spiel ist, muss der Strompfad danach bewusst mitgedacht werden.
