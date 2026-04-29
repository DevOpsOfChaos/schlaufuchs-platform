---
title: "pwd verstehen"
description: "Wie pwd das aktuelle Verzeichnis anzeigt und warum das für Orientierung im Terminal wichtig ist."
subject: "linux"
section: "Shell / Navigation"
topicPath: ["shell", "navigation", "pwd"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell / Navigation"]
draft: false
---
![Terminal-Beispiel](./pwd-terminal-beispiel.svg)

## Worum geht es?

Der Befehl `pwd` zeigt dir, **wo du dich gerade im Dateisystem befindest**.  
Das ist einer der kleinsten Linux-Befehle, aber einer der nützlichsten.

Gerade am Anfang verliert man im Terminal schnell die Orientierung.  
Wenn du nicht mehr sicher bist, in welchem Ordner du arbeitest, hilft `pwd` sofort weiter.

## Was bedeutet `pwd`?

`pwd` steht für **print working directory**.

Gemeint ist damit dein **aktuelles Arbeitsverzeichnis**.  
Also genau der Ordner, in dem du dich gerade befindest und in dem viele andere Befehle standardmäßig arbeiten.

## Das einfachste Beispiel

```bash
pwd
```

Eine typische Ausgabe sieht so aus:

```bash
/home/user/projekte
```

Das bedeutet:  
Du arbeitest gerade im Ordner `projekte`, der im Home-Verzeichnis von `user` liegt.

## Warum ist `pwd` so wichtig?

Viele Terminal-Befehle hängen davon ab, **wo du dich gerade befindest**.

Zum Beispiel:

- `ls` zeigt die Inhalte des aktuellen Ordners
- `cd` wechselt von deinem aktuellen Ort weiter
- `mkdir` legt neue Ordner an deinem aktuellen Ort an
- Dateibefehle wie `cp`, `mv` oder `rm` wirken oft relativ zum aktuellen Verzeichnis

Darum ist `pwd` wie ein kurzer Standort-Check.

## Wann solltest du `pwd` benutzen?

`pwd` ist besonders praktisch:

- wenn du viele `cd`-Befehle hintereinander genutzt hast
- wenn du in einer tiefen Ordnerstruktur arbeitest
- wenn du vor einem Datei- oder Löschbefehl sicher sein willst
- wenn du im Unterricht oder in einer Anleitung denselben Pfad nachvollziehen möchtest

## `pwd` und Pfade

`pwd` gibt normalerweise einen **vollständigen Pfad** aus.

Das ist hilfreich, weil du damit:

- deinen aktuellen Ort exakt siehst
- absolute Pfade besser verstehst
- Fehler beim Navigieren schneller erkennst

![Absolute und relative Pfade](./pwd-pfade-diagramm.svg)

## Der Unterschied zwischen logisch und physisch

Es gibt zwei wichtige Sichtweisen auf deinen aktuellen Pfad.

### Logischer Pfad

Der logische Pfad orientiert sich daran, **wie du dich dorthin bewegt hast**.

### Physischer Pfad

Der physische Pfad löst symbolische Links auf und zeigt den **tatsächlichen Ort im Dateisystem**.

## Die Optionen `-L` und `-P`

### `pwd -L`

```bash
pwd -L
```

Das zeigt die **logische** Sicht auf deinen Pfad.

### `pwd -P`

```bash
pwd -P
```

Das zeigt die **physische** Sicht und löst symbolische Links auf.

## Typische Anfängerfehler

### „Ich dachte, ich bin woanders.“

Das passiert sehr oft nach mehreren `cd`-Schritten.  
Lösung: einmal `pwd`.

### „Mein Befehl funktioniert nicht.“

Manchmal liegt das gar nicht am Befehl selbst, sondern daran, dass du im falschen Ordner bist.

### „Der Pfad sieht anders aus als erwartet.“

Das kann bei symbolischen Links passieren.  
Dann lohnt sich der Vergleich zwischen `pwd -L` und `pwd -P`.
