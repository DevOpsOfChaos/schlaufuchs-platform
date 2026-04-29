---
title: "Klassen und Objekte unterscheiden"
description: "Verstehe, warum Klassen Bauplaene sind und Objekte deren konkrete Auspraegungen im Programm."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "klassen-und-objekte-unterscheiden"]
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

Eine Klasse ist ein abstrakter Bauplan. Ein Objekt ist eine konkrete Auspraegung dieses Bauplans mit realen Attributwerten.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Bauplan und konkrete Instanz</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Klasse</strong>
      <span>Beschreibt gemeinsame Eigenschaften und Methoden.</span>
    </div>
    <div class="compare-item">
      <strong>Objekt</strong>
      <span>Ist ein konkretes Exemplar mit realen Werten, zum Beispiel rot = true oder name = "links".</span>
    </div>
  </div>
</div>

## Warum diese Trennung so wichtig ist

Ohne die Trennung wuerde man schnell alles in einem Topf sehen: den allgemeinen Typ, ein einzelnes Exemplar und dessen aktuellen Zustand. OOP wird aber gerade dann klarer, wenn du diese drei Ebenen auseinanderhaeltst:

- Typ oder Bauplan,
- konkretes Objekt,
- momentane Werte dieses Objekts.

## Leitbeispiel: Ampeln oder Konten

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Viele Objekte, ein gemeinsamer Bauplan</h3>
  <p>Zwei Ampeln koennen beide nach derselben Klasse aufgebaut sein, aber unterschiedliche Zustaende haben. Eine steht auf Rot, die andere auf Gruen. Die Klasse bleibt gleich, die Objekte sind verschieden. Genau so koennen auch zwei Konten zur gleichen Klasse gehoeren und trotzdem unterschiedliche Kontostaende besitzen.</p>
</div>

## Instanziierung ruhig lesen

Die Erzeugung von Objekten einer Klasse heisst Instanziierung. Das kann automatisch ueber eine Variable der Klasse oder dynamisch ueber <code>new</code> geschehen. Wichtig ist hier weniger das auswendig gelernte Fachwort, sondern die Denklogik: Aus dem Bauplan wird ein benutzbares Exemplar.

## UML-Hinweis

In UML wird die Klasse meist als allgemeiner Kasten mit Attributen und Methoden dargestellt. Ein Objekt zeigt dagegen oft einen konkreten Namen und konkrete Werte. Auch dadurch kannst du Bauplan und Instanz sauber unterscheiden.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Bauplan suchen</strong>
    <span>Welche Eigenschaften und Methoden sollen allgemein gelten?</span>
  </div>
  <div class="step-item">
    <strong>2. Exemplar suchen</strong>
    <span>Welches konkrete Ding wird tatsaechlich im Programm benutzt?</span>
  </div>
  <div class="step-item">
    <strong>3. Werte lesen</strong>
    <span>Welche konkreten Attributwerte hat dieses Objekt im Moment?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Klasse, Objekt und aktueller Zustand sind drei verschiedene Ebenen. Genau diese Trennung macht OOP lesbar.</p>
</div>
## Ergaenzung: Auch UML trennt Bauplan und Instanz

Die Unterscheidung zwischen Klasse und Objekt taucht nicht nur im C++-Code auf, sondern auch in UML. Ein Klassendiagramm zeigt den Bauplan, ein Objektdiagramm zeigt konkrete Instanzen mit aktuellen Werten. Das ist dieselbe Denklogik in grafischer Form.
