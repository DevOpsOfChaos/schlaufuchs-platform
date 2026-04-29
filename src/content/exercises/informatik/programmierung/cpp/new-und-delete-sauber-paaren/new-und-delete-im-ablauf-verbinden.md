---
title: "new und delete im Ablauf verbinden"
description: "Ordne in kleinen Beispielen Reservierung, Nutzung und Freigabe von dynamischem Speicher sauber zu."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierung", "cpp", "new-und-delete-sauber-paaren", "new-und-delete-im-ablauf-verbinden"]
taskId: "INF-PROG-CPP-MEM-001"
tags: ["informatik", "Programmierung", "aufgabe"]
hintPoints: []
selfCheckPoints: []
transferIdeas: []
level: "mittel"
draft: false
---
## Aufgabe 1: Grundmuster markieren

Gegeben ist:

```cpp
int *p = new int;
*p = 42;
delete p;
```

Ordne die drei Zeilen den Rollen <strong>Reservieren</strong>, <strong>Nutzen</strong> und <strong>Beenden</strong> zu.

## Aufgabe 2: Lebenszyklus lesen

Erkläre in zwei bis drei Sätzen, warum dieses Beispiel als vollständiger Grundablauf gelesen werden kann:

```cpp
int *p = new int;
*p = 7;
delete p;
```

## Aufgabe 3: Unvollständigen Ablauf einordnen

Gegeben ist:

```cpp
int *p = new int;
*p = 9;
```

Welche Phase des Grundmusters fehlt hier noch sichtbar?

## Aufgabe 4: Was wird eigentlich beendet?

Warum beendet <code>delete p;</code> nicht einfach „die Variable <code>p</code>“, sondern den reservierten Bereich hinter der gespeicherten Adresse?

## Aufgabe 5: Zur lokalen Variable abgrenzen

Warum braucht dieses Beispiel kein <code>delete</code>?

```cpp
int zahl = 42;
```

## Aufgabe 6: Leseraster nennen

Nenne die vier Fragen, mit denen du neue Beispiele auf dieser Grundseite zuerst lesen würdest.

## Aufgabe 7: Seitengrenze prüfen

Ordne für jedes Mini-Beispiel die erste Fachfrage zu:

```cpp
int *feld = new int[3];
delete feld;
```

```cpp
int *p = new int;
delete p;
cout << *p;
```

```cpp
int *p = new int;
p = new int;
```

Nutze dabei diese drei ersten Fachfragen:
- Welche Freigabeform passt zur Erzeugungsform?
- Warum ist der Folgezugriff nach der Freigabe kritisch?
- Bleibt ein Bereich ohne sauberen Pfad oder Abschluss zurück?

## Aufgabe 8: Mini-Konsole im Kopf

Schreibe für das Kernbeispiel aus Aufgabe 1 eine Viererschritt-Lesart in eigenen Worten auf.


## Aufgabe 9: Zwei Zyklen oder ein offener Rest?

Vergleiche die beiden Beispiele:

```cpp
int *p = new int;
delete p;
p = new int;
delete p;
```

```cpp
int *p = new int;
p = new int;
delete p;
```

Erkläre in zwei bis vier Sätzen:
- In welchem Beispiel sind zwei getrennte Lebenszyklen sichtbar geschlossen?
- In welchem Beispiel bleibt der erste Bereich trotzdem offen zurück?
