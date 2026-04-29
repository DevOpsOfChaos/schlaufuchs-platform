---
title: "Getter und Setter als Schnittstelle verstehen"
description: "Verstehe, warum Getter und Setter oft als kontrollierte Zugaenge zu gekapselten Daten dienen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "oop", "getter-und-setter-als-schnittstelle-verstehen"]
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

Getter und Setter sind oft der sichtbare Teil einer gekapselten Klasse. Die eigentlichen Daten bleiben intern geschuetzt, aber die Klasse stellt gezielte Methoden bereit, um zu lesen oder zu aendern.

<div class="compare-card">
  <p class="card-kicker">Vergleich</p>
  <h3>Direkt anfassen vs. kontrolliert zugreifen</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Direkter Zugriff</strong>
      <span>Jeder kann Werte unmittelbar veraendern. Das wirkt bequem, ist aber oft fachlich unsauber.</span>
    </div>
    <div class="compare-item">
      <strong>Getter / Setter</strong>
      <span>Die Klasse entscheidet selbst, wie gelesen oder geaendert wird.</span>
    </div>
  </div>
</div>

## Getter

Ein Getter gibt typischerweise einen gespeicherten Wert zurueck. Er veraendert den Zustand nicht, sondern macht ihn lesbar.

```cpp
int getMinute() {
  return minute;
}
```

## Setter

Ein Setter veraendert typischerweise einen Wert - aber kontrolliert.

```cpp
void setMinute(int m) {
  if (m >= 0 && m < 60) {
    minute = m;
  }
}
```

Der entscheidende Punkt ist nicht der Name, sondern die Idee: Ein Setter kann Regeln durchsetzen.

## Warum Setter oft sinnvoller sind als oeffentliche Daten

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Minute = 99 soll eben nicht einfach moeglich sein</h3>
  <p>Wenn <code>minute</code> public waere, koennte jeder Programmteil beliebige Werte setzen. Mit einem Setter bleibt die Verantwortung fuer gueltige Zustaende in der Klasse. Genau das macht die Klasse verlaesslicher und ruhiger testbar.</p>
</div>

## Getter und Setter nicht mechanisch denken

Getter und Setter sind kein Selbstzweck. Sie sind sinnvoll, wenn sie etwas klaeren:

- lesen ermoeglichen,
- Eingaben pruefen,
- Nebenwirkungen kontrollieren,
- einen gueltigen Zustand schuetzen.

## Ruhige Pruefstrategie

<div class="step-grid">
  <div class="step-item">
    <strong>1. Attribut suchen</strong>
    <span>Ist es intern privat gespeichert?</span>
  </div>
  <div class="step-item">
    <strong>2. Lesemethode pruefen</strong>
    <span>Gibt eine Methode den Wert nur zurueck?</span>
  </div>
  <div class="step-item">
    <strong>3. Aenderungsmethode pruefen</strong>
    <span>Gibt es Pruefungen oder Regeln im Setter?</span>
  </div>
</div>

<div class="note-panel">
  <p><strong>Merke:</strong> Getter und Setter sind keine blossen Namensmuster. Sie sind kontrollierte Tueren zu Daten, die nicht beliebig offenstehen sollen.</p>
</div>
