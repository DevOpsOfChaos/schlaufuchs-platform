---
title: "Userspace und Kernelspace"
description: "Überblick über die Trennung zwischen Anwendungen und Kernel im Linux-System."
subject: "linux"
section: "Systemgrundlagen"
topicPath: ["userspace-und-kernelspace", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Systemgrundlagen"]
draft: false
---
# Userspace und Kernelspace

Userspace ist der Bereich, in dem normale Programme laufen. Kernelspace ist der privilegierte Bereich des Betriebssystemkerns.

## Einordnung

Die Trennung schützt das System. Anwendungen greifen über Systemaufrufe auf Dateien, Netzwerk, Speicher und Geräte zu, statt direkt beliebige Hardware zu kontrollieren.

## Zentrale Aspekte

- Der Kernel verwaltet Ressourcen und Rechte.
- Programme im Userspace haben begrenzte Privilegien.
- Systemcalls sind kontrollierte Übergänge.
- Kernelmodule laufen mit hohen Rechten und hohem Risiko.

## Beispiele und Zusammenhang

Ein Texteditor schreibt eine Datei nicht direkt auf die Festplatte, sondern ruft Kernel-Funktionen auf, die Rechte und Dateisystemzustand prüfen.

## Abgrenzung

Root-Rechte machen ein Programm mächtig, aber nicht zu Kernelcode. Auch Root-Prozesse laufen grundsätzlich im Userspace.

## Häufige Missverständnisse

Treiber, Dienste und normale Programme als gleich privilegiert zu betrachten.

## Kurz zusammengefasst

- Userspace und Kernelspace trennen Anwendungen und Betriebssystemkern.
- Systemcalls verbinden beide Welten kontrolliert.
- Kernelcode hat besondere Macht und besondere Risiken.
