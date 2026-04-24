---
title: delete-Form zur Reservierung zuordnen
description: Ordne Reservierungen mit new oder new[] die passende Freigabe mit delete oder delete[] zu.
subject: informatik
section: Programmierung
topicPath:
  - programmierung
  - cpp
  - dynamischer-speicher
  - delete-und-delete-array-unterscheiden
  - delete-form-zur-reservierung-zuordnen
taskId: INF-PROG-CPP-MEM-002
level: mittel
draft: false
tags:
  - informatik
  - programmierung
  - cpp
  - aufgabe
hintPoints:
  - "Lies zuerst die Erzeugungszeile genau ab."
  - "Achte auf eckige Klammern und die Frage: ein Objekt oder mehrere?"
  - "Starte nicht vom Pointertyp und nicht vom späteren Zugriff."
selfCheckPoints:
  - "Habe ich die Freigabeform begründet statt nur genannt?"
  - "Habe ich zwischen Einzelobjekt und Array sauber getrennt?"
  - "Habe ich die Freigabeform nicht mit der allgemeinen Lebenszyklusfrage vermischt?"
transferIdeas:
  - "Prüfe auch in anderen Beispielen, ob die Freigabeform zur ursprünglichen Erzeugung passt."
reflectionPrompt: "Worauf schaust du jetzt zuerst: auf den Typ, auf den Zugriff oder auf die Erzeugungszeile?"
---
## Aufgabe 1: Direkt zuordnen

Ordne jeder Erzeugung die passende Freigabe zu und schreibe sie direkt dahinter:

- <code>int *a = new int;</code>
- <code>double *b = new double[4];</code>
- <code>char *text = new char[20];</code>
- <code>bool *flag = new bool;</code>

## Aufgabe 2: Welche Zeile entscheidet?

Gegeben ist:

```cpp
int *feld = new int[3];
*feld = 1;
feld[1] = 2;
```

Welche Zeile enthält die entscheidende Fachinformation für die spätere Freigabeform, und warum gerade diese?

## Aufgabe 3: Zugriffssyntax entkräften

Warum wäre die Schlussfolgerung „Das sieht teilweise wie ein einzelner Wert aus, also reicht später <code>delete feld;</code>“ fachlich falsch?

## Aufgabe 4: Zwei fast gleiche Pointer sauber unterscheiden

Warum können diese beiden Zeilen trotz gleichem Typ verschiedene Freigaben brauchen?

```cpp
int *einzeln = new int;
int *feld = new int[3];
```

## Aufgabe 5: Rückwärts lesen

Du siehst weit unten im Code nur:

```cpp
delete[] daten;
```

Welche frühere Stelle musst du zuerst suchen, um diese Freigabe fachlich zu prüfen, und wonach genau suchst du dort?
