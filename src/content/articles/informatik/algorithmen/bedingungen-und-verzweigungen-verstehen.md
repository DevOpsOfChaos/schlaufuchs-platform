---
title: "Bedingungen und Verzweigungen verstehen"
description: "Verstehe, warum Abläufe oft nicht nur aus festen Schritten bestehen, sondern auf Bedingungen reagieren müssen."
subject: "informatik"
section: "Algorithmen"
topicPath: ["algorithmen", "bedingungen-und-verzweigungen-verstehen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Algorithmen"]
draft: false
---
## Grundidee

Viele Abläufe laufen nicht einfach Schritt für Schritt geradeaus. Oft muss zwischendurch geprüft werden, **welche Situation gerade vorliegt**. Erst danach steht fest, wie es weitergeht.

Genau dafür braucht man Bedingungen und Verzweigungen.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Login nur mit richtigen Daten</h3>
  <p>Eine App prüft zuerst, ob Benutzername und Passwort stimmen. Nur wenn diese Bedingung erfüllt ist, wird der Zugang geöffnet. Sonst erscheint eine Fehlermeldung. Das zeigt: Der Ablauf ist nicht zufällig, sondern folgt einer klaren Regel.</p>
</div>

## Was eine Bedingung ist

Eine Bedingung ist eine **prüfbare Aussage**, von der der nächste Schritt abhängt.

Typische Fragen sind:

- Ist die Eingabe vollständig?
- Ist ein Wert größer als 0?
- Hat eine Person die richtigen Daten eingegeben?

Erst wenn diese Frage beantwortet ist, lässt sich entscheiden, welcher Weg im Ablauf sinnvoll ist.

## Was eine Verzweigung ist

Eine Verzweigung entsteht dort, wo ein Ablauf **nicht nur eine Fortsetzung**, sondern mehrere mögliche Wege hat.

<div class="compare-card">
  <p class="card-kicker">Wichtige Unterscheidung</p>
  <h3>Prüfung und Weg gehören zusammen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Bedingung</strong>
      <span>Die Bedingung beschreibt, was geprüft wird.</span>
    </div>
    <div class="compare-item">
      <strong>Verzweigung</strong>
      <span>Die Verzweigung zeigt, welcher Weg nach dem Prüfen gewählt wird.</span>
    </div>
    <div class="compare-item">
      <strong>Folge</strong>
      <span>Jeder Weg führt zu einem anderen passenden nächsten Schritt.</span>
    </div>
  </div>
</div>

## Ein einfaches Denkbild

<div class="figure-card">
  <p class="card-kicker">Ablaufbild</p>
  <h3>Vom Prüfen zur Entscheidung</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Frage stellen</strong><span>Welche Bedingung muss geprüft werden?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Ergebnis prüfen</strong><span>Ja oder nein? erfüllt oder nicht erfüllt?</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Passenden Weg wählen</strong><span>Der Ablauf geht nachvollziehbar weiter.</span></div>
  </div>
</div>

## Lineare Schritte und Verzweigungen

Nicht jeder Ablauf braucht sofort eine Entscheidung.

<div class="good-bad-grid">
  <section>
    <p class="card-kicker">Linear</p>
    <h3>Ein Weg nach dem anderen</h3>
    <p>Hier steht jeder nächste Schritt schon fest, ohne dass vorher etwas geprüft werden muss.</p>
  </section>
  <section>
    <p class="card-kicker">Verzweigt</p>
    <h3>Erst prüfen, dann weitergehen</h3>
    <p>Hier hängt der nächste Schritt von einer klaren Bedingung ab.</p>
  </section>
</div>

## Beispiel als Regel

<pre><code>Wenn die Eingabe leer ist,
dann Fehlermeldung anzeigen,
sonst Suche starten.</code></pre>

An so einem Beispiel wird gut sichtbar:

- Die Regel ist klar benannt.
- Beide Wege sind nachvollziehbar.
- Der Ablauf bleibt erklärbar statt willkürlich.

## Eine ruhige Prüfstrategie

1. An welcher Stelle im Ablauf gibt es mehr als einen möglichen Weg?
2. Welche Frage entscheidet darüber?
3. Ist diese Frage wirklich prüfbar?
4. Welche Folgen haben die beiden Wege?

<div class="note-panel">
  <p><strong>Merke:</strong> Eine gute Verzweigung beginnt nicht mit zwei Wegen, sondern mit einer klaren Bedingung, die den Weg bestimmt.</p>
</div>
