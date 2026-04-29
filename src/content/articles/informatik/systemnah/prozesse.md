---
title: "Prozesse"
description: "Verstehe Prozesse als laufende Programme und lerne, wie ein System viele Abläufe parallel verwaltet."
subject: "informatik"
section: "Systemnah"
topicPath: ["systemnah", "prozesse"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Systemnah"]
draft: false
---
## Programm und Prozess

Ein **Programm** ist zunächst eine gespeicherte Datei oder Anwendung. Ein **Prozess** entsteht erst dann, wenn dieses Programm wirklich gestartet wird.

Das heißt:

- Programm = gespeichert
- Prozess = gerade aktiv

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Browser-Datei und Browser-Prozess</h3>
  <p>Die installierte Browser-App auf der Festplatte ist ein Programm. Erst wenn du sie startest, entsteht ein Prozess. Je nach Aufbau können sogar mehrere Prozesse beteiligt sein.</p>
</div>

## Was zu einem Prozess gehört

Ein Prozess besteht nicht nur aus einem sichtbaren Fenster. Typisch sind auch:

- eine Prozess-ID,
- belegter Speicher,
- aktueller Zustand,
- zugewiesene Rechenzeit,
- und geöffnete Ressourcen.

## Typische Zustände

Ein Prozess ist nicht immer aktiv rechnend. Häufige Zustände sind:

- bereit,
- laufend,
- wartend,
- beendet.

So kann ein Betriebssystem viele Abläufe geordnet organisieren.

## Warum Betriebssysteme Prozesse verwalten

Ein modernes System muss viele Programme und Dienste parallel handhaben. Es entscheidet deshalb fortlaufend,

- wer gerade Rechenzeit bekommt,
- wer warten muss,
- und welche Ressourcen verteilt werden.

Ohne diese Verwaltung würde ein System schnell chaotisch werden.

## Sichtbar und unsichtbar

Nicht jeder Prozess ist als Fenster erkennbar. Viele Prozesse laufen im Hintergrund, zum Beispiel Netzwerkdienste, Audiosysteme oder Update-Dienste.

Gerade deshalb ist Prozessverständnis wichtig: Es erklärt, warum ein Rechner arbeitet, obwohl man nicht immer direkt etwas „sieht“.
