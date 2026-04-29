---
title: "Informatik – Doppelte Logik extrahieren"
description: "Trainiere Doppelte Logik extrahieren als kleines Unterthema mit klarer Trennkante, Beispiel und Gegenprobe."
subject: "informatik"
section: "Feinstruktur Informatik"
topicPath: ["softwarequalitaet-v115", "code-lesbarkeit", "doppelte-logik-extrahieren-v115"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Feinstruktur Informatik"]
draft: false
---
<img src="/schlaufuchs-platform/illustrations/informatik-doppelte-logik-extrahieren-v115.svg" alt="Lernillustration zu Doppelte Logik extrahieren" loading="lazy" />

## Grundidee

Dieses Unterthema behandelt **Doppelte Logik extrahieren** bewusst eng. Es gehört zu einem größeren Fachbereich, soll aber nicht als Sammelseite funktionieren. Die Seite beantwortet deshalb eine klare Frage: **Kann die gemeinsame Regel an einer Stelle stehen?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Fall: Doppelte Logik extrahieren</h3>
  <p>Zwei Codestellen prüfen fast dasselbe.</p>
</div>

## Die Trennkante

Viele Fehler entstehen, wenn ähnliche Fälle zu schnell zusammengeworfen werden. Hier ist die wichtigste Trennkante:

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Doppelte Logik extrahieren sauber lesen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unsaubere Lesart</strong>
      <span>Die Kopie wird bei Änderungen vergessen.</span>
    </div>
    <div class="compare-item">
      <strong>Ruhige Lesart</strong>
      <span>Der Fall wird über Zustand, Eingabe, Ablauf und Verantwortlichkeit getrennt, nicht über spontanes Code-Ändern.</span>
    </div>
  </div>
</div>

## Mini-Demo

<div class="figure-card">
  <p class="card-kicker">Mini-Demo</p>
  <h3>Vom breiten Thema zur kleinen Entscheidung</h3>
  <pre><code>1. Kontext benennen
2. ähnliche Fälle trennen
3. Entscheidung begründen
4. Gegenprobe formulieren</code></pre>
  <p>Die Seite ist absichtlich klein gehalten. Sie soll eine wiedererkennbare Entscheidung trainieren, nicht den ganzen Themenbereich auf einmal erklären.</p>
</div>

## Prüfstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Begriff klären</strong>
    <span>Welcher Teil der Aufgabe gehört wirklich zu diesem Unterthema?</span>
  </div>
  <div class="step-item">
    <strong>2. Grenze ziehen</strong>
    <span>Womit wird das Thema häufig verwechselt?</span>
  </div>
  <div class="step-item">
    <strong>3. Entscheidung begründen</strong>
    <span>Welche Beobachtung trägt die Lösung fachlich?</span>
  </div>
  <div class="step-item">
    <strong>4. Gegenprobe machen</strong>
    <span>Würde sich die Begründung ändern, wenn ein Detail anders wäre?</span>
  </div>
</div>

## Typische Fehlstelle

Die häufigste Fehlstelle ist: Die Kopie wird bei Änderungen vergessen. Dadurch wird ein kleiner fachlicher Unterschied unsichtbar. Besser ist, die Aufgabe erst auf die konkrete Prüffrage zu verkleinern und dann mit einer Gegenprobe abzusichern.

<div class="note-panel">
  <p><strong>Merke:</strong> Doppelte Logik extrahieren bleibt übersichtlich, wenn du zuerst Kontext, Trennkante und Gegenprobe formulierst.</p>
</div>
