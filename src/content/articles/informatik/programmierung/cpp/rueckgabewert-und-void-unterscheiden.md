---
title: Rückgabewert und void unterscheiden
description: Verstehe, wann eine Funktion ein Ergebnis zurückliefert und wann sie nur eine Aktion ohne Rückgabewert ausführt.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - funktionen-und-ablauf
  - rueckgabewert-und-void-unterscheiden
learningGoals:
  - Du erklärst die Rolle eines Rückgabewerts.
  - Du unterscheidest Funktionen mit Ergebnis von Funktionen ohne Rückgabe.
  - Du liest <code>void</code> nicht als „leer“, sondern als bewusste Aussage über die Funktion.
practiceIdeas:
  - Vergleiche eine Berechnungsfunktion mit einer Ausgabe-Funktion.
  - "Frage bei Beispielen: Kommt hier ein Wert zurück oder passiert nur eine Aktion?"
  - Beschreibe in eigenen Worten, was mit dem Ergebnis einer Funktion weiter geschieht.
commonMistakes:
  - Jede Funktion müsse zwingend einen berechneten Wert zurückgeben.
  - <code>void</code> mit „unnütze Funktion“ zu verwechseln.
  - Ausgaben mit Rückgabewerten durcheinanderzubringen.
keyTakeaways:
  - Rückgabewerte liefern Ergebnisse zur weiteren Verarbeitung.
  - <code>void</code> zeigt an, dass kein Wert zurückgegeben wird.
  - Aktion und Ergebnis sind zwei verschiedene Rollen einer Funktion.
recognizeSignals:
  - Es geht um <code>return</code>, <code>void</code> oder um die Frage, ob eine Funktion einen Wert liefert.
  - Du sollst erklären, was nach dem Funktionsaufruf weiter genutzt werden kann.
  - In Beispielen musst du Ausgabe und Rückgabe unterscheiden.
selfCheckPoints:
  - Kann ich den Unterschied zwischen Aktion und Ergebnis erklären?
  - Kann ich beschreiben, wann <code>void</code> sinnvoll ist?
  - Kann ich sagen, was mit einem Rückgabewert weiter passiert?
level: einfach
tags:
  - informatik
  - programmierung
  - cpp
  - return
  - void
draft: false
---

## Grundidee

Manche Funktionen berechnen etwas und geben dieses Ergebnis zurück. Andere Funktionen führen nur eine Aktion aus, zum Beispiel Text ausgeben oder einen Zustand ändern.

```cpp
int addiere(int a, int b) {
  return a + b;
}

void begruessen() {
  std::cout << "Hallo";
}
```

Die erste Funktion liefert einen Wert. Die zweite führt nur eine Aktion aus.

<div class="compare-card">
  <p class="card-kicker">Zwei Rollen</p>
  <h3>Berechnen oder nur handeln</h3>
  <div class="compare-grid">
    <div class="compare-item">
      <strong>Mit Rückgabewert</strong>
      <span>Das Ergebnis kann gespeichert, weitergerechnet oder verglichen werden.</span>
    </div>
    <div class="compare-item">
      <strong>Mit <code>void</code></strong>
      <span>Die Funktion erledigt eine Aufgabe, aber sie liefert keinen Wert für spätere Rechnungen zurück.</span>
    </div>
  </div>
</div>

## Warum das im Kopf wichtig ist

Viele Anfänger verwechseln sichtbare Ausgabe mit Rückgabe. Eine Ausgabe auf dem Bildschirm sieht man sofort, ein Rückgabewert wird dagegen meist erst im restlichen Programm weiterverarbeitet.

<div class="note-panel">
  <p><strong>Merke:</strong> Eine Funktion mit <code>void</code> kann sehr nützlich sein. Sie sagt nur: Hier kommt kein berechneter Wert zurück.</p>
</div>
