---
title: Speicherleck im Ablauf erkennen
description: Prüfe in kleinen Beispielen, ob dynamisch reservierter Speicher erreichbar bleibt und später wieder freigegeben werden kann.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - speicherleck-durch-fehlende-freigabe-verstehen
  - speicherleck-im-ablauf-erkennen
taskId: INF-PROG-CPP-MEM-004
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Suche zuerst die Reservierung und dann den Zugriffspfad auf diesen Speicher."
  - "Achte darauf, ob ein Pointer überschrieben wird, bevor der alte Bereich freigegeben wurde."
  - "Trenne verlorene Erreichbarkeit und fehlende Freigabe sauber."
selfCheckPoints:
  - "Habe ich erklärt, was konkret verloren geht?"
  - "Habe ich Speicherleck und Dangling Pointer nicht vermischt?"
  - "Habe ich auf den Lebenszyklus des Bereichs statt nur auf den Pointer geschaut?"
transferIdeas:
  - "Übertrage die Prüffragen auf andere Beispiele mit mehreren Reservierungen oder mit ausbleibender Freigabe am Ende."
reflectionPrompt: "Welche Kippstelle war für dich deutlicher: verlorener Pfad oder fehlender Abschluss?"
---

## Aufgabe 1: Kippstelle benennen

Gegeben ist:

```cpp
int *p = new int;
p = new int;
```

Welche Zeile kippt den Ablauf in Richtung Speicherleck, und warum?

## Aufgabe 2: Zwei Leckmuster unterscheiden

Erkläre den Unterschied zwischen diesen beiden Situationen:

```cpp
int *p = new int;
p = new int;
```

```cpp
void demo() {
  int *p = new int;
  *p = 5;
}
```

Warum gehören beide zur gleichen Fehlerklasse?

## Aufgabe 3: Wiederholung einordnen

Warum kann auch dieses Beispiel als Speicherleck gelesen werden, obwohl kein späterer Zugriff und kein zweites <code>delete</code> sichtbar ist?

```cpp
for (int i = 0; i < 3; i++) {
  int *p = new int;
}
```

## Aufgabe 4: Gegenbild einordnen

Warum ist das hier gerade <strong>kein</strong> Speicherleck?

```cpp
int *p = new int;
*p = 5;
delete p;
```

## Aufgabe 5: Erste Fachfrage zuordnen

Ordne zu, bei welchem Beispiel die erste Fachfrage wirklich Speicherleck ist:

```cpp
int *p = new int;
p = new int;
```

```cpp
int *p = new int;
delete p;
cout << *p;
```

```cpp
int *p = new int;
int *q = p;
delete p;
delete q;
```

Begründe die beiden Nicht-Treffer kurz.

## Aufgabe 6: Vier Kernfragen nennen

Welche vier Fragen helfen dir zuerst, um ein mögliches Speicherleck zu erkennen?

## Aufgabe 7: Kurzprotokoll schreiben

Schreibe für das Beispiel mit <code>p = new int;</code> und späterem Überschreiben ein kurzes Viererschritt-Protokoll.

## Aufgabe 8: Fehlender Crash als Fehlschluss

Warum wäre die Aussage „Im Beispiel crasht doch gar nichts, also liegt kein Speicherleck vor“ fachlich falsch?

## Aufgabe 9: Leck und Zugriffsfehler trennen

Formuliere in zwei bis drei Sätzen den Unterschied zwischen einem Speicherleck und einem Dangling Pointer, ohne die beiden Fehlerbilder zu vermischen.


## Aufgabe 10: Spätes delete richtig einordnen

Gegeben ist:

```cpp
int *p = new int;
p = new int;
delete p;
```

Erkläre in zwei bis vier Sätzen, warum das sichtbare <code>delete</code> hier den ersten Bereich nicht mehr retten kann.
