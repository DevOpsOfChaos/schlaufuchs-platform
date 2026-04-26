---
title: "Grundlagen: Funktionen und Verantwortung"
description: "Allgemeiner Überblick darüber, warum Funktionen in Programmen klar abgegrenzte Aufgaben übernehmen sollten."
subject: informatik
section: "Programmierung"
topicPath:
  - programmierpraxis-und-tests
  - funktionen-und-verantwortung
  - grundlagen-funktionen-und-verantwortung
learningGoals:
  - "Du erklärst Funktionen als benannte Programmteile mit einer klaren Aufgabe."
  - "Du beschreibst Eingaben, Ausgabe und Seiteneffekte einer Funktion."
  - "Du ordnest Funktionsverantwortung als Grundlage für lesbaren und testbaren Code ein."
practiceIdeas: []
commonMistakes:
  - "Eine Funktion mit zu vielen verschiedenen Aufgaben zu füllen."
  - "Eingaben, Ausgabe und globale Zustände zu vermischen."
  - "Funktionen nur als Abkürzung gegen Wiederholung zu sehen."
keyTakeaways:
  - "Eine gute Funktion hat eine erkennbare Verantwortung."
  - "Klare Eingaben und Ausgaben erleichtern Tests."
  - "Kleine Funktionen machen Programme verständlicher und wartbarer."
recognizeSignals: []
selfCheckPoints: []
level: einfach
tags:
  - "informatik"
  - "programmierung"
  - "funktionen"
  - "struktur"
draft: false
---

## Begriff

Eine **Funktion** ist ein benannter Programmabschnitt, der eine bestimmte Aufgabe ausführt. Funktionen helfen, Programme zu gliedern, Wiederholung zu vermeiden und Abläufe verständlicher zu machen. Wichtig ist dabei nicht nur, dass eine Funktion funktioniert, sondern wofür sie verantwortlich ist.

Der Begriff Verantwortung meint: Welche Aufgabe soll diese Funktion übernehmen, und welche Aufgaben gehören ausdrücklich nicht hinein?

## Eingaben und Ausgaben

Viele Funktionen erhalten Eingaben, verarbeiten sie und liefern ein Ergebnis zurück. Diese Form ist besonders gut verständlich, weil der Zusammenhang zwischen Eingabe und Ausgabe sichtbar bleibt. Eine Funktion, die zwei Zahlen addiert, sollte nicht gleichzeitig eine Datei löschen oder eine Benutzeroberfläche verändern.

Je klarer Eingaben und Ausgaben sind, desto leichter lässt sich die Funktion testen.

## Seiteneffekte

Nicht jede Funktion gibt nur einen Wert zurück. Manche Funktionen schreiben in Dateien, ändern Datenstrukturen, senden Netzwerkanfragen oder verändern eine Anzeige. Solche Wirkungen nennt man Seiteneffekte. Sie sind nicht grundsätzlich falsch, müssen aber bewusst eingesetzt werden.

Viele Fehler entstehen, wenn eine Funktion heimlich mehr verändert, als ihr Name vermuten lässt.

## Verantwortung und Lesbarkeit

Eine Funktion mit klarer Verantwortung ist leichter zu benennen. Wenn ein guter Name schwer zu finden ist, ist das oft ein Hinweis darauf, dass zu viele Aufgaben vermischt wurden. Dann kann es sinnvoll sein, die Funktion aufzuteilen.

## Abgrenzung zu Einzelfällen

Einzelne Lernseiten behandeln Parameter, Rückgabewerte, Tests oder konkrete Programmiersprachen. Diese Überblicksseite erklärt den allgemeinen Rahmen: Funktionen strukturieren Programme, indem sie abgegrenzte Verantwortung sichtbar machen.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Funktion sollte nicht nur Code enthalten, sondern eine klare Aufgabe haben, die man in einem Satz beschreiben kann.</p>
</div>
