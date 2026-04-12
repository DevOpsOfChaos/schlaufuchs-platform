---
title: Python-Grundlagen
description: Python eignet sich gut für den Einstieg in Programmierung, weil Syntax
  und Grundideen oft klarer lesbar sind als in vielen anderen Sprachen.
subject: informatik
section: Programmierung
topicPath:
- programmieren
- python-grundlagen
learningGoals:
- Du verstehst Variablen, Eingaben, Bedingungen und einfache Ausgaben in Python.
- Du liest kurze Python-Programme Schritt für Schritt.
- Du erkennst typische Anfängerfehler bei Einrückung und Datentypen.
practiceIdeas:
- Lies kleine Python-Programme immer Zeile für Zeile und notiere Zwischenergebnisse.
- Prüfe bei input-Aufgaben bewusst, ob der Wert noch Text ist oder schon umgewandelt
  wurde.
- Formuliere vor einer if-Bedingung erst in Worten, was geprüft werden soll.
commonMistakes:
- input() wird wie eine Zahl behandelt, obwohl zuerst Text geliefert wird.
- Einrückung wird als Schönheitsfrage statt als Syntax behandelt.
- Variablennamen werden verwechselt oder falsch geschrieben.
- Man versucht, Programme als Ganzes zu verstehen, statt sie schrittweise zu lesen.
keyTakeaways:
- Variablen speichern Werte unter Namen.
- input() liest Eingaben ein, print() gibt Ergebnisse aus.
- if und else steuern Entscheidungen.
- Einrückung ist in Python Teil der Sprache.
level: einfach
tags:
- Python
- Programmierung
- Variablen
- if
- Eingabe
draft: false
---
## Worum es bei den Grundlagen wirklich geht

Wer mit Python beginnt, lernt nicht zuerst „viele Befehle“, sondern grundlegende Denkbausteine von Programmen.

Dazu gehören vor allem:

- Werte speichern,
- Eingaben verarbeiten,
- Bedingungen prüfen,
- und Ergebnisse ausgeben.

Diese Ideen tauchen später in fast jeder Programmiersprache wieder auf.

## Variablen: Namen für Werte

Eine Variable speichert einen Wert unter einem Namen.

```python
name = "Lina"
alter = 16
punkte = 12
```

Wichtig ist:

- `name` ist nicht der Text selbst,
- `alter` ist nicht die Zahl selbst,
- sondern jeweils ein **Name**, unter dem ein Wert gespeichert wird.

Variablen helfen also dabei, Informationen im Programm wiederzuverwenden.

## Eingabe und Ausgabe

Mit `input()` können Daten eingelesen werden. Mit `print()` werden Ergebnisse sichtbar ausgegeben.

### Leitbeispiel

```python
name = input("Wie heißt du? ")
print("Hallo", name)
```

Der Ablauf ist hier sehr klar:

1. Das Programm fragt nach einem Namen.
2. Die Eingabe wird gespeichert.
3. Danach wird sie wieder ausgegeben.

## Was bei `input()` oft übersehen wird

Ein wichtiger Einstiegspunkt ist:

`input()` liefert zunächst **Text**.

Das gilt auch dann, wenn jemand scheinbar eine Zahl eingibt.

Wenn also später gerechnet werden soll, muss häufig umgewandelt werden, zum Beispiel mit `int()`.

```python
alter = int(input("Wie alt bist du? "))
print(alter + 1)
```

## Bedingungen mit `if`

Programme sollen nicht immer gleich reagieren. Dafür braucht man Bedingungen.

```python
zahl = int(input("Zahl: "))

if zahl % 2 == 0:
    print("gerade")
else:
    print("ungerade")
```

Hier passiert Folgendes:

- eine Zahl wird eingelesen,
- die Bedingung prüft, ob der Rest bei Division durch 2 gleich 0 ist,
- und danach wird je nach Ergebnis etwas anderes ausgegeben.

## Warum man Programme Schritt für Schritt lesen sollte

Gerade am Anfang wirkt Code schnell wie ein einziger Block. Sicherer ist es, ihn in kleinen Schritten zu lesen:

1. Welche Werte gibt es?
2. Was wird gespeichert?
3. Welche Bedingung wird geprüft?
4. Welche Ausgabe entsteht danach?

Wer so liest, versteht Programme deutlich besser als beim bloßen Überfliegen.

## Einrückung ist in Python nicht nur Optik

In vielen Sprachen sind Einrückungen vor allem eine Frage der Lesbarkeit. In Python sind sie Teil der Syntax.

Das bedeutet:

- eingerückte Zeilen gehören zu einem Block,
- falsche Einrückung verändert die Struktur,
- und manchmal funktioniert das Programm dann gar nicht mehr.

Gerade bei `if`, `else`, Schleifen und Funktionen ist das entscheidend.

## Datentypen grob einordnen

Für den Einstieg reicht meist diese Unterscheidung:

- `str` für Text,
- `int` für ganze Zahlen,
- `float` für Kommazahlen.

Es geht hier noch nicht um komplizierte Theorie, sondern um eine saubere Leselogik:

- Was für eine Art Wert liegt vor?
- Kann damit gerechnet werden?
- Muss vorher umgewandelt werden?

## Ein typischer Anfängerfehler im Gesamtbild

Ein häufiger Fehler ist nicht nur eine einzelne falsche Zeile, sondern ein falscher Denkablauf:

- Man liest den Code zu schnell.
- Man beachtet Typen nicht.
- Man übergeht die Einrückung.
- Man erwartet das Ergebnis, ohne den Ablauf zu prüfen.

Darum ist langsames, sauberes Lesen am Anfang oft wichtiger als möglichst viel neue Syntax.


## Woran du das Thema erkennst

Du merkst, dass dieses Thema gefragt ist, wenn du in Aufgaben oder Erklärungen auf typische Signale wie diese stößt:

- Es geht ausdrücklich um **Python-Grundlagen** oder um eng verwandte Begriffe aus **Programmierung**.
- Du sollst nicht nur etwas benennen, sondern den Ablauf, die Regel oder den Zusammenhang **sauber erklären**.
- In Beispielen musst du Werte, Strukturen, Schritte oder Reaktionen **geordnet lesen und deuten**.


## Mini-Check für dich

- Kannst du in eigenen Worten erklären, wie du du verstehst Variablen, Eingaben, Bedingungen und einfache Ausgaben in Python.?
- Kannst du in eigenen Worten erklären, wie du du liest kurze Python-Programme Schritt für Schritt.?
- Kannst du in eigenen Worten erklären, wie du du erkennst typische Anfängerfehler bei Einrückung und Datentypen.?
