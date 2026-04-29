---
title: "Instanzdaten und Klassendaten unterscheiden"
description: "Verstehe, welche Daten jedes Objekt selbst besitzt und welche Daten von allen Objekten gemeinsam genutzt werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "instanzdaten-und-klassendaten-unterscheiden"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Bei Objektorientierung hilft eine einfache Leitfrage:

**Ist dieser Wert eine Eigenschaft jedes einzelnen Objekts oder eine gemeinsame Information der ganzen Klasse?**

## Leitbeispiel

Zwei Objekte `d1` und `d2` koennen verschiedene Instanzwerte haben, etwa `instVar = 10` und `instVar = 20`. Gleichzeitig koennen beide auf denselben Klassenwert zugreifen, etwa `klassVar = 99`.

<div class="compare-card">
  <p class="card-kicker">Gegenueberstellung</p>
  <h3>Individuell vs. gemeinsam</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Instanzdaten</strong>
      <span>Sie beschreiben den konkreten Zustand genau dieses Objekts.</span>
    </div>
    <div class="compare-item">
      <strong>Klassendaten</strong>
      <span>Sie beschreiben etwas, das fuer alle Objekte derselben Klasse gemeinsam gilt.</span>
    </div>
  </div>
</div>

## Warum diese Trennung so wertvoll ist

Ohne diese Unterscheidung werden Objekte schnell unklar gelesen. Dann wirkt es so, als waere "alles irgendwie ueberall gespeichert". Ruhiger ist die doppelte Sicht:

- Was gehoert **dem einzelnen Objekt**?
- Was gehoert **der Klasse als Ganzem**?

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zwei Objekte denken</strong>
    <span>Kann derselbe Wert bei zwei Objekten verschieden sein?</span>
  </div>
  <div class="step-item">
    <strong>2. Gemeinsamkeit pruefen</strong>
    <span>Soll der Wert fuer alle Objekte identisch oder geteilt sein?</span>
  </div>
  <div class="step-item">
    <strong>3. Ebene benennen</strong>
    <span>Dann als Instanzdaten oder Klassendaten einordnen.</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Instanzdaten machen Objekte individuell. Klassendaten verbinden Objekte ueber gemeinsame Klasseninformation.</p>
</div>
