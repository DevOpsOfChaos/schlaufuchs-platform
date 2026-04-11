---
title: Python Grundlagen
description: Python eignet sich gut für den Einstieg in die Programmierung, weil Syntax, Variablen, Bedingungen und erste Abläufe klar lesbar bleiben.
subject: informatik
section: Programmierung
level: einfach
tags:
  - Python
  - Variablen
  - if
  - Eingabe
  - Ausgabe
draft: false
---

## Überblick

Python ist eine beliebte Programmiersprache für den Einstieg. Der Code ist vergleichsweise gut lesbar und viele Grundideen der Programmierung werden schnell sichtbar.

Am Anfang sind besonders wichtig:

- Ausgabe,
- Variablen,
- Datentypen,
- Eingaben,
- Bedingungen,
- einfache Abläufe.

## Ein erstes Python-Programm

Ein klassisches erstes Beispiel ist:

```python
print("Hallo Welt")
```

Der Befehl `print(...)` gibt etwas auf dem Bildschirm aus.

## Variablen

Variablen speichern Werte.

Beispiel:

```python
name = "Lea"
alter = 16
```

Hier werden zwei Werte gespeichert:

- `name` enthält einen Text
- `alter` enthält eine Zahl

## Warum Variablen wichtig sind

Mit Variablen lassen sich Werte:

- speichern,
- verändern,
- weiterverarbeiten,
- vergleichen.

Ohne Variablen müsste vieles immer wieder neu eingegeben oder direkt im Code ersetzt werden.

## Datentypen am Anfang

Zu den wichtigsten Typen am Einstieg gehören:

- `int` für ganze Zahlen
- `float` für Kommazahlen
- `str` für Texte
- `bool` für wahr oder falsch

### Beispiele

```python
punkte = 12
preis = 3.5
stadt = "Berlin"
fertig = True
```

## Rechnen mit Variablen

Mit Variablen kann gerechnet werden.

```python
a = 4
b = 7
summe = a + b
print(summe)
```

Die Ausgabe ist 11.

## Eingaben

Mit `input(...)` können Werte eingegeben werden.

```python
name = input("Wie heißt du? ")
print("Hallo", name)
```

Wichtig ist:
`input(...)` liefert zuerst einen Text zurück.

Wenn eine Zahl gebraucht wird, muss oft umgewandelt werden.

```python
alter = int(input("Wie alt bist du? "))
```

## Bedingungen mit if

Mit `if` kann auf Situationen reagiert werden.

```python
alter = 18

if alter >= 18:
    print("Volljährig")
```

Nur wenn die Bedingung wahr ist, wird der eingerückte Block ausgeführt.

## if und else

Mit `else` kann ein anderer Fall abgefangen werden.

```python
zahl = 5

if zahl % 2 == 0:
    print("gerade")
else:
    print("ungerade")
```

## Einrückung ist wichtig

In Python zeigt die Einrückung, welche Befehle zusammengehören.

Das ist ein zentraler Unterschied zu vielen anderen Sprachen.

Falsch eingerückter Code führt schnell zu Fehlern oder zu einem anderen Ablauf als gedacht.

## Kleines Gesamtbeispiel

```python
name = input("Name: ")
punkte = int(input("Punkte: "))

if punkte >= 50:
    print(name, "hat bestanden.")
else:
    print(name, "hat nicht bestanden.")
```

Hier kommen mehrere Grundlagen zusammen:

- Eingabe,
- Variablen,
- Umwandlung,
- Bedingung,
- Ausgabe.

## Typische Fehler

Häufige Fehler sind:

- `=` und `==` werden verwechselt,
- `input(...)` wird wie eine Zahl behandelt, obwohl zunächst Text zurückkommt,
- Einrückungen fehlen,
- Variablennamen werden unterschiedlich geschrieben,
- Klammern oder Anführungszeichen fehlen.

## Warum Python als Einstieg gut funktioniert

Python macht es leicht, Logik zu sehen, statt sich sofort in komplizierter Syntax zu verlieren. Deshalb eignet sich die Sprache gut, um Grundideen der Programmierung aufzubauen.

## Merksätze

- `print(...)` gibt Ausgaben aus.
- Variablen speichern Werte.
- `input(...)` liest Eingaben ein.
- `if` und `else` steuern Entscheidungen.
- In Python ist die Einrückung Teil der Programmlogik.
