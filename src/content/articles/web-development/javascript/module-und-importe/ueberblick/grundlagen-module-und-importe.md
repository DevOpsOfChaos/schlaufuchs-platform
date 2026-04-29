---
title: "Grundlagen: Module und Importe in JavaScript"
description: "Ein Überblick darüber, warum JavaScript-Code in Module aufgeteilt wird und wie Importe helfen."
subject: "web-development"
section: "JavaScript"
topicPath: ["javascript", "module-und-importe", "ueberblick", "grundlagen-module-und-importe"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["web-development", "JavaScript"]
draft: false
---
## Überblick

Module teilen JavaScript-Code in kleinere Dateien mit klaren Zuständigkeiten. Dadurch wird ein Projekt übersichtlicher, wiederverwendbarer und leichter testbar. Import und Export verbinden diese Dateien kontrolliert miteinander.

<div class="note-panel">
  <p><strong>Kurz gesagt:</strong> Module sind ein Ordnungswerkzeug. Sie machen Abhängigkeiten sichtbar und verhindern unübersichtliche JavaScript-Sammeldateien.</p>
</div>

## Zweck von Modulen

Module verhindern, dass alle Funktionen und Variablen in einer einzigen großen Datei landen. Jede Datei kann einen engeren Zweck haben, zum Beispiel Datenzugriff, Darstellung oder Hilfsfunktionen.

## Export

Ein Export macht ausgewählte Werte, Funktionen oder Klassen für andere Dateien verfügbar. Nicht alles in einer Datei muss automatisch öffentlich sein.

## Import

Ein Import bindet exportierte Funktionalität aus einem anderen Modul ein. Dadurch wird sichtbar, wovon eine Datei abhängt.

## Projektqualität

Gute Modulgrenzen reduzieren Kopplung. Eine Datei sollte nicht beliebig viele Aufgaben übernehmen, sondern klar beschreiben, welchen Beitrag sie leistet.

## Typische Beispiele

<div class="visual-grid">
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Eine Datei exportiert eine Funktion zum Formatieren von Datum.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Eine Komponente importiert nur die Hilfsfunktion, die sie wirklich braucht.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>Gemeinsame Konstanten liegen in einem eigenen Modul.</span>
  </div>
</div>

## Einordnung im Lernpfad

Diese Seite ist als allgemeiner Einstieg gedacht. Sie erklärt Begriffe und Zusammenhänge, bevor einzelne Detailseiten bestimmte Situationen, Fehlerbilder oder Rechenwege behandeln. Wer neu in das Thema einsteigt, sollte zuerst diese Übersicht lesen und danach gezielt zu passenden Vertiefungen wechseln.

## Abgrenzung

Die Übersicht ersetzt keine Übung und keine Spezialseite. Sie soll den Rahmen geben: Was ist das Thema, warum ist es wichtig, welche Begriffe kommen vor und worauf muss man beim Weiterlesen achten?
