---
title: "Pipes und Umleitungen"
description: "Pipes und Umleitungen helfen dabei, Befehle in der Shell zu verketten und Ein- oder Ausgaben gezielt weiterzuleiten."
subject: "linux"
section: "Shell-Werkzeuge"
topicPath: ["pipes-und-umleitungen"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "mittel"
tags: ["linux", "Shell-Werkzeuge"]
draft: false
---
## Überblick

In der Shell arbeitet man selten mit nur einem einzelnen Befehl. Häufig soll die Ausgabe eines Befehls gespeichert, gefiltert oder direkt an den nächsten Befehl weitergegeben werden. Genau dafür sind Umleitungen und Pipes gedacht.

## Standardströme

Ein Linux-Prozess arbeitet typischerweise mit drei Standardströmen:

- **stdin** für Eingaben,
- **stdout** für normale Ausgaben,
- **stderr** für Fehlermeldungen.

Umleitungen steuern, wohin diese Ströme gehen.

## Ausgabe in eine Datei umleiten

Mit `>` wird die Standardausgabe in eine Datei geschrieben:

```bash
ls > dateiliste.txt
```

Existiert die Datei schon, wird ihr Inhalt überschrieben. Mit `>>` wird stattdessen angehängt:

```bash
echo "neuer Eintrag" >> protokoll.txt
```

## Eingaben umleiten

Mit `<` kann eine Datei als Eingabequelle dienen:

```bash
sort < namen.txt
```

Der Befehl `sort` liest dann aus der Datei, statt auf eine Tastatureingabe zu warten.

## Fehlermeldungen getrennt behandeln

Fehlermeldungen gehören nicht zu `stdout`, sondern zu `stderr`. Deshalb können sie separat umgeleitet werden:

```bash
find /root 2> fehler.txt
```

Die `2` steht für den Fehlerkanal.

## Was ist eine Pipe?

Mit `|` wird die Ausgabe eines Befehls direkt an den nächsten Befehl weitergereicht:

```bash
ls -l | grep ".txt"
```

Hier erzeugt `ls -l` eine Ausgabezeile pro Datei. `grep` filtert daraus nur die Zeilen, in denen `.txt` vorkommt.

## Warum sind Pipes so nützlich?

Pipes erlauben kleine, klar spezialisierte Werkzeuge zu kombinieren. Ein Befehl liefert Daten, der nächste filtert, ein weiterer zählt oder sortiert. Dadurch entstehen flexible Verarbeitungsketten ohne große Zusatzprogramme.

## Typische Beispiele

- `cat datei.txt | grep Fehler`
- `ps aux | grep ssh`
- `history | tail`
- `ls | wc -l`

Nicht jede Pipe ist die eleganteste Lösung, aber sie zeigt die Grundidee: Ausgabe wird direkt zur nächsten Eingabe.

## Typische Fehler

- `>` und `>>` verwechseln.
- Annehmen, dass Fehlermeldungen automatisch mit umgeleitet werden.
- Pipes als bloße optische Trennung lesen statt als Datenfluss.
- Zu lange Befehlsketten bauen, ohne Zwischenergebnisse zu prüfen.

## Merksätze

- `>` überschreibt, `>>` ergänzt.
- `|` verbindet Ausgabe und Eingabe zweier Befehle.
- `stderr` ist ein eigener Kanal.
- Gute Shell-Arbeit entsteht oft aus kleinen, klaren Einzelbefehlen.
