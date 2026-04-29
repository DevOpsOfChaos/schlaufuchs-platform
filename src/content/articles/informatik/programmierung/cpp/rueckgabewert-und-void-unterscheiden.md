---
title: "Rückgabewert und void unterscheiden"
description: "Verstehe, wann eine Funktion ein Ergebnis zurückliefert und wann sie nur eine Aktion ohne Rückgabewert ausführt."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "rueckgabewert-und-void-unterscheiden"]
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
