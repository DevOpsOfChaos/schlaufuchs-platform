---
title: Elementanzahl im Array mit sizeof bestimmen
description: Verstehe, wie bei klassischen Arrays aus Gesamtgröße und Elementgröße die Anzahl der Plätze bestimmt wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - elementanzahl-im-array-mit-sizeof-bestimmen
learningGoals:
  - Du erklärst die Idee hinter <code>sizeof(array) / sizeof(array[0])</code>.
  - Du unterscheidest Gesamtgröße des reservierten Felds und Größe eines einzelnen Elements.
  - Du liest die Berechnung der Elementanzahl als ruhige Quotientenidee.
practiceIdeas:
  - Zerlege die Formel zuerst in Gesamtgröße und Einzelgröße.
  - Prüfe kleine Beispiele mit <code>int</code>- oder <code>char</code>-Arrays.
  - Begründe, warum die Formel nicht einfach „Zaubersyntax“ ist.
commonMistakes:
  - <code>sizeof</code> als direkte Anzahl der Elemente zu lesen.
  - Gesamtgröße und Elementgröße nicht zu trennen.
  - Die Formel auswendig zu kennen, ohne ihre Idee erklären zu können.
keyTakeaways:
  - <code>sizeof</code> liefert Byte-Größen, nicht direkt Elementzahlen.
  - Der Quotient aus Gesamtgröße und Elementgröße ergibt die Anzahl der Elemente.
  - Die Formel ist ruhig verständlich, wenn beide Größen sauber benannt werden.
recognizeSignals:
  - Es geht um Arraygrößen, Byte-Größen oder sichere Schleifengrenzen.
  - Du sollst erklären, wie die Anzahl der Array-Elemente bestimmt wird.
  - In Beispielen musst du Größe in Speicher und Anzahl der Plätze unterscheiden.
selfCheckPoints:
  - Kann ich erklären, was der Zähler und was der Nenner der Formel bedeuten?
  - Kann ich sagen, warum sizeof allein noch keine Elementanzahl ist?
  - Kann ich die Formel in Worten erklären?
level: mittel
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - sizeof
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
