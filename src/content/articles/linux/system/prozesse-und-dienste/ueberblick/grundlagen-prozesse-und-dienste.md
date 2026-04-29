---
title: "Grundlagen: Prozesse und Dienste"
description: "Allgemeiner Überblick über laufende Programme, Hintergrunddienste und Prozesskontrolle unter Linux."
subject: "linux"
section: "System"
topicPath: ["system", "prozesse-und-dienste", "ueberblick", "grundlagen-prozesse-und-dienste"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "System"]
draft: false
---
## Begriff

Ein **Prozess** ist ein laufendes Programm. Er besitzt einen Zustand, eine Prozess-ID und verbraucht Ressourcen wie CPU-Zeit, Speicher oder geöffnete Dateien. Ein **Dienst** ist meist ein länger laufender Hintergrundprozess, der eine Systemfunktion bereitstellt.

## Prozess und Programm

Eine Programmdatei liegt auf dem Datenträger. Ein Prozess entsteht erst, wenn dieses Programm ausgeführt wird. Dasselbe Programm kann mehrfach als eigener Prozess laufen, zum Beispiel mehrere Shells oder mehrere Browserprozesse.

## Vordergrund, Hintergrund und Dienst

Ein Vordergrundprozess ist direkt mit der aktuellen Shell oder Sitzung verbunden. Ein Hintergrundprozess läuft weiter, während die Shell andere Eingaben annehmen kann. Dienste laufen oft unabhängig von einer einzelnen Benutzersitzung.

## Diagnose

Wenn ein System langsam wird, ein Port belegt ist oder ein Programm nicht reagiert, hilft Prozessdiagnose. Werkzeuge wie `ps`, `top`, `systemctl` oder `kill` dienen nicht nur zum Eingreifen, sondern zuerst zum Verstehen.

<div class="note-panel">
  <p><strong>Merke:</strong> Prozesse zeigen, was gerade läuft. Dienste zeigen, welche Systemfunktionen dauerhaft bereitgestellt werden.</p>
</div>
