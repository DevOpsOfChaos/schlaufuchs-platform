---
title: "Grundlagen: find, grep und Pipes"
description: "Ein Überblick über das Zusammenspiel von Dateisuche, Textsuche und Weiterleitung in der Linux-Shell."
subject: "linux"
section: "Shell"
topicPath: ["shell", "suche-und-dateilesen", "find-grep-und-pipes", "ueberblick", "grundlagen-find-grep-und-pipes"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell"]
draft: false
---
## Überblick

Die Linux-Shell arbeitet besonders stark mit kleinen Werkzeugen, die zusammen kombiniert werden. find sucht Dateien, grep sucht Text in Datenströmen oder Dateien, und Pipes verbinden Programme miteinander.

<div class="note-panel">
  <p><strong>Kurz gesagt:</strong> find, grep und Pipes bilden zusammen eine grundlegende Such- und Filterpraxis in der Shell.</p>
</div>

## Dateien finden

find durchsucht Verzeichnisse nach Namen, Typ, Größe, Zeitstempel oder anderen Eigenschaften. Es beantwortet die Frage, welche Dateien überhaupt gemeint sind.

## Text finden

grep durchsucht Text nach Mustern. Es wird häufig verwendet, um relevante Zeilen aus Logs, Konfigurationsdateien oder Befehlsausgaben herauszufiltern.

## Pipes

Eine Pipe leitet die Ausgabe eines Programms als Eingabe an ein anderes weiter. Dadurch entstehen kleine Verarbeitungsketten, ohne dass Zwischendateien nötig sind.

## Lesestrategie

Eine Shell-Kette sollte von links nach rechts gelesen werden: Welche Daten entstehen zuerst, wie werden sie gefiltert, und welches Ergebnis bleibt übrig?

## Typische Beispiele

<div class="visual-grid">
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>find . -name "*.md" sucht Markdown-Dateien.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>grep "error" logfile.txt zeigt Zeilen mit error.</span>
  </div>
  <div class="visual-item">
    <strong>Beispiel</strong>
    <span>cat logfile.txt | grep "warn" filtert eine Ausgabe weiter.</span>
  </div>
</div>

## Einordnung im Lernpfad

Diese Seite ist als allgemeiner Einstieg gedacht. Sie erklärt Begriffe und Zusammenhänge, bevor einzelne Detailseiten bestimmte Situationen, Fehlerbilder oder Rechenwege behandeln. Wer neu in das Thema einsteigt, sollte zuerst diese Übersicht lesen und danach gezielt zu passenden Vertiefungen wechseln.

## Abgrenzung

Die Übersicht ersetzt keine Übung und keine Spezialseite. Sie soll den Rahmen geben: Was ist das Thema, warum ist es wichtig, welche Begriffe kommen vor und worauf muss man beim Weiterlesen achten?
