---
title: Index und Inhalt sauber trennen
description: Löse typische Denkfehler zu Arrayzugriffen auf, indem du Position und gespeicherten Wert bewusst auseinanderhältst.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - arrays
  - index-und-element-im-array-unterscheiden
  - index-und-inhalt-sauber-trennen
taskId: INF-PROG-CPP-INDEX-001
level: einfach
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - arrays
  - index
hintPoints:
  - "Frage zuerst 'wo?' und dann 'was?'."
  - "Verwechsele die Zahl im Index nicht mit dem gespeicherten Wert."
selfCheckPoints:
  - "Ist der Index als Position beschrieben?"
  - "Ist das Element als Inhalt beschrieben?"
transferIdeas:
  - "Übertrage die Trennung auf verschiedene Arrays mit demselben Index."
reflectionPrompt: "Warum ist A[2] erst dann verständlich, wenn du Platz und Inhalt getrennt denkst?"
---

## Aufgabe 1: Zugriff erklären

Gegeben ist:

```cpp
int A[4] = {2, 4, 6, 8};
```

Erkläre fachlich ruhig, was <code>A[2]</code> bedeutet.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt: "Der Index 2 bedeutet, dass an dieser Stelle automatisch der Wert 2 liegt."

Erkläre, warum das nicht stimmt.

## Aufgabe 3: Vergleichsidee

Warum kann derselbe Index 2 in zwei verschiedenen Arrays auf ganz unterschiedliche Inhalte zeigen?
