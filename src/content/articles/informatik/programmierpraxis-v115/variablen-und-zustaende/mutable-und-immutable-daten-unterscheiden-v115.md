---
title: "Informatik – Mutable und immutable Daten unterscheiden"
description: "Trainiere Mutable und immutable Daten unterscheiden als kleines Unterthema mit klarer Trennkante, Beispiel und Gegenprobe."
subject: informatik
section: "Feinstruktur Informatik"
topicPath:
  - "programmierpraxis-v115"
  - "variablen-und-zustaende"
  - "mutable-und-immutable-daten-unterscheiden-v115"
learningGoals:
  - "Du erklärst Mutable und immutable Daten unterscheiden an einem kleinen, abgegrenzten Fall."
  - "Du trennst das Unterthema von einem naheliegenden Nachbarthema."
  - "Du formulierst eine passende Gegenprobe statt nur eine fertige Antwort."
practiceIdeas:
  - "Schreibe zuerst die Prüffrage in eigenen Worten auf."
  - "Markiere im Fall zwei Hinweise, die wirklich zur Entscheidung gehören."
  - "Formuliere einen Gegenfall, in dem die Entscheidung anders ausfallen würde."
commonMistakes:
  - "Änderung am Objekt und neue Bindung werden gleichgesetzt."
  - "Das Thema wird zu breit eingeordnet und verliert dadurch die prüfbare Trennkante."
  - "Die Lösung nennt ein Ergebnis, begründet aber nicht die Abgrenzung."
keyTakeaways:
  - "Dieses Unterthema prüft vor allem: Wird ein Objekt verändert oder ein Name neu gebunden?"
  - "Eine gute Lösung benennt die Trennkante ausdrücklich."
  - "Die Gegenprobe zeigt, ob die Begründung wirklich trägt."
recognizeSignals:
  - "Die Aufgabe fragt nach Mutable und immutable Daten unterscheiden."
  - "Ähnliche Begriffe oder Fälle liegen nah beieinander."
  - "Eine kleine Änderung im Fall würde zu einer anderen Entscheidung führen."
selfCheckPoints:
  - "Kann ich das Unterthema in einem Satz benennen?"
  - "Kann ich sagen, womit es leicht verwechselt wird?"
  - "Kann ich eine Gegenprobe formulieren?"
level: mittel
tags:
  - "informatik"
  - "feinstruktur"
  - "unterthema"
  - "programmierpraxis"
  - "variablen und zustände"
draft: false
---

<img src="/schlaufuchs-platform/illustrations/informatik-mutable-und-immutable-daten-unterscheiden-v115.svg" alt="Lernillustration zu Mutable und immutable Daten unterscheiden" loading="lazy" />

## Grundidee

Dieses Unterthema behandelt **Mutable und immutable Daten unterscheiden** bewusst eng. Es gehört zu einem größeren Fachbereich, soll aber nicht als Sammelseite funktionieren. Die Seite beantwortet deshalb eine klare Frage: **Wird ein Objekt verändert oder ein Name neu gebunden?**

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Fall: Mutable und immutable Daten unterscheiden</h3>
  <p>Eine Liste wird verändert, ein Zahlenwert aber neu zugewiesen.</p>
</div>

## Die Trennkante

Viele Fehler entstehen, wenn ähnliche Fälle zu schnell zusammengeworfen werden. Hier ist die wichtigste Trennkante:

<div class="compare-card">
  <p class="card-kicker">Nicht verwechseln</p>
  <h3>Mutable und immutable Daten unterscheiden sauber lesen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Unsaubere Lesart</strong>
      <span>Änderung am Objekt und neue Bindung werden gleichgesetzt.</span>
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

Die häufigste Fehlstelle ist: Änderung am Objekt und neue Bindung werden gleichgesetzt. Dadurch wird ein kleiner fachlicher Unterschied unsichtbar. Besser ist, die Aufgabe erst auf die konkrete Prüffrage zu verkleinern und dann mit einer Gegenprobe abzusichern.

<div class="note-panel">
  <p><strong>Merke:</strong> Mutable und immutable Daten unterscheiden bleibt übersichtlich, wenn du zuerst Kontext, Trennkante und Gegenprobe formulierst.</p>
</div>
