---
title: Dateirechte lesen und deuten
description: Diese Aufgabe trainiert das Lesen einfacher Linux-Rechte und ihre fachliche Bedeutung.
subject: linux
section: system
topicPath:
  - system
  - dateirechte
  - dateirechte-lesen-und-deuten
tags:
  - Linux
  - Rechte
  - ls -l
level: einfach
draft: false
---

## Arbeitsauftrag

Lies Rechte nicht nur als Zeichenfolge, sondern immer als Aussage über erlaubte oder verbotene Zugriffe.

## Aufgabe 1 – Rechte aufteilen

Zerlege die Rechtefolge:

- `rw-r--r--`

in die drei Bereiche:
- Besitzer
- Gruppe
- andere

## Aufgabe 2 – Bedeutung erklären

Erkläre für `rw-r--r--`:

1. Was darf der Besitzer?
2. Was darf die Gruppe?
3. Was dürfen andere?

## Aufgabe 3 – Kategorien beschreiben

Erkläre in eigenen Worten:
- Wer ist mit „Besitzer“ gemeint?
- Wer ist mit „Gruppe“ gemeint?
- Wer sind „andere“?

## Aufgabe 4 – Wirkung einordnen

Warum ist es oft keine gute Idee, Dateien für alle frei veränderbar zu machen?

<div class="hint-card">
  <p class="task-kicker">Hinweis</p>
  <p>Wenn du Rechte liest, gehe immer in derselben Reihenfolge vor: Besitzer → Gruppe → andere. So vermeidest du Verwechslungen.</p>
</div>

<div class="check-card">
  <p class="task-kicker">Selbstkontrolle</p>
  <ul>
    <li><code>r</code> steht für lesen, <code>w</code> für schreiben, <code>x</code> für ausführen.</li>
    <li>Rechte werden für Besitzer, Gruppe und andere getrennt betrachtet.</li>
    <li>Dateirechte sind ein Sicherheits- und Ordnungswerkzeug.</li>
  </ul>
</div>
