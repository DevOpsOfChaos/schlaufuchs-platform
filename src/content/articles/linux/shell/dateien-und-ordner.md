---
title: Dateien und Ordner im Terminal
description: Verstehe, wie du dich durch Verzeichnisse bewegst und Inhalte im Terminal sauber liest.
subject: linux
section: shell
topicPath:
- shell
- dateien-und-ordner
learningGoals:
- Du bewegst dich sicher zwischen Verzeichnissen.
- Du liest Dateinamen, Pfade und Ordnerstrukturen bewusster.
- Du verstehst den Zusammenhang zwischen aktuellem Ort und ausgeführten Befehlen.
practiceIdeas:
- Nutze pwd, ls, cd und tree in der Lernshell nacheinander.
- Wechsle bewusst in Unterordner und wieder zurück.
- Lies Dateistrukturen mit tree oder find statt nur einzelne Namen anzusehen.
commonMistakes:
- Den aktuellen Pfad nicht zu prüfen.
- Relative und absolute Pfade zu verwechseln.
- Im falschen Verzeichnis zu arbeiten.
keyTakeaways:
- Dein aktueller Ort bestimmt, worauf sich viele Befehle beziehen.
- Pfade sind keine Nebensache, sondern Grundlage der Orientierung.
- Struktur lesen ist wichtiger als blind klicken oder raten.
tags:
- linux
- shell
- dateien
- ordner
- pfade
level: einfach
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Dateien und Ordner im Terminal direkt oder greift eng benachbarte Begriffe aus shell auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich bewegst dich sicher zwischen Verzeichnissen?
- Kann ich liest Dateinamen, Pfade und Ordnerstrukturen bewusster?
- Kann ich verstehst den Zusammenhang zwischen aktuellem Ort und ausgeführten Befehlen?
---


## Orientierung beginnt mit dem aktuellen Verzeichnis

Im Terminal ist dein aktueller Ort entscheidend. Viele Befehle beziehen sich auf genau dieses Verzeichnis. Deshalb ist <code>pwd</code> oft der erste sinnvolle Schritt.

## Wichtige Grundbefehle

- <code>pwd</code> zeigt den aktuellen Pfad.
- <code>ls</code> listet Inhalte auf.
- <code>cd</code> wechselt in ein anderes Verzeichnis.
- <code>tree</code> zeigt Strukturen unterhalb eines Ordners.
- <code>find</code> hilft bei größeren Suchräumen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Vom Homeverzeichnis in einen Unterordner</h3>
  <p>Mit <code>pwd</code> prüfst du deinen Startpunkt, mit <code>ls</code> den Inhalt und mit <code>cd dokumente</code> wechselst du bewusst in einen Unterordner. Danach prüfst du erneut, ob du wirklich dort bist.</p>
</div>

## Relative und absolute Pfade

Ein Pfad kann relativ oder absolut sein. Relativ bedeutet: vom aktuellen Ort aus gedacht. Absolut bedeutet: vom Wurzelverzeichnis aus gedacht. Diese Unterscheidung ist wichtig, wenn du Befehle wirklich verstehen willst.

## Anwendungen

Sobald du Dateien bearbeitest, kopierst, verschiebst oder suchst, brauchst du diese Orientierung ständig. Sie ist Grundlage für fast jede weitere Linux-Arbeit.
