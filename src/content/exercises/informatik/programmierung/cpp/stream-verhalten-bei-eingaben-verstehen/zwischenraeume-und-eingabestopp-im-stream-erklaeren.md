---
title: "Zwischenräume und Eingabestopp im Stream erklären"
description: "Erkläre an kleinen Beispielen, wann cin Leerzeichen überspringt und wann ein Eingabeteil endet."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "stream-verhalten-bei-eingaben-verstehen", "zwischenraeume-und-eingabestopp-im-stream-erklaeren"]
taskId: "INF-PROG-CPP-STREAMREAD-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "einfach"
draft: false
---
## Aufgabe 1: Führende Zeichen

Ein <code>float</code> soll mit <code>cin</code> gelesen werden. Die Eingabe beginnt mit einem Tabulator und lautet danach <code>34.5a</code>.

Erkläre:

- warum der Tabulator am Anfang nicht der eigentliche Zahlenwert ist,
- welcher Teil sinnvoll als float übernommen werden kann,
- und warum der Buchstabe <code>a</code> nicht zu diesem float gehört.

## Aufgabe 2: Trennstelle finden

Erkläre in 2 bis 4 Sätzen, warum Leerzeichen oder Zeilenumbrüche bei vielen einfachen <code>cin</code>-Eingaben als Trennstelle wirken.
