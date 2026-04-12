---
title: Python-Grundlagen
description: Python eignet sich gut für den Einstieg in Programmierung, weil Syntax und Grundideen oft klarer lesbar sind als in vielen anderen Sprachen.
subject: informatik
section: Programmierung
topicPath:
  - programmieren
  - python-grundlagen
learningGoals:
  - Du verstehst Variablen, Eingaben, Bedingungen und einfache Ausgaben in Python.
  - Du liest kurze Python-Programme Schritt für Schritt.
  - Du erkennst typische Anfängerfehler bei Einrückung und Datentypen.
level: einfach
tags:
  - Python
  - Programmierung
  - Variablen
  - if
  - Eingabe
draft: false
---

<div class="learning-card">
  <p class="card-kicker">Einstieg</p>
  <h3>Was du hier lernst</h3>
  <p>Python ist eine gute Sprache für den Einstieg, weil Programme oft klar lesbar sind. Entscheidend sind aber nicht nur einzelne Befehle, sondern die Denkweise dahinter.</p>
  <ul>
    <li>Du lernst, wie Variablen Werte speichern.</li>
    <li>Du siehst, wie Eingaben verarbeitet und Ausgaben erzeugt werden.</li>
    <li>Du verstehst einfache Bedingungen mit <code>if</code>.</li>
  </ul>
</div>

## Grundidee

Ein Programm verarbeitet Informationen. Dafür braucht es meistens:

- Eingaben
- gespeicherte Werte
- Entscheidungen
- Ausgaben

Python hilft dabei, diese Grundideen in einer relativ gut lesbaren Form umzusetzen.

## Variablen

Eine Variable speichert einen Wert unter einem Namen.

<div class="wide-example">

```python
name = "Lina"
alter = 16
punkte = 12
```

</div>

Wichtig ist: Der Name der Variablen ist nicht der Wert selbst, sondern nur eine Bezeichnung dafür.

## Eingabe und Ausgabe

Mit `input()` können Daten eingelesen werden. Mit `print()` werden Ergebnisse ausgegeben.

<div class="example-card">
  <p class="card-kicker">Leitbeispiel</p>
  <h3>Eine einfache Eingabe</h3>
  <div class="wide-example">

```python
name = input("Wie heißt du? ")
print("Hallo", name)
```

  </div>
  <p>Das Programm liest zuerst einen Namen ein und gibt danach eine Begrüßung aus.</p>
</div>

## Bedingungen mit <code>if</code>

Programme sollen oft unterschiedlich reagieren. Dafür braucht man Bedingungen.

<div class="example-card">
  <p class="card-kicker">Bedingung</p>
  <h3>Gerade oder ungerade</h3>
  <div class="wide-example">

```python
zahl = int(input("Zahl: "))

if zahl % 2 == 0:
    print("gerade")
else:
    print("ungerade")
```

  </div>
  <p>Das Programm prüft den Rest bei Division durch 2. Je nach Ergebnis wird eine andere Ausgabe gewählt.</p>
</div>

## Warum Einrückung wichtig ist

In Python gehört die Einrückung zur Syntax. Sie ist also nicht nur schön fürs Auge, sondern sagt dem Programm, welche Zeilen zusammengehören.

Das ist besonders bei Bedingungen, Schleifen und Funktionen wichtig.

## Datentypen grob verstehen

Für den Einstieg reicht es oft, diese Unterschiede zu kennen:

- Text → `str`
- ganze Zahl → `int`
- Kommazahl → `float`

Ein häufiger Stolperpunkt ist: `input()` liefert zunächst Text. Wer rechnen will, muss oft vorher umwandeln.

<div class="practice-card">
  <p class="card-kicker">Zum Ausprobieren</p>
  <h3>Lies Programme Zeile für Zeile</h3>
  <p>Nimm ein kleines Python-Beispiel und beantworte immer diese Fragen:</p>
  <ul>
    <li>Welche Variable bekommt welchen Wert?</li>
    <li>Welche Zeile entscheidet etwas?</li>
    <li>Was wird am Ende ausgegeben?</li>
  </ul>
  <p>Diese Art zu lesen ist für den Einstieg oft wichtiger als viel auswendig gelernte Syntax.</p>
</div>

## Typische Fehler

<div class="mistake-card">
  <p class="card-kicker">Typische Fehler</p>
  <h3>Darauf solltest du achten</h3>
  <ul>
    <li>Einrückung stimmt nicht.</li>
    <li><code>input()</code> wird wie eine Zahl behandelt, obwohl es zuerst Text ist.</li>
    <li>Ein Variablenname wird verwechselt oder falsch geschrieben.</li>
    <li>Ein Doppelpunkt nach <code>if</code> oder <code>else</code> fehlt.</li>
    <li>Man liest den Programmablauf nicht Schritt für Schritt.</li>
  </ul>
</div>

<div class="summary-card">
  <p class="card-kicker">Merksätze</p>
  <h3>Das solltest du mitnehmen</h3>
  <ul>
    <li>Variablen speichern Werte unter einem Namen.</li>
    <li><code>input()</code> liest Eingaben ein, <code>print()</code> gibt Ergebnisse aus.</li>
    <li><code>if</code> und <code>else</code> steuern Entscheidungen.</li>
    <li>Einrückung ist in Python ein Teil der Sprache.</li>
    <li>Programme werden am Anfang am besten Zeile für Zeile gelesen und erklärt.</li>
  </ul>
</div>
