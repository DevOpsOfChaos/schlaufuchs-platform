---
title: "Grundlagen: Testfälle und Randfälle"
description: "Allgemeiner Überblick über normale Fälle, Grenzfälle, Fehlerfälle und die Rolle von Tests beim Programmieren."
subject: informatik
section: "Programmierung"
topicPath:
  - programmierpraxis-und-tests
  - testfaelle-und-randfaelle
  - ueberblick
  - grundlagen-testfaelle-und-randfaelle
learningGoals:
  - "Du erklärst, was ein Testfall grundsätzlich prüft."
  - "Du unterscheidest Normalfall, Randfall und Fehlerfall."
  - "Du erkennst, warum Randfälle oft mehr aussagen als perfekte Beispielwerte."
practiceIdeas: []
commonMistakes:
  - "Nur Beispielwerte zu testen, die offensichtlich funktionieren."
  - "Randfälle erst nach einem Fehler zu betrachten."
  - "Tests als Ersatz für Verständnis zu sehen."
keyTakeaways:
  - "Testfälle machen erwartetes Verhalten prüfbar."
  - "Randfälle liegen an Grenzen von Bedingungen, Bereichen oder Sonderregeln."
  - "Gute Tests beschreiben Verhalten, nicht nur Codezeilen."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - informatik
  - tests
  - randfälle
  - debugging
draft: false
---

## Begriff

Ein **Testfall** beschreibt eine Eingabe oder Situation, bei der geprüft wird, ob ein Programm das erwartete Ergebnis liefert. Ein **Randfall** ist eine Situation an einer Grenze: der kleinste Wert, der größte Wert, ein leerer Text, eine fehlende Datei oder eine ungewöhnliche Kombination.

Tests helfen dabei, Verhalten sichtbar zu machen. Sie ersetzen nicht das Denken über das Programm, sondern machen Erwartungen überprüfbar.

## Normalfall

Der Normalfall ist die typische Situation, für die eine Funktion offensichtlich gebaut wurde. Bei einer Division wären das zum Beispiel zwei gewöhnliche Zahlen, bei einer Suche ein vorhandener Suchbegriff.

Normalfälle sind wichtig, aber allein nicht ausreichend. Ein Programm kann bei einfachen Beispielen funktionieren und trotzdem an Grenzen scheitern.

## Randfall

Randfälle entstehen an Grenzen:

- leere Liste,
- erstes oder letztes Element,
- Wert `0`,
- sehr große Werte,
- exakt gleiche Werte,
- fehlende Eingabe.

Gerade Randfälle zeigen, ob Bedingungen sauber formuliert wurden.

## Fehlerfall

Ein Fehlerfall beschreibt eine Situation, die nicht normal verarbeitet werden kann. Das Programm sollte dann nicht zufällig abstürzen, sondern kontrolliert reagieren: mit Fehlermeldung, Rückgabewert, Ausnahme oder Abbruch.

## Warum Tests strukturieren helfen

Tests zwingen dazu, erwartetes Verhalten genau zu benennen. Dadurch wird ein Programm oft schon vor der eigentlichen Fehlersuche verständlicher.

## Abgrenzung

Einzelne Lernseiten können Unit-Tests, Debugging, Testdaten oder Assertions behandeln. Diese Seite erklärt zuerst den gemeinsamen Begriffshintergrund.

<div class="note-panel">
  <p><strong>Merke:</strong> Ein guter Test fragt nicht nur: „Geht das Beispiel?“, sondern auch: „Was passiert an den Grenzen?“</p>
</div>
