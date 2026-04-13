---
title: Prozesse
description: Verstehe Prozesse als laufende Programme und lerne, wie ein System viele Abläufe parallel verwaltet.
subject: informatik
section: Systemnah
topicPath:
- systemnah
- prozesse
learningGoals:
- Du unterscheidest Programm und Prozess.
- Du verstehst Prozesse als laufende Systemabläufe.
- Du ordnest sichtbare und unsichtbare Prozesse besser ein.
practiceIdeas:
- Beschreibe den Start eines Programms als Folge mehrerer Prozessschritte.
- Vergleiche sichtbare Programme mit Hintergrunddiensten.
- Überlege, warum Prozesse Speicher und Rechenzeit brauchen.
commonMistakes:
- Programm und Prozess gleichzusetzen.
- Nur sichtbare Fenster als Prozesse zu betrachten.
- Systemaktivitäten nicht als verwaltete Abläufe zu sehen.
keyTakeaways:
- Prozesse sind laufende Programmausführungen.
- Ein System verwaltet viele Prozesse parallel.
- Prozessverständnis macht Rechnerverhalten lesbarer.
level: einfach
tags:
- prozesse
- system
- betriebssystem
- programm
draft: false
recognizeSignals:
- Die Aufgabe oder Erklärung nennt Prozesse direkt oder greift eng benachbarte Begriffe aus Systemnah auf.
- Du sollst nicht nur einen Begriff nennen, sondern einen Zusammenhang, Ablauf oder eine Struktur sauber erklären.
- In Beispielen musst du Werte, Schritte oder Bauteile geordnet lesen und richtig einordnen.
selfCheckPoints:
- Kann ich unterscheidest Programm und Prozess?
- Kann ich verstehst Prozesse als laufende Systemabläufe?
- Kann ich ordnest sichtbare und unsichtbare Prozesse besser ein?
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
