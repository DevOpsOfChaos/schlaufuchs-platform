---
title: "Elementanzahl im Array mit sizeof bestimmen"
description: "Verstehe, wie bei klassischen Arrays aus Gesamtgröße und Elementgröße die Anzahl der Plätze bestimmt wird."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "elementanzahl-im-array-mit-sizeof-bestimmen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["informatik", "Programmierung"]
draft: false
---
## Grundidee

Bei klassischen Arrays ist die Anzahl der Plätze wichtig, damit Schleifen nicht zu weit laufen. Eine typische Formel bestimmt diese Anzahl über die reservierte Gesamtgröße und die Größe eines einzelnen Elements.

```cpp
int anzahl = sizeof(A) / sizeof(A[0]);
```

## Was hier jeweils gemeint ist

<div class="visual-grid">
  <div class="visual-item">
    <strong><code>sizeof(A)</code></strong>
    <span>Gesamtgröße des Arrays im Speicher.</span>
  </div>
  <div class="visual-item">
    <strong><code>sizeof(A[0])</code></strong>
    <span>Größe eines einzelnen Elements des Arrays.</span>
  </div>
  <div class="visual-item">
    <strong>Quotient</strong>
    <span>Gesamtgröße geteilt durch Elementgröße ergibt die Anzahl der Plätze.</span>
  </div>
</div>

## Das ruhige Denkmodell

Wenn ein Regal 20 cm lang ist und jede Schachtel 5 cm breit, dann passen vier Schachteln hinein. Genau so funktioniert hier der Quotient: Gesamtgröße geteilt durch Größe pro Element.

<div class="note-panel">
  <p><strong>Merke:</strong> <code>sizeof</code> liefert eine Größe im Speicher. Erst durch die Division wird daraus eine Anzahl von Elementen.</p>
</div>
