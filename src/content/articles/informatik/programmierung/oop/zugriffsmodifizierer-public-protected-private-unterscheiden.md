---
title: "Zugriffsmodifizierer public, protected und private unterscheiden"
description: "Verstehe, welche Teile einer Klasse von aussen, nur in Unterklassen oder nur intern sichtbar sind."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "zugriffsmodifizierer-public-protected-private-unterscheiden"]
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

Nicht alles an einer Klasse soll von ueberall erreichbar sein. Manche Teile bilden die offizielle Schnittstelle, andere sollen intern bleiben. Zugriffsmodifizierer helfen dabei, diese Grenze klar zu ziehen.

<div class="visual-grid">
  <div class="visual-item">
    <strong>public</strong>
    <span>Von aussen nutzbar. Hier liegt die Schnittstelle der Klasse.</span>
  </div>
  <div class="visual-item">
    <strong>protected</strong>
    <span>Fuer die Klasse selbst und ihre Unterklassen gedacht.</span>
  </div>
  <div class="visual-item">
    <strong>private</strong>
    <span>Nur innerhalb der Klasse sichtbar. Hier liegen oft sensible Daten.</span>
  </div>
</div>

## Warum das wichtig ist

Wenn alle Daten offen herumliegen, kann jedes andere Programmteil sie beliebig veraendern. Das macht Verhalten schwerer vorhersehbar. Sichtbarkeit schuetzt also nicht nur "aus Prinzip", sondern stabilisiert das Modell.

## Die drei Zugriffsstufen im Vergleich

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Wer darf was sehen?</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>public</strong>
      <span>Das Hauptprogramm und andere Klassen duerfen diese Methoden oder Daten nutzen.</span>
    </div>
    <div class="compare-item">
      <strong>protected</strong>
      <span>Unterklassen kommen heran, fremde Aussenwelt aber nicht direkt.</span>
    </div>
    <div class="compare-item">
      <strong>private</strong>
      <span>Nur die Klasse selbst darf direkt zugreifen.</span>
    </div>
  </div>
</div>

## Leitbeispiel: Uhrzeit-Klasse

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Stunde und Minute nicht frei herumreichen</h3>
  <p>Wenn <code>stunde</code> und <code>minute</code> private sind, kann die Klasse selbst kontrollieren, welche Werte gueltig sind. Ein Setter kann dann etwa verhindern, dass jemand Minute = 99 setzt. Genau das ist der didaktische Kern von Kapselung: nicht jeder Zugriff ist fachlich sinnvoll.</p>
</div>

## UML-Hinweis

In UML steht oft:

- <code>+</code> fuer public
- <code>#</code> fuer protected
- <code>-</code> fuer private

Diese Zeichen sind also keine Deko, sondern ein kompaktes Sichtbarkeitsmodell.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Zugriffsort pruefen</strong>
    <span>Kommt der Zugriff von aussen, aus der Klasse selbst oder aus einer Unterklasse?</span>
  </div>
  <div class="step-item">
    <strong>2. Sichtbarkeit lesen</strong>
    <span>Steht das Element unter public, protected oder private?</span>
  </div>
  <div class="step-item">
    <strong>3. Zweck mitdenken</strong>
    <span>Soll hier offen genutzt oder intern geschuetzt werden?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Sichtbarkeit ist kein Formalismus. Sie ist ein Denkwerkzeug dafuer, welche Teile einer Klasse nach aussen gehoeren und welche bewusst geschuetzt bleiben.</p>
</div>
