---
title: Double Delete im Ablauf prüfen
description: Prüfe in kleinen Alias-Beispielen, ob derselbe Speicherbereich zweimal freigegeben wird.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - double-delete-als-fehlerbild-erkennen
  - double-delete-im-ablauf-pruefen
taskId: INF-PROG-CPP-MEM-005
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Zähle zuerst echte Reservierungen mit new."
  - "Markiere dann, welche Pointer nur dieselbe Adresse weitertragen."
  - "Frage erst danach, ob dieselbe Reservierung ein zweites Mal beendet wird."
selfCheckPoints:
  - "Habe ich Bereich und Variablenname sauber getrennt?"
  - "Habe ich Alias-Pointer nicht mit zwei getrennten Bereichen verwechselt?"
  - "Habe ich Double Delete klar von Dangling Pointer abgegrenzt?"
transferIdeas:
  - "Übertrage die Prüffragen auf Beispiele mit mehr als zwei Pointern oder auf mehrfach verschachtelte Zuweisungen."
reflectionPrompt: "Welche Stelle kippt für dich am leichtesten: q = p oder das zweite delete?"
---
## Aufgabe 1: Bereiche zählen

Gegeben ist:

```cpp
int *p = new int;
int *q = p;
delete p;
delete q;
```

Wie viele echte dynamische Bereiche gibt es hier, und warum?

## Aufgabe 2: Kippstelle benennen

Welche Zeile macht aus dem Ablauf wirklich Double Delete, und warum genau dort?

## Aufgabe 3: Gegenfall sauber bewerten

Warum ist das hier trotz zweier <code>delete</code>-Zeilen **kein** Double Delete?

```cpp
int *p = new int;
int *q = new int;
delete p;
delete q;
```

## Aufgabe 4: Nachbarseite erkennen

Warum gehört dieses Beispiel zuerst zur Dangling-Pointer-Seite und nicht zuerst zu Double Delete?

```cpp
int *p = new int;
delete p;
cout << *p;
```

## Aufgabe 5: Verantwortungsfehler entkräften

Jemand sagt: „<code>p</code> und <code>q</code> sind zwei Variablen, also darf jede einmal <code>delete</code> ausführen.“

Warum ist diese Aussage fachlich falsch?

## Aufgabe 6: Diagnose-Raster nennen

Nenne drei kurze Leitfragen, mit denen du Double Delete in einem kleinen Ablauf prüfen würdest.
