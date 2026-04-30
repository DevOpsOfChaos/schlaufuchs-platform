---
title: "Musterlösung – Bits mit Masken setzen, löschen und invertieren"
description: "Musterlösung zur Aufgabe INF-PROG-CPP-BIT-001."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "bitoperatoren-und-bitmasken-verstehen", "bits-mit-masken-setzen-loeschen-und-invertieren"]
taskId: "INF-PROG-CPP-BIT-001"
relatedExercise: "src/content/exercises/informatik/programmierung/cpp/bitoperatoren-und-bitmasken-verstehen/bits-mit-masken-setzen-loeschen-und-invertieren"
tags: ["informatik", "Programmierung", "loesung"]
draft: false
---
## Aufgabe 1: Zielbit beschreiben

Die Maske <code>1 &lt;&lt; n</code> markiert genau das Bit an der Position <code>n</code>. Sie legt also fest, welches Bit verändert werden soll.

## Aufgabe 2: Operation zuordnen

- <code>|</code> setzt das markierte Bit.
- <code>&amp; ~</code> löscht das markierte Bit.
- <code>^</code> invertiert das markierte Bit.

## Aufgabe 3: Denkfehler prüfen

Hier geht es nicht um eine logische Aussage mit wahr/falsch als Ganzes, sondern um die einzelnen Bits einer Binärdarstellung. Deshalb ist <code>|</code> in diesem Zusammenhang bitweises ODER.
