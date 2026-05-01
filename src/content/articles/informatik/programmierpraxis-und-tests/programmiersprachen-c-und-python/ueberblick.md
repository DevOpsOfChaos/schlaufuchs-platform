---
title: "Programmieren mit C und Python"
description: "Technische Referenz zu Programmiergrundlagen, Compiler und Interpreter, C und Python als unterschiedliche Einstiege in algorithmisches Denken."
subject: "informatik"
section: "Programmierung"
topicPath: ["programmierpraxis-und-tests", "programmiersprachen-c-und-python"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["informatik", "Programmierung", "C", "Python", "Compiler", "Interpreter"]
draft: false
---

Programmieren bedeutet, einen Ablauf so exakt zu beschreiben, dass ein Rechner ihn ausführen kann. C und Python zeigen zwei unterschiedliche Zugänge: C liegt näher an Speicher, Typen und Übersetzung; Python liegt näher an schneller Lesbarkeit und interaktiver Entwicklung.

## Definition und Grundidee

Ein Programm besteht aus Anweisungen, Daten und Kontrollstrukturen. Es beschreibt nicht nur einzelne Befehle, sondern eine systematische Verarbeitung von Eingaben zu Ausgaben.

Typische Bestandteile sind:

- Variablen,
- Datentypen,
- Ausdrücke,
- Funktionen,
- Bedingungen,
- Schleifen,
- Ein- und Ausgabe,
- Fehlerbehandlung.

## Compiler und Interpreter

C-Programme werden typischerweise kompiliert. Ein Compiler übersetzt Quelltext in ausführbaren Maschinencode oder Zwischencode:

```text
C-Quelltext -> Compiler -> ausführbares Programm
```

Python wird typischerweise durch einen Interpreter ausgeführt. Der Quelltext wird zur Laufzeit verarbeitet:

```text
Python-Quelltext -> Interpreter -> Ausführung
```

Die Grenze ist in modernen Systemen nicht absolut, aber als Grundunterscheidung wichtig: C zwingt früher zu Typen, Speicher und Übersetzungsfehlern; Python erlaubt schnellere Experimente, verschiebt manche Fehler aber in die Laufzeit.

## C als systemnahe Sprache

C eignet sich für systemnahe Programmierung, eingebettete Systeme und Situationen, in denen Speicherlayout und Ausführungsnähe wichtig sind. Ein minimales C-Programm:

```c
#include <stdio.h>

int main(void) {
    printf("Hallo Welt\n");
    return 0;
}
```

Zentrale Merkmale:

- explizite Typen,
- Funktionssignaturen,
- Compilerdiagnosen,
- direkterer Umgang mit Speicher,
- klare Trennung von Deklaration und Ausführung.

## Python als lesbarer Einstieg

Python eignet sich für Skripte, Datenverarbeitung, Automatisierung und schnelle Prototypen. Ein minimales Python-Programm:

```python
print("Hallo Welt")
```

Zentrale Merkmale:

- gut lesbare Syntax,
- dynamische Typisierung,
- interaktive Nutzung möglich,
- große Standardbibliothek,
- schnelle Rückmeldung beim Experimentieren.

## Programmablauf

Ein Programmablauf kann linear, verzweigt oder wiederholend sein.

Lineare Folge:

```text
Eingabe lesen
Wert berechnen
Ergebnis ausgeben
```

Verzweigung:

```python
if temperatur > 80:
    print("Warnung")
else:
    print("OK")
```

Schleife:

```python
for zahl in [1, 2, 3]:
    print(zahl)
```

Programmablaufpläne können helfen, Bedingungen und Schleifen vor dem Schreiben von Code zu prüfen. Sie ersetzen aber kein Verständnis von Daten und Zuständen.

## Daten und Datentypen

Programme verarbeiten Werte. Datentypen legen fest, welche Operationen sinnvoll sind.

Beispiele:

- Ganzzahlen,
- Gleitkommazahlen,
- Zeichen,
- Zeichenketten,
- Wahrheitswerte,
- Listen oder Felder.

In C müssen viele Typen explizit angegeben werden:

```c
int zaehler = 0;
```

In Python ergibt sich der Typ zur Laufzeit aus dem Wert:

```python
zaehler = 0
```

Diese Bequemlichkeit ersetzt keine fachliche Typentscheidung. Auch in Python muss klar sein, ob ein Wert eine Zahl, ein Text oder eine Liste ist.

## Typische Fehler

- **Syntax mit Logik verwechseln:** Ein syntaktisch korrektes Programm kann fachlich falsch sein.
- **Compilerfehler ignorieren:** Compilerdiagnosen sind Hinweise auf konkrete Stellen im Quelltext.
- **Python-Dynamik überschätzen:** Laufzeitfehler entstehen oft erst beim Ausführen eines bestimmten Zweigs.
- **Variablennamen ohne Bedeutung wählen:** Namen wie `x1` und `tmp` erschweren Wartung, wenn sie keine klare Rolle haben.
- **Bedingungen nicht vollständig prüfen:** Randfälle wie `0`, leere Eingaben oder negative Werte fehlen oft.
- **Schleifen ohne Abbruchbedingung bauen:** Endlosschleifen sind meist Entwurfsfehler.
- **Ein- und Ausgabe mit Berechnung vermischen:** Saubere Funktionen trennen Berechnung von Darstellung.

## Abgrenzung

Diese Seite ist ein Einstieg in Programmiergrundlagen mit C und Python. Sie ersetzt keine vollständige C-Referenz, keine Python-Sprachreferenz und keine Algorithmik-Seite. Datenstrukturen, Tests, Debugging, objektorientierte Programmierung und Softwarearchitektur sind eigene Themen.

## Quellenhinweis

Diese Referenzseite wurde fachlich aus dem legacy Schlaufuchs-Material `legacy/selected/informatik/informatik-c-python-programmiergrundlagen/` neu geschrieben und adaptiert, insbesondere aus `informatik_einfuehrung.html`, `informatik_einstieg.html`, `C_Grundlagen.html` und `C_Programmierung.html`. Die Quelle wurde im Legacy-Bestand als CC BY-NC-SA 4.0 geführt; in Teilen ist Autorenkürzel JW mit Datum 09.10.2025 angegeben. Altes HTML, alte Gestaltung und alte Bilddateien wurden nicht übernommen. Der Quellenhinweis bedeutet keine Empfehlung oder Unterstützung durch den ursprünglichen Autor.
