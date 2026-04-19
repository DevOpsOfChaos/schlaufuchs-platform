---
title: Abstrakte Klassen und reine virtuelle Methoden verstehen
description: Verstehe, warum manche Basisklassen nur einen Rahmen vorgeben und noch keine fertigen Objekte sein sollen.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - oop
  - abstrakte-klassen-und-reine-virtuelle-methoden-verstehen
learningGoals:
  - Du erklaerst die Idee einer abstrakten Klasse.
  - Du beschreibst reine virtuelle Methoden als offene Pflichtstellen fuer Unterklassen.
  - Du erkennst, warum manche Basisklassen eher Schablonen als fertige Objekte sind.
practiceIdeas:
  - Vergleiche eine allgemeine Basisklasse mit einer konkreten Unterklasse.
  - Markiere in einem Beispiel, welche Methode noch keine fertige Umsetzung hat.
  - Beschreibe, warum eine abstrakte Klasse oft nicht direkt instanziiert werden soll.
commonMistakes:
  - Zu denken, dass jede Klasse sofort fertige Objekte liefern muss.
  - Reine virtuelle Methoden mit normalen virtuellen Methoden zu verwechseln.
  - Abstrakte Klasse und Interface Idee ohne klare Rollen zu vermischen.
keyTakeaways:
  - Eine abstrakte Klasse gibt einen gemeinsamen Rahmen vor.
  - Reine virtuelle Methoden markieren Verhalten, das Unterklassen selbst konkret fuellen muessen.
  - Abstrakte Klassen sind oft Denkmodelle fuer gemeinsame Struktur und Pflichten.
recognizeSignals:
  - Es geht um Basisklassen, die nicht direkt erzeugt werden sollen.
  - Eine Methode wird als reine virtuelle Methode beschrieben.
  - Die Aufgabe fragt nach gemeinsamen Eigenschaften und offener Spezialisierung.
selfCheckPoints:
  - Kann ich erklaeren, warum eine abstrakte Klasse oft kein direktes Objekt liefern soll?
  - Kann ich reine virtuelle Methoden von normalen virtuellen Methoden unterscheiden?
  - Kann ich die Rolle einer konkreten Unterklasse im Vergleich zur abstrakten Basis benennen?
level: mittel
tags:
  - informatik
  - programmierung
  - oop
  - abstrakt
  - virtual
draft: false
---

## Grundidee

Manche Basisklassen sollen nicht selbst als fertige Objekte benutzt werden. Sie geben eher einen **gemeinsamen Rahmen** vor, den konkrete Unterklassen spaeter ausfuellen.

Genau hier hilft die Idee der abstrakten Klasse.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Allgemeine Form, konkrete Kreis und Rechteck Klassen</h3>
  <p>Eine allgemeine Klasse <code>Form</code> kann gemeinsame Eigenschaften wie Farbe oder Position mitbringen. Die konkrete Berechnung einer Flaeche soll aber oft erst in Klassen wie <code>Kreis</code> oder <code>Rechteck</code> wirklich festgelegt werden.</p>
</div>

## Reine virtuelle Methode

Eine reine virtuelle Methode markiert, dass ein Verhalten zwar zur gemeinsamen Idee gehoert, in der Basisklasse aber noch nicht fertig umgesetzt ist.

```cpp
virtual double flaeche() = 0;
```

Damit wird sichtbar:

- diese Methode gehoert zur gemeinsamen Schnittstelle,
- die konkrete Unterklasse muss sie aber selbst fuellen.

## Was abstrakt hier bedeutet

<div class="compare-card">
  <p class="card-kicker">Rollen trennen</p>
  <h3>Rahmenklasse und konkrete Klasse</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Abstrakte Klasse</strong>
      <span>Beschreibt gemeinsame Struktur, Regeln oder Pflichten.</span>
    </div>
    <div class="compare-item">
      <strong>Konkrete Unterklasse</strong>
      <span>Liefert die fertige Umsetzung, die wirklich als Objekt benutzt werden kann.</span>
    </div>
  </div>
</div>

## Mini-Demo: offene Pflichtstelle

<div class="figure-card">
  <p class="card-kicker">Denkbild</p>
  <h3>Die Basisklasse sagt was noetig ist, die Unterklasse sagt wie</h3>
  <div class="signal-flow">
    <div class="flow-node"><strong>Abstrakte Basis</strong><span>gemeinsame Idee und offene Methode</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Unterklasse</strong><span>konkrete Umsetzung des fehlenden Verhaltens</span></div>
    <div class="flow-arrow">→</div>
    <div class="flow-node"><strong>Benutzbares Objekt</strong><span>jetzt ist die Klasse vollstaendig konkret</span></div>
  </div>
</div>

## Diese Seite behandelt bewusst abstrakte Rahmen und nicht nur spaete Methodenwahl

`virtual` und dynamisches Binden sind verwandt, aber hier geht es zuerst um eine andere Frage:

**Soll die Basisklasse schon fertig sein oder nur gemeinsame Pflichten vorgeben?**

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Basisklasse lesen</strong>
    <span>Welche gemeinsamen Eigenschaften oder Regeln gibt sie vor?</span>
  </div>
  <div class="step-item">
    <strong>2. Offene Methoden suchen</strong>
    <span>Welche Teile sind noch nicht konkret umgesetzt?</span>
  </div>
  <div class="step-item">
    <strong>3. Unterklasse fragen</strong>
    <span>Welche konkrete Klasse fuellt diese offenen Stellen spaeter aus?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Eine abstrakte Klasse ist oft weniger ein fertiges Ding als ein gemeinsamer Rahmen mit offenen Pflichtstellen.</p>
</div>
