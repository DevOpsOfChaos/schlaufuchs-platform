---
title: "ls verstehen"
description: "Wie ls Ordnerinhalte anzeigt und welche Optionen am Anfang besonders wichtig sind."
subject: "linux"
section: "Shell / Dateien"
topicPath: ["shell", "dateien", "ls"]
learningGoals: []
practiceIdeas: []
commonMistakes: []
keyTakeaways: []
recognizeSignals: []
selfCheckPoints: []
level: "einfach"
tags: ["linux", "Shell / Dateien"]
draft: false
---
## Worum geht es?

Der Befehl `ls` zeigt Informationen über Dateien an.  
Wenn du ihm einen Ordner gibst, listet er normalerweise dessen Inhalt auf.

Ohne Argument arbeitet `ls` im **aktuellen Verzeichnis**.

## Das einfachste Beispiel

```bash
ls
```

Eine typische Ausgabe könnte so aussehen:

```bash
dokumente  bilder  notizen.txt
```

## Warum ist ls so wichtig?

Mit `ls` bekommst du schnell Überblick:

- welche Dateien vorhanden sind
- welche Ordner es gibt
- ob du im richtigen Bereich arbeitest
- welche Namen du für weitere Befehle brauchst

## Wichtige Varianten

### `ls -a`

```bash
ls -a
```

Damit siehst du auch Namen, die mit einem Punkt beginnen und standardmäßig oft verborgen bleiben.

### `ls -l`

```bash
ls -l
```

Das zeigt eine längere Ausgabe mit zusätzlichen Informationen.

## Typische Anfängerfehler

### „Ich dachte, ls zeigt immer alles.“

Nicht ganz. Ohne passende Optionen werden einige Namen standardmäßig nicht angezeigt.

### „Ich weiß nicht, in welchem Ordner ls gerade arbeitet.“

Dann nutze vorher oder danach `pwd`.

### „Die Ausgabe sieht auf verschiedenen Systemen anders aus.“

Das ist möglich, weil `ls` viele Optionen und Umgebungsunterschiede kennt.

## Praktische Regel

Wenn du wissen willst, **was an einem Ort liegt**, ist `ls` fast immer einer der ersten sinnvollen Befehle.
