---
title: "Exponentialfunktionen"
description: "Referenz zu exponentiellem Wachstum, Wachstumsfaktor, Wachstumsrate, Verdopplungszeit, Logarithmen und Modellgrenzen."
subject: "mathematik"
section: "Funktionen"
topicPath: ["exponentialfunktionen", "ueberblick"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["mathematik", "Funktionen", "Exponentialfunktionen", "Wachstum"]
draft: false
---
# Exponentialfunktionen

Exponentialfunktionen beschreiben Zusammenhänge, bei denen sich eine Größe pro Schritt mit demselben Faktor verändert. Konstant ist also nicht die absolute Differenz, sondern das Verhältnis aufeinanderfolgender Werte.

Bei Wachstum ist dieser Faktor größer als `1`. Bei Zerfall liegt er zwischen `0` und `1`.

## Einordnung

Exponentialfunktionen gehören zu den Funktionen und treten besonders bei Wachstums- und Zerfallsmodellen auf. Sie sind geeignet, wenn die Änderung proportional zum aktuellen Bestand ist: Je größer der Bestand bereits ist, desto größer wird bei gleichem Faktor auch die absolute Änderung.

Im Themenfeld Wachstum stehen sie zwischen einfachen linearen Modellen und begrenzten Modellen:

| Modelltyp | Kennzeichen | Typische Form |
|---|---|---|
| linear | gleiche absolute Änderung pro Schritt | `f(x) = m · x + n` |
| exponentiell | gleicher Faktor pro Schritt | `f(x) = a · b^x` |
| begrenzt oder logistisch | Wachstum mit Sättigung oder Kapazitätsgrenze | modellabhängig |

Die Einordnung ist fachlich wichtig: Ein exponentielles Modell kann in einem kurzen Zeitfenster gut passen und trotzdem außerhalb dieses Bereichs unbrauchbar werden.

## Grundform

Eine Exponentialfunktion kann in der Form

```text
f(x) = a · b^x
```

geschrieben werden.

Dabei gilt:

- `a` ist der Anfangswert, also `f(0)`.
- `b` ist der Wachstums- oder Zerfallsfaktor pro Schritt.
- `x` zählt die Schritte oder eine passend gewählte Zeitvariable.

Für Wachstumsmodelle mit Zeit wird häufig geschrieben:

```text
N(t) = N0 · q^t
```

Dabei ist `N0` der Anfangsbestand, `q` der Faktor pro Zeiteinheit und `t` die Zeit in dieser Zeiteinheit. Wenn `t` in Stunden gemessen wird, muss auch `q` ein Stundenfaktor sein. Diese Einheitentreue ist keine Nebensache, sondern entscheidet über das richtige Modell.

## Wachstumsfaktor und Wachstumsrate

Der Wachstumsfaktor `q` ist der Multiplikator. Die Wachstumsrate `p` beschreibt die relative Änderung.

```text
q = 1 + p
```

Wenn `p` als Dezimalzahl verwendet wird, gilt zum Beispiel:

| Angabe | Wachstumsrate `p` | Faktor `q` |
|---|---:|---:|
| Zunahme um 20 % | `0,20` | `1,20` |
| Zunahme um 5 % | `0,05` | `1,05` |
| Abnahme um 30 % | `-0,30` | `0,70` |

Eine Angabe wie `8 %` darf nicht als Faktor `8` eingesetzt werden. Der Faktor ist `1,08`, wenn es um Wachstum um 8 Prozent pro Schritt geht.

## Linear oder exponentiell

Der Unterschied zeigt sich am zuverlässigsten in einer Wertetabelle.

| Schritt | lineares Wachstum: +100 | exponentielles Wachstum: Faktor 2 |
|---:|---:|---:|
| 0 | 1000 | 1000 |
| 1 | 1100 | 2000 |
| 2 | 1200 | 4000 |
| 3 | 1300 | 8000 |

Beim linearen Modell sind die Differenzen konstant:

```text
1100 - 1000 = 100
1200 - 1100 = 100
```

Beim exponentiellen Modell sind die Quotienten konstant:

```text
2000 / 1000 = 2
4000 / 2000 = 2
```

Diese Prüfung ist oft robuster als ein Blick auf den Graphen. Ein exponentieller Graph kann am Anfang fast linear wirken; entscheidend ist der konstante Faktor.

## Verdopplungszeit

Die Verdopplungszeit `T2` ist die Zeit, nach der sich ein Bestand verdoppelt. Ist `T2` bekannt, bietet sich die Form

```text
N(t) = N0 · 2^(t / T2)
```

an. `t` und `T2` müssen dabei in derselben Einheit stehen.

Wenn stattdessen der Faktor `q` pro Zeiteinheit bekannt ist, folgt für `q > 1`:

```text
T2 = ln(2) / ln(q)
```

Umgekehrt ergibt sich aus einer Verdopplungszeit der Faktor pro gewählter Zeiteinheit:

```text
q = 2^(1 / T2)
```

Beispiel: Verdoppelt sich ein Bestand alle `0,75 h`, dann ist der Stundenfaktor

```text
q = 2^(1 / 0,75) = 2^(4/3) ≈ 2,520
```

Pro Stunde wird der Bestand also nicht verdoppelt, sondern mit ungefähr `2,520` multipliziert.

## Logarithmen bei Zeitfragen

Logarithmen werden nötig, wenn die unbekannte Größe im Exponenten steht. Aus

```text
N(t) = N0 · q^t
```

und einem gesuchten Zielwert `NZiel` folgt:

```text
N0 · q^t = NZiel
q^t = NZiel / N0
t = ln(NZiel / N0) / ln(q)
```

Der Logarithmus liefert hier nicht nur eine Zahl, sondern eine Zeit in der Einheit, auf die sich `q` bezieht. Wer `q` als Stundenfaktor verwendet, erhält `t` in Stunden. Wer den Faktor pro Tag verwendet, erhält `t` in Tagen.

## Tabelle und Graph lesen

Bei einer Wertetabelle zu exponentiellem Wachstum sind drei Fragen zentral:

1. Ist der Anfangswert erkennbar?
2. Bleibt der Quotient benachbarter Werte konstant oder annähernd konstant?
3. Passt die Zeiteinheit der Tabelle zur Zeiteinheit des Faktors?

Beim Graphen sind diese Punkte wichtig:

- Der Graph einer positiven Exponentialfunktion schneidet die y-Achse bei `a` beziehungsweise `N0`.
- Bei `q > 1` steigt der Graph und wird mit wachsendem `t` immer steiler.
- Bei `0 < q < 1` fällt der Graph und nähert sich der x-Achse an.
- Aus einem Graphen allein ist der Faktor nur über passende Wertpaare zuverlässig bestimmbar.

Für zwei Punkte mit gleichem Zeitabstand gilt bei exponentiellem Wachstum:

```text
q = N(t + 1) / N(t)
```

Bei anderem Abstand `Δt` gilt:

```text
q = (N(t + Δt) / N(t))^(1 / Δt)
```

## Bezug zur Bakterienkolonie-Aufgabe

Die migrierte Aufgabe [Bakterienkolonie mit Verdopplungszeit modellieren](/schlaufuchs-platform/aufgaben/mathematik/funktionen/exponentialfunktionen/bakterienkolonie-mit-verdopplungszeit-modellieren) verwendet genau diese Struktur.

Gegeben sind:

- Anfangsbestand: `N0 = 1000`
- Verdopplungszeit: `T2 = 45 min = 0,75 h`
- Zeitvariable: `t` in Stunden

Daraus folgt:

```text
B(t) = 1000 · 2^(t / 0,75)
```

Die Aufgabe trennt mehrere typische Anforderungen:

- Werte berechnen, etwa nach `1 h` oder `24 h`.
- Einen Zeitpunkt bestimmen, etwa für `10^6` Bakterien.
- Den konstanten Quotienten `B(t + 1) / B(t)` deuten.
- Absolute Zunahmen über ein Zeitintervall bestimmen, etwa `B(t + 1) - B(t)`.

Gerade der letzte Punkt zeigt eine häufige Falle: Auch bei exponentiellem Wachstum kann nach einer absoluten Zunahme gefragt werden. Dann wird nicht das Modell linear, sondern die Fragestellung betrachtet eine Differenz zweier exponentieller Werte.

## Typische Fehler

- Absolute Zunahme mit prozentualer Zunahme verwechseln. `+100` pro Schritt ist linear; `+10 %` pro Schritt ist exponentiell.
- Wachstumsfaktor `q` und Wachstumsrate `p` verwechseln. Bei `p = 0,2` ist der Faktor `q = 1,2`.
- Prozentwerte direkt als Faktor einsetzen. `5 %` Wachstum bedeutet Faktor `1,05`, nicht `5`.
- Linear fortschreiben, obwohl wiederholt mit einem Faktor multipliziert werden muss.
- Verdopplungszeit und Zeiteinheit nicht anpassen. `45 min` sind bei einer Stundenvariable `0,75 h`.
- Logarithmen formal einsetzen, aber die Einheit und Bedeutung des Ergebnisses nicht deuten.
- Aus einem kurzen Anfangsausschnitt eines Graphen vorschnell auf ein dauerhaft exponentielles Modell schließen.

## Abgrenzung

Lineares Wachstum addiert pro Schritt denselben Betrag. Exponentielles Wachstum multipliziert pro Schritt mit demselben Faktor.

Beschränktes oder logistisches Wachstum berücksichtigt eine Grenze. Eine Bakterienkolonie kann kurzfristig exponentiell modelliert werden; langfristig begrenzen Nährstoffe, Platz und Abfallstoffe das Wachstum.

Zerfall ist mathematisch ebenfalls exponentiell, aber mit einem Faktor zwischen `0` und `1`. Die Werte nehmen dann relativ konstant ab.

Potenzfunktionen sind nicht dasselbe wie Exponentialfunktionen. Bei `f(x) = x^2` steht die Variable in der Basis. Bei `f(x) = 2^x` steht sie im Exponenten.

## Quellenhinweis

Diese Referenzseite wurde fachlich mit dem legacy Schlaufuchs-Material `legacy/selected/mathematik/tasks/wachstum_i_03/aufgabe01.html` und `legacy/selected/mathematik/tasks/wachstum_i_03/loesung01.html` abgeglichen und um eine neutrale Einordnung zu Exponentialfunktionen erweitert. Zugehörige Ursprungs-URLs: `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/exponentialfunktionen/wachstum_i_03/aufgabe01.html` und `https://c-arts-modelle.de/schlaufuchs_web/mathematik/mathematik_aufgaben/exponentialfunktionen/wachstum_i_03/loesung01.html`. Die beobachtete Lizenz ist CC BY-NC-SA 4.0; auf den legacy Seiten ist der Autorenmarker JW mit Erstellungsdatum 31.7.2021 angegeben. Text, Struktur, Formelschreibweise und fachliche Einordnung wurden für die aktuelle Plattform neu geschrieben und adaptiert; legacy HTML, alte Gestaltung und alte Formelbilder wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
