---
title: "Lösung – Komplexe Zahlen addieren, subtrahieren und in Polarform angeben"
description: "Musterlösung zu Addition, Subtraktion, Betrag, Argument und Polarform komplexer Zahlen."
subject: "mathematik"
section: "Zahlen"
topicPath: ["komplexe-zahlen", "addition-subtraktion-und-polarform"]
taskId: "mathematik-komplexe-zahlen-addition-subtraktion-polarform"
relatedExercise: "src/content/exercises/mathematik/komplexe-zahlen/addition-subtraktion-und-polarform"
tags: ["mathematik", "Zahlen", "komplexe-zahlen", "loesung"]
draft: false
---

## Ansatz

Eine komplexe Zahl in kartesischer Form wird als

```text
z = x + yj
```

geschrieben. Der Betrag und das Argument lauten:

```text
|z| = sqrt(x² + y²)
φ = arg(z) = atan2(y, x)
```

`atan2(y, x)` steht hier für die Winkelfunktion mit Quadrantenbehandlung. Das ist wichtig, weil `arctan(y/x)` allein bei negativen Realteilen den Quadranten nicht eindeutig festlegt.

## Fall a

```text
z1 = 8 + 5j
z2 = 2 + 2j
z3 = z1 + z2
z3 = (8 + 2) + (5 + 2)j
z3 = 10 + 7j
```

Betrag:

```text
|z3| = sqrt(10² + 7²)
|z3| = sqrt(149)
|z3| ≈ 12,21
```

Argument:

```text
φ = arctan(7 / 10)
φ ≈ 0,611 rad ≈ 35,0°
```

Beide Koordinaten sind positiv, also liegt `z3` im ersten Quadranten. Die Polarform ist:

```text
z3 ≈ 12,21 ∠ 0,611 rad
z3 ≈ 12,21 ∠ 35,0°
```

## Fall b

```text
z1 = 1 + 3j
z2 = 5 - j
z3 = z1 + z2
z3 = (1 + 5) + (3 - 1)j
z3 = 6 + 2j
```

Betrag:

```text
|z3| = sqrt(6² + 2²)
|z3| = sqrt(40)
|z3| ≈ 6,325
```

Argument:

```text
φ = arctan(2 / 6)
φ ≈ 0,322 rad ≈ 18,43°
```

Auch dieser Punkt liegt im ersten Quadranten. Die Polarform ist:

```text
z3 ≈ 6,325 ∠ 0,322 rad
z3 ≈ 6,325 ∠ 18,43°
```

## Fall c

```text
z1 = 1 + 2j
z2 = 5 + 6j
z3 = z1 - z2
z3 = (1 - 5) + (2 - 6)j
z3 = -4 - 4j
```

Betrag:

```text
|z3| = sqrt((-4)² + (-4)²)
|z3| = sqrt(32)
|z3| ≈ 5,657
```

Für das Argument reicht `arctan((-4) / (-4)) = arctan(1)` allein nicht aus, weil Realteil und Imaginärteil beide negativ sind. Der Punkt liegt im dritten Quadranten. Als Hauptwert wird der negative Winkel verwendet:

```text
φ = -135° = -3π / 4
φ ≈ -2,356 rad
```

Die Polarform ist:

```text
z3 ≈ 5,657 ∠ -2,356 rad
z3 ≈ 5,657 ∠ -135°
```

## Fall d

```text
z1 = 1 - j
z2 = -1 + 16j
z3 = z1 - z2
z3 = (1 - (-1)) + (-1 - 16)j
z3 = 2 - 17j
```

Betrag:

```text
|z3| = sqrt(2² + (-17)²)
|z3| = sqrt(293)
|z3| ≈ 17,12
```

Argument:

```text
φ = arctan(-17 / 2)
φ ≈ -1,454 rad ≈ -83,29°
```

Der Realteil ist positiv und der Imaginärteil negativ, also liegt `z3` im vierten Quadranten. Der negative Hauptwinkel ist passend. Die Polarform ist:

```text
z3 ≈ 17,12 ∠ -1,454 rad
z3 ≈ 17,12 ∠ -83,29°
```

## Ergebnisübersicht

| Fall | Kartesische Form | Betrag | Argument in Radiant | Argument in Grad |
| --- | ---: | ---: | ---: | ---: |
| a | `10 + 7j` | `sqrt(149) ≈ 12,21` | `0,611` | `35,0°` |
| b | `6 + 2j` | `sqrt(40) ≈ 6,325` | `0,322` | `18,43°` |
| c | `-4 - 4j` | `sqrt(32) ≈ 5,657` | `-2,356` | `-135°` |
| d | `2 - 17j` | `sqrt(293) ≈ 17,12` | `-1,454` | `-83,29°` |

## Quellenhinweis

Diese Lösung wurde aus dem legacy Schlaufuchs-Material `legacy/selected/mathematik/tasks/komplexe_zahlen_i_06` neu geschrieben und rechnerisch nachvollziehbar ausgearbeitet. Verwendete legacy Dateien: `aufgabe06.html`, `loesung06.html` und die zugehörigen Formelbilder unter `pictures/`. Zugehörige Ursprungsseite: `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/komplexe_zahlen/komplexe_zahlen_i_06/aufgabe06.html`; die legacy Lösung liegt unter `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/komplexe_zahlen/komplexe_zahlen_i_06/loesung06.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; auf der Ursprungsseite ist der Autorenmarker JW mit Erstellungsdatum 10.04.2025 angegeben. Text, Rechenweg und Darstellung wurden für die aktuelle Plattform neu formuliert; legacy HTML, alte Gestaltung und die alten Formelbilder wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
