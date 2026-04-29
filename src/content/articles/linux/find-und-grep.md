---
title: "find und grep"
description: "Mit find und grep lassen sich Dateien, Inhalte und Muster in Linux schnell und gezielt durchsuchen."
subject: "linux"
section: "Dateisuche und Textsuche"
topicPath: ["find-und-grep"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Dateisuche und Textsuche"]
draft: false
---
## Überblick

In der Praxis reicht es selten, Verzeichnisse nur per Hand zu durchsuchen. Stattdessen werden Werkzeuge gebraucht, die Dateien oder Inhalte schnell finden. Zwei der wichtigsten Standardwerkzeuge dafür sind `find` und `grep`.

## Was macht find?

`find` sucht nach Dateien und Ordnern im Dateisystem. Dabei können Name, Typ oder andere Eigenschaften berücksichtigt werden.

Ein einfaches Beispiel ist:

```bash
find . -name "*.txt"
```

Dieser Befehl durchsucht das aktuelle Verzeichnis samt Unterordnern nach Dateien mit der Endung `.txt`.

## Was macht grep?

`grep` durchsucht Text nach bestimmten Mustern. Das kann eine Datei sein, die Ausgabe eines Befehls oder eine ganze Dateiliste über eine Pipe.

Ein einfaches Beispiel ist:

```bash
grep "Fehler" server.log
```

Damit werden alle Zeilen angezeigt, in denen das Wort `Fehler` vorkommt.

## Unterschied zwischen find und grep

Der Unterschied ist grundlegend:

- `find` sucht nach Dateien oder Verzeichnissen.
- `grep` sucht in Textinhalten.

Beide Werkzeuge werden oft kombiniert, wenn Dateien zuerst gefunden und danach inhaltlich geprüft werden sollen.

## Typische Kombinationen

Ein typischer Ablauf ist:

- Dateien mit `find` suchen,
- die Ergebnisse mit `grep` weiter filtern,
- oder Textausgaben über eine Pipe an `grep` übergeben.

Beispiel:

```bash
ls -l | grep ".txt"
```

Hier sucht `grep` nicht im Dateisystem selbst, sondern in der Textausgabe von `ls -l`.

## Praktische Denkweise

Vor jedem Befehl sollte klar sein:

- Suche ich nach einer Datei?
- Suche ich in einem Dateiinhalt?
- Brauche ich eine Dateisuche, eine Textsuche oder beides zusammen?

## Typische Fehler

- `find` und `grep` als austauschbar behandeln.
- Vergessen, dass `grep` zeilenweise in Text arbeitet.
- Zu ungenaue Suchmuster verwenden.
- Im falschen Verzeichnis starten.

## Merksätze

- `find` sucht Objekte im Dateisystem.
- `grep` sucht Muster in Texten.
- Beide Werkzeuge ergänzen sich sehr gut.
- Wer die Suchart klar trennt, arbeitet schneller und sauberer.
