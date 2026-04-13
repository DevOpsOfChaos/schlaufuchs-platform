---
title: Python-Grundlagen – Variablen und if
description: Übe das Lesen von Variablen, Eingaben und einfachen Bedingungen in Python.
subject: informatik
section: Programmierung
topicPath:
- programmieren
- python-grundlagen
- python-grundlagen-variablen-und-if
tags:
- python
- if
- variablen
- input
hintPoints:
- Lies Python zeilenweise und notiere Zwischenwerte.
- Prüfe bei input()-Beispielen, ob der Wert Text oder Zahl ist.
- Achte auf die Einrückung beim if-Block.
selfCheckPoints:
- Kann ich den Ablauf jeder Zeile erklären?
- Kann ich sagen, wann welcher Zweig ausgeführt wird?
- Habe ich Einrückung und Datentypen beachtet?
level: einfach
draft: false
reflectionPrompt: 'Was hilft dir mehr beim Lesen von Python: die Syntax oder ein klarer Ablauf in Worten?'
transferIdeas:
- Übertrage die Idee aus „Python-Grundlagen – Variablen und if“ auf ein ähnliches Beispiel mit anderen Zahlen, Begriffen oder Bauteilen.
- Erkläre die Lösung einmal ohne Fachsprache und danach noch einmal fachlich sauber.
---


## Aufgabe 1: Code lesen

Lies das Programm.

```python
zahl = 7
if zahl > 5:
    print("groß")
else:
    print("klein")
```

Beantworte:

- Welcher Text wird ausgegeben?
- Warum wird genau dieser Zweig ausgeführt?

## Aufgabe 2: input() einordnen

Erkläre in eigenen Worten, warum das hier problematisch sein kann:

```python
alter = input("Alter: ")
print(alter + 1)
```

Was müsste geändert werden, wenn wirklich gerechnet werden soll?

## Aufgabe 3: Bedingung formulieren

Schreibe eine kurze if-else-Struktur in Python-Idee oder Pseudocode für diese Situation:

> Wenn eine Punktzahl mindestens 50 ist, soll „bestanden“ ausgegeben werden, sonst „nicht bestanden“.
