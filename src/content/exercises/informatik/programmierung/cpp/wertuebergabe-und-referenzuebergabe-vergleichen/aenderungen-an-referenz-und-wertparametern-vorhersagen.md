---
title: "Änderungen an Referenz- und Wertparametern vorhersagen"
description: "Verfolge in kleinen Abläufen, welche Variablen sich nach einem Funktionsaufruf wirklich ändern."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "wertuebergabe-und-referenzuebergabe-vergleichen", "aenderungen-an-referenz-und-wertparametern-vorhersagen"]
taskId: "INF-PROG-CPP-FUNC-008"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Lokale Änderung oder sichtbare Änderung?

Eine Funktion bekommt einmal einen Wertparameter <code>int a</code> und einmal einen Referenzparameter <code>int &b</code>. In beiden Fällen wird innerhalb der Funktion <code>/= 10</code> gerechnet.

Erkläre, bei welchem Parameter die Änderung nach außen sichtbar bleibt.

## Aufgabe 2: Denkfehler prüfen

Jemand sagt: "Wenn ich innerhalb einer Funktion einen Parameter ändere, ändert sich immer auch die Ursprungsvariable."

Erkläre, warum das fachlich zu grob ist.

## Aufgabe 3: Rückgabe nötig?

Warum kann bei einem Referenzparameter eine sichtbare Änderung auch ohne <code>return</code> entstehen?
