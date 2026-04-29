---
title: "Rechte in Oktalnotation"
description: "Allgemeiner Überblick über Linux-Dateirechte, Oktalzahlen und die Bedeutung von chmod-Werten."
subject: "linux"
section: "Dateisystem"
topicPath: ["rechte-in-oktalnotation", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateisystem"]
draft: false
---
# Rechte in Oktalnotation

Linux-Dateirechte werden häufig mit drei Oktalziffern beschrieben, etwa 755 oder 644. Jede Ziffer fasst Lesen, Schreiben und Ausführen für Besitzer, Gruppe und Andere zusammen.

## Bedeutung

Die Oktalnotation ist kompakt, aber nur verständlich, wenn die Bits dahinter klar sind. Lesen steht für 4, Schreiben für 2 und Ausführen für 1. Die Summe ergibt die Ziffer.

## Typische Teilaspekte

- **Besitzer:** Die erste Ziffer gilt für den Dateibesitzer.
- **Gruppe:** Die zweite Ziffer gilt für die zugeordnete Gruppe.
- **Andere:** Die dritte Ziffer gilt für alle übrigen Nutzer.
- **Ausführen:** Bei Dateien bedeutet `x` ausführbar; bei Verzeichnissen bedeutet es Betreten oder Durchqueren.

## Beispiel

`chmod 644 datei.txt` bedeutet: Besitzer darf lesen und schreiben, Gruppe und Andere dürfen lesen.

## Abgrenzung

Oktalrechte erklären nicht alles. Besitz, Gruppenmitgliedschaft, ACLs und besondere Bits können zusätzlich relevant sein.

## Häufige Missverständnisse

Häufig wird 777 als schnelle Lösung verwendet. Das öffnet aber unnötig viele Rechte und verdeckt die eigentliche Ursache.

## Einordnung im Gesamtzusammenhang

Oktalrechte verbinden Dateisystem, Benutzerverwaltung, Sicherheit und Skripte.
