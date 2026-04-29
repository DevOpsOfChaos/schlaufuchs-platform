---
title: "Python-Grundlagen"
description: "Lerne Variablen, Eingaben, Ausgaben und Bedingungen in kurzen Python-Programmen sauber zu lesen."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmieren", "python-grundlagen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung"]
draft: false
---
## Variablen als benannte Werte

Eine Variable ist ein Name für einen Wert.

```python
name = "Lina"
alter = 16
punkte = 12
```

Wichtig ist: Der Name ist nicht der Wert selbst, sondern die Bezeichnung dafür.

## Eingabe und Ausgabe

Mit `input()` liest ein Programm etwas ein. Mit `print()` wird etwas sichtbar ausgegeben.

```python
name = input("Wie heißt du? ")
print("Hallo", name)
```

Hier wird zuerst gefragt, dann gespeichert und anschließend ausgegeben.

## input() liefert zuerst Text

Das ist einer der wichtigsten Einstiege in Python: `input()` liefert zunächst Text.

```python
alter = int(input("Wie alt bist du? "))
print(alter + 1)
```

Wenn gerechnet werden soll, ist oft eine Umwandlung nötig.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Gerade oder ungerade</h3>

```python
zahl = int(input("Zahl: "))

if zahl % 2 == 0:
    print("gerade")
else:
    print("ungerade")
```

  <p>Das Programm zeigt gut, wie Eingabe, Umwandlung, Bedingung und Ausgabe zusammenarbeiten.</p>
</div>

## Einrückung ist Syntax

In Python gehört die Einrückung zur Sprache. Sie zeigt, welche Zeilen zu einem Block gehören.

Gerade bei `if`, `else`, Schleifen und Funktionen ist das entscheidend. Falsche Einrückung ist deshalb nicht nur unschön, sondern oft ein echter Fehler.

## Programme langsam lesen

Gerade am Anfang hilft es, Python nicht als „großen Block“ zu lesen, sondern in kleinen Schritten:

1. Welche Variablen gibt es?
2. Welche Werte werden gespeichert?
3. Welche Bedingung wird geprüft?
4. Welche Ausgabe entsteht danach?
