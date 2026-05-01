---
title: "Lösung – Bakterienkolonie mit Verdopplungszeit modellieren"
description: "Musterlösung zur Exponentialfunktion einer Bakterienkolonie mit Verdopplungszeit, Wertberechnung, Logarithmus und Zuwachsintervallen."
subject: "mathematik"
section: "Funktionen"
topicPath: ["funktionen", "exponentialfunktionen", "bakterienkolonie-mit-verdopplungszeit-modellieren"]
taskId: "mathematik-bakterienkolonie-verdopplungszeit"
relatedExercise: "src/content/exercises/mathematik/funktionen/exponentialfunktionen/bakterienkolonie-mit-verdopplungszeit-modellieren"
tags: ["mathematik", "Funktionen", "Exponentialfunktionen", "loesung"]
draft: false
---

## Ansatz

`t` ist die Zeit in Stunden. Der Anfangsbestand ist `B(0) = 1000`. Die Verdopplungszeit beträgt 45 Minuten, also `0,75 h`.

Mit Verdopplungszeit geschrieben lautet das Modell:

```text
B(t) = 1000 · 2^(t / 0,75)
```

Äquivalent kann man mit `e` schreiben:

```text
B(t) = 1000 · e^(k · t)
k = ln(2) / 0,75 ≈ 0,9242 1/h
```

## Werte berechnen

Nach einer Stunde:

```text
B(1) = 1000 · 2^(1 / 0,75)
B(1) ≈ 2519,84
```

Nach einer Stunde sind es gerundet etwa `2520` Bakterien.

Nach einem Tag gilt `t = 24`:

```text
B(24) = 1000 · 2^(24 / 0,75)
B(24) = 1000 · 2^32
B(24) ≈ 4,295 · 10^12
```

Das sind unter der Modellannahme etwa `4,295 · 10^12` Bakterien. Das Ergebnis zeigt zugleich die Modellgrenze: Reales Bakterienwachstum bleibt nicht beliebig lange ohne Platz-, Nährstoff- oder Abfallgrenzen exponentiell.

## Zeitpunkt für 10^6 Bakterien

Gesucht ist `t` mit `B(t) = 10^6`:

```text
1000 · 2^(t / 0,75) = 10^6
2^(t / 0,75) = 1000
t / 0,75 = log2(1000)
t = 0,75 · log2(1000)
t ≈ 7,474 h
```

Der Logarithmus ist nötig, weil die unbekannte Zeit im Exponenten steht. Die Kolonie erreicht `10^6` Bakterien nach etwa `7,47 h`, also nach ungefähr 7 Stunden und 28 Minuten.

## Konstanter Quotient

Für beliebiges `t` gilt:

```text
B(t + 1) / B(t)
= [1000 · 2^((t + 1) / 0,75)] / [1000 · 2^(t / 0,75)]
= 2^(1 / 0,75)
= 2^(4/3)
```

Der Quotient hängt nicht von `t` ab und ist deshalb konstant. Pro Stunde wird die Bakterienzahl mit `2^(4/3) ≈ 2,520` multipliziert.

## Zunahme in der folgenden Stunde

Gesucht ist `t` mit:

```text
B(t + 1) - B(t) = 10000
```

Mit `B(t) = 1000 · e^(k · t)` folgt:

```text
1000 · e^(k(t + 1)) - 1000 · e^(kt) = 10000
1000 · e^(kt) · (e^k - 1) = 10000
e^(kt) = 10000 / [1000 · (e^k - 1)]
t = (1 / k) · ln(10000 / [1000 · (e^k - 1)])
```

Mit `k ≈ 0,9242 1/h`:

```text
t ≈ 2,04 h
```

Nach etwa `2,04 h`, also nach ungefähr 2 Stunden und 2 Minuten, wächst die Kolonie in der folgenden Stunde um 10000 Bakterien.

## Zunahme in der folgenden Sekunde

Eine Sekunde entspricht `1/3600 h`. Gesucht ist `t` mit:

```text
B(t + 1/3600) - B(t) = 10
```

Analog zur stündlichen Zunahme:

```text
1000 · e^(kt) · (e^(k/3600) - 1) = 10
t = (1 / k) · ln(10 / [1000 · (e^(k/3600) - 1)])
```

Mit `k ≈ 0,9242 1/h`:

```text
t ≈ 3,96 h
```

Nach etwa `3,96 h`, also nach ungefähr 3 Stunden und 58 Minuten, wächst die Kolonie in der folgenden Sekunde um 10 Bakterien.

## Ergebnisübersicht

| Frage | Ergebnis |
|---|---:|
| Modell | `B(t) = 1000 · 2^(t / 0,75)` |
| Nach 1 Stunde | etwa `2520` Bakterien |
| Nach 1 Tag | etwa `4,295 · 10^12` Bakterien |
| Zeitpunkt für `10^6` Bakterien | etwa `7,47 h` |
| Stündliche Zunahme `10000` | etwa `2,04 h` |
| Sekündliche Zunahme `10` | etwa `3,96 h` |

## Quellenhinweis

Diese Lösung wurde aus dem legacy Schlaufuchs-Material `legacy/selected/mathematik/tasks/wachstum_i_03` neu geschrieben und rechnerisch nachvollziehbar ausgearbeitet. Verwendete legacy Dateien: `aufgabe01.html`, `loesung01.html` und die zugehörigen Formelbilder unter `pictures/`. Zugehörige Ursprungsseite: `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/exponentialfunktionen/wachstum_i_03/aufgabe01.html`; die legacy Lösung liegt unter `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/exponentialfunktionen/wachstum_i_03/loesung01.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; auf der Ursprungsseite ist der Autorenmarker JW mit Erstellungsdatum 31.7.2021 angegeben. Text, Rechenweg und Darstellung wurden für die aktuelle Plattform neu formuliert; legacy HTML, alte Gestaltung und die alten Formelbilder wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
