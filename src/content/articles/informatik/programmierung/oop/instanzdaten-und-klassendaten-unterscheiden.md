---
title: Instanzdaten und Klassendaten unterscheiden
description: Verstehe, welche Daten jedes Objekt selbst besitzt und welche Daten von allen Objekten gemeinsam genutzt werden.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - instanzdaten-und-klassendaten-unterscheiden
learningGoals:
  - Du trennst Instanzdaten und Klassendaten sauber.
  - Du erklaerst, warum verschiedene Objekte unterschiedliche Instanzwerte, aber denselben Klassenwert haben koennen.
  - Du liest Objektbeispiele geordneter.
practiceIdeas:
  - Vergleiche zwei Objekte derselben Klasse mit verschiedenen Attributwerten.
  - Suche einen Wert, der fuer beide Objekte gleich sein muss.
  - Ordne Daten danach, ob sie individuell oder gemeinsam sind.
commonMistakes:
  - Gemeinsame Klassendaten fuer Objektkopien zu halten.
  - Zu denken, dass jedes Objekt seine eigene static-Kopie hat.
  - Individuelle Objektwerte und Klassenwerte sprachlich zu vermischen.
keyTakeaways:
  - Instanzdaten gehoeren zu einzelnen Objekten.
  - Klassendaten gehoeren zur Klasse insgesamt.
  - Beide Ebenen koennen in derselben Klasse gemeinsam vorkommen.
recognizeSignals:
  - Zwei Objekte derselben Klasse werden miteinander verglichen.
  - Eine Aufgabe fragt nach gemeinsamem oder individuellem Zustand.
  - Im Code tauchen normale und statische Daten nebeneinander auf.
selfCheckPoints:
  - Kann ich fuer einen Wert begruenden, ob er pro Objekt oder pro Klasse gedacht ist?
  - Kann ich an zwei Objekten unterschiedliche Instanzwerte erklaeren?
  - Kann ich gemeinsame Klassendaten fachlich benennen?
level: einfach
tags:
  - informatik
  - programmierung
  - oop
  - instanz
  - klasse
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
