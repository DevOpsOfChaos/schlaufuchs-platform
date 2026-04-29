---
title: "Lösung – Bezugspunkte von CSS-Einheiten ruhig erklären"
description: "Musterlösung zur Aufgabe über px, rem und em."
subject: "web-development"
section: "CSS"
topicPath: ["css", "em-rem-und-px-vergleichen", "bezugspunkte-von-css-einheiten-ruhig-erklaeren"]
taskId: "WEB-CSS-LAYOUT-204"
relatedExercise: "web-development/css/em-rem-und-px-vergleichen/bezugspunkte-von-css-einheiten-ruhig-erklaeren"
tags: ["web-development", "CSS", "loesung"]
draft: false
---
## Musterlösung

### Aufgabe 1

- `px` ist direkt und fest gedacht.
- `rem` bezieht sich auf die Wurzel-Schriftgröße des Dokuments.
- `em` bezieht sich auf den lokalen Kontext.

Darum kann dieselbe Zahl sichtbar unterschiedlich wirken.

### Aufgabe 2

Wenn eine Komponente mit ihrer eigenen Typografie mitwachsen soll, wirkt `em` oft passender, weil es am lokalen Kontext hängt. `rem` bleibt stärker am globalen Ausgangswert.

### Aufgabe 3

`1rem` und `1em` sehen nur dann gleich aus, wenn lokaler und globaler Bezug zufällig gleich sind. Allgemein sind es verschiedene Bezugssysteme.
