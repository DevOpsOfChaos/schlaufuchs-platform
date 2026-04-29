---
title: "Arrays und Schleifen"
description: "Verstehe, wie mehrere Werte mit Arrays gespeichert und mit Schleifen systematisch verarbeitet werden."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmieren", "arrays-und-schleifen"]
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
## Warum die beiden fast immer zusammen auftauchen

Ein Array speichert mehrere Werte in fester Reihenfolge. Eine Schleife sorgt dafür, dass diese Werte nacheinander gelesen, geprüft oder verändert werden können.

Ohne Schleife würdest du schnell viele fast gleiche Zeilen schreiben. Ohne Array müsstest du jeden Wert einzeln behandeln.

```c
int werte[5] = {3, 5, 8, 13, 21};
```

## Der Index beginnt meist bei 0

Gerade am Anfang wirkt das ungewohnt. In vielen Sprachen liegt das erste Element aber an Position `0`, nicht an Position `1`.

Bei fünf Elementen sind deshalb die gültigen Indizes oft:

- 0
- 1
- 2
- 3
- 4

## Eine typische Schleife

```c
for (int i = 0; i < 5; i++) {
  printf("%d\n", werte[i]);
}
```

Hier passiert drei Mal etwas Wichtiges:

- Die Schleife startet bei `i = 0`.
- Sie läuft nur, solange `i < 5` gilt.
- Nach jedem Schritt wird `i` erhöht.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Summe über ein Array</h3>

```c
int punkte[4] = {7, 9, 6, 8};
int summe = 0;

for (int i = 0; i < 4; i++) {
  summe = summe + punkte[i];
}
```

  <p>Die Schleife greift nacheinander auf alle Werte zu. Nach dem letzten Durchlauf enthält <code>summe</code> das Gesamtergebnis.</p>
</div>

## Drei Kontrollfragen beim Lesen

1. Wo startet die Schleifenvariable?
2. Wie weit darf sie laufen?
3. Welches Array-Element wird pro Durchlauf angesprochen?

Mit diesen drei Fragen lassen sich viele Aufgaben deutlich sicherer lesen.
