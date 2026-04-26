---
title: "Grundlagen: Rekursion und Abbruch"
description: "Ein Überblick über rekursive Problemlösung, Basisfall und die Bedeutung sicherer Abbruchbedingungen."
subject: informatik
section: "Algorithmen"
topicPath:
  - algorithmen-klein-begruenden
  - rekursion-und-abbruch
  - ueberblick
learningGoals:
  - "Du kennst die Grundbegriffe dieses Themenbereichs."
  - "Du kannst typische Situationen grob einordnen, bevor du Detailseiten liest."
  - "Du erkennst, welche Nachbarseiten für Vertiefung oder Übungen passen."
practiceIdeas:
  - "Lies zuerst diese Überblicksseite und danach eine konkrete Lernsituation aus dem gleichen Unterthema."
  - "Notiere die wichtigsten Begriffe und prüfe, welche davon in den Detailseiten wieder auftauchen."
commonMistakes:
  - "Direkt mit Sonderfällen zu beginnen, ohne die Grundbegriffe zu klären."
  - "Ein einzelnes Beispiel für die ganze Themenlogik zu halten."
keyTakeaways:
  - "Rekursion ist kontrollierte Selbstbezüglichkeit. Entscheidend sind Basisfall und echte Annäherung an diesen Basisfall."
recognizeSignals:
  - "Du suchst eine allgemeine Einordnung, bevor du Aufgaben oder Spezialfälle bearbeitest."
  - "Mehrere Detailseiten wirken ähnlich, aber dir fehlt der gemeinsame Rahmen."
selfCheckPoints:
  - "Kann ich das Thema in eigenen Worten beschreiben?"
  - "Kann ich Grundidee, typische Begriffe und Grenzen auseinanderhalten?"
level: mittel
tags:
  - "informatik"
  - "algorithmen"
  - "rekursion"
  - "abbruch"
draft: false
---

## Überblick

Rekursion bedeutet, dass eine Lösung auf eine kleinere Version desselben Problems zurückgreift. Damit Rekursion funktioniert, braucht sie einen Basisfall, der ohne weiteren rekursiven Aufruf gelöst werden kann.

<div class="note-panel">
  <p><strong>Kurz gesagt:</strong> Rekursion ist kontrollierte Selbstbezüglichkeit. Entscheidend sind Basisfall und echte Annäherung an diesen Basisfall.</p>
</div>

## Grundidee

Ein rekursives Verfahren zerlegt ein Problem in einen einfachen aktuellen Schritt und ein kleineres Restproblem. Diese Struktur ist besonders nützlich bei Bäumen, verschachtelten Daten oder mathematischen Definitionen.

## Basisfall

Der Basisfall verhindert endlose Wiederholung. Er beschreibt die kleinste Situation, die direkt gelöst werden kann. Ohne Basisfall läuft ein rekursives Programm immer weiter, bis ein technischer Fehler entsteht.

## Rekursiver Schritt

Der rekursive Schritt muss das Problem wirklich kleiner oder einfacher machen. Wenn sich die Eingabe nicht in Richtung Basisfall bewegt, ist die Rekursion fachlich fehlerhaft.

## Lesestrategie

Beim Lesen rekursiver Programme sollte man nicht alle Aufrufe gleichzeitig im Kopf ausführen. Besser ist: Basisfall erkennen, Verkleinerung prüfen und dann die Rückgabeidee verstehen.

## Typische Beispiele

<div class="visual-grid">
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Fakultät: n! wird über n · (n-1)! beschrieben.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Ordnerdurchlauf: Jeder Unterordner wird nach demselben Verfahren durchsucht.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Baumstruktur: Linker und rechter Teilbaum werden gleichartig verarbeitet.</span>
  </div>
</div>

## Einordnung im Lernpfad

Diese Seite ist als allgemeiner Einstieg gedacht. Sie erklärt Begriffe und Zusammenhänge, bevor einzelne Detailseiten bestimmte Situationen, Fehlerbilder oder Rechenwege behandeln. Wer neu in das Thema einsteigt, sollte zuerst diese Übersicht lesen und danach gezielt zu passenden Vertiefungen wechseln.

## Abgrenzung

Die Übersicht ersetzt keine Übung und keine Spezialseite. Sie soll den Rahmen geben: Was ist das Thema, warum ist es wichtig, welche Begriffe kommen vor und worauf muss man beim Weiterlesen achten?
