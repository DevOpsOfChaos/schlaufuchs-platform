---
title: "Adressoperator und Dereferenzierung sauber trennen"
description: "Unterscheide in kleinen Pointer-Beispielen zwischen dem Ermitteln einer Adresse, dem gespeicherten Pointerwert und dem Zugriff auf den Zielwert."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "adresse-operator-und-dereferenzierung-unterscheiden", "adressoperator-und-dereferenzierung-sauber-trennen"]
taskId: "INF-PROG-CPP-PTR-002"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Vier Ausdrücke unterscheiden

Gegeben ist:

```cpp
int zahl = 100;
int *p = &zahl;
```

Erkläre in Worten den Unterschied zwischen <code>zahl</code>, <code>&amp;zahl</code>, <code>p</code> und <code>*p</code>.

## Aufgabe 2: Ergebnisart zuordnen

Ordne zu, ob der jeweilige Ausdruck eine **Adresse** oder einen **normalen Wert** liefert:

- <code>zahl</code>
- <code>&amp;zahl</code>
- <code>p</code>
- <code>*p</code>

## Aufgabe 3: Mini-Konsole lesen

Gegeben ist:

```cpp
int zahl = 100;
int *p = &zahl;
cout << zahl << "\n";
cout << p << "\n";
cout << *p << "\n";
```

Welche drei Arten von Ausgaben entstehen hier gedanklich?

## Aufgabe 4: Schreibzugriff sauber lesen

Gegeben ist:

```cpp
int zahl = 100;
int *p = &zahl;
*p = 250;
```

Was ist danach der Wert von <code>zahl</code> und was bleibt an <code>p</code> unverändert?

## Aufgabe 5: Zielwert und Zielwechsel trennen

Gegeben ist:

```cpp
int zahl = 100;
int andere = 7;
int *p = &zahl;

*p = 250;
p = &andere;
```

Erkläre getrennt, welche Zeile den Zielwert verändert und welche Zeile das Ziel des Pointers wechselt.

## Aufgabe 6: Stern richtig deuten

Warum darf man das <code>*</code> in <code>*p</code> hier nicht als Multiplikation lesen?

## Aufgabe 7: Zur Nachbarseite abgrenzen

Warum gehört die Frage „Ist <code>*p</code> hier überhaupt sicher?“ eher zur Seite <em>nullptr vor Dereferenzierung prüfen</em> und nicht mehr zur Grundseite über <code>&amp;</code>, <code>p</code> und <code>*p</code>?


## Aufgabe 8: Gleiche Ausgabe nicht falsch deuten

Gegeben ist:

```cpp
int zahl = 100;
int *p = &zahl;

cout << &zahl << "\n";
cout << p << "\n";
```

Warum kann die gedankliche Ausgabe gleich wirken, obwohl <code>&amp;zahl</code> und <code>p</code> fachlich nicht dieselbe Rolle haben?
