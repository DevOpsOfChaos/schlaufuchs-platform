---
title: Kompilieren, Linken und Ausführen verstehen
description: Verstehe den Weg von der C++-Quelldatei bis zum ausführbaren Programm.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - einstieg-und-werkzeugkette
  - kompilieren-linken-und-ausfuehren-verstehen
learningGoals:
  - Du erklärst die Stationen Quelltext, Compiler, Objektdatei, Linker und ausführbares Programm.
  - Du unterscheidest Kompilieren und Linken sauber.
  - Du beschreibst die Werkzeugkette ruhiger als Ablauf statt als bloße Befehlsliste.
practiceIdeas:
  - Ordne Dateiendungen wie <code>.cpp</code>, <code>.o</code> und <code>.exe</code> einer Rolle zu.
  - Erkläre, warum aus Textdatei und Objektdatei noch kein direkt startbares Programm geworden ist.
  - Vergleiche einen Ein-Schritt-Befehl mit dem gedanklich getrennten Ablauf aus mehreren Stufen.
commonMistakes:
  - Kompilieren und Linken als dasselbe zu behandeln.
  - Zu glauben, die <code>.cpp</code>-Datei sei schon direkt ausführbar.
  - Den Compiler als „alles zusammen“ zu bezeichnen, ohne die Zwischenstufen zu sehen.
keyTakeaways:
  - C++-Quelltext wird nicht direkt ausgeführt.
  - Kompilieren erzeugt Zwischenergebnisse, Linken bindet sie zu einem Programm zusammen.
  - Die Werkzeugkette liest sich am ruhigsten als Ablauf von Datei zu Datei.
recognizeSignals:
  - Es geht um Compiler, Linker, Objektdateien, Konsolenbefehle oder den Übersetzungsweg.
  - Du sollst einen Werkzeugablauf ordnen oder erklären.
  - In Beispielen musst du Dateien und Arbeitsschritte unterscheiden.
selfCheckPoints:
  - Kann ich <code>.cpp</code>, Objektdatei und ausführbares Programm unterscheiden?
  - Kann ich Kompilieren und Linken in eigenen Worten trennen?
  - Kann ich den Ablauf vom Quelltext bis zur Ausführung beschreiben?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - compiler
  - linker
draft: false
---

## Grundidee

Eine C++-Datei ist zuerst nur Quelltext. Damit daraus ein laufendes Programm wird, sind mehrere Schritte nötig. Genau diese Kette ist wichtig, weil sie zeigt, dass ein Programm nicht „magisch“ aus dem Editor startet.

<div class="figure-card">
  <p class="card-kicker">Werkzeugkette</p>
  <h3>Vom Text zur ausführbaren Datei</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Quelldatei</strong><span><code>datei.cpp</code> enthält lesbaren Quelltext.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Compiler</strong><span>übersetzt den Quelltext in eine Objektdatei.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Linker</strong><span>bindet Objektdateien und Bibliotheken zusammen.</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Programm</strong><span>die ausführbare Datei kann gestartet werden.</span></div>
  </div>
</div>

## Die wichtigsten Stationen

<div class="visual-grid">
  <div class="visual-item">
    <strong>Quelldatei</strong>
    <span>Die <code>.cpp</code>-Datei ist bearbeitbarer Text im Editor.</span>
  </div>
  <div class="visual-item">
    <strong>Objektdatei</strong>
    <span>Nach dem Kompilieren entsteht oft eine <code>.o</code>-Datei als Zwischenschritt.</span>
  </div>
  <div class="visual-item">
    <strong>Linken</strong>
    <span>Hier werden passende Bestandteile zu einem vollständigen Programm verbunden.</span>
  </div>
  <div class="visual-item">
    <strong>Ausführen</strong>
    <span>Erst die fertige ausführbare Datei kann wirklich gestartet werden.</span>
  </div>
</div>

## Ein typischer Konsolenablauf

```bash
g++ -c erstes.cpp
g++ -o erstes.exe erstes.o
```

oder zusammengefasst:

```bash
g++ -o erstes.exe erstes.cpp
```

## Warum die Trennung trotzdem wichtig ist

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Ein Befehl kann mehrere Schritte verstecken</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Kurzform</strong>
      <span>Ein einzelner Befehl wirkt bequem, verdeckt aber leicht die inneren Stationen.</span>
    </div>
    <div class="compare-item">
      <strong>Gedanklich getrennt</strong>
      <span>Wer Kompilieren und Linken gedanklich trennt, versteht Fehlermeldungen und Dateitypen meist besser.</span>
    </div>
  </div>
</div>

## Eine ruhige Prüfstrategie

1. Welche Datei ist der Quelltext?
2. Welche Datei ist nur Zwischenergebnis?
3. Wo wird zusammengebunden?
4. Welche Datei ist wirklich startbar?

<div class="note-panel">
  <p><strong>Merke:</strong> „Kompilieren“ wird im Alltag oft grob für den ganzen Übersetzungsvorgang benutzt. Fachlich ist es hilfreicher, Kompilieren und Linken getrennt zu sehen.</p>
</div>
